import {
  type SwapActionParams,
  type TransactionFilter,
  compressJson,
  type FilterOperator,
} from '@rabbitholegg/questdk'
import { getAddress, type Address } from 'viem'
import { OrderType, Tokens } from './utils.js'
import { ARB_ONE_CHAIN_ID, CHAIN_ID_ARRAY } from './chain-ids.js'
import { GMX_SWAPV1_ABI, GMX_SWAPV2_ABI } from './abi.js'
import {
  DEFAULT_TOKEN_LIST_URL,
  GMX_ROUTERV1_ADDRESS,
  GMX_ROUTERV2_ADDRESS,
  ETH_ADDRESS,
  MARKET_TOKENS,
} from './contract-addresses.js'

function getMarketAddress(
  tokenIn: Address | undefined,
  tokenOut: Address | undefined,
): Address | FilterOperator | undefined {
  // return undefined if tokenOut is not provided
  if (tokenOut === undefined) {
    return tokenOut
  }
  // convert ETH to WETH address if present
  const outboundToken = tokenOut === ETH_ADDRESS ? Tokens.WETH : tokenOut
  // return undefined if tokenIn is undefined and tokenOut is ETH
  if (!tokenIn && outboundToken === Tokens.WETH) {
    return undefined
  }
  // if tokenOut is USDC, use the marketToken for tokenIn instead
  if (outboundToken === Tokens.USDC) {
    // if tokenIn is "any"/undefined and tokenOut is USDC, any token will pass
    return MARKET_TOKENS[tokenIn as Address]
  }
  return MARKET_TOKENS[outboundToken]
}

export const swap = async (
  swap: SwapActionParams,
): Promise<TransactionFilter> => {
  const { chainId, tokenIn, tokenOut, amountIn, amountOut, recipient } = swap
  const ETH_USED = tokenIn === ETH_ADDRESS

  return compressJson({
    chainId: chainId,
    value: ETH_USED ? amountIn : undefined,
    to: {
      $or: [getAddress(GMX_ROUTERV1_ADDRESS), getAddress(GMX_ROUTERV2_ADDRESS)],
    },
    input: {
      $or: [
        {
          $abi: GMX_SWAPV1_ABI,
          _path: [
            ETH_USED ? Tokens.WETH : tokenIn ?? { $or: DEFAULT_TOKEN_LIST_URL },
            tokenOut ?? { $or: DEFAULT_TOKEN_LIST_URL },
          ],
          _amountIn: ETH_USED ? undefined : amountIn,
          _minOut: amountOut,
          _receiver: recipient,
        },
        {
          $and: [
            {
              $abiAbstract: GMX_SWAPV2_ABI,
              params: {
                numbers: {
                  minOutputAmount: amountOut,
                },
                orderType: OrderType.MarketSwap,
                addresses: {
                  initialCollateralToken: ETH_USED ? Tokens.WETH : tokenIn,
                  receiver: recipient,
                  swapPath: {
                    $last: getMarketAddress(
                      ETH_USED ? Tokens.WETH : tokenIn,
                      tokenOut,
                    ),
                  },
                },
                shouldUnwrapNativeToken: tokenOut
                  ? tokenOut === ETH_ADDRESS
                  : undefined,
              },
            },
            {
              $abiAbstract: GMX_SWAPV2_ABI,
              amount: ETH_USED ? undefined : amountIn,
            },
          ],
        },
      ],
    },
  })
}

export const getSupportedTokenAddresses = async (_chainId: number) => {
  return _chainId === ARB_ONE_CHAIN_ID ? DEFAULT_TOKEN_LIST_URL : []
}

export const getSupportedChainIds = async () => {
  return CHAIN_ID_ARRAY
}
