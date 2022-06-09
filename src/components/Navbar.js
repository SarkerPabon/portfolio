import { useState } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
	const [nav, setNav] = useState(false);

	const handleNav = () => {
		setNav(!nav);
	};

	return (
		<div className='fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300'>
			<div className='flex justify-between items-center w-full h-full px-2 2xl:px-16 container mx-auto'>
				<img src='/assets/navLogo.png' alt='Logo' width={100} height={50} />
				<div>
					<ul className='hidden md:flex'>
						<Link to='/'>
							<li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
						</Link>
						<Link to='/#about'>
							<li className='ml-10 text-sm uppercase hover:border-b'>About</li>
						</Link>
						<Link to='/#skills'>
							<li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
						</Link>
						<Link to='/#projects'>
							<li className='ml-10 text-sm uppercase hover:border-b'>
								Projects
							</li>
						</Link>
						<Link to='/#resume'>
							<li className='ml-10 text-sm uppercase hover:border-b'>Resume</li>
						</Link>
						<Link to='/#contact'>
							<li className='ml-10 text-sm uppercase hover:border-b'>
								Contact
							</li>
						</Link>
					</ul>

					{/* Hamburger Icon */}
					<div onClick={handleNav} className='md:hidden'>
						<AiOutlineMenu size={25} />
					</div>
				</div>
			</div>

			{/* Mobile Menu */}
			{/* Overlay */}
			<div
				className={
					nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
				}
			>
				{/* Side Drawer Menu */}
				<div
					className={
						nav
							? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] ease-in duration-500 p-10"
							: "fixed left-[-100%] top-0 p-10 ease-in duration-500"
					}
				>
					<div>
						<div className='flex justify-between items-center'>
							<img
								src='/assets/navLogo.png'
								alt='Logo'
								width={87}
								height={35}
							/>
							<div
								onClick={handleNav}
								className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'
							>
								<AiOutlineClose />
							</div>
						</div>
						<div className='border-b border-gray-300 my-4'>
							<p className='w-[85%] md:w-[90%] py-4 '>
								Let's build something legendary together
							</p>
						</div>
						<div className='py-4 flex flex-col'>
							<ul className='uppercase'>
								<Link to='/'>
									<li className='py-4 text-sm'>Home</li>
								</Link>
								<Link to='/'>
									<li className='py-4 text-sm'>About</li>
								</Link>
								<Link to='/'>
									<li className='py-4 text-sm'>Skills</li>
								</Link>
								<Link to='/'>
									<li className='py-4 text-sm'>Porjects</li>
								</Link>
								<Link to='/'>
									<li className='py-4 text-sm'>Contact</li>
								</Link>
							</ul>
							<div className='pt-5'>
								<p className='uppercase tracking-wide text-[#5651e5] text-center'>
									Let's Connect
								</p>
								<div className='flex items-center justify-between my-4 w-full sm:w-[80%] mx-auto'>
									<div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500'>
										<FaLinkedinIn />
									</div>
									<div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500'>
										<FaGithub />
									</div>
									<div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500'>
										<AiOutlineMail />
									</div>
									<div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500'>
										<BsFillPersonLinesFill />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
