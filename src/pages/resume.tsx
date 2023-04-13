import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import Anchor from '../components/Anchor';

import Repo from '../components/Repo';
import Edu from '../components/Education';
import Ftr from '../components/Footer';
import Tech from '../components/Tech';

import dynamic from 'next/dynamic';

export default function ResumePage() {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="" />
        <title>Resume - Dylan Hoàng Cao</title>
        <meta name="description" content="Would you like to know more about me?" />
        <meta name="keywords" content="ademcan, frontend, ademcandev, about, information" />
        <meta name="theme-color" content="#41B883" />
        <meta property="og:image" content="" />
      </Head>

      <main>
        <div className="full-container">
          <Edu />
        </div>

        <h1 className="mt-10 font-semibold text-3xl text-white text-center">Full Resume View</h1>

        <div>
          <div className="full-container center flex">
            <iframe
              src="/assets/resume.pdf"
              height="500"
              width="1000"
              frameBorder="0"
              scrolling="no"
              style={{ overflow: 'hidden', border: 'none' }}
            />
          </div>
        </div>
      </main>

      <div className="mt-10">
        <Ftr />
      </div>
    </>
  );
}