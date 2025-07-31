import { assets, infoList, socialMediaData } from '../assets/assets'
import { motion } from "motion/react"

const About = ({ isDarkMode }) => {

  const openChatWithNumberHandler = () => {
      const phoneNumber = "7417425321"; 
      window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  return (
    
    <motion.div 
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1.5}}
    id='about' 
    className='w-full px-[12%] py-10 scroll-mt-20'>
        <motion.h4 
        initial={{opacity: 0 , y: -20}}
        whileInView={{opacity: 1 , y: 0}}
        transition={{duration: 0.5 , delay: 0.3}}
        className='text-center mb-2 text-lg font-Ovo'>Introduction</motion.h4>

        <motion.h2
        initial={{opacity: 0 , y: -20}}
        whileInView={{opacity: 1 , y: 0}}
        transition={{duration: 0.5 , delay: 0.5}} 
        className='text-center text-5xl font-Ovo'>About me</motion.h2>
        
        <motion.div
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.8}} 
        className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
          <motion.div
          initial={{opacity: 0 , scale: 0.9}}
          whileInView={{opacity: 1 , scale: 1}}
          transition={{duration: 0.6}}
          className='w-64 sm:w-80 rounded-3xl max-w-none'
          ><img src={assets.user_image} alt='user' className='w-full rounded-3xl'/></motion.div>

          <motion.div
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{duration: 0.6 , delay: 0.8}} 
          className='flex-1'>
              <p className='mb-10 max-w-2xl font-Ovo'>I'm a passionate MERN stack developer with hands-on experience building dynamic, full-stack web applications using MongoDB, Express.js, React, and Node.js. I enjoy turning complex problems into clean, efficient code and creating seamless user experiences. </p>

              <motion.ul 
              initial={{opacity: 0}}
              whileInView={{opacity: 1}}
              transition={{duration: 0.8 , delay: 1}}
              className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                {
                  infoList.map(({icon , iconDark , title , description} , index) => (
                    <motion.li 
                    whileHover={{scale: 1.05}}
                    className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500 hover:[box-shadow:4px_4px_0_#000] dark:border-white dark:hover:[box-shadow:4px_4px_0_#fff] dark:hover:bg-[#2a004a]/50'
                    key={index}>
                      <img src={isDarkMode ? iconDark : icon} alt={title} className='w-7 mt-3'/>
                      <h3 className='my-4 font-semibold text-gray-700 dark:text-white '>{title}</h3>
                      <p className='text-gray-600 text-sm dark:text-white/80'>{description}</p>
                    </motion.li>
                  ))
                }
              </motion.ul>

                <motion.h4
                initial={{opacity: 0 , y: 20}}
                whileInView={{opacity: 1 , y: 0}}
                transition={{duration: 0.5 , delay: 1.3}} 
                className='my-6 text-gray-700 font-Ovo dark:text-white/50'>My online presence</motion.h4>

                <motion.ul
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{duration: 0.6 , delay: 1.5}} 
                className='flex items-center gap-3 sm:gap-5'>
                  {
                    socialMediaData.map((data , index) => (
                      <a href={data.text === "mail" ? "mailto:anshsoni200002@gmail.com" : data.link} target='_blank' key={index}>
                        <motion.li
                            whileHover={{scale: 1.1}} 
                            className='flex items-center justify-center w-20 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'
                            >
                            {
                              data.text === "watsapp"  ?
                              (<img src={data.icon} alt='tool' className='w-5 sm:w-7' onClick={openChatWithNumberHandler}/>) :
                              (<img src={data.icon} alt='tool' className='w-5 sm:w-7'/>)
                            }
                        </motion.li>
                      </a>
                    ))
                  }
                </motion.ul>
          </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default About