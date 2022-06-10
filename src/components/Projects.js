import ProjectItem from "./ProjectItem";

const Projects = () => {
	return (
		<div id='projects' className='w-full'>
			<div className=' max-w-[1240px] mx-auto px-2 py-16'>
				<p className='text-xl tracking-widest uppercase text-[#5651e5]'>
					Porjects
				</p>
				<h2 className='py-4'>What I've Built</h2>
				<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
					<ProjectItem
						title='Transport Inc App'
						backgroundImg={"/assets/projects/property.jpg"}
						projectUrl='/property'
					>
						<div className='w-full  flex flex-col justify-between'>
							<div>
								<div className='flex flex-wrap text-center pt-4 mb-2'>
									<div className='mr-2 mb-2 rounded-full px-3 py-1 text-xs bg-green-400 text-green-900 font-bold'>
										React
									</div>

									<div className='mr-2 mb-2 rounded-full px-3 py-1 text-xs bg-green-400 text-green-900 font-bold'>
										React-Router
									</div>

									<div className='mr-2 mb-2 rounded-full px-3 py-1 text-xs bg-green-400 text-green-900 font-bold'>
										Firebase Auth
									</div>

									<div className='mr-2 mb-2 rounded-full px-3 py-1 text-xs bg-green-400 text-green-900 font-bold'>
										JWT Authentication
									</div>

									<div className='mr-2 mb-2 rounded-full px-3 py-1 text-xs bg-green-400 text-green-900 font-bold'>
										Tailwind CSS
									</div>
								</div>

								<p className='text-base  '>
									This revolutionary email design kit is going to transform the
									way in which you send modern emails.
								</p>

								<ul className='text-sm mt-4 list-disc list-inside leading-relaxed'>
									<li>
										User can authenticate by Email and/or Google based
										authenticate system
									</li>

									<li>
										User can browse product list, maintaine the cart like add
										and delete their choosen products
									</li>

									<li>
										User can add product, update and delivered their product
									</li>
								</ul>
							</div>
						</div>
					</ProjectItem>

					<ProjectItem
						title='ToothCare App'
						backgroundImg={"/assets/projects/crypto.jpg"}
						projectUrl='/crypto'
					>
						<div className='w-full  flex flex-col justify-between'>
							<div>
								<div className='flex flex-wrap text-center pt-4 mb-2'>
									<div className='mr-2 mb-2 rounded-full px-3 py-1 text-xs bg-green-400 text-green-900 font-bold'>
										React
									</div>

									<div className='mr-2 mb-2 rounded-full px-3 py-1 text-xs bg-green-400 text-green-900 font-bold'>
										React-Router
									</div>

									<div className='mr-2 mb-2 rounded-full px-3 py-1 text-xs bg-green-400 text-green-900 font-bold'>
										Firebase Auth
									</div>

									<div className='mr-2 mb-2 rounded-full px-3 py-1 text-xs bg-green-400 text-green-900 font-bold'>
										JWT Authentication
									</div>

									<div className='mr-2 mb-2 rounded-full px-3 py-1 text-xs bg-green-400 text-green-900 font-bold'>
										Tailwind CSS
									</div>
								</div>

								<p className='text-base  '>
									This revolutionary email design kit is going to transform the
									way in which you send modern emails.
								</p>

								<ul className='text-sm mt-4 list-disc list-inside leading-relaxed'>
									<li>
										User can authenticate by Email and/or Google based
										authenticate system
									</li>

									<li>
										User can browse product list, maintaine the cart like add
										and delete their choosen products
									</li>

									<li>
										User can add product, update and delivered their product
									</li>
								</ul>
							</div>
						</div>
					</ProjectItem>

					<ProjectItem
						title='Video Search App'
						backgroundImg={"/assets/projects/netflix.jpg"}
						projectUrl='/property'
					>
						<div className='w-full  flex flex-col justify-between'>
							<div>
								<div className='flex flex-wrap text-center pt-4 mb-2'>
									<div className='mr-2 mb-2 rounded-full px-3 py-1 text-xs bg-green-400 text-green-900 font-bold'>
										React
									</div>

									<div className='mr-2 mb-2 rounded-full px-3 py-1 text-xs bg-green-400 text-green-900 font-bold'>
										React-Router
									</div>

									<div className='mr-2 mb-2 rounded-full px-3 py-1 text-xs bg-green-400 text-green-900 font-bold'>
										Firebase Auth
									</div>

									<div className='mr-2 mb-2 rounded-full px-3 py-1 text-xs bg-green-400 text-green-900 font-bold'>
										JWT Authentication
									</div>

									<div className='mr-2 mb-2 rounded-full px-3 py-1 text-xs bg-green-400 text-green-900 font-bold'>
										Tailwind CSS
									</div>
								</div>

								<p className='text-base  '>
									This revolutionary email design kit is going to transform the
									way in which you send modern emails.
								</p>

								<ul className='text-sm mt-4 list-disc list-inside leading-relaxed'>
									<li>
										User can authenticate by Email and/or Google based
										authenticate system
									</li>

									<li>
										User can browse product list, maintaine the cart like add
										and delete their choosen products
									</li>

									<li>
										User can add product, update and delivered their product
									</li>
								</ul>
							</div>
						</div>
					</ProjectItem>
				</div>
			</div>
		</div>
	);
};

export default Projects;
