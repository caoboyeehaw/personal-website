import Image from 'next/image'
import 'react-tippy/dist/tippy.css';
import { Tooltip, withTooltip } from 'react-tippy';

export default function Tech() {
    return(
    <>
        <div className="mt-14">
        <div>
            <h1 className="font-semibold text-3xl text-white text-center">Technology Stack</h1>
        </div>
        <div className="grid grid-cols-2 gap-5 mt-5 sm:gird-cols-3 md:grid-cols-4">
            <div className="flex space-x-2 text-white items-center overflow-hidden">
                <img className="flex-shrink-0 h-7 w-7" src="https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg"/>
                <span className="lang font-medium">HTML5</span>
            </div> 
            <div className="flex space-x-2 text-white items-center overflow-hidden">
                <img className="flex-shrink-0 h-7 w-7" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/1280px-CSS3_logo.svg.png"/>
                <span className="lang font-medium">CSS3</span>
            </div> 
            <div className="flex space-x-2 text-white items-center overflow-hidden">
                <img className="flex-shrink-0 h-7 w-7" src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"/>
                <span className="lang font-medium">JavaScript</span>
            </div>     
            <div className="flex space-x-2 text-white items-center overflow-hidden">
                <img className="flex-shrink-0 h-7 w-7" src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"/>
                <span className="lang font-medium">TypeScript</span>
            </div>           
            <div className="px-1 flex space-x-2 text-white items-center overflow-hidden">
                <img className="flex-shrink-0 h-8 w-6 " src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Database-mysql.svg"/>
                <span className="lang font-medium">MySQL</span>
            </div>
            <div className="flex space-x-2 text-white items-center overflow-hidden">
                <img className="flex-shrink-0 h-7 w-7" src="https://i.postimg.cc/L4fXJqSf/512px-Antu-mongodb-svg.png"/>
                <span className="lang font-medium">MongoDB</span>
            </div>
            <div className="flex space-x-2 text-white items-center overflow-hidden">
                <img src="https://www.raycast.com/_next/image?url=https%3A%2F%2Ffiles.raycast.com%2F4dnlt8m2mcb98bzc4zb8pggc4csi&w=64&q=75" className="flex-shring-0 h-7 w-7" />
                <span className="lang font-medium">Next.js</span>
            </div>
            <div className="flex space-x-2 text-white items-center overflow-hidden">
                <img className="flex-shrink-0 h-7 w-7" src="https://user-images.githubusercontent.com/25181517/202896760-337261ed-ee92-4979-84c4-d4b829c7355d.png"/>
                <span className="lang font-medium">Tailwind CSS</span>
            </div>
        </div>
    </div>

    </>
    )
}