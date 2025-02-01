import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Power Clean - Book Sharing</title>
        <meta
          name="description"
          content="A platform to share and discuss book information."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        {children} {/* ✅ Ensures no extra wrapping divs */}
      </body>
    </html>
  );
}
