import React from "react";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import facebook from "@/assets/fb.png";
import twitter from "@/assets/twitter.png";
import instagram from "@/assets/instagram.png";
import Image from 'next/image';

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
            <div>
                <h2 className="text-lg font-bold">Find Us On</h2>
                <div className="space-y-4 mt-6">
                    <button className="border p-2 w-full flex gap-2 items-center">
                        <Image
                            src={facebook}
                            alt="Facebook"
                        />
                        Facebook
                    </button>
                    <button className="border p-2 w-full flex gap-2 items-center">
                        <Image src={twitter} alt="Twitter" />
                        Twitter
                    </button>
                    <button className="border p-2 w-full flex gap-2 items-center">
                        <Image src={instagram} alt="Instagram" />
                        Instagram
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RightSidebar;
