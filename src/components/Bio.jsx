import React from 'react'
import Profile from './profile/Profile';

const Bio = () => {
const about = {
        name: "soumik",
        title:"I'm a passionate front-end developer skilled in creating dynamic, responsive, and visually appealing web applications.",

    };

  return (
    <div>
    <Profile name={about.name} title={about.title}/>
    </div>
  )
}

export default Bio