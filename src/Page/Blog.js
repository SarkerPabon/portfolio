import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Blog = () => {
	return (
		<div id='hero' className='w-full h-screen text-center'>
			<div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
				<div>
					<div className='text-center text-gray-600'>
						<h2 className='text-4xl tracking-tight leading-10 font-extrabold text-gray-600 sm:text-5xl sm:leading-none md:text-6xl'>
							<span className='text-[#e3573c]'>Blog</span> Page
						</h2>
						<h3 className='text-xl md:text-3xl mt-10'>Coming Soon</h3>
						<p className='text-md md:text-xl mt-10'>
							Blog page is a website help you provide simple productivity tools
							for your daily need online for free.
						</p>
					</div>

					<div className='flex items-center justify-between max-w-[330px] m-auto py-4 mt-32'>
						<div className='border border-[#e3573c] rounded-full shadow-lg text-[#e3573c] shadow-[#e3573c] p-6 cursor-pointer hover:scale-110 ease-in duration-500'>
							<FaLinkedinIn />
						</div>

						<div className='border border-[#e3573c] rounded-full shadow-lg text-[#e3573c] shadow-[#e3573c] p-6 cursor-pointer hover:scale-110 ease-in duration-500'>
							<FaGithub />
						</div>
						<div className='border border-[#e3573c] rounded-full shadow-lg text-[#e3573c] shadow-[#e3573c] p-6 cursor-pointer hover:scale-110 ease-in duration-500'>
							<AiOutlineMail />
						</div>
						<div className='border border-[#e3573c] rounded-full shadow-lg text-[#e3573c] shadow-[#e3573c] p-6 cursor-pointer hover:scale-110 ease-in duration-500'>
							<BsFillPersonLinesFill />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Blog;
