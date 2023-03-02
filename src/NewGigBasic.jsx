import React from 'react'
import { useNavigate } from 'react-router-dom'
import back from './Assets/back.png'
import profile_basic from './Assets/profile_basic.png'

const NewGigBasic = () => {
    const navigate = useNavigate();
    const handleClickback = () => navigate('/Gig');
    const handleClickgotoNewGigExperience = () => navigate('/NewGigExperience');
    const handleClickgotoNewGigImages = () => navigate('/NewGigImages');

    return (
        <div className="w-[100%] m-auto bg-white">
            <div className='jobContainer rounded-[10px] bg-slate-200 flex gap-10 flex-wrap items-center py-10 mb-5'>
                <div className='grid grid-cols-6 w-[100%] mr-20'>
                    <div className="flex  ml-20 mt-4" onClick={handleClickback}>
                        <div className="rounded-[50%]  w-8 h-8 bg-blueColor">
                            <img src={back} className="flex justify-center text-white w-5 h-5 ml-1 mt-1"></img>
                        </div>
                        <div><span className="ml-[10px] align-middle cursor-pointer text-[20px]">Back</span></div>
                    </div>

                    <div className="flex mt-4 ml-32">
                        <div className="rounded-[50%]  w-8 h-8 bg-blueColor">
                            <span className="flex justify-center text-white text-[22px]">1</span>
                        </div>
                        <div><span className="ml-[10px] align-middle cursor-pointer text-[20px]">Basic</span></div>
                    </div>
                    <div className='flex mt-8 ml-4 mr-2' style={{ flex: 1, height: '1px', backgroundColor: 'black' }} />
                    <div className="flex  mt-4 ml-3" onClick={handleClickgotoNewGigExperience}>
                        <div className="rounded-[50%]  w-8 h-8 bg-blueColor">
                            <span className="flex justify-center text-white text-[22px]">2</span>
                        </div>
                        <div><span className="ml-[10px] align-middle cursor-pointer text-[20px]">Work Experience</span></div>
                    </div>
                    <div className='flex mt-8 ml-4 mr-2' style={{ flex: 1, height: '1px', backgroundColor: 'black' }} />
                    <div className="flex  mt-4 ml-3" onClick={handleClickgotoNewGigImages}>
                        <div className="rounded-[50%]  w-8 h-8 bg-blueColor">
                            <span className="flex justify-center text-white text-[22px]">3</span>
                        </div>
                        <div><span className="ml-[10px] align-middle cursor-pointer text-[20px]">Images</span></div>
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
                                    Title:
                                </label><br />
                                <input class="shadow appearance-none border rounded w-[85%] h-12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Title" type="text" placeholder="Title" />
                            </div>
                            <div class="mb-4 mt-5" >
                                <label class="text-black text-[18px]  mb-2" for="username">
                                    Choose Category:
                                </label><br />
                                <select className='shadow appearance-none border rounded w-[85%] h-12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'>
                                    <option value="Electrition">Electrition</option>
                                    <option value="Carpenter">Carpenter</option>
                                    <option value="Plumber">Plumber</option>
                                    <option value="Painter">Painter</option>
                                </select>
                            </div>
                            <div class="mb-4 mt-5" >
                                <label class="text-black text-[18px]  mb-2" for="username">
                                    Your Service:
                                </label><br />
                                <textarea class="shadow appearance-none border rounded w-[85%] h-48 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="service" type="text" placeholder="Describe your service" />
                            </div>
                            <div class='flex mt-36 justify-end '>
                                <button className='bg-blueColor h-full w-[20%] text-[20px] p-2 rounded-[10px] text-white cursor-pointer hover:bg-blue-300' onClick={handleClickgotoNewGigExperience} >Next</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewGigBasic;
