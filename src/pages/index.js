import Head from 'next/head';
import Home from '../components/Home';

const IndexPage = () => {
  return (
    <>
      <Head>
        <title>memoirex</title>
        <link rel="icon" href="/images/memoir.png" />
      </Head>
      
      <main className="flex flex-col items-center justify-center min-h-[calc(100vh-100px)] bg-dark">
        <Home />
      </main>
    </>
  );
};

export default IndexPage;
