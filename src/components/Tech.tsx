import Image from 'next/image'
import 'react-tippy/dist/tippy.css';
import { Tooltip, withTooltip } from 'react-tippy';
import Text from '../components/Text';

export default function Tech() {
    return(
    <>
        <div className="mt-14">
        <div>
            <h1 className="font-semibold text-3xl text-white text-center">Technology Stack</h1>
        </div>
        <div className="grid grid-cols-2 gap-5 mt-5 sm:gird-cols-3 md:grid-cols-4">
            <div className="flex space-x-2 text-white items-center overflow-hidden">
                <Image
                    className="flex-shrink-0 h-7 w-7"
                    src="https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg"
                    alt=""
                    width={28}
                    height={28}
                />
                <span className="lang font-medium">HTML5</span>
            </div> 
            <div className="flex space-x-2 text-white items-center overflow-hidden">

                <Image
                    className="flex-shrink-0 h-7 w-7"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/1280px-CSS3_logo.svg.png"
                    alt=""
                    width={28}
                    height={28}
                />                
                <span className="lang font-medium">CSS3</span>
            </div> 
            <div className="flex space-x-2 text-white items-center overflow-hidden">
                <Image
                    className="flex-shrink-0 h-7 w-7"
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                    alt=""
                    width={28}
                    height={28}
                />  
                <span className="lang font-medium">JavaScript</span>
            </div>     
            <div className="flex space-x-2 text-white items-center overflow-hidden">
                <Image
                    className="flex-shrink-0 h-7 w-7"
                    src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"
                    alt=""
                    width={28}
                    height={28}
                />
                <span className="lang font-medium">TypeScript</span>
            </div>           
            <div className="px-1 flex space-x-2 text-white items-center overflow-hidden">
                <Image
                    className="flex-shrink-0 h-7 w-7"
                    src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Database-mysql.svg"
                    alt=""
                    width={28}
                    height={28}
                />
                <span className="lang font-medium">MySQL</span>
            </div>
            <div className="flex space-x-2 text-white items-center overflow-hidden">
                <Image
                    className="flex-shrink-0 h-7 w-7"
                    src="https://i.postimg.cc/L4fXJqSf/512px-Antu-mongodb-svg.png"
                    alt=""
                    width={28}
                    height={28}
                />
                <span className="lang font-medium">MongoDB</span>
            </div>
            <div className="flex space-x-2 text-white items-center overflow-hidden">
                <Image
                    className="flex-shrink-0 h-7 w-7"
                    src="https://www.svgrepo.com/show/354113/nextjs-icon.svg"
                    alt=""
                    width={28}
                    height={28}
                />
                <span className="lang font-medium">Next.js</span>
            </div>
            <div className="flex space-x-2 text-white items-center overflow-hidden">
                <Image
                    className="flex-shrink-0 h-7 w-7"
                    src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
                    alt=""
                    width={28}
                    height={28}
                />
                <span className="lang font-medium">Tailwind CSS</span>
            </div>
        </div>
    </div>

    </>
    )
}