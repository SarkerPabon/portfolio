import Social from "../components/Social";

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
						<Social />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Blog;
