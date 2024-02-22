import { type MintActionParams } from '@rabbitholegg/questdk'
import { type TestParams, Chains } from '@rabbitholegg/questdk-plugin-utils'

export const BASIC_PURCHASE: TestParams<MintActionParams> = {
  transaction: {
    chainId: 10, // Optimism
    from: '0x628d4c61d81ac4f286b1778a063ed2f8810bc367',
    hash: '0xa7b4e4b5b9686d53fc4907c01cdf654beca5a823017ec5ee3f2a775abbe0fd38',
    input:
      '0x3a1b1d57000000000000000000000000628d4c61d81ac4f286b1778a063ed2f8810bc36700000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000000',
    to: '0xfff631ef40557f8705e89053af794a1dcfa0a90b',
    value: '7700000000000000', // 0.0077 ETH
  },
  params: {
    chainId: Chains.OPTIMISM,
    contractAddress: '0xfff631ef40557f8705e89053af794a1dcfa0a90b',
    recipient: '0x628d4c61d81ac4f286b1778a063ed2f8810bc367',
  },
}

export const MINT_WITH_REWARDS: TestParams<MintActionParams> = {
  transaction: {
    chainId: 1, // Ethereum
    from: '0xd31143ca8503b25dde780dc1b92e9aa61d0e326d',
    hash: '0x2f0f426a13683f2eba67e26f142dd6c25b0760ab448c3eaf282a60c450a95b00',
    input:
      '0x9dbb844d0000000000000000000000008a1dbe9b1ceb1d17f92bebf10216fcfab5c3fba70000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000d31143ca8503b25dde780dc1b92e9aa61d0e326d',
    to: '0x4f330940159fb3368f5b06b34212c0cdb4e2c032',
    value: '22977000000000000',
  },
  params: {
    chainId: Chains.ETHEREUM,
    contractAddress: '0x4f330940159fb3368f5b06b34212c0cdb4e2c032',
    amount: '1',
  },
}

export const MINT_WITH_REWARDS_1155: TestParams<MintActionParams> = {
  transaction: {
    chainId: 7777777, // Zora
    from: '0xed12545c21a85bab43b25128f49f81446776f33e',
    hash: '0xc706eecf6f81dc1aaa2a75489c02233bd9fd88ebc845bbc326721a71c1cc6364',
    input:
      '0x9dbb844d00000000000000000000000004e2516a2c207e84a1839755675dfd8ef6302f0a0000000000000000000000000000000000000000000000000000000000000019000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000ed12545c21a85bab43b25128f49f81446776f33e',
    to: '0x4c0c2dd31d2661e8bcec60a42e803dcc6f81baad',
    value: '22977000000000000',
  },
  params: {
    chainId: Chains.ZORA,
    contractAddress: '0x4c0c2dd31d2661e8bcec60a42e803dcc6f81baad',
    amount: '1',
    tokenId: 25,
  },
}

export const MINT_BATCH_WITHOUT_FEES: TestParams<MintActionParams> = {
  transaction: {
    chainId: 10, // Optimism
    from: '0x1671b592610fb7427ed788b66fa3e9217ff41047',
    hash: '0x4c0d898b6f3864332e3e47a3924cad33491b8df0a05590d13175823ee62ef07c',
    input:
      '0x7c1e2068000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000c000000000000000000000000000000000000000000000000000000000000003600000000000000000000000000000000000000000000000000000000000000002000000000000000000000000e538598941e4a25f471aef9b1b5dffd6ee0fda54000000000000000000000000e538598941e4a25f471aef9b1b5dffd6ee0fda5400000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000016000000000000000000000000000000000000000000000000000000000000000e49dbb844d0000000000000000000000003678862f04290e565cca2ef163baeb92bb76790c0000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000a0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000200000000000000000000000001671b592610fb7427ed788b66fa3e9217ff410470000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e49dbb844d0000000000000000000000003678862f04290e565cca2ef163baeb92bb76790c0000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000a0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000200000000000000000000000001671b592610fb7427ed788b66fa3e9217ff410470000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000002c2ad68fd90000000000000000000000000000000000000000000000000000002c2ad68fd9000',
    to: '0x97eb05b8db496b12244bccf17cf377d00a99b67a',
    value: '1554000000000000',
  },
  params: {
    chainId: Chains.OPTIMISM,
    contractAddress: '0xe538598941e4a25f471aef9b1b5dffd6ee0fda54',
    amount: '1',
    tokenId: 2,
  },
}

