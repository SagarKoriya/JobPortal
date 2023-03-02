import React from 'react'
import { useNavigate } from 'react-router-dom'
import { TbCurrencyRupee } from 'react-icons/tb'
import back from './Assets/back.png'

const Gig = () => {
    const navigate = useNavigate();
    const handleClickback = () => navigate('/Profile')
    const handleClickgotoNewGigBasic = () => navigate('/NewGigBasic')

    return (
        <div className="w-[100%] m-auto bg-white">
            <div className='jobContainer rounded-[10px] bg-slate-200 flex flex-wrap items-center mb-5 p-10'>
                <div className="flex  ml-10 " onClick={handleClickback} >
                    <div className="rounded-[50%]  w-8 h-8 bg-blueColor">
                        <img src={back} className="flex justify-center text-white w-5 h-5 ml-1 mt-1"></img>
                    </div>
                    <div><span className="ml-[10px] align-middle cursor-pointer text-[20px]">Back</span></div>
                </div>
                <div className="flex ml-10" onClick={handleClickgotoNewGigBasic} >
                    <button className='border-[2px] rounded-[10px] py-[4px] px-[50px] text-[18px] font-semibold text-blueColor bg-white border-blueColor hover:text-white hover:bg-blueColor'>Create New Gig</button>
                </div>
            </div>
            <div className='jobContainer rounded-[10px] bg-slate-200 flex flex-wrap items-center mb-5 p-10'>
                <div className='group group/item singleJob rounded-[10px] w-[30%] p-[20px] bg-white hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg'>
                    <span className='flex justify-between items-center gap-4'>
                        <h1 className='text-[25px] font-semibold text-textColor group-hover:text-white'>title</h1>
                        <span className='flex items-center text-[#ccc] gap-1'>
                            <TbCurrencyRupee />price/day
                        </span>
                    </span>
                    <h6 className='text-[#ccc]'>location</h6>
                    <p className='text-[13px] text-[#959595] pt-[20px] border-t-[2px] mb-5 mt-[20px] group-hover:text-white'>desc</p>
                    <div className='company flex items-center gap-2'>
                        <img src="#" alt='logo' className='w-[10%]' />
                        <span className='text-[14px] py-[1rem] block group-hover:text-white'>company</span>
                    </div>
                    <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-white' onClick={handleClickgotoNewGigBasic}>Edit Gig</button>
                </div>
            </div>
        </div>
    )
}

export default Gig;
