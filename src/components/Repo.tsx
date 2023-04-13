import Text from '../components/Text';

export default function Repo() {
    return(
        <>
            <section>
                <h2 className="font-semibold text-3xl text-white text-center" >Featured Projects</h2>
                <div className="grid grid-cols-2 gap-3 mt-5">

                    <div className="p-1 cursor-pointer shadow-lg border-gray-400 rounded-md bg-black bg-opacity-20 hover:shadow-4xl border hover:border-0 hover:outline-transparent">
                        <a href="https://github.com/caoboyeehaw/portfolio-website" className="no-underline">
                            <div className="flex flex-col justify-between px-2 py-2">
                                <div className="flex items-center justify-between">
                                    <span className="text-white font-semibold">portfolio-website</span>
                                </div>
                                <p className="text-white overflow-hidden font-sans">
                                    This portfolio website that's made with NextJS and TailwindCSS.
                                </p>
                                <div className="mt-1 flex flex-row space-x-2">
                                    <img className="flex-shrink-0 sm:h-7 sm:w-7 h-5 w-5" src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"/>
                                    <img className="flex-shrink-0 sm:h-7 sm:w-7 h-5 w-5" src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"/> 
                                    <img className="flex-shrink-0 sm:h-7 sm:w-7 h-5 w-5 mt-0.5" src="https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg"/>
                                    <img className="flex-shrink-0 sm:h-7 sm:w-7 h-5 w-5" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/1280px-CSS3_logo.svg.png"/>
                                    <img className="flex-shrink-0 sm:h-7 sm:w-7 h-5 w-5" src="https://www.raycast.com/_next/image?url=https%3A%2F%2Ffiles.raycast.com%2F4dnlt8m2mcb98bzc4zb8pggc4csi&w=64&q=75"/>
                                    <img className="flex-shrink-0 sm:h-7 sm:w-7 h-5 w-5" src="https://user-images.githubusercontent.com/25181517/202896760-337261ed-ee92-4979-84c4-d4b829c7355d.png"/>
                                </div>
                            </div>
                        </a>
                    </div>
                    
                    <div className="p-1 cursor-pointer shadow-lg border-gray-400 rounded-md bg-black bg-opacity-20 hover:shadow-4xl border hover:border-0 hover:outline-transparent">
                        <a href="https://github.com/caoboyeehaw/cougar-supply-den" className="no-underline">
                            <div className="flex flex-col justify-between px-2 py-2">
                                <div className="flex items-center justify-between">
                                    <span className="text-white font-semibold">cougar-supply-den</span>
                                </div>
                                <p className="text-white overflow-hidden font-sans">
                                    point-of-sale website that's built from MySQL and Microsoft Azure Services.
                                </p>
                                <div className="mt-1 flex flex-row space-x-2">
                                    <img className="flex-shrink-0 sm:h-7 sm:w-7 h-5 w-5" src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"/>
                                    <img className="flex-shrink-0 sm:h-7 sm:w-7 h-5 w-5" src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"/> 
                                    <img className="flex-shrink-0 sm:h-7 sm:w-7 h-5 w-5 mt-0.5" src="https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg"/>
                                    <img className="flex-shrink-0 sm:h-7 sm:w-7 h-5 w-5" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/1280px-CSS3_logo.svg.png"/>
                                    <img className="flex-shring-0 sm:h-7 sm:w-7 h-5 w-5" src="https://www.raycast.com/_next/image?url=https%3A%2F%2Ffiles.raycast.com%2F4dnlt8m2mcb98bzc4zb8pggc4csi&w=64&q=75"  />
                                    <img className="flex-shrink-0 sm:h-8 sm:w-6 h-6 w-5" src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Database-mysql.svg"/>
                                    <img className="flex-shrink-0 sm:h-7 sm:w-7 h-5 w-5" src="https://user-images.githubusercontent.com/25181517/202896760-337261ed-ee92-4979-84c4-d4b829c7355d.png"/>
                               </div>
                            </div>
                        </a>
                    </div>

                    <div className="p-1 cursor-pointer shadow-lg border-gray-400 rounded-md bg-black bg-opacity-20 hover:shadow-4xl border hover:border-0 hover:outline-transparent">
                        <a href="https://github.com/caoboyeehaw/hemo-first-blood-alpha" className="no-underline">
                            <div className="flex flex-col justify-between p-2">
                                <div className="flex items-center justify-between">
                                    <span className="text-white font-semibold">hemo-first-blood-alpha</span>
                                </div>
                                <p className="text-white overflow-hidden font-sans">
                                Top-down 2D omni-directional shooter made from Unity with original assets. 
                                </p>
                                <div className="mt-1 flex flex-row space-x-1">
                                    <img src="https://www.citypng.com/public/uploads/preview/unity-white-logo-icon-png-11663347637u87rvlltwq.png" className="flex-shrink-0 sm:h-7 sm:w-7 h-5 w-5" />
                                    <img src="https://raw.githubusercontent.com/dominickjohn/aseprite-big-sur-icon/main/AsepriteSurIcon.png" className="flex-shrink-0 sm:h-8 sm:w-8 h-6 w-6 items-center" />
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="p-1 cursor-pointer shadow-lg border-gray-400 rounded-md bg-black bg-opacity-20 hover:shadow-4xl border hover:border-0 hover:outline-transparent">
                        <a href="https://github.com/caoboyeehaw/ai-art-style-transfer" className="no-underline">
                            <div className="flex flex-col justify-between p-2">
                                <div className="flex items-center justify-between">
                                    <span className="text-white font-semibold">ai-art-style-transfer</span>
                                </div>
                                <p className="text-white overflow-hidden font-sans">
                                    AI art style-transfer streamlit app that utilizes the VGG-19 neural network.
                                </p>
                                <div className="mt-1 flex flex-row space-x-2">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Colaboratory_SVG_Logo.svg" className="flex-shrink-0 sm:h-8 sm:w-8 h-6 w-6" />
                                    <img src="https://streamlit.io/images/brand/streamlit-mark-color.png" className="flex-shrink-0 sm:h-5 sm:w-8 h-4 w-7 items-center sm:mt-1.5 mt-1" />
                                </div>
                            </div>
                        </a>
                    </div>

                </div>
            </section>
        </>
    )
}