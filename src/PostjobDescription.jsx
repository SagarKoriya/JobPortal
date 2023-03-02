import React from 'react'
import { useNavigate } from 'react-router-dom';
import jobdesc from './Assets/jobdesc.png';
import stopwatch from './Assets/stopwatch.png';
import income from './Assets/income.png';

const PostjobDescription = () => {
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
                            <img src={jobdesc}></img>
                        </div>

                        <div>
                            <div className="flex flex-row  mt-4">
                                <div className="rounded-[50%] w-10 h-10 bg-blueColor">
                                    <span className="flex justify-center text-white text-[28px]">2</span>
                                </div>
                                <div><span className="ml-[10px] text-[25px]">Description</span></div>
                            </div>
                            <div class="mb-4 mt-5" >
                                <label class="text-black text-[18px]  mb-2" for="username">
                                    What type of worker do you want:
                                </label><br />
                                <select className='shadow appearance-none border rounded w-[85%] h-12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'>
                                    <option value="Full Time">Full Time</option>
                                    <option value="Part Time">Part Time</option>
                                </select>
                            </div>
                            <div class="mb-4 mt-5" >
                                <label class="text-black text-[18px]  mb-2" for="username">
                                    Skills Needed:
                                </label><br />
                                <textarea class="shadow appearance-none border rounded w-[85%] h-32 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="service" type="text" placeholder="Describe your service" />
                            </div>
                            <div class="mb-4 mt-5" >
                                <label class="text-black text-[18px]  mb-2" for="username">
                                    How Payment will be calculated:
                                </label>
                                <div className='mt-5'>
                                    <ul class="grid w-[90%] gap-6 md:grid-cols-3">
                                        <li className='flex justify-center hover:bg-blueColor'>
                                            <input type="radio" id="hosting-small" name="hosting" value="hosting-small" className="hidden peer hover:bg-blueColor" required />
                                            <label for="hosting-small" className="inline-flex items-center justify-between w-full p-5 text-black hover:bg-blueColor bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300  dark:peer-checked:text-white peer-checked:border-blueColor peer-checked:text-white peer-checked:bg-blueColor">
                                                <div className="block">
                                                    <div className="ml-[30%] w-[40%] text-lg font-semibold">
                                                        <img src={stopwatch} />
                                                    </div>
                                                    <div className="w-full ml-[25%] mt-5 font-semibold">By Hour</div>
                                                </div>

                                            </label>
                                        </li>
                                        <li>
                                            <input type="radio" id="hosting-big" name="hosting" value="hosting-big" className="hidden peer" />
                                            <label for="hosting-big" className="inline-flex items-center justify-between w-full p-5 text-black hover:bg-blueColor bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300  dark:peer-checked:text-white peer-checked:border-blueColor peer-checked:text-white peer-checked:bg-blueColor">
                                                <div className="block">
                                                    <div className="ml-[38%] mt-2 w-[40%] text-lg font-semibold">
                                                        <img src={income} />
                                                    </div>
                                                    <div className="w-full ml-[35%] text-[18px] mt-5 font-semibold">Fixed</div>
                                                </div>
                                                <svg aria-hidden="true" className="w-6 h-6 ml-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='flex justify-end mt-[15%]'>
                                <button className='bg-blueColor h-full w-[20%] text-[20px] p-2 rounded-[10px] text-white cursor-pointer hover:bg-blue-300' onClick={handleClickPostjobDescription} >Next</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostjobDescription