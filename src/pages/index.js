import Head from 'next/head';
import Home from '../components/Home';

const IndexPage = () => {
  return (
    <>
      <Head>
        <title>memoirex</title>
        
        {/* SEO meta tags */}
        <meta name="description" content="Memoirex is a web app where users can explore detailed notes on important topics using AI." />
        <meta name="keywords" content="memoirex, notes, detailed notes, web app, educational, gemini, AI, technology, learn" />
        <meta name="author" content="Arindal" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        
        {/* open graph meta tags */}
        <meta property="og:title" content="memoirex" />
        <meta property="og:description" content="Explore detailed notes and learn about important topics with AI-powered insights. Your knowledge companion!" />
        <meta property="og:image" content="/images/thumbnail.png" loading="lazy" />
        <meta property="og:url" content="https://memoirex.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="memoirex" />
        <meta property="og:locale" content="en_US" />

        {/* twitter meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="memoirex" />
        <meta name="twitter:description" content="Memoirex is a web app where users can explore detailed notes on important topics using AI." />
        <meta name="twitter:image" content="/images/thumbnail.png" loading="lazy" />
        <meta name="twitter:creator" content="@arindal_17" />
        
        {/* additional meta tags */}
        <meta name="theme-color" content="#f0bb78" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        
        {/* favicon and icons */}
        <link rel="icon" href="/images/memoir.png" />
        <link rel="apple-touch-icon" href="/images/memoir.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* structured Data (JSON-LD) for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "memoirex",
              "url": "https://memoirex.vercel.app/",
              "logo": "/images/thumbnail.png",
              "description": "Memoirex is a web app where users can explore detailed notes on important topics using AI.",
              "creator": {
                "@type": "Person",
                "name": "Arindal"
              }
            })
          }}
        />
      </Head>

      <main className="flex flex-col items-center justify-center min-h-[calc(100vh-100px)] bg-dark">
        <Home />
      </main>
    </>
  );
};

export default IndexPage;
