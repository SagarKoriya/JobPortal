import React from 'react'
//import icons from react-icons

//import images 
import img1 from '../../Assets/img1.jpg'
import img2 from '../../Assets/img2.jpg'
import img3 from '../../Assets/img3.jpg'
import img4 from '../../Assets/img4.jpg'

//for all jobs we are going to use array method called map
//we list all the jobs in array called data

//array start
const Data = [
  {
    id:0,
    image: img1,
    title: 'Web Devloper',
    time: 'Now',
    location: 'Canada',
    desc: 'Some basic information text goes hear.....',
    company: 'Company Name1'
  },
  {
    id:1,
    image: img2,
    title: 'Web Devloper',
    time: 'Now',
    location: 'Canada',
    desc: 'Some basic information text goes hear.....',
    company: 'Company Name2'
  },
  {
    id:2,
    image: img3,
    title: 'Web Devloper',
    time: 'Now',
    location: 'Canada',
    desc: 'Some basic information text goes hear.....',
    company: 'Company Name3'
  },
  {
    id:3,
    image: img4,
    title: 'Web Devloper',
    time: 'Now',
    location: 'Canada',
    desc: 'Some basic information text goes hear.....',
    company: 'Company Name4'
  }
]
//array end

const Jobs = () => {
  return (
    <div>
      <div className='jobContainer flex gap-10 justify-center flex-wrap items-center py-10'>
        {
          Data.map(({id,image,title,time,location,desc,company}) => {
            return(
              <div key={id} className='group group/item singleJob rounded-[10px] w-[250px] p-[20px] bg-white hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg'>
                <span className='flex justify-between items-center gap-4'>
                  <h1 className='text-[16px] font-semibold text-textColor group-hover:text-white'>{title}</h1>
                  <span className='flex items-center text-[#ccc] gap-1'>
                    {time}
                  </span>
                </span>
                <h6 className='text-[#ccc]'>{location}</h6>
                <p className='text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'>{desc}</p>
                <div className='company flex items-center gap-2'>
                  <img src={image} alt='Company logo' className='w-[10%]'/> 
                  <span className='text-[14px] py-[1rem] block group-hover:text-white'>{company}</span>
                </div>
                <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-white'>Apply Now</button>
              </div> 
            )
          })
        }
      </div>
    </div>
  )
}

export default Jobs
