const About = () => {
	return (
		<div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
			<div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
				<div className='col-span-2'>
					<p className='uppercase text-xl tracking-widest text-[#e3573c]'>
						About
					</p>
					<h2 className='py-4'>Who I Am</h2>
					<p className='py-2 text-gray-600'>
						\\ I am not your average developer
					</p>

					<p className='py-2 text-gray-600'>
						Hello! My name is Pabon Sarker, a passionate Programmer & Full-Stack
						(MERN) Developer. I enjoy creating things that live on the internet,
						whether that be websites, applications, or anything in between. My
						goal is to build products that provide pixel-perfect, performant
						experiences.
					</p>
					<p className='py-2 text-gray-600'>
						Previously, I have worked for Non-Profit Organization and as data
						analyst. Though, I've always been obsessed with computers and
						everything related to the web since I got my first computer. In
						covid pendamic, I relazied human life is too short. In our short
						life, we should follow our passion and dream. So, I started spending
						more and more time in front of that computer, from then till today
					</p>
					<p className='py-2 text-gray-600'>
						Fascinated with how intricate programming can be I was quickly drawn
						to learn more. I started learning javascript and was even more
						enthused with making websites interactive. I am now spending my time
						building projects with Next JS, React JS, Firebase, Express, MongoDB
						and learning new technologies.
					</p>
					<a href='/#projects'>
						<p className='py-2 text-gray-600 underline cursor-pointer'>
							Check out some of my latest projects.
						</p>
					</a>
				</div>
				<div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
					<img className='rounded-xl' src='/assets/about.png' alt='/' />
				</div>
			</div>
		</div>
	);
};

export default About;
