export const metadata = {
  title: "NeuMemories",
  description: "Final Project for HONR405",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
          <title>{metadata.title}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
          <link rel={'icon'} href={'/favicon.ico'} sizes={'any'} />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
