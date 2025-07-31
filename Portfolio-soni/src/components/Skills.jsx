import { assets, SkillsData } from '../assets/assets'
import { motion } from "motion/react"

const Services = () => {
  return (
    <motion.div 
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1}}
    id='services' className='w-full px-[12%] py-10 scroll-mt-20'>

        <motion.h4 
        initial={{y: -20 , opacity: 0}}
        whileInView={{y: 0 , opacity: 1}}
        transition={{duration: 0.3 , delay: 0.5}}
        className='text-center mb-2 text-lg font-Ovo'>What I learn</motion.h4>

        <motion.h2
        initial={{y: -20 , opacity: 0}}
        whileInView={{y: 0 , opacity: 1}}
        transition={{duration: 0.5 , delay: 0.5}} 
        className='text-center text-5xl font-Ovo'>My Skills</motion.h2>

        <motion.p
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.5 , delay: 0.7}} 
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>Passionate and skilled in building dynamic, responsive, and scalable web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js). I enjoy turning complex problems into elegant solutions with clean, efficient code.</motion.p>

        <motion.div
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.6 , delay: 0.9}}
        className='grid gap-6 my-10 gridTempletColumns'>
            {
                SkillsData.map((skill , index) => (
                    <motion.div 
                    whileHover={{scale: 1.05}} 
                    className='border border-gray-400 rounded-lg px-8 py-12 hover:[box-shadow:4px_4px_0_#000] cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500 dark:hover:bg-[#2a004a] dark:hover:[box-shadow:4px_4px_0_#fff]'
                    key={index}>
                        <img src={skill.icon} alt='' className='w-16'/>
                        <h3 className='text-lg my-4 text-gray-700 dark:text-white'>{skill.title}</h3>
                        <p className='text-sm text-gray-600 leading-5 dark:text-white/80'>
                            {skill.description}
                        </p>
                        <a className='flex items-center gap-2 text-sm mt-5' href={skill.link}>Read more
                            <img src={assets.right_arrow} alt='' className='w-4'/>
                        </a>
                    </motion.div>
                ))
            }
        </motion.div>
    </motion.div>
  )
}

export default Services