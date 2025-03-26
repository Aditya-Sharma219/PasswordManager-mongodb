"use client";
import React from 'react'
import Link from 'next/link';

const Navbar = () => {
  return (<nav className='navbar p-2 bg-gray-800 flex justify-around items-center h-16 text-white '>
    <Link href={"/"} ><div className="pass cursor-pointer hover:font-bold px-2">PassOP</div></Link>
    <ul className='flex px-2 items-center gap-4'>
      <Link href={"/"} ><li className='hover:font-bold flex justify-center items-center gap-4' ><lord-icon
        src="https://cdn.lordicon.com/jeuxydnh.json"
        colors="primary:#ffffff,secondary:#ffffff"
        trigger="hover"
        style={{ width: "40px",height:"40px"}}>
      </lord-icon>Home</li></Link>
      <Link href={"/about"} ><li className='hover:font-bold' >About</li></Link>
      <Link href={"/contact"} ><li className='hover:font-bold' >Contact</li></Link>
    </ul>
    <div className="gitlogo flex items-center justify-center gap-2">
      <Link href="https://github.com/Aditya-Sharma219">
      <div className="hidden sm:block">
        <img  src="https://banner2.cleanpng.com/20180920/aey/kisspng-scalable-vector-graphics-github-computer-icons-log-github-brand-octacat-social-svg-png-icon-free-down-5ba35d7db54fe5.6273953815374329577427.jpg" height={50} width={50} className='rounded-full' alt="Github Logo" />
      </div>
      </Link>
      <Link href="https://github.com/Aditya-Sharma219">
        <div>My Github</div>
      </Link>
    </div>

  </nav>
  )
}

export default Navbar