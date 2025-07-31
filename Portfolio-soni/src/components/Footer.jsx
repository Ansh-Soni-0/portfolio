import { assets } from '../assets/assets'

const Footer = ({isDarkMode}) => {
  return (
    <div className='mt-20'>
        <div className='text-center'>
            <img src={isDarkMode ? assets.logo_dark : assets.logo} alt='' className='w-36 mx-auto mb-2'/>

            <div className='flex items-center w-max gap-2 mx-auto'>
                <img src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='' className='w-6'/>
                anshsoni20002@gmail.com
            </div>
        </div>

        <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
            <p>© 2025 Ansh Soni. All rights resereved</p>
            <ul className='flex items-center gap-10 justify-between mt-4 sm:mt-0'>
                <li className='hover:bg-gray-200 px-2 rounded-md transition'>
                    <a target='_blank' href="https://github.com/Ansh-Soni-0">GitHub</a>
                </li>

                <li className='hover:bg-gray-200 px-2 rounded-md transition'>
                    <a target='_blank' href="https://www.linkedin.com/in/ansh-soni-0a53a42ab/">LinkedIn</a>
                </li>

                <li className='hover:bg-gray-200 px-2 rounded-md transition'>
                    <a target='_blank' href="https://x.com/ansh_soni_0">Twitter</a>
                </li>

                <li className='hover:bg-gray-200 px-2 rounded-md transition'>
                    <a target='_blank' href="https://leetcode.com/u/ansh_0/">Leetcode</a>
                </li>
            </ul>
        </div>

    </div>
  )
}

export default Footer