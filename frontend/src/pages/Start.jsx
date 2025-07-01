import React from "react";
import { Link } from "react-router-dom";

function Start(){

    return <>
        <div className="h-screen w-screen flex justify-center items-center bg-black ">
            <Link to={'/code'} className="bg-blue-600 text-3xl p-3 rounded-xl ">Start Coding</Link>
        </div>
    </>

}

export default Start