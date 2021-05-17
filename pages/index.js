import { VStack, HStack, Avatar, Text, Box } from '@chakra-ui/react';
import Link from 'next/link';
import { LINK_KINDS } from 'config/constants';
import Icons from 'components/Icons';

export default function Home({ links }) {
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
      <VStack maxWidth="600px" mx="auto">
        <Avatar src="images/avatar.jpg" size="2xl" />
        <Description />
        <VStack spacing={5} w="100%">
          {links.map((link) => (
            <ButtonLink
              leftIcon={
                {
                  [LINK_KINDS.shop]: <Icons.Shop boxSize={6} mr={2} />,
                  [LINK_KINDS.youtube]: <Icons.YouTubeTV boxSize={6} mr={2} />,
                  [LINK_KINDS.music]: <Icons.MusicApp boxSize={6} mr={2} />,
                  [LINK_KINDS.instagram]: (
                    <Icons.Instagram boxSize={6} mr={2} />
                  ),
                  [LINK_KINDS.facebook]: <Icons.Facebook boxSize={6} mr={2} />,
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

const ButtonLink = ({ url, leftIcon = null, rightIcon = null, children }) => {
  return (
    <Link href={url} passHref>
      <HStack
        pos="relative"
        as="a"
        target="_blank"
        rel="noreferrer noopener"
        alignItems="center"
        w="100%"
        border="3px solid #ffffff"
        borderRadius={8}
        cursor="pointer"
        py={3}
        px={4}
        sx={{
          transition: 'all 0.2s linear',
        }}
        _hover={{ bgColor: '#fff', color: '#ff57A7' }}
      >
        {leftIcon && <Box>{leftIcon}</Box>}
        <Text flex={1} textAlign="left">
          {children}
        </Text>
        {rightIcon && <Box>{rightIcon}</Box>}
      </HStack>
    </Link>
  );
};

export async function getServerSideProps() {
  return {
    props: {
      links,
    },
  };
}

const links = [
  {
    title: '買周邊 、實體專輯 (Merch / Albums)',
    url: 'https://shopee.tw/sweetjohnband',
    kind: LINK_KINDS.shop,
  },
  {
    title: 'Merch (World Shipping)',
    url: 'https://goo.gl/4Pp2aw',
    kind: LINK_KINDS.shop,
  },
  {
    title: 'Music Videos',
    url: 'https://www.youtube.com/c/SweetJohn%E7%94%9C%E7%B4%84%E7%BF%B0',
    kind: LINK_KINDS.youtube,
  },
  {
    title: 'Spotify / iTunes / Apple Music',
    url: 'http://rock-mobile.lnk.to/SweetJohn',
    kind: LINK_KINDS.music,
  },
  {
    title: 'Instagram',
    url: 'https://www.instagram.com/sweetjohnofficial/',
    kind: LINK_KINDS.instagram,
  },
  {
    title: 'Facebook',
    url: 'https://www.facebook.com/sweetjohnband',
    kind: LINK_KINDS.facebook,
  },
];
