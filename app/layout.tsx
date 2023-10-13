import '@/app/globals.scss';

export const metadata = {
  title: 'Kible POS',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ko'>
      <body>{children}</body>
    </html>
  );
}
