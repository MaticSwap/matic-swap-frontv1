import { ChainId } from '@pancakeswap-libs/sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x95028E5B8a734bb7E2071F96De89BABe75be9C8E', // TODO
  [ChainId.BSCTESTNET]: '0x935Bfe9AfaA2Be26049ea4EDE40A3A2243361F87'
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
