import React from "react";
import back from './Assets/back.png'
import { useNavigate } from "react-router-dom";
import tellmeaoutyourself from "./Assets/tellmeaboutyourself.png"

const ProfileAys = () => {
    const navigate = useNavigate();
    const handleClickback = () => navigate('/ProfileBasic');
    const handleClickgotoAys = () => navigate('/ProfileAys');

    return (
        <div className="w-[100%] m-auto bg-white">
            <div className='jobContainer rounded-[10px] bg-slate-200 flex gap-10 flex-wrap items-center py-10 mb-5'>
                <div className='grid grid-cols-6 w-[90%]'>
                    <div className="flex  ml-20 mt-4" onClick={handleClickback}>
                        <div className="rounded-[50%]  w-8 h-8 bg-blueColor">
                            <img src={back} className="flex justify-center text-white w-5 h-5 ml-1 mt-1"></img>
                        </div>
                        <div><span className="ml-[10px] align-middle cursor-pointer text-[20px]">Back</span></div>
                    </div>
                    <div></div><div></div>
                    <div className="flex justify-end mt-4 " onClick={handleClickback}>
                        <div className="rounded-[50%]  w-8 h-8 bg-blueColor">
                            <span className="flex justify-center text-white text-[22px]">1</span>
                        </div>
                        <div><span className="ml-[10px] align-middle cursor-pointer text-[20px]">Basic</span></div>
                    </div>
                    <div className='flex mt-8 ml-4' style={{ flex: 1, height: '1px', backgroundColor: 'black' }} />
                    <div className="flex justify-end mt-4" onClick={handleClickgotoAys}>
                        <div className="rounded-[50%]  w-8 h-8 bg-blueColor">
                            <span className="flex justify-center text-white text-[22px]">2</span>
                        </div>
                        <div><span className="ml-[10px] align-middle cursor-pointer text-[20px]">About your self</span></div>
                    </div>
                </div>
                <div className='group group/item singleJob ml-[5%] rounded-[10px] w-[90%] p-[20px] bg-white shadow-lg'>
                    <div className='grid grid-cols-2 '>
                        <div className="p-5 mt-12">
                            <img src={tellmeaoutyourself}></img>
                        </div>

                        <div>
                            <div className="flex flex-row  mt-10">
                                <div className="rounded-[50%] w-10 h-10 bg-blueColor">
                                    <span className="flex justify-center text-white text-[28px]">2</span>
                                </div>
                                <div><span className="ml-[10px] text-[25px]">About your self</span></div>
                            </div>
                            <div class="mb-4 mt-5 ml-[10%]" >
                                <label class="text-black text-[18px]  mb-2" for="username">
                                    Date of birth:
                                </label><br />
                                <input class="shadow appearance-none border rounded w-[85%] h-12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="dd/mm/yyyy" />
                            </div>
                            <div class="mb-4 mt-5 ml-[10%]" >
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

                            <div class='mt-10 flex justify-end'>
                                <button className='bg-blueColor h-full w-[20%] text-[20px] p-2 rounded-[10px] text-white cursor-pointer hover:bg-blue-300'>Save</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileAys;