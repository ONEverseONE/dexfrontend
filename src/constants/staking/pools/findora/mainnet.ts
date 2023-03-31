import { ChainId, Pair } from '@oneverseswap/sdk'
import getPairTokensWithDefaults from '../../../../utils/getPairTokensWithDefaults'
import { DefaultStakingPoolInfo } from '../../types'

export const FINDORA_POOLS: DefaultStakingPoolInfo[] = [
  {
    pid: 0,
    order: 0,
    tokens: getPairTokensWithDefaults(ChainId.FINDORA, 'OV/FRA'),
    pairAddress: Pair.getAddress(...getPairTokensWithDefaults(ChainId.FINDORA, 'OV/FRA')),
    allocPoints: 0,
    active: false
  },
  {
    pid: 0,
    order: 0,
    tokens: getPairTokensWithDefaults(ChainId.FINDORA, 'OV/BUSD'),
    pairAddress: Pair.getAddress(...getPairTokensWithDefaults(ChainId.FINDORA, 'OV/BUSD')),
    allocPoints: 0,
    active: false
  }
]
