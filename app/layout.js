import { JetBrains_Mono, Space_Grotesk, Inter, Instrument_Serif } from 'next/font/google';
import './globals.css';
import Shell from '../components/Shell';

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-jetbrains',
  display: 'swap',
});

const space = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-space',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const instrument = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  style: ['italic', 'normal'],
  variable: '--font-instrument',
  display: 'swap',
});

export const metadata = {
  title: 'khandelwal.dev — not the boring kind',
  description:
    'Dev Khandelwal — fresher w/ receipts. AI-first builder, CS undergrad, professionally unserious.',
  openGraph: {
    title: 'khandelwal.dev — not the boring kind',
    description:
      'Dev Khandelwal — fresher w/ receipts. AI-first builder, CS undergrad, professionally unserious.',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${jetbrains.variable} ${space.variable} ${inter.variable} ${instrument.variable}`}>
      <body className="font-sans noise">
        <Shell>{children}</Shell>
      </body>
    </html>
  );
}
