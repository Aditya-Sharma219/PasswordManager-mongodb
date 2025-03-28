"use client";
import React from 'react'

const Footer = () => {
  return (<footer className="bg-gray-800 text-gray-400 body-font">
    <div className="container px-5 py-16 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
      <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">Password Manager</span>
        </a>
        <p className="mt-2 text-sm text-gray-500">Manage your passwords at one single place</p>
      </div>
      <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">CATEGORIES</h2>
          <nav className="list-none mb-10">
            <li><a href='/' className="text-gray-400 hover:text-white transition">First Link</a></li>
            <li><a href='/' className="text-gray-400 hover:text-white transition">Second Link</a></li>
            <li><a href='/' className="text-gray-400 hover:text-white transition">Third Link</a></li>
            <li><a href='/' className="text-gray-400 hover:text-white transition">Fourth Link</a></li>
          </nav>
        </div>
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">ABOUT</h2>
          <nav className="list-none mb-10">
            <li><a href='/' className="text-gray-400 hover:text-white transition">Company</a></li>
            <li><a href='/' className="text-gray-400 hover:text-white transition">Careers</a></li>
            <li><a href='/' className="text-gray-400 hover:text-white transition">Blog</a></li>
            <li><a href='/contact' className="text-gray-400 hover:text-white transition">Contact</a></li>
          </nav>
        </div>
      </div>
    </div>
    <div className="bg-gray-800">
      <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
        <p className="text-gray-400 text-sm text-center sm:text-left">© 2025 PassOp —
          <a href="/" className="text-indigo-400 hover:text-indigo-300 ml-1" target="_blank" rel="noopener noreferrer">@AdityaSharma</a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start space-x-4">
          <a href='https://www.linkedin.com/in/adityasharma219/' className="text-gray-400 hover:text-white transition transform hover:scale-110">
            <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>
          <a href='https://www.linkedin.com/in/adityasharma219/' className="text-gray-400 hover:text-white transition transform hover:scale-110">
            <lord-icon
              className="text-gray-400 hover:text-white transition transform hover:scale-110"
              style={{ width: "22px", height: "22px" }}
              src="https://cdn.lordicon.com/qgebwute.json"
              trigger="hover"
              colors="primary:#9ca3af">
            </lord-icon>

          </a>
          <a href='https://github.com/Aditya-Sharma219' className=" text-gray-400 hover:text-white transition transform hover:scale-110">
            <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
        </span>
      </div>
    </div>
  </footer>
  )
}

export default Footer