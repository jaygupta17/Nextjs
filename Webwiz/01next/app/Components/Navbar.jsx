import Image from 'next/image'
function Navbar() {
  return (
    <div className='h-[10vh] bg-black/80 flex justify-between'>
        <nav className="w-full flex justify-around items-center text-white gap-x-2">
            <Image
                src={'/logo.png'}
                width={65}
                height={80}
            />
           <ul className='flex justify-evenly w-[50%] items-center'>
           <li className='hover:text-[#b2fc33]'>
                Home
            </li>
            <li className='hover:text-[#b2fc33]'>
                About
            </li>
            <li className='hover:text-[#b2fc33]'>
                Contact us
            </li>
            <li className='hover:text-[#b2fc33]'>
                Support
            </li>
           </ul>
            <div className='flex justify-center items-center gap-x-3'>
            <button className='px-4 py-1 bg-[#72b400] rounded-md'>Sign up</button>
            <Image
                src={'/pfp.png'}
                width={35}
                height={35}
            />
            </div>
        </nav>
    </div>
  )
}

export default Navbar