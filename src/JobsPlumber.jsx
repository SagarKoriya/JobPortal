import React from 'react'
import { TbCurrencyRupee } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const JobsPlumber = () => {
  return (
    <div className="w-[100%] m-auto bg-white">
            <div className='jobContainer rounded-[10px] bg-slate-200 block items-center mb-5 p-10'>
                <span className='text-black text-[30px] ml-[5%] font-semibold'>All Category</span><br />
                <span className='ml-[5%] text-slate-500'>List of all categories</span>
                <div className="menu flex gap-8 ml-[5%] mt-4">
                    <Link to="/Jobs"><li className="menuList text-blue-800 text-[20px] hover:text-blueColor">All</li></Link>
                    <Link to="/JobsElectrition"><li className="menuList text-blue-800 text-[20px] hover:text-blueColor">Electrition</li></Link>
                    <Link to="/JobsCarpenter"><li className="menuList text-blue-800 text-[20px] hover:text-blueColor">Carpenter</li></Link>
                    <Link to="/JobsPlumber"><li className="menuList text-blue-800 text-[20px] hover:text-blueColor">Plumber</li></Link>
                    <Link to="/JobsPainter"><li className="menuList text-blue-800 text-[20px] hover:text-blueColor">Painter</li></Link>
                </div>
            </div>
            <div className='jobContainer rounded-[10px] bg-slate-50 block flex-wrap items-center mb-5 p-10'>
                
                <div>
                    <div>
                        <span className='text-black text-[30px] font-semibold'>Plumber</span>
                    
                        <div className='flex ' style={{ flex: 1, height: '1px', backgroundColor: 'black' }} />
                    </div><br />
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
                        <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-white'>Apply Now</button>
                    </div>
                </div>
                
            </div>
        </div>
  )
}

export default JobsPlumber