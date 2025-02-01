export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <title>Power Clean - Book Sharing</title>
        <meta name="description" content="책 정보를 공유하는 사이트" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <div className="container">{children}</div>
      </body>
    </html>
  );
}
