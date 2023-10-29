import Image from 'next/image';
import { Center } from '@chakra-ui/react';

export default function Avatar({ src, ...props }) {
  return (
    <Center
      as="span"
      display="inline-flex"
      borderRadius="full"
      pos="relative"
      overflow="hidden"
      {...props}
    >
      <Image
        priority
        src={src}
        alt="sweetjohn avatar"
        width={128}
        height={128}
      />
    </Center>
  );
}
