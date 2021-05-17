import Link from 'next/link';
import { HStack, Text } from '@chakra-ui/react';

const ButtonLink = ({ url, children }) => {
  return (
    <Link href={url} passHref>
      <HStack
        as="a"
        target="_blank"
        rel="noreferrer noopener"
        justifyContent="center"
        alignItems="center"
        w="100%"
        border="3px solid #ffffff"
        borderRadius={8}
        cursor="pointer"
        px={3}
        py={2}
        sx={{
          transition: 'all 0.2s linear',
        }}
        _hover={{ bgColor: '#fff', color: '#ff57A7' }}
      >
        <Text>{children}</Text>
      </HStack>
    </Link>
  );
};

export default ButtonLink;
