import React from 'react'
import { motion } from 'framer-motion'
import { aboutInfo, assets } from '../assets/assets'
const About = () => {
  return (
    <motion.div
    initial={{opacity:0 ,y:50}}
    whileInView={{opacity:1,y:0}}
    transition={{duration:0.6, ease:'easeOut'}}
    viewport={{once:true}}
    id='about'
    className='py-20 bg-dark-200'
    >
        <div className='conatainer mx-0 px-6'>
            <h1 className='text-3xl font-bold text-center mb-4'>About
                <span className='text-purple'>Me</span>
            </h1>
            <p className='text-gray-400 text-center mx-w-2xl mx-auto mb-16'>
                Get to know more about my background and passion
            </p>

            <div className='flex flex-col  items-center '>

                   <motion.div
                       initial={{opacity:0,y:50}}
                        whileInView={{opacity:1,y:0}}
                        transition={{duration:0.9, ease:'easeOut'}}
                        viewport={{once:false, amount:0.2}}
                   className='md:w-1/2'>
                    <div className='rounded-2xl p-8'>
                         {/* <h3 className='text-2xl font-semibold mb-6'></h3> */}
                         <p className='text-gray-300 mb-6'>
                            Enthusiastic and self-driven Developer with hands-on experience in building responsive and interactive web applications using 
                           JavaScript and React.js. Proficient in developing and integrating RESTful APIs using Node.js and Express, and managing data 
                           with MongoDB. Skilled in version control with Git and deploying full-stack applications on Vercel and Netlify. Strong 
                           understanding of Docker, web performance optimization, and clean coding practices 
                         </p>

                         {/* Cards */}
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                            {
                                aboutInfo.map((data,index)=>(
                                    <div key={index} className='bg-dark-300
                                    rounded-2xl p-6 transition-transform
                                    duration-300 hover:-translate-y-2
                                    cursor-pointer'>
                                        <div className='text-purple'>
                                            <data.icon/>
                                        </div>
                                        <h3 className='text-xl font-semibold
                                        mb-3'>{data.title}</h3>
                                        <p className='text-gray-400'>{data.description}</p>
                                    </div>
                                ))
                            }
                        </div>

                    </div>

                   </motion.div>
            </div>
        </div>

    </motion.div>
  )
}

export default About