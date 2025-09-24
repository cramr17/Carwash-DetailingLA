import type {Metadata} from 'next';
import { Toaster } from "@/components/ui/toaster";
import './globals.css';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '700', '900'] });

export const metadata: Metadata = {
  title: 'Carwash & Detailing LA - Mobile Service',
  description: 'We transform your car into the place you love, without you having to leave your home or office.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
       <head>
        <link rel="icon" href="/images/ic-logo.png" />
      </head>
      <body className={cn("min-h-screen", inter.className)}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
