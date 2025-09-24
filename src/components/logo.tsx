import type { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const Logo: FC = () => {
  return (
    <Link href="/" className="flex items-center gap-3" aria-label="Carwash & Detailing LA Home">
       <Image src="/images/ic-logo.png" alt="Carwash & Detailing LA Logo" width={40} height={40} className="rounded-full" />
      <span className="text-xl font-bold tracking-tight text-white whitespace-nowrap">
        Carwash & Detailing LA
      </span>
    </Link>
  );
};
