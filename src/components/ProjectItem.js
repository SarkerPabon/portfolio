import { FiExternalLink } from "react-icons/fi";

const ProjectItem = ({
	title,
	backgroundImg,
	projectUrl,
	server,
	client,
	children,
}) => {
	return (
		// <div className='relative flex items-center justify-center h-auto w-full shadow-lg shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
		<div className='relative  h-auto w-full shadow-lg shadow-gray-400 rounded-xl  group  hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
			<div className=''>
				{/* <img
					className='rounded-xl group-hover:opacity-10 block !w-full max-h-48'
					src={backgroundImg}
					alt='Proper Project'
				/> */}
				<img
					className='align-bottom rounded-xl group-hover:opacity-10  block w-full max-h-48 object-cover'
					src={backgroundImg}
					alt='Proper Project'
				/>
				<div className='px-6 py-4 group-hover:opacity-10'>
					<div className='font-bold mb-2 text-center text-2xl'>{title}</div>
					{children}
				</div>
			</div>

			<div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
				<h3 className='text-2xl text-white tracking-wider text-center mb-4'>
					{title}
				</h3>
				<div className='pb-4 pt-2 my-2'>
					<p className='text-center text-xl text-white font-semibold'>
						Github Links
					</p>
					<div className='flex justify-around py-2'>
						{server ? (
							<a
								href={server}
								target='_blank'
								rel='noreferrer'
								type='button'
								className='text-sm bg-white text-gray-700 p-2 font-bold cursor-pointer rounded-lg'
							>
								Server
								<FiExternalLink className='text-sm ml-1 inline mb-1' />
							</a>
						) : (
							""
						)}
						{client ? (
							<button
								type='button'
								className='text-sm bg-white text-gray-700 p-2 font-bold cursor-pointer rounded-lg'
							>
								Client
								<FiExternalLink className='text-sm ml-1 inline mb-1' />
							</button>
						) : (
							""
						)}
					</div>
				</div>
				<a href={projectUrl} target='_blank' rel='noreferrer'>
					<p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>
						Visit Site
						<FiExternalLink className='ml-1 inline mb-1' />
					</p>
				</a>
			</div>
		</div>
	);
};

export default ProjectItem;
