import 'react-tippy/dist/tippy.css';
import { Tooltip, withTooltip } from 'react-tippy';
import image from 'next/image';
import Head from 'next/head'
import Tech from '../components/Tech';
import Repo from '../components/Repo';
import Edu from '../components/Education';
import Ftr from '../components/Footer';

export default function AboutPage() {
    return (
    <>
        <Head>
            <link rel="shortcut icon" href="" />
            <title>About - Dylan Hoàng Cao</title>
            <meta name="description" content="Would you like to know more about me?" />
            <meta name="keywords" content="ademcan, frontend, ademcandev, about, information" />
            <meta name="theme-color" content="#41B883"/>
            <meta property="og:image"content="" />
        </Head>

        <main>
            <div className="full-container ">
                <div className="">
                    <h2 className="text-3xl text-center font-semibold ">Most Used Tools</h2>

                    <div className="font-light text-sm"></div>
                    <div className="">

                    <div className="mt-4"></div>
                    <div className="grid grid-cols-2 gap-x-2 gap-y-0.5 focus:justify-center">
                        <div className="flex flex-row p-4 mt-2 text-base font-semibold bg-black bg-opacity-20 rounded-lg border border-black border-opacity-30 w-84 text-left space-x-3 items-center">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg" className="w-8 h-8"/>
                            <li className="square list-none"><a href="https://code.visualstudio.com/" className="extensions"><Tooltip title="My most beloved text editor!" duration={100} animation="scale" theme="light">Visual Studio Code</Tooltip></a></li> 
                        </div>
                        
                        <div className="flex flex-row p-4 mt-2 text-base font-semibold bg-black bg-opacity-20 rounded-lg border border-black border-opacity-30 w-84 text-left space-x-3 items-center">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/a/ae/Github-desktop-logo-symbol.svg" className="w-8 h-8"/>
                            <li className="square list-none"><a href="https://desktop.github.com/" className="extensions"><Tooltip title="Used for updating/tracking Repos!" duration={100} animation="scale" theme="light" >GitHub Desktop</Tooltip></a></li>
                        </div>
                        <div className="flex flex-row p-4 mt-2 text-base font-semibold bg-black bg-opacity-20 rounded-lg border border-black border-opacity-30 w-84 text-left space-x-3 items-center">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Colaboratory_SVG_Logo.svg" className="w-8 h-8" />
                            <li className="square list-none"><a href="https://colab.research.google.com/" className="extensions"><Tooltip title="Gnarly AI and data science over here!" duration={100} animation="scale" theme="light">Google Colab</Tooltip></a></li>
                        </div>
                        <div className="flex flex-row p-4 mt-2 text-base font-semibold bg-black bg-opacity-20 rounded-lg border border-black border-opacity-30 w-84 text-left space-x-3 items-center">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg" className="w-8 h-8"/>
                            <li className="square list-none"><a href="https://openai.com/blog/chatgpt" className="extensions"><Tooltip title="Whenever I need an extra hand! :o" duration={100} animation="scale" theme="light">ChatGPT</Tooltip></a></li>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </main>

        <div className="full-container mt-15">
            <Tech/>
        </div>

        <div className="full-container mt-20">
            <Repo/>
        </div>

        <div className="mt-10">
            <Ftr/>
        </div>
    </>
    )
}