import React from "react";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const RightSidebar = () => {
    return (
        <div className="space-y-4">
            <h2 className="text-lg font-bold ">Login with</h2>
            <div className="space-y-4">
                <button className="flex gap-2 border border-blue-500 rounded text-blue-500 justify-center items-center p-2">
                    <FaGoogle />
                    Login with Google
                </button>
                <button className="flex gap-2 border rounded justify-center items-center p-2">
                    <FaGithub />
                    Login with Github
                </button>
            </div>
        </div>
    );
};

export default RightSidebar;
