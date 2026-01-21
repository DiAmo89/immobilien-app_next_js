export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="p-8">
      <div className="p-3 font-bold text-pink-400 flex justify-center">
        Check out the new and ultimate version of our product
      </div>
      {children}
    </div>
  );
}
