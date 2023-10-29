import Image from 'next/image';

export default function Avatar({ src, ...props }) {
  return (
    <div className='inline-flex relative overflow-hidden rounded-full' {...props}>
      <Image
        priority
        src={src}
        alt="sweetjohn avatar"
        width={128}
        height={128}
      />
    </div>
  );
}
