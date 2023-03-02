import React from 'react'
import workexperience from './Assets/workexperience.png'
import { useNavigate } from 'react-router-dom';
import entry from './Assets/entry.png';
import intern from './Assets/intern.png';
import expert from './Assets/expert.png';

const PostjobFinish = () => {
    const navigate = useNavigate();
    const handleClickPostjobDescription = () => navigate('/PostjobDescription');
    const handleClickgotoPostjobbasic = () => navigate('/PostjobBasic');
    const handleClickgotoPostjobWorkexperience = () => navigate('/PostjobWorkexperience');
    const handleClickgotoPostjobFinish = () => navigate('/PostjobFinish');

    return (
        <div className="w-[100%] m-auto bg-white">
            <div className='jobContainer rounded-[10px] bg-slate-200 flex gap-10 flex-wrap items-center py-10 mb-5'>
                <div className='grid grid-cols-7 w-[100%] mr-20 ml-10'>
                    <div className="flex justify-end mt-4 " onClick={handleClickgotoPostjobbasic}>
                        <div className="rounded-[50%]  w-8 h-8 bg-blueColor">
                            <span className="flex justify-center text-white text-[22px]">1</span>
                        </div>
                        <div><span className="ml-[10px] align-middle cursor-pointer text-[18px]">Basic</span></div>
                    </div>
                    <div className='flex mt-8 ml-4 w-[95%]' style={{ flex: 1, height: '1px', backgroundColor: 'black' }} />
                    <div className="flex justify-end mt-4 mr-4" onClick={handleClickPostjobDescription}>
                        <div className="rounded-[50%]  w-8 h-8 bg-blueColor">
                            <span className="flex justify-center text-white text-[22px]">2</span>
                        </div>
                        <div><span className="ml-[10px] align-middle cursor-pointer text-[18px]">Description</span></div>
                    </div>
                    <div className='flex mt-8  w-[95%]' style={{ flex: 1, height: '1px', backgroundColor: 'black' }} />
                    <div className="flex justify-end mt-4 w-[110%]" onClick={handleClickgotoPostjobWorkexperience}>
                        <div className="rounded-[50%]  w-8 h-8 bg-blueColor">
                            <span className="flex justify-center text-white text-[22px]">2</span>
                        </div>
                        <div><span className="ml-[10px] align-middle cursor-pointer text-[18px]">Work Experience</span></div>
                    </div>
                    <div className='flex mt-8 ml-10 w-[80%]' style={{ flex: 1, height: '1px', backgroundColor: 'black' }} />
                    <div className="flex justify-end mt-4 w-[60%]" onClick={handleClickgotoPostjobFinish}>
                        <div className="rounded-[50%]  w-8 h-8 bg-blueColor">
                            <span className="flex justify-center text-white text-[22px]">2</span>
                        </div>
                        <div><span className="ml-[10px] align-middle cursor-pointer text-[18px]">Finish</span></div>
                    </div>
                </div>

                <div className='group group/item singleJob ml-[5%] rounded-[10px] w-[90%] p-[20px] bg-white shadow-lg'>
                    <div className='grid grid-cols-2 mt-10'>
                        <div className='p-5'>
                            <img src={workexperience}></img>
                        </div>

                        <div>
                            <div className="flex flex-row  mt-10">
                                <div className="rounded-[50%] w-10 h-10 bg-blueColor">
                                    <span className="flex justify-center text-white text-[28px]">4</span>
                                </div>
                                <div><span className="ml-[10px] text-[25px]">Finish</span></div>
                            </div>
                            <div class="mb-4 mt-10" >
                                <label class="text-black text-[18px]  mb-2" for="username">
                                    How payment will be given:
                                </label><br />
                                <select className='shadow appearance-none border rounded w-[85%] mt-5 h-12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'>
                                    <option value="Daily">Daily Basis</option>
                                    <option value="Weekly">Weekly Basis</option>
                                    <option value="completion">On Job Complition</option>
                                </select>
                            </div>
                            <div class="mb-4 mt-10" >
                                <label class="text-black text-[18px]  mb-2" for="username">
                                    Budget:
                                </label><br />
                                <input class="shadow appearance-none border rounded w-[85%] mt-5 h-12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="service" type="text" placeholder="Minimum Budget" />
                                <input class="shadow appearance-none border rounded w-[85%] mt-5 h-12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="service" type="text" placeholder="Maximum Budget" />
                            </div>

                            <div className='flex justify-end mt-[35%]'>
                                <button className='bg-blueColor h-full w-[20%] text-[20px] p-2 rounded-[10px] text-white cursor-pointer hover:bg-blue-300'  >Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostjobFinish