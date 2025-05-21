import Header from "@/components/Header/Header";


type Props = {
  params: { locale: string };
  children: React.ReactNode;
};

export default async function RootLayout({
  params: { locale },
  children,
}: Props) {
  return (
    <html lang={locale}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
