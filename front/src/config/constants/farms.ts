import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 1,
    lpSymbol: 'MSWAP-USDC LP',
    lpAddresses: {
      80001: '',
      137: '0xCf2829E0eE2C4FE480eB2C2e74469C0F8163E7a6',
    },
    tokenSymbol: 'MSWAP',
    tokenAddresses: {
      80001: '',
      137: '0x1b81C8113B6bd8Ddf28F7b9D33e4723D85A6dc22',
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
  },
  {
    pid: 0,
    lpSymbol: 'MSWAP-MATIC LP',
    lpAddresses: {
      80001: '',
      137: '0x64153cdE8EBDAa9f12bD25249B78C8eb173897a5',
    },
    tokenSymbol: 'MSWAP',
    tokenAddresses: {
      80001: '',
      137: '0x1b81C8113B6bd8Ddf28F7b9D33e4723D85A6dc22',
    },
    quoteTokenSymbol: QuoteToken.MATIC,
    quoteTokenAdresses: contracts.wmatic,
  },
  {
    pid: 2,
    lpSymbol: 'USDT-USDC LP',
    lpAddresses: {
      80001: '',
      137: '0xF6a63270517f0b4d3D999a4b367e0821E285586a',
    },
    tokenSymbol: 'USDT',
    tokenAddresses: {
      80001: '',
      137: '0xc2132D05D31c914a87C6611C10748AEb04B58e8F',
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
  },  
  {
    pid: 3,
    isTokenOnly: true,
    lpSymbol: 'ETH',
    lpAddresses: {
      80001: '',
      137: '0x98d0A97E9688e9E52145D2F6e1E2e83f19b2f71e', // ETH-USDC LP
    },
    tokenSymbol: 'ETH',
    tokenAddresses: {
      80001: '',
      137: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
  },
  {
    pid: 4,
    isTokenOnly: true,
    lpSymbol: 'MATIC',
    lpAddresses: {
      80001: '',
      137: '0xC5Df216e315f3E57e641dA8d7b7f271e0eFE7366', // WMATIC-USDC
    },
    tokenSymbol: 'MATIC',
    tokenAddresses: {
      80001: '',
      137: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
  }
]

export default farms
