import 'react-tippy/dist/tippy.css';
import { Tooltip, withTooltip } from 'react-tippy';

import { ReactNode } from 'react';

export default function Ftr() {
    return (
        <>
            <div className="w-full fixed inset-x-0 bottom-0 h-24 text-white bg-black bg-opacity-30">
                <div className="full-container px-0 mx-auto flex items-center absolute inset-x-0 bottom-0 h-16 justify-end">
                    <p className="flex text-xs p-10 justify-end"> 
                        Web Hosted Using 
                    </p>
                </div>

                <div className="full-container px-0 mx-auto flex items-center absolute inset-x-0 bottom-0 h-14 justify-end">
                    <p className="flex text-xs p-2 justify-left">   
                        <img className="flex-shrink-0 h-4 w-7 items-center" src="https://i.postimg.cc/44jpCtwH/Daco-4376295.png"/>
                    </p>
                </div>

                <div className="full-container py-3 px-0 mx-auto flex items-center absolute inset-x-0 bottom-0 h-16 justify-left">
                    <p className="flex text-xs p-6 justify-end">
                        Copyright © 2024 Dylan Hoàng Cao 
                    </p>
                </div>
                 
                <div className="full-container flex mt-5 space-x-2 justify-left">
                    <p className="flex mx-0 mt-1 text-sm">Contact</p>
                        <div className="mx-1" title="Follow me on GitHub!">
                            <a href="https://github.com/caoboyeehaw/" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-6 text-white">
                                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.419 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.699-2.782.602-3.369-1.34-3.369-1.34-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.607.069-.607 1.003.07 1.531 1.029 1.531 1.029.892 1.529 2.341 1.087 2.91.832.092-.646.35-1.087.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.03-2.683-.103-.253-.446-1.27.098-2.646 0 0 .84-.269 2.75 1.025A9.558 9.558 0 0 1 12 6.837c.85.004 1.705.115 2.504.334 1.909-1.294 2.748-1.025 2.748-1.025.546 1.376.202 2.393.1 2.646.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.567 4.935.359.309.678.919.678 1.855 0 1.336-.012 2.415-.012 2.745 0 .268.18.58.688.481C19.137 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z" fill="currentColor"></path>
                                </svg>
                            </a>
                        </div>

                    <div title="Connect with me on LinkedIn!">
                        <a href="https://www.linkedin.com/in/dylanhoangcao/" target="_blank" rel="noopener noreferrer">
                            <span
                            dangerouslySetInnerHTML={{
                                __html: `
                                <svg width="24px" height="24px" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                    <title>Linkedin</title>
                                    <g id="Icon/Social/linkedin-color" stroke="none" stroke-width="1" fill="currentColor" fill-rule="evenodd">
                                    <path d="M20.9716667,33.5527338 L25.001,33.5527338 L25.001,27.1328007 C25.001,25.439485 25.3213333,23.7988354 27.4206667,23.7988354 C29.491,23.7988354 29.517,25.7351486 29.517,27.2404662 L29.517,33.5527338 L33.5506667,33.5527338 L33.5506667,26.4341413 C33.5506667,22.9381777 32.796,20.2505391 28.711,20.2505391 C26.7483333,20.2505391 25.432,21.3265278 24.8943333,22.3471839 L24.839,22.3471839 L24.839,20.5725357 L20.9716667,20.5725357 L20.9716667,33.5527338 Z M16.423,14.1202696 C15.1273333,14.1202696 14.0823333,15.1682587 14.0823333,16.4595785 C14.0823333,17.7508984 15.1273333,18.7992208 16.423,18.7992208 C17.7133333,18.7992208 18.761,17.7508984 18.761,16.4595785 C18.761,15.1682587 17.7133333,14.1202696 16.423,14.1202696 L16.423,14.1202696 Z M14.4026667,33.5527338 L18.4406667,33.5527338 L18.4406667,20.5725357 L14.4026667,20.5725357 L14.4026667,33.5527338 Z M9.76633333,40 C8.79033333,40 8,39.2090082 8,38.2336851 L8,9.76631493 C8,8.79065843 8.79033333,8 9.76633333,8 L38.234,8 C39.2093333,8 40,8.79065843 40,9.76631493 L40,38.2336851 C40,39.2090082 39.2093333,40 38.234,40 L9.76633333,40 Z"></path>
                                    </g>
                                </svg>
                                `
                            }}
                            className="mt-0.5 w-5 h-5 text-white"
                            />
                        </a>
                    </div>

                    <div title="Follow me on Instagram!" ><a href="https://instagram.com/caoboyeehaw/" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="16 0 512 512" className="mt-0.5 w-5 h-5 text-white"><path d="M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z" fill="currentColor"></path> <path d="M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z" fill="currentColor"></path></svg>
                    </a></div>

                    <div title="Contact me via Email!"><a href="mailto:caoboyhoangcao@gmail.com">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="2 0 24 24" stroke="currentColor" className="mt-0.5 w-5 h-5 text-white"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"></path></svg>
                    </a></div>
                </div>
            </div>
        </>
    )
}