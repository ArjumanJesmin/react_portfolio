import { FaFacebook, FaGithub, FaLinkedin, FaArrowDown } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
// import img from "../assets/arjuman.png"
import img from "../assets/jesmin.png"
import { Link } from 'react-router-dom';
import GradientColor from './Common/GradientColor';

const social = [
    {
        id: 1,
        link: "https://www.facebook.com/profile.php?id=100010975053237",
        icon: <FaFacebook />
    },
    {
        id: 2,
        link: "https://github.com/ArjumanJesmin",
        icon: <FaGithub />
    },
    {
        id: 3,
        link: "https://www.linkedin.com/in/arjuman-jesmin-1154a3240/",
        icon: <FaLinkedin />
    },
]
window.addEventListener('scroll', function () {
    const downArrow = document.querySelector(".down-arrow")
    if (this.scroll >= 90) downArrow.classList.add("hide-down-arrow");
    else (downArrow.classList.remove("hide-down-arrow"))
})

const downloadUrl = 'https://drive.google.com/uc?export=download&id=1vlLcV9UuLWYGplxyGOtHlAWnKvTGG77y';



const Hero = () => {
    return (
        <section className='min-h-screen flex flex-col justify-start items-center p-5 text-center'>
            <GradientColor gradient="from-amber-400 via-rose-500 to-fuchsia-500">Arjuman Jesmin</GradientColor>
            <h3 className='py-3 text-xl text-rose-500 dark:text-white'>

                <TypeAnimation
                    sequence={[
                        'MERN Stack Developer',
                        2000,
                        'Frontend Developer',
                        2000,
                    ]}
                    speed={50}
                    wrapper="span"
                    cursor={true}
                    repeat={Infinity}
                    style={{ display: 'inline-block' }}
                />

            </h3>
            <p className='max-w-xl font-light text-gray-400'>
                Hello  <span className='animate-pulse text-4xl'>✋</span>,
                Welcome to my site. I am a MERN Stack Web developer, passionate about creating visually appealing and functional websites. I have  experience in building web applications using the MERN (MongoDB, Express.js, React.js, and Node.js) stack.
            </p>

            {/* social icons */}
            <div className='flex justify-evenly py-8 lg:16 text-3xl w-full md:w-1/3'>
                {social.map(({ id, link, icon }) => (
                    <Link
                        to={link}
                        key={id}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='cursor-pointer duration-300 hover:text-rose-500 dark:hover:text-violet-500 '
                    >
                        {icon}
                    </Link>
                ))}
            </div>
            {/* image and resume */}
            <div>
                <img src={img} alt="image" className='w-60 h-60 md:w-72 md:h-72 object-cover object-top bg-rose-100 dark:bg-gradient-to-b from-indigo-500  rounded-full pt-5' />

                <a href={downloadUrl} download className='flex justify-center mt-10 bg-rose-500 dark:bg-gradient-to-r from-indigo-500 from-10% via-sky-600 via-30% to-violet-800 to-90% font:roboto text-white py-2 rounded-lg  hover:bg-amber-500'>Resume Download</a>
            </div>

            {/* arrow down animation */}
            <div className='mt-10 down-arrow'>
                <FaArrowDown className='text-gray-400 text-2xl animate-bounce' />
            </div>
        </section>
    );
};

export default Hero;