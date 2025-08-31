import { assets } from '../assets/assets'
import { useState } from 'react'
import { motion } from "motion/react"

const Contact = () => {


    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "62fc6a56-0dca-40a2-a209-97f818f88316");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    // console.log(data)

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <motion.div
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1}}
    id='contact' 
    className='w-full px-[12%] py-10 scroll-mt-20 bg-contact-section dark:bg-none'>
        <motion.h4 
        initial={{y: -20 , opacity: 0}}
        whileInView={{y: 0 , opacity: 1}}
        transition={{duration: 0.5 , delay: 0.3}}
        className='text-center mb-2 text-lg font-Ovo'>Connect with me</motion.h4>
        <motion.h2
        initial={{y: -20 , opacity: 0}}
        whileInView={{y: 0 , opacity: 1}}
        transition={{duration: 0.5 , delay: 0.5}} 
        className='text-center text-5xl font-Ovo'>Get in touch</motion.h2>

        <motion.p
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.5 , delay: 0.7}} 
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>I'd love to hear from you! if you have any questions, comment, or feedback, please use the form below.</motion.p>

        <motion.form
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.5 , delay: 0.9}} 
        onSubmit={onSubmit}
        className='max-w-2xl mx-auto'>
            <div className='grid gridTempletColumns gap-6 mt-10 mb-8'>
                <motion.input
                initial={{x: -50 , opacity: 0}}
                whileInView={{x: 0 , opacity: 1}}
                transition={{duration: 0.6 , delay: 1.1}} 
                name='name' className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-[#2a004a]/30 dark:border-white/90' type="text" placeholder='Enter You name' required/>
                <motion.input 
                initial={{x: 50 , opacity: 0}}
                whileInView={{x: 0 , opacity: 1}}
                transition={{duration: 0.6 , delay: 1.2}} 
                name='email' className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-[#2a004a]/30 dark:border-white/90' type="email" placeholder='Enter you email' required/>
            </div>

            <motion.textarea 
            initial={{y: 100 , opacity: 0}}
            whileInView={{y: 0 , opacity: 1}}
            transition={{duration: 0.6 , delay: 1.3}} 
            name='message' className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-[#2a004a]/30 dark:border-white/90' rows='6' placeholder='Enter your message' required></motion.textarea>

            <motion.button 
            whileHover={{scale: 1.05}}
            transition={{duration: 0.3}} 
            className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duaration-500 cursor-pointer transition dark:bg-transparent dark:border-[0.5px] dark:hover:bg-[#2a004a]' type='submit'>Submit now
            <img src={assets.right_arrow_white} alt='' className='w-4'/>
            </motion.button>

            <p className='mt-4'>{result}</p>
        </motion.form>
    </motion.div>
  )
}

export default Contact