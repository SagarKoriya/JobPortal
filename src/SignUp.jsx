import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
    return (
        <div className="w-[90%] m-auto bg-white " >
            
            <div className='jobContainer rounded-[10px] bg-slate-200 flex gap-10 justify-center flex-wrap items-center py-10 mb-5'>
                <div className='group group/item singleJob rounded-[10px] w-[40%] p-[20px] bg-white shadow-lg'>
                    <div className="logoDiv mt-10 flex justify-center ">
                        <h1 className="logo text-[35px] text-blueColor"><strong>get</strong>Work</h1>
                    </div>
                    <div className="logoDiv flex justify-center ">
                        <h1 className="logo mt-5 mb-5 text-[25px] text-textColor">Sign Up</h1>
                    </div>
                    <div class="mb-4 mt-4 flex justify-center" >
                        <input class="shadow appearance-none border rounded w-[80%] h-12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="First Name" />
                    </div>
                    <div class="mb-4 mt-4 flex justify-center" >
                        <input class="shadow appearance-none border rounded w-[80%] h-12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Last Name" />
                    </div>
                    <div class="mb-4 mt-4 flex justify-center" >
                        <input class="shadow appearance-none border rounded w-[80%] h-12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Email" />
                    </div>
                    <div class="mb-4 mt-4 flex justify-center" >
                        <input class="shadow appearance-none border rounded w-[80%] h-12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                    </div>
                    <div class="mb-4 mt-4 flex justify-center" >
                        <input class="shadow appearance-none border rounded w-[80%] h-12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="password" placeholder="Password" />
                    </div>
                    <div class='mt-10 flex justify-center'>
                        <button className='bg-blueColor h-full w-[80%] p-5 px-10 rounded-[10px] text-white cursor-pointer hover:bg-blue-300'>Sign Up</button>
                    </div>
                    <div class="flex justify-center mt-[50px] mb-10">
                        <h4 className="text-[15px] text-slate-600">Already a member?</h4>
                        <Link to="/Signin"><a className="text-[15px] text-blue-500 hover:text-blue-800"><u>Sign In</u></a></Link>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default SignUp;