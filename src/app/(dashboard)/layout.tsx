export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <h1>Dashboard layout</h1>
      {children}
    </main>
  );
}
