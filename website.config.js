export const WEBSITE_TITLE = '甜約翰 Sweet John';
export const WEBSITE_DESCRIPTION =
  '謝謝妳/你，在我們最美麗的年華，讓我們相遇，就讓遺憾與美好藏在旋律裡。';
export const WEBSITE_URL = 'https://link.sweetjohnband.com';

export const SEOS = [
  {
    noindex: true,
    locale: 'zh_TW',
    title: WEBSITE_TITLE,
    description: WEBSITE_DESCRIPTION,
    canonical: 'https://sweetjohnband.com',
    openGraph: {
      url: WEBSITE_URL,
      title: WEBSITE_TITLE,
      description: WEBSITE_DESCRIPTION,
      images: [
        {
          url: `${WEBSITE_URL}/seo/sweetjohn_ballon.jpg`,
          width: 875,
          height: 869,
          alt: '甜約翰',
        },
      ],
    },
  },
  {
    noindex: true,
    locale: 'zh_CN',
    title: '甜约翰 Sweet John',
    description:
      '谢谢你，在我们最美丽的年华，让我们相遇，就让遗憾与美好藏在旋律里。',
    canonical: 'https://sweetjohnband.com',
    openGraph: {
      url: WEBSITE_URL,
      title: '甜约翰 Sweet John',
      description:
        '谢谢你，在我们最美丽的年华，让我们相遇，就让遗憾与美好藏在旋律里。',
      images: [
        {
          url: `${WEBSITE_URL}/seo/sweetjohn_ballon.jpg`,
          width: 875,
          height: 869,
          alt: '甜约翰',
        },
      ],
    },
  },
  {
    noindex: true,
    locale: 'en_US',
    title: 'Sweet John Band',
    description: 'Sweet John Indie Band from Taiwan',
    canonical: 'https://sweetjohnband.com',
    openGraph: {
      url: WEBSITE_URL,
      title: 'Sweet John Band',
      description: 'Sweet John Indie Band from Taiwan',
      images: [
        {
          url: `${WEBSITE_URL}/seo/sweetjohn_ballon.jpg`,
          width: 875,
          height: 869,
          alt: 'Sweet John',
        },
      ],
    },
  },
];
