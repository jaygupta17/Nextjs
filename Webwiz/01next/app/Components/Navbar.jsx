import Image from 'next/image'
function Navbar() {
  return (
    <div className='h-[10vh] bg-black/50 flex justify-between'>
        <nav className="w-full flex justify-around items-center text-white gap-x-2">
            <Image
                src={'/logo.png'}
                width={65}
                height={80}
            />
           <ul className='flex justify-around w-[50%] items-center'>
           <li>
                Home
            </li>
            <li>
                About
            </li>
            <li>
                Contact us
            </li>
            <li>
                Support
            </li>
           </ul>
            <button className='px-4 py-1 bg-[#b3ff30] rounded-md'>Sign up</button>
            <Image
                src={'/pfp.png'}
                width={50}
                height={50}
            />
        </nav>
    </div>
  )
}

export default Navbar