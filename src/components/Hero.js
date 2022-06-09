import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Hero = () => {
	return (
		<div className='w-full h-screen text-center'>
			<div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
				<div>
					<p className='uppercase text-sm tracking-widest to-gray-600'>
						LET'S BUILD SOMETHING TOGETHER
					</p>
					<h1 className='py-4  text-gray-700'>
						Hi, I'm <span className='text-[#5661e5]'>Pabon</span>
					</h1>
					<h1 className='py-2 text-gray-700'>A JavaScript Developer (MERN)</h1>
					<p className='py-4 text-gray-600 max-w-[70%] mx-auto '>
						I am a front-end web developer specializing in building (and
						occasionally designing) exceptional digital experiences. Currently,
						I am focused on building responsive front-end web applications while
						learning back-end technologies.
					</p>

					<a
						className='rounded-full shadow-lg shadow-[#5651e5] p-4  my-4 inline-block border border-gray-400 text-[#5651e5] hover:scale-105 hover:bg-[#5651e5] hover:text-[#fff] hover:shadow-gray-400 ease-in duration-500 font-bold'
						target='_blank'
						href='https://drive.google.com/file/d/1m5W3GYbvoAX-vyucBMnl7gJgS5tL_0tN/view?usp=sharing'
						title=''
						download=''
					>
						Download Resume
					</a>

					<div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
						<div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-500'>
							<FaLinkedinIn />
						</div>

						<div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-500'>
							<FaGithub />
						</div>
						<div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-500'>
							<AiOutlineMail />
						</div>
						<div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-500'>
							<BsFillPersonLinesFill />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