export const BATCH_MINT_ARB: TestParams<MintActionParams> = {
  transaction: {
    chainId: 42161, // Optimism
    from: '0x1671b592610fb7427ed788b66fa3e9217ff41047',
    hash: '0x4c0d898b6f3864332e3e47a3924cad33491b8df0a05590d13175823ee62ef07c',
    input:
      '0x7c1e2068000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000001e00000000000000000000000000000000000000000000000000000000000000fc0000000000000000000000000000000000000000000000000000000000000000b000000000000000000000000b850c9a71b925237a10dce831911b59849c883e4000000000000000000000000b850c9a71b925237a10dce831911b59849c883e4000000000000000000000000b850c9a71b925237a10dce831911b59849c883e4000000000000000000000000b850c9a71b925237a10dce831911b59849c883e4000000000000000000000000b850c9a71b925237a10dce831911b59849c883e4000000000000000000000000b850c9a71b925237a10dce831911b59849c883e4000000000000000000000000b850c9a71b925237a10dce831911b59849c883e4000000000000000000000000b850c9a71b925237a10dce831911b59849c883e4000000000000000000000000b850c9a71b925237a10dce831911b59849c883e4000000000000000000000000b850c9a71b925237a10dce831911b59849c883e4000000000000000000000000b850c9a71b925237a10dce831911b59849c883e4000000000000000000000000000000000000000000000000000000000000000b0000000000000000000000000000000000000000000000000000000000000160000000000000000000000000000000000000000000000000000000000000028000000000000000000000000000000000000000000000000000000000000003a000000000000000000000000000000000000000000000000000000000000004c000000000000000000000000000000000000000000000000000000000000005e00000000000000000000000000000000000000000000000000000000000000700000000000000000000000000000000000000000000000000000000000000082000000000000000000000000000000000000000000000000000000000000009400000000000000000000000000000000000000000000000000000000000000a600000000000000000000000000000000000000000000000000000000000000b800000000000000000000000000000000000000000000000000000000000000ca000000000000000000000000000000000000000000000000000000000000000e49dbb844d0000000000000000000000001cd1c1f3b8b779b50db23155f2cb244fcca06b210000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000a0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000200000000000000000000000006609dfa1cb75d74f4ff39c8a5057bd111fba5b220000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e49dbb844d0000000000000000000000001cd1c1f3b8b779b50db23155f2cb244fcca06b210000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000a0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000200000000000000000000000006609dfa1cb75d74f4ff39c8a5057bd111fba5b220000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e49dbb844d0000000000000000000000001cd1c1f3b8b779b50db23155f2cb244fcca06b210000000000000000000000000000000000000000000000000000000000000003000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000a0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000200000000000000000000000006609dfa1cb75d74f4ff39c8a5057bd111fba5b220000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e49dbb844d0000000000000000000000001cd1c1f3b8b779b50db23155f2cb244fcca06b210000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000a0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000200000000000000000000000006609dfa1cb75d74f4ff39c8a5057bd111fba5b220000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e49dbb844d0000000000000000000000001cd1c1f3b8b779b50db23155f2cb244fcca06b210000000000000000000000000000000000000000000000000000000000000005000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000a0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000200000000000000000000000006609dfa1cb75d74f4ff39c8a5057bd111fba5b220000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e49dbb844d0000000000000000000000001cd1c1f3b8b779b50db23155f2cb244fcca06b210000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000a0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000200000000000000000000000006609dfa1cb75d74f4ff39c8a5057bd111fba5b220000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e49dbb844d0000000000000000000000001cd1c1f3b8b779b50db23155f2cb244fcca06b210000000000000000000000000000000000000000000000000000000000000007000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000a0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000200000000000000000000000006609dfa1cb75d74f4ff39c8a5057bd111fba5b220000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e49dbb844d0000000000000000000000001cd1c1f3b8b779b50db23155f2cb244fcca06b210000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000a0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000200000000000000000000000006609dfa1cb75d74f4ff39c8a5057bd111fba5b220000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e49dbb844d0000000000000000000000001cd1c1f3b8b779b50db23155f2cb244fcca06b210000000000000000000000000000000000000000000000000000000000000009000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000a0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000200000000000000000000000006609dfa1cb75d74f4ff39c8a5057bd111fba5b220000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e49dbb844d0000000000000000000000001cd1c1f3b8b779b50db23155f2cb244fcca06b21000000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000a0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000200000000000000000000000006609dfa1cb75d74f4ff39c8a5057bd111fba5b220000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e49dbb844d0000000000000000000000001cd1c1f3b8b779b50db23155f2cb244fcca06b21000000000000000000000000000000000000000000000000000000000000000b000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000a0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000200000000000000000000000006609dfa1cb75d74f4ff39c8a5057bd111fba5b2200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000b0000000000000000000000000000000000000000000000000002c2ad68fd90000000000000000000000000000000000000000000000000000002c2ad68fd90000000000000000000000000000000000000000000000000000002c2ad68fd90000000000000000000000000000000000000000000000000000002c2ad68fd90000000000000000000000000000000000000000000000000000002c2ad68fd90000000000000000000000000000000000000000000000000000002c2ad68fd90000000000000000000000000000000000000000000000000000002c2ad68fd90000000000000000000000000000000000000000000000000000002c2ad68fd90000000000000000000000000000000000000000000000000000002c2ad68fd90000000000000000000000000000000000000000000000000000002c2ad68fd90000000000000000000000000000000000000000000000000000002c2ad68fd9000',
    to: '0xc6899816663891d7493939d74d83cb7f2bbcbb16',
    value: '1554000000000000',
  },
  params: {
    chainId: Chains.ARBITRUM_ONE,
    contractAddress: '0xb850c9a71b925237a10dce831911b59849c883e4',
  },
}
