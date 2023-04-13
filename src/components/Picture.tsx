import Image from 'next/image'

export default function Pic() {
    return (
        <>
            <div className="full-container flex space-x-2 text-white items-center overflow-hidden justify-center">
                <Image
                    className="flex-shrink-0 h-128 w-128 rounded-3xl items-center mb-2 mt-1"
                    src="https://i.postimg.cc/dVKzHpPL/test.png"
                    alt=""
                    width={512}
                    height={512}
                />
            </div>
        </>
    )
}