import React from 'react'
import Title from "../components/Title"
import NewsLetterBox from "../components/NewsLetterBox"

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16 ">
        <img src="https://www.blogtyrant.com/wp-content/uploads/2011/02/best-about-us-pages.png" alt="" className="w-full md:max-w-112.5" />
        <div className="flex flex-col justify-center gap-2 md:w-1/2 text-gray-600">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus accusantium, delectus voluptatem fuga similique vitae placeat dicta quidem aliquid, magni quae dolore voluptate optio culpa eos repellat, rem ipsam tempora</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste sint aliquid tempore esse eaque nisi impedit expedita sit, quae odio officiis fugit, veritatis doloribus. Cumque laudantium mollitia culpa quasi itaque! Quod quas quos vel voluptas quibusdam neque eius. Animi, atque.</p>
          <b className="text-gray-800">Our Mission</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae earum a itaque ea rem quis dolores laudantium maiores reprehenderit mollitia.</p>
        </div>
      </div>
      <div className="text-xl py-4">
          <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <b>Quality Assurance:</b>
            <p className='text-gray-600 '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe beatae voluptatum quo nihil fugiat dolore!</p>
            </div>
            <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <b>Convenience:</b>
            <p className='text-gray-600 '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe beatae voluptatum quo nihil fugiat dolore!</p>
            </div>
            <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <b>Exceptional Customer Service:</b>
            <p className='text-gray-600 '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe beatae voluptatum quo nihil fugiat dolore!</p>
            </div>
        </div>
        <NewsLetterBox  />
      </div>
  )
}

export default About;