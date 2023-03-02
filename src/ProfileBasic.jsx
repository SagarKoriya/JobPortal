import React from 'react';
import profile_basic from './Assets/profile_basic.png'
import back from './Assets/back.png'
import { useNavigate } from 'react-router-dom';

const ProfileBasic = () => {
    const navigate = useNavigate();
    const handleClickback = () => navigate('/Profile');
    const handleClicknext = () => navigate('/ProfileAys');
    const handleClickgotobasic = () => navigate('/ProfileBasic');

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
                    <div className="flex justify-end mt-4 " onClick={handleClickgotobasic}>
                        <div className="rounded-[50%]  w-8 h-8 bg-blueColor">
                            <span className="flex justify-center text-white text-[22px]">1</span>
                        </div>
                        <div><span className="ml-[10px] align-middle cursor-pointer text-[20px]">Basic</span></div>
                    </div>
                    <div className='flex mt-8 ml-4' style={{flex: 1, height: '1px', backgroundColor: 'black'}} />
                    <div className="flex justify-end mt-4" onClick={handleClicknext}>
                        <div className="rounded-[50%]  w-8 h-8 bg-blueColor">
                            <span className="flex justify-center text-white text-[22px]">2</span>
                        </div>
                        <div><span className="ml-[10px] align-middle cursor-pointer text-[20px]">About your self</span></div>
                    </div>
                </div>

                <div className='group group/item singleJob ml-[5%] rounded-[10px] w-[90%] p-[20px] bg-white shadow-lg'>
                    <div className='grid grid-cols-2 mt-10'>
                        <div className='p-5'>
                            <img src={profile_basic}></img>
                        </div>

                        <div>
                            <div className="flex flex-row  mt-4">
                                <div className="rounded-[50%] w-10 h-10 bg-blueColor">
                                    <span className="flex justify-center text-white text-[28px]">1</span>
                                </div>
                                <div><span className="ml-[10px] text-[25px]">Basic</span></div>
                            </div>
                            <div class="mb-4 mt-10 " >
                                <label class="text-black text-[18px]  mb-2" for="username">
                                    First Name:
                                </label><br />
                                <input class="shadow appearance-none border rounded w-[85%] h-12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="First Name" />
                            </div>
                            <div class="mb-4 mt-5 " >
                                <label class="text-black text-[18px]  mb-2" for="username">
                                    Last Name:
                                </label><br />
                                <input class="shadow appearance-none border rounded w-[85%] h-12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Last Name" />
                            </div>
                            <div class="mb-4 mt-5 " >
                                <label class="text-black text-[18px]  mb-2" for="username">
                                    Username:
                                </label><br />
                                <input class="shadow appearance-none border rounded w-[85%] h-12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                            </div>
                            <div class="mb-4 mt-5 " >
                                <label class="text-black text-[18px]  mb-2" for="username">
                                    Email:
                                </label><br />
                                <input class="shadow appearance-none border rounded w-[85%] h-12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Email" />
                            </div>
                            <div class="mb-4 mt-5 " >
                                <label class="text-black text-[18px]  mb-2" for="username">
                                    Mobile no.:
                                </label><br />
                                <input class="shadow appearance-none border rounded w-[85%] h-12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Mobile no." />
                            </div>
                            <div className='flex justify-end mt-[15%]'>
                                <button className='bg-blueColor h-full w-[20%] text-[20px] p-2 rounded-[10px] text-white cursor-pointer hover:bg-blue-300' onClick={handleClicknext} >Next</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileBasic;
