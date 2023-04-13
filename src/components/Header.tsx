import image from 'next/image'
import Link from 'next/link'
import Anchor from '../components/Anchor';

  export default function Header() {

    return (
    <>
        <header className="full-container py-5 mt-1">
            <nav>
                <div className="flex mx-auto justify-between">
                   <div>
                        <div className="font-semi text-lg bold py-0 px-3 ">Dylan Hoàng Cao</div>
                    </div>

                    <div className="flex">


                        <Link href="/">
                            <div className="hover:bg-gray-400 hover:bg-opacity-20 rounded py-1 px-3">Home</div>
                        </Link>
                        
                        <Link href="/about">
                            <div className="hover:bg-gray-400 hover:bg-opacity-20 rounded py-1 px-3">About</div>
                        </Link>

                        <Link href="/resume">
                            <div className="hover:bg-gray-400 hover:bg-opacity-20 rounded py-1 px-3">Resume</div>
                        </Link>

                        <Link href="https://medium.com/@dylanhoangcao">
                            <div className="hover:bg-gray-400 hover:bg-opacity-20 rounded py-1 px-3">Blogs</div>
                        </Link>

                        
                    </div>
                </div>
            </nav>
            <hr className="mt-4 opacity-20" />
        </header>
    </>
    )
}