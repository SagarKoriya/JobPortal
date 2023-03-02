import React from 'react'
import SmartSlider from 'react-smart-slider'

const DummyCaption = ({ caption }) => (
    <div style={{
      position: 'absolute',
      left: 100,
      top: 250,
      fontSize: 38,
      padding: 55,
      border: 'solid 1px',
      borderColor: 'white',
      color:'white',
    }}>
      {caption}
    </div>
  )

  const slidesArray = [
    {
      url: "https://i.imgur.com/7u8i7L1.jpg",
      
      // (Optional) Set if you want to add any content on your slide
      childrenElem: <DummyCaption caption="Caption 1" />
    },
    {
      url: "https://i.imgur.com/E8gkF2f.jpg",
      childrenElem: <DummyCaption caption="Caption 2" />
    },
    {
      url: "https://i.imgur.com/t2a1zLi.jpg",
      childrenElem: <DummyCaption caption="Caption 3" />
    },
  ];

const Imageslider = () => {
  return (
    <div className='imageSlider mb-[40px] '>
      <SmartSlider
        slides={slidesArray}
        autoSlide={true}
        // buttonShape="square" // round or square
      />
    </div>
  )
}

export default Imageslider
