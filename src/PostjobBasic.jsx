import React from 'react'
import job from './Assets/job.png';
import { useNavigate } from 'react-router-dom';

const PostjobBasic = () => {
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
              <img src={job}></img>
            </div>

            <div>
              <div className="flex flex-row  mt-4">
                <div className="rounded-[50%] w-10 h-10 bg-blueColor">
                  <span className="flex justify-center text-white text-[28px]">1</span>
                </div>
                <div><span className="ml-[10px] text-[25px]">Basic</span></div>
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
                  Describe the work to be done:
                </label><br />
                <textarea class="shadow appearance-none border rounded w-[85%] h-32 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="service" type="text" placeholder="Describe your service" />
              </div>
              <div class="mb-4 mt-5" >
                <label class="text-black text-[18px]  mb-2" for="username">
                  Location:
                </label>
               </div> 
              <div class="mb-4 mt-5 " >
                <label class="text-black ml-[5%] text-[18px]  mb-2" for="username">
                  City:
                </label><br />
                <input class="shadow ml-[5%] appearance-none border rounded w-[80%] h-12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="City" />
              </div>
              <div class="mb-4 mt-5 " >
                <label class="text-black ml-[5%] text-[18px]  mb-2" for="username">
                  State:
                </label><br />
                <input class="shadow ml-[5%] appearance-none border rounded w-[80%] h-12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="State" />
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

export default PostjobBasic