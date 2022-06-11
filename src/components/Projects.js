import ProjectItem from "./ProjectItem";

const Projects = () => {
	return (
		<div id='projects' className='w-full'>
			<div className=' max-w-[1240px] mx-auto px-2 py-16'>
				<p className='text-xl tracking-widest uppercase text-[#e3573c]'>
					Porjects
				</p>
				<h2 className='py-4'>What I've Built</h2>
				<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
					<ProjectItem
						title='Transport Inc App'
						backgroundImg={"/assets/projects/project-1.png"}
						projectUrl='https://tools-manufacturer-mern.web.app/'
						server='https://github.com/SarkerPabon/warehouse-management-server-side'
						client='https://github.com/SarkerPabon/warehouse-management-client-side'
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
										Stripe
									</div>

									<div className='mr-2 mb-2 rounded-full px-3 py-1 text-xs bg-green-400 text-green-900 font-bold'>
										Tailwind CSS
									</div>
								</div>

								<p className='text-base  '>
									This application mainly focused to maintain wearhouse items
									organization. We can see how many item sold and how many left.
									We can add and delete item. We can also see who add how many
									items.
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
						backgroundImg={"/assets/projects/project-2.png"}
						projectUrl='https://independent-service-prov-b0f8a.web.app/'
						server=''
						client='https://github.com/SarkerPabon/-independent-service-provider'
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
										BootStrap 5
									</div>
								</div>

								<p className='text-base  '>
									This application mainly focused to independent service
									provider like Dentist. Here we can book appointment and user
									can login through email or google authentication system.
								</p>

								<ul className='text-sm mt-4 list-disc list-inside leading-relaxed'>
									<li>
										User can authenticate by Email and/or Google based
										authenticate system
									</li>

									<li>User can book their service</li>

									<li>The site have protected route system</li>
								</ul>
							</div>
						</div>
					</ProjectItem>

					<ProjectItem
						title='Algo Landing App'
						backgroundImg={"/assets/projects/project-3.png"}
						projectUrl='https://algo-landing-page.netlify.app/'
						server=''
						client='https://github.com/SarkerPabon/algo-landing-page'
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
										Siwpper.JS
									</div>

									<div className='mr-2 mb-2 rounded-full px-3 py-1 text-xs bg-green-400 text-green-900 font-bold'>
										Leaflet JS
									</div>

									<div className='mr-2 mb-2 rounded-full px-3 py-1 text-xs bg-green-400 text-green-900 font-bold'>
										Siwpper JS
									</div>

									<div className='mr-2 mb-2 rounded-full px-3 py-1 text-xs bg-green-400 text-green-900 font-bold'>
										Tailwind CSS
									</div>
								</div>

								<p className='text-base  '>
									This is a simple landing page. The page mady by Tailwind CSS.
									Here Siwper.JS is used for slider.
								</p>

								<ul className='text-sm mt-4 list-disc list-inside leading-relaxed'>
									<li>
										Fully Responsive website for Desktop, Tabs and Laptops
									</li>

									<li>This website has busness summary section</li>

									<li>This website has google map</li>
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
