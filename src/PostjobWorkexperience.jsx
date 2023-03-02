import React from 'react'
import workexperience from './Assets/workexperience.png'
import { useNavigate } from 'react-router-dom';
import entry from './Assets/entry.png';
import intern from './Assets/intern.png';
import expert from './Assets/expert.png';

const PostjobWorkexperience = () => {
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
                            <div className="flex flex-row  mt-4">
                                <div className="rounded-[50%] w-10 h-10 bg-blueColor">
                                    <span className="flex justify-center text-white text-[28px]">3</span>
                                </div>
                                <div><span className="ml-[10px] text-[25px]">Work Experience</span></div>
                            </div>
                            <div class="mb-4 mt-5" >
                                <label class="text-black text-[18px]  mb-2" for="username">
                                    Desired experience level:
                                </label><br />
                                <div className='mt-5'>
                                    <ul class="grid w-[90%] gap-6 md:grid-cols-2">
                                        <li className='flex justify-center'>
                                            <input type="radio" id="entry" name="hosting" value="hosting-small" className="hidden peer"/>
                                            <label for="entry" className="inline-flex items-center justify-center w-full p-5 text-black hover:bg-blueColor bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300  dark:peer-checked:text-white peer-checked:border-blueColor peer-checked:text-white peer-checked:bg-blueColor">
                                                <div className="block">
                                                    <div className="ml-[35%] w-[20%] text-lg font-semibold">
                                                        <img src={entry} />
                                                    </div>
                                                    <div className="w-full ml-[25%] text-[20px] mt-5 font-semibold">Entry Level</div>
                                                </div>

                                            </label>
                                        </li>
                                        <li>
                                            <input type="radio" id="intermediate" name="hosting" value="hosting-big" className="hidden peer" />
                                            <label for="intermediate" className="inline-flex items-center justify-between w-full p-5 text-black hover:bg-blueColor bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300  dark:peer-checked:text-white peer-checked:border-blueColor peer-checked:text-white peer-checked:bg-blueColor">
                                                <div className="block">
                                                    <div className="ml-[38%] mt-2 w-[20%] text-lg font-semibold">
                                                        <img src={intern} />
                                                    </div>
                                                    <div className="w-full ml-[7%] text-[20px] mt-5 font-semibold">Intermediate Level</div>
                                                </div>
                                                
                                            </label>
                                        </li>
                                        <li>
                                            <input type="radio" id="expert" name="hosting" value="hosting-big" className="hidden peer" />
                                            <label for="expert" className="inline-flex items-center justify-between w-full p-5 text-black hover:bg-blueColor bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300  dark:peer-checked:text-white peer-checked:border-blueColor peer-checked:text-white peer-checked:bg-blueColor">
                                                <div className="block">
                                                    <div className="ml-[38%] mt-2 w-[20%] text-lg font-semibold">
                                                        <img src={expert} />
                                                    </div>
                                                    <div className="w-full ml-[23%] text-[20px] mt-5 font-semibold">Expert Level</div>
                                                </div>
                                                
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="mb-4 mt-5" >
                                <label class="text-black text-[18px]  mb-2" for="username">
                                    How long do you expect this job to last:
                                </label><br />
                                <input class="shadow appearance-none border rounded w-[85%] mt-5 h-12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="service" type="text" placeholder="Enter duration in months" />
                            </div>
                            
                            <div className='flex justify-end mt-[15%]'>
                                <button className='bg-blueColor h-full w-[20%] text-[20px] p-2 rounded-[10px] text-white cursor-pointer hover:bg-blue-300' onClick={handleClickgotoPostjobFinish} >Next</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default PostjobWorkexperience