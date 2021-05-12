import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://maticswap.finance/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://maticswap.finance/pools',
  },
  {
    label: 'Bush',
    icon: 'BushIcon',
    href: 'https://maticswap.finance/bush',
  },
  {
    label: 'Certik Audit (In-Progress)',
    icon: 'ShieldIcon', // ShieldIcon
    href: 'https://twitter.com/MaticSwap/status/1367218225310818308',
    target: '_blank',
  },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0xba26397cdff25f0d26e815d218ef3c77609ae7f1',
        target: '_blank',
      },
      {
        label: 'Token',
        href: 'https://doc.maticswap.finance/tokennomics/mswap-token',
        target: '_blank',
      },
      {
        label: 'Contracts',
        href: 'https://doc.maticswap.finance/security/contracts',
        target: '_blank',
      },
      {
        label: 'Transparency',
        href: 'https://doc.maticswap.finance/transparency/transparency',
        target: '_blank',
      },
      // {
      //   label: 'CoinGecko',
      //   href: 'https://www.coingecko.com/en/coins/mswaptoken',
      // },
      // {
      //   label: 'CoinMarketCap',
      //   href: 'https://coinmarketcap.com/currencies/mswaptoken/',
      // },
    ],
  },
  // {
  //   label: 'IFO',
  //   icon: 'IfoIcon',
  //   href: '/ifo',
  // },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      // {
      //   label: 'Voting',
      //   href: 'https://voting.pancakeswap.finance',
      // },
      {
        label: 'Github',
        href: 'https://github.com/maticswap',
        target: '_blank',
      },
      {
        label: 'Docs',
        href: 'https://doc.maticswap.finance/',
        target: '_blank',
      },
      {
        label: 'Blog',
        href: 'https://maticswap.medium.com/',
        target: '_blank',
      },
      {
        label: 'Announcements',
        href: 'https://t.me/maticswap',
        target: '_blank',
      },
      {
        label: 'Telegram',
        href: 'https://t.me/maticswapchat',
        target: '_blank',
      },
    ],
  },
]

export default config
