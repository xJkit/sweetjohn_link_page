import { LINK_KINDS } from 'config/constants';
import ButtonLink from 'components/ButtonLink';
import Icons from 'components/Icons';
import Avatar from 'components/Avatar';
import SEO from 'components/SEO';

export default function Home({ links, socialLinks }) {
  return (
    <>
      <SEO />
      <div className='bg-gradient-to-b from-[#D463A3] to-[#FD8F67] h-screen w-full min-w-[300px] text-white overflow-auto pt-8 pb-10 px-4'>
        <div className='max-w-[400px] mx-auto text-center'>
          <Avatar src="/images/avatar.jpg" />
          <Description />
          <div className='w-full space-y-6 pb-6'>
            {links.map((link) => (
              <ButtonLink
                leftIcon={
                  {
                    [LINK_KINDS.shop]: <Icons.Shop size={20} className="mr-2" />,
                    [LINK_KINDS.plane]: <Icons.Airplane size={20} className="mr-2" />,
                    [LINK_KINDS.music]: <Icons.MusicApp size={20} className="mr-2" />,
                    [LINK_KINDS.spotify]: <Icons.Spotify size={20} className="mr-2" />,
                    [LINK_KINDS.kkbox]: <Icons.KKBOX size={24} className="mr-2" />,
                    [LINK_KINDS.bandcamp]: (
                      <Icons.Bandcamp size={20} className="mr-2" />
                    ),
                  }[link.kind]
                }
                rightIcon={<Icons.CaretRight />}
                key={link.title}
                url={link.url}
              >
                {link.title}
              </ButtonLink>
            ))}
          </div>
          <div className='flex min-w-[220px] justify-around'>
            {socialLinks.map((link) => (
              <button
                key={link.title}
                color="white"
                onClick={() => window.open(link.url, '_blank')}
                className='transition-all duration-200 hover:scale-125'
              >
                {{
                    [LINK_KINDS.instagram]: (
                      <Icons.Instagram size={30} />
                    ),
                    [LINK_KINDS.facebook]: (
                      <Icons.Facebook size={30} />
                    ),
                    [LINK_KINDS.youtube]: (
                      <Icons.YouTubeTV size={30} />
                    ),
                    [LINK_KINDS.weibo]: <Icons.Weibo size={30} />,
                  }[link.kind]}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
const Description = () => {
  return (
    <div className='pt-2 pb-4'>
      <p className='font-bold text-xl'>
        Sweet John Band
      </p>
      <p>Sweet John Indie Band from Taiwan</p>
    </div>
  );
};

export async function getServerSideProps() {
  return {
    props: {
      links,
      socialLinks,
    },
  };
}

const links = [
  {
    title: 'Merch & Albums',
    url: 'https://shopee.tw/sweetjohnband',
    kind: LINK_KINDS.shop,
  },
  {
    title: 'Merch (World Shipping)',
    url: 'https://goo.gl/4Pp2aw',
    kind: LINK_KINDS.plane,
  },
  {
    title: 'Apple Music',
    url: 'https://music.apple.com/tw/artist/%E7%94%9C%E7%B4%84%E7%BF%B0/1322196237',
    kind: LINK_KINDS.music,
  },
  {
    title: 'Spotify',
    url: 'https://open.spotify.com/artist/78UcIEW1VFh2WOgNk0E7mm?si=y0Sq7bMaRp6kIuqOhttrBg',
    kind: LINK_KINDS.spotify,
  },
  {
    title: 'KKBOX',
    url: 'https://www.kkbox.com/tw/tc/artist/ijqPB6aBrH.z420F0.h-X08K-index-1.html',
    kind: LINK_KINDS.kkbox,
  },
  {
    title: 'Bandcamp',
    url: 'https://sweetjohn.bandcamp.com/music',
    kind: LINK_KINDS.bandcamp,
  },
];

const socialLinks = [
  {
    title: 'Instagram',
    url: 'https://www.instagram.com/sweetjohnofficial/',
    kind: LINK_KINDS.instagram,
  },
  {
    title: 'YouTube Channel',
    url: 'https://www.youtube.com/c/SweetJohn%E7%94%9C%E7%B4%84%E7%BF%B0',
    kind: LINK_KINDS.youtube,
  },
  {
    title: 'Facebook',
    url: 'https://www.facebook.com/sweetjohnband',
    kind: LINK_KINDS.facebook,
  },
  {
    title: 'Weibo',
    url: 'https://weibo.com/SweetJohn',
    kind: LINK_KINDS.weibo,
  },
];
