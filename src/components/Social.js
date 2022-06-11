import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";

const Social = () => {
	return (
		<>
			<a
				href='https://www.linkedin.com/in/sarkerpabon/'
				target='_blank'
				rel='noreferrer'
				className='border border-[#e3573c] rounded-full shadow-lg text-[#e3573c] shadow-[#e3573c] p-6 cursor-pointer hover:scale-110 ease-in duration-500'
			>
				<FaLinkedinIn />
			</a>

			<a
				href='https://github.com/sarkerpabon'
				target='_blank'
				rel='noreferrer'
				className='border border-[#e3573c] rounded-full shadow-lg text-[#e3573c] shadow-[#e3573c] p-6 cursor-pointer hover:scale-110 ease-in duration-500'
			>
				<FaGithub />
			</a>
			<a
				href='mailto:sarkerpabon@gmail.com'
				target='_blank'
				rel='noreferrer'
				className='border border-[#e3573c] rounded-full shadow-lg text-[#e3573c] shadow-[#e3573c] p-6 cursor-pointer hover:scale-110 ease-in duration-500'
			>
				<AiOutlineMail />
			</a>
			<HashLink
				smooth
				to='/#contact'
				className='border border-[#e3573c] rounded-full shadow-lg text-[#e3573c] shadow-[#e3573c] p-6 cursor-pointer hover:scale-110 ease-in duration-500'
			>
				<BsFillPersonLinesFill />
			</HashLink>
		</>
	);
};

export default Social;
