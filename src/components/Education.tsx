export default function Edu() {
    return (
        <>
            <h1 className="font-semibold text-3xl text-white text-center" >
                Education History
            </h1>

            <div className="mt-2 text-center">
                <a href="https://www.pearlandisd.org/dawson" target="_blank" className="text-white font-semibold">
                    <h3>Glenda Dawson High School</h3>
                </a>
                <div className="flex space-x-2 divide-x-2 text-white justify-center">
                    <div className="flex space-x-2 flex-shrink-0 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-4 w-4"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <div className="text-opacity-25 text-center">2015 - 2019</div>
                    </div>
                    <div className="pl-2 truncate text-opacity-20 ">
                        High School Diploma
                    </div>
                </div>
            </div>

            <div className="py-2 mt-2 text-center ">
                <a href="https://www.uh.edu/nsm/computer-science/" target="_blank" className="text-white font-semibold ">
                    <h3>University of Houston</h3>
                </a>
                <div className="flex space-x-2 divide-x-2 text-white items-center justify-center">
                    <div className="flex space-x-2 flex-shrink-0 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-4 w-4"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <div className="text-opacity-25 ">2019 - 2023</div>
                    </div>
                    <div className="pl-2 truncate text-opacity-20">
                        BS, Computer Science
                    </div>
                </div>
            </div>
        </>
    )
}