import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex h-screen">
      <Head>
        <title>BLOG PAGE</title>
        <meta name="description" content="Welcome to my Next.js app" />
        <link rel="icon" href="/favicon.ico" />
        <style>{`
          @import 'daisyui/dist/full.css';
        `}</style>
      </Head>

      <main className="flex flex-1">
        <div className="flex-1 flex flex-col justify-center items-start px-20">
          <p className="text-1xl gradient-text">
            <Link href="/newsletter">ACE NEWSLETTER</Link>
            {" | "}
            <Link href="/updates">UPDATES FROM ACE</Link>
            {" | "}
            <Link href="/blogs">BLOGS</Link>
          </p><br/>
          <h1 className="font-bold text-6xl mb-4">Amrita Centre for 
          <br/> <span className="gradient-text">Entrepreneurship</span></h1>
          <p className="text-5xl">March Newsletter Out !</p><br/>
          <p className="text-1xl">20<sup>th</sup> March 2024</p>
          <br/>
          <button className="btn btn-outline" style={{ borderColor: '#00BFFF' }}>READ THE NEWSLETTER</button>
          </div>
        <div className="flex-1 flex justify-center items-center">
          <img src="/Picture1.jpg" alt="Image" className="max-w-full max-h-full w-85 h-auto rounded" />
        </div>
      </main>
    </div>
  );
}
