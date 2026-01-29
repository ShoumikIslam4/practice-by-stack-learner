import React from "react";

const Profile = () => {
  return (
    <div className="flex justify-center mt-10">
      <div className="w-160 border">
        <div className="m-5">
          <h2 className=" text-2xl font-semibold">Soumik Islam</h2>
          <p>Front end web developer Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
        </div>
        <div className="m-5">
          <h3 className="text-xl font-semibold">Skills:</h3>
          <ul className="flex gap-10 ">
            <li className="bg-gray-300 px-3">Flutter</li>
            <li className="bg-gray-300 px-3">Javascript</li>
            <li className="bg-gray-300 px-3">UiUx</li>
          </ul>
        </div>
        <div className="m-5">
          <h3 className="text-xl">Social Links:</h3>
          <ul className="flex gap-5 text-blue-800">
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Linkedin</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
