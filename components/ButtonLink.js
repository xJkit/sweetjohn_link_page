import Link from 'next/link';
import { HStack, Text, Box } from '@chakra-ui/react';

const ButtonLink = ({ url, leftIcon = null, rightIcon = null, children }) => {
  return (
    <Link href={url} passHref legacyBehavior>
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

export default ButtonLink;
