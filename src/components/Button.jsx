import React from 'react'

const MyButton = ()=> <h1 title='Click Here For Clear yellow' className="text-2xl font-bold bg-yellow-500 w-50 text-center p-3 rounded-xs m-4 uppercase text-white">clear</h1>
const MyButton2 = ()=> <h1 className="text-2xl font-bold cursor-pointer bg-green-500 w-50 text-center p-3 rounded-xs m-4 uppercase text-white">{new Date().toLocaleTimeString()}</h1>
const MyButton3 = ()=> <h1 className="text-2xl font-bold bg-lime-500 w-50 text-center p-3 rounded-xs m-4 uppercase text-white">clear</h1>

const Button = () => {

const MyObj = {
  title : "Click here to clear fghjklss",
  id : "6472",
  className : "hi"
}

  return (
    <div>
        <h1 {...MyObj} className="text-2xl cursor-pointer font-bold bg-red-500 w-50 text-center p-3 rounded-xs m-4 uppercase text-white">separate</h1>
        <MyButton {...MyObj} />
        <MyButton2 {...MyObj} />
        <MyButton3 />
    </div>
  )
}

export default Button