import { ChainId } from '@oneverseswap/sdk'
import { DefaultStakingPoolInfo } from '../types'
import { FINDORA_POOLS } from './findora/mainnet'
// import { HARMONY_MAINNET_POOLS } from './harmony/mainnet'
// import { HARMONY_TESTNET_POOLS } from './harmony/testnet'
// import { BSC_MAINNET_POOLS } from './bsc/mainnet'
// import { BSC_TESTNET_POOLS } from './bsc/testnet'

export const DEFAULT_STAKING_POOL_INFOS: {
  [chainId in ChainId]?: DefaultStakingPoolInfo[]
} = {
  [ChainId.FINDORA]: FINDORA_POOLS
  // [ChainId.HARMONY_MAINNET]: HARMONY_MAINNET_POOLS,
  // [ChainId.GOERLI]: HARMONY_MAINNET_POOLS,
  // [ChainId.ANVILTESTNET]: HARMONY_MAINNET_POOLS
  // [ChainId.HARMONY_TESTNET]: HARMONY_TESTNET_POOLS,
  // [ChainId.BSC_MAINNET]: BSC_MAINNET_POOLS,
  // [ChainId.BSC_TESTNET]: BSC_TESTNET_POOLS
}
