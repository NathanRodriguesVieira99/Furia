import Image from 'next/image';
import Link from 'next/link';

export const HeaderLogo = () => {
  return (
    <div className="mr-24 flex w-1/2 items-center justify-center">
      <Link href="/">
        <Image
          className="m-4 cursor-pointer"
          src="@/public/logo.svg"
          alt="Logo Furia"
          width={65}
          height={65}
        />
      </Link>
    </div>
  );
};
