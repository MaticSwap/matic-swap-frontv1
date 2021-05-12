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
    items: [
      {
        label: 'Exchange',
        href:
          'https://swap.maticswap.finance/#/swap?inputCurrency=0xe9e7cea3dedca5984780bafc599bd69add087d56&outputCurrency=0xba26397cdff25f0d26e815d218ef3c77609ae7f1',
      },
      {
        label: 'Liquidity',
        href:
          'https://swap.maticswap.finance/#/add/0xe9e7cea3dedca5984780bafc599bd69add087d56/0xba26397cdff25f0d26e815d218ef3c77609ae7f1',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: 'Bush',
    icon: 'BushIcon',
    href: '/bush',
  },
  {
    label: 'Certik Audit (In-Progress)',
    icon: 'ShieldIcon',
    href: 'https://certik.org/projects/maticswap',
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
