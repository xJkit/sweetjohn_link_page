import {
  VStack,
  HStack,
  Avatar,
  Text,
  Box,
  IconButton,
} from '@chakra-ui/react';
import { LINK_KINDS } from 'config/constants';
import ButtonLink from 'components/ButtonLink';
import Icons from 'components/Icons';

export default function Home({ links, socialLinks }) {
  return (
    <Box
      bgGradient={`linear(to-b, rgb(212, 99, 163), rgb(253, 143, 103))`}
      height="100vh"
      width="100%"
      color="white"
      overflow="auto"
      pt={8}
      pb={10}
      px={4}
    >
      <VStack maxWidth="400px" mx="auto">
        <Avatar width="128px" src="images/avatar.jpg" size="2xl" />
        <Description />
        <VStack spacing={6} w="100%" pb={6}>
          {links.map((link) => (
            <ButtonLink
              leftIcon={
                {
                  [LINK_KINDS.shop]: <Icons.Shop boxSize={5} mr={2} />,
                  [LINK_KINDS.plane]: <Icons.Airplane boxSize={5} mr={2} />,
                  [LINK_KINDS.music]: <Icons.MusicApp boxSize={5} mr={2} />,
                  [LINK_KINDS.spotify]: <Icons.Spotify boxSize={5} mr={2} />,
                  [LINK_KINDS.kkbox]: <Icons.KKBOX boxSize={6} mr={2} />,
                }[link.kind]
              }
              rightIcon={<Icons.CaretRight />}
              key={link.title}
              url={link.url}
            >
              {link.title}
            </ButtonLink>
          ))}
        </VStack>
        <HStack minW="220px" justifyContent="space-around">
          {socialLinks.map((link) => (
            <IconButton
              key={link.title}
              variant="link"
              color="white"
              onClick={() => window.open(link.url, '_blank')}
              boxShadow="none"
              border="none"
              _hover={{
                transform: 'scale(1.2)',
              }}
              icon={
                {
                  [LINK_KINDS.instagram]: (
                    <Icons.Instagram boxSize={6} mr={2} />
                  ),
                  [LINK_KINDS.facebook]: <Icons.Facebook boxSize={6} mr={2} />,
                  [LINK_KINDS.youtube]: <Icons.YouTubeTV boxSize={6} mr={2} />,
                  [LINK_KINDS.weibo]: <Icons.Weibo boxSize={6} mr={2} />,
                }[link.kind]
              }
            />
          ))}
        </HStack>
      </VStack>
    </Box>
  );
}

const Description = () => {
  return (
    <VStack pt={2} pb={4}>
      <Text fontWeight="bold" fontSize={['xl']}>
        Sweet John Band
      </Text>
      <Text>Sweet John Indie Band from Taiwan</Text>
    </VStack>
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
