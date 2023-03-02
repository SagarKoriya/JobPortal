import React from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const navigate = useNavigate();
    const handleClick = () => navigate('/ProfileBasic');
    const handleClickgotoGig = () => navigate('/Gig');

    return (
        <div className="w-[100%] m-auto bg-white">
            <div className='jobContainer rounded-[10px] bg-slate-200 flex gap-10 justify-center flex-wrap items-center py-10 mb-5'>
                <div className='group group/item singleJob rounded-[10px] w-[90%] p-[20px] bg-white shadow-lg'>
                    <div className="grid grid-cols-2 gap-0">
                        <div className="ml-[10%]">
                            <div className="flex flex-row ml-[10%] mt-4">
                                <div className="rounded-[50%] w-10 h-10 bg-blueColor">
                                    <span className="flex justify-center text-white text-[28px]">1</span>
                                </div>
                                <div><span className="ml-[10px] text-[25px]">Basic</span></div>
                            </div>
                            <div class="mb-4 mt-10 ml-[10%]" >
                                <label class="text-black text-[18px]  mb-2" for="username">
                                    First Name:
                                </label><br />
                                <input class="shadow appearance-none border rounded w-[85%] h-12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="First Name" />
                            </div>
                            <div class="mb-4 mt-5 ml-[10%]" >
                                <label class="text-black text-[18px]  mb-2" for="username">
                                    Last Name:
                                </label><br />
                                <input class="shadow appearance-none border rounded w-[85%] h-12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Last Name" />
                            </div>
                            <div class="mb-4 mt-5 ml-[10%]" >
                                <label class="text-black text-[18px]  mb-2" for="username">
                                    Username:
                                </label><br />
                                <input class="shadow appearance-none border rounded w-[85%] h-12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                            </div>
                            <div class="mb-4 mt-5 ml-[10%]" >
                                <label class="text-black text-[18px]  mb-2" for="username">
                                    Email:
                                </label><br />
                                <input class="shadow appearance-none border rounded w-[85%] h-12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Email" />
                            </div>
                            <div class="mb-4 mt-5 ml-[10%]" >
                                <label class="text-black text-[18px]  mb-2" for="username">
                                    Mobile no.:
                                </label><br />
                                <input class="shadow appearance-none border rounded w-[85%] h-12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Mobile no." />
                            </div>
                            <div class="mb-4 mt-5 ml-[10%]" >
                                <label class="text-black text-[18px]  mb-2" for="username">
                                    Date of birth:
                                </label><br />
                                <input class="shadow appearance-none border rounded w-[85%] h-12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="dd/mm/yyyy" />
                            </div>
                        </div>

                        <div >
                            <div className="mt-4 ml-[10%]">
                                <div className="inline-block rounded-[50%] w-10 h-10 bg-blueColor">
                                    <span className="flex justify-center text-white text-[28px]">2</span>
                                </div>
                                <span className="ml-[10px] text-[25px]">About your self</span>
                            </div>
                            <div class="mb-4 mt-10 ml-[10%]" >
                                <label class="text-black text-[18px]  mb-2" for="username">
                                    Address:
                                </label><br />
                                <textarea class="shadow ml-[5%] appearance-none border rounded w-[75%] h-20 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Address" />
                            </div>
                            <div class="mb-4 mt-5 ml-[10%]" >
                                <label class="text-black ml-[5%] text-[18px]  mb-2" for="username">
                                    Landmark:
                                </label><br />
                                <input class="shadow ml-[5%] appearance-none border rounded w-[75%] h-12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Landmark" />
                            </div>
                            <div class="mb-4 mt-5 ml-[10%]" >
                                <label class="text-black ml-[5%] text-[18px]  mb-2" for="username">
                                    City:
                                </label><br />
                                <input class="shadow ml-[5%] appearance-none border rounded w-[75%] h-12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="City" />
                            </div>
                            <div class="mb-4 mt-5 ml-[10%]" >
                                <label class="text-black ml-[5%] text-[18px]  mb-2" for="username">
                                    State:
                                </label><br />
                                <input class="shadow ml-[5%] appearance-none border rounded w-[75%] h-12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="State" />
                            </div>
                            <div class="mb-4 mt-5 ml-[10%]" >
                                <label class="text-black ml-[5%] text-[18px]  mb-2" for="username">
                                    Pincode:
                                </label><br />
                                <input class="shadow ml-[5%] appearance-none border rounded w-[75%] h-12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Pincode" />
                            </div>
                            <div className="grid grid-cols-3">
                                <div></div>
                                <div className="mt-10 flex justify-end" >
                                    <button className='border-[2px] rounded-[10px] py-[4px] px-[50px] text-[18px] font-semibold text-blueColor bg-white border-blueColor hover:text-white hover:bg-blueColor' onClick={handleClickgotoGig}>View Gig</button>
                                </div>
                                <div class='mt-10 flex justify-end '>
                                    <button className='bg-blueColor h-full w-[80%] text-[20px] p-2 rounded-[10px] text-white cursor-pointer hover:bg-blue-300' onClick={handleClick}>Edit Profile</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;