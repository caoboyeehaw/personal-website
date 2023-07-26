import Link from 'next/link';
import Anchor from '../components/Anchor';
import Tech from '../components/Tech';
import Repo from '../components/Repo';
import Edu from '../components/Education';
import Pic from '../components/Picture';
import Ftr from '../components/Footer';

import Head from 'next/head';

import { Tooltip, withTooltip } from 'react-tippy';

import Text from '../components/Text';

export default function HomePage() {
    return  (
    <>
      <Head>
            <link rel="shortcut icon" href="" />
            <title>Home - Dylan Hoàng Cao</title>
            <meta name="description" content="A young student who knows JavaScript and loves programming." />
            <meta name="keywords" content="dylanhoangcao, dylan hoang cao, dylancao, dylan cao,caoboyeehaw" />
            <meta name="theme-color" content="#35363a"/>
            <meta property="og:image"content="" />
        </Head>

        <main>
            <div className="full-container flex">
                <div className="space-y-4">
                <h1 className="md:text-7xl sm:text-6xl text-5xl font-semibold text-white text-center"><Link href="/">Hello | Xin Chào</Link></h1>
                <h1 className="md:text-4xl sm:text-3xl text-2xl font-semibold text-white text-center"><Link href="/">My name is Dylan Hoàng Cao.</Link></h1>

            <div className="full-container mt-10">
                <Pic/>
            </div>

            {/* https://github.com/marwin1991/profile-technology-icons */}      
            {/* https://www.npmjs.com/package/react-tippy */}
            
                <div className="mt-5 font-normal leading-relaxed text-left px-12" >
                I&apos;m a 22-year old, Seattle-born, Vietnamese-American software developer with creative tendencies. I code projects in my freetime and am looking forward towards contributing to software&apos;s crazy future! My passions are game design, web development, machine learning, and data science.
                </div>
                </div>
            </div>

        </main>
        <div className=" mt-10">
            <Ftr/>
        </div>

    </>
    )
} 
