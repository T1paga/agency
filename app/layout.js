import '../styles/globals.css';

const RootLayout = ({ children }) => (
  <html lang="en">
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Arimo:wght@400;500;600;700&family=DM+Sans&display=swap"
        rel="stylesheet"
      />
    </head>
    {/* className="bg-[url('../public/start-bg.png')] bg-no-repeat" */}
    <body>{children}</body>
  </html>
);

export default RootLayout;
