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
          width: 274,
          height: 274,
          alt: '甜約翰',
        },
      ],
    },
  },
];
