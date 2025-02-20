import { ChainId } from '@apeswapfinance/sdk'
import { MenuEntry } from '@apeswapfinance/uikit'
import { NETWORK_INFO_LINK } from 'config/constants/chains'
import { ContextApi } from '../../../contexts/Localization/types'

const maticConfig: (t: ContextApi['t']) => MenuEntry[] = (t) => [
  {
    label: t('Exchange'),
    lightIcon: 'ExchangeLightImage',
    darkIcon: 'ExchangeDarkImage',
    items: [
      {
        label: t('Swap'),
        href: '/swap',
        isNew: false,
      },
      {
        label: t('Liquidity'),
        href: '/add',
        isNew: false,
      },
      {
        label: t('Pro Trading'),
        href: 'https://pro.apeswap.finance',
        isNew: true,
      },
    ],
  },
  {
    label: t('More'),
    lightIcon: 'MoreLightImage',
    darkIcon: 'MoreDarkImage',
    items: [
      {
        label: t('Documentation'),
        href: 'https://apeswap.gitbook.io/apeswap-finance/',
      },
      {
        label: t('Charts'),
        href: NETWORK_INFO_LINK[ChainId.MAINNET],
      },
      {
        label: t('Governance'),
        href: 'https://vote.apeswap.finance',
      },
      {
        label: t('Education'),
        href: 'https://www.apelabs.education/',
      },
    ],
  },
  //   {
  //     label: t('Pools'),
  //     icon: 'PoolIcon',
  //     href: '/pools',
  //   },
  //   {
  //     label: t('IAO'),
  //     icon: 'IfoIcon',
  //     href: '/iao',
  //   },
  //   {
  //     label: t('GNANA'),
  //     icon: 'ApeZone',
  //     href: '/gnana',
  //   },
]

export default maticConfig
