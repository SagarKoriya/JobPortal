import React from 'react'
import { useNavigate } from 'react-router-dom'
import back from './Assets/back.png'
import workexperience from './Assets/workexperience.png'
import sampleimg from './Assets/sampleimg.png'

const NewGigImages = () => {
    const navigate = useNavigate();
    const handleClickback = () => navigate('/NewGigExperience');
    const handleClickgotoNewGigBasic = () => navigate('/NewGigBasic')

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

                    <div className="flex mt-4 ml-32" onClick={handleClickgotoNewGigBasic}>
                        <div className="rounded-[50%]  w-8 h-8 bg-blueColor">
                            <span className="flex justify-center text-white text-[22px]">1</span>
                        </div>
                        <div><span className="ml-[10px] align-middle cursor-pointer text-[20px]">Basic</span></div>
                    </div>
                    <div className='flex mt-8 ml-4 mr-2' style={{ flex: 1, height: '1px', backgroundColor: 'black' }} />
                    <div className="flex  mt-4 ml-3" onClick={handleClickback}>
                        <div className="rounded-[50%]  w-8 h-8 bg-blueColor">
                            <span className="flex justify-center text-white text-[22px]">2</span>
                        </div>
                        <div><span className="ml-[10px] align-middle cursor-pointer text-[20px]">Work Experience</span></div>
                    </div>
                    <div className='flex mt-8 ml-4 mr-2' style={{ flex: 1, height: '1px', backgroundColor: 'black' }} />
                    <div className="flex  mt-4 ml-3" >
                        <div className="rounded-[50%]  w-8 h-8 bg-blueColor">
                            <span className="flex justify-center text-white text-[22px]">3</span>
                        </div>
                        <div><span className="ml-[10px] align-middle cursor-pointer text-[20px]">Images</span></div>
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
                                <div><span className="ml-[10px] text-[25px]">Images</span></div>
                            </div>
                            <div className="mt-10 flex justify-start" >
                                <button className='border-[2px] rounded-[10px] py-[4px] px-[50px] text-[18px] font-semibold text-blueColor bg-white border-blueColor hover:text-white hover:bg-blueColor'>Uploade Image</button>
                            </div>
                            <div className='flex mt-10'>
                                    <img src={sampleimg} />
                                    <div className='inline-block ml-10'>
                                    <img src={sampleimg} />
                                    </div>
                                </div>
                                <div className='flex mt-10' >
                                    <img src={sampleimg} />
                                    <div className='inline-block ml-10'>
                                    <img src={sampleimg} />
                                    </div>
                                </div>
                            <div class='flex mt-20 justify-end '>
                                <button className='bg-blueColor h-full w-[20%] text-[20px] p-2 rounded-[10px] text-white cursor-pointer hover:bg-blue-300' >Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewGigImages;
