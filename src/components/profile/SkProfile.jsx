import React from 'react'

const SkProfile = ({name, title, skills, socials}) => {
  return (
    <div>
        <div className="border-1 border-gray-400 w-200 ml-120 mt-10 p-10">
        <div>
          <h2 className="text-3xl font-semibold">{name}</h2>
          <p>{title}</p>
        </div>

        <div className="mt-2">
          <h2 className="text-xl font-semibold">Technologies i use</h2>
          <ul className="flex gap-10 mt-3">
            <li className="bg-gray-300 px-2 hover:bg-gray-400 cursor-pointer">
              Tailwind Css
            </li>
            <li className="bg-gray-300 px-2 hover:bg-gray-400 cursor-pointer">
              React Js
            </li>
            <li className="bg-gray-300 px-2 hover:bg-gray-400 cursor-pointer">
              Firebase
            </li>
            <li className="bg-gray-300 px-2 hover:bg-gray-400 cursor-pointer">
              Javascript
            </li>
          </ul>
        </div>

        <div className="mt-2">
          <h2 className="text-xl font-semibold">Find me on</h2>
          <ul className="flex gap-10 mt-2">
            <li>
              <a href="#" className="text-blue-800 text-lg hover:text-amber-300">Facebook</a>
            </li>
            <li>
              <a href="#" className="text-blue-800 text-lg hover:text-amber-300">Instagram</a>
            </li>
            <li>
              <a href="#" className="text-blue-800 text-lg hover:text-amber-300">Github</a>
            </li>
            <li>
              <a href="#" className="text-blue-800 text-lg hover:text-amber-300">Linkedin</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SkProfile