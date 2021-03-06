import { useEffect, useRef, useState } from "react";
import CLOUDS from "vanta/dist/vanta.clouds.min";
import Social from "./Social";

const Hero = () => {
	const [vantaEffect, setVantaEffect] = useState(0);
	const myRef = useRef(null);

	useEffect(() => {
		if (!vantaEffect) {
			setVantaEffect(
				CLOUDS({
					el: myRef.current,
					mouseControls: true,
					touchControls: true,
					gyroControls: false,
					minHeight: 200.0,
					minWidth: 200.0,
					skyColor: 0xcee0e8,
					cloudColor: 0xb5beca,
					speed: 0.4,
				})
			);
		}
		return () => {
			if (vantaEffect) vantaEffect.destroy();
		};
	}, [vantaEffect]);

	return (
		<div ref={myRef} id='hero' className='w-full h-screen text-center'>
			<div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
				<div className='mt-10'>
					<p className='uppercase text-sm tracking-widest to-gray-600'>
						LET'S BUILD SOMETHING TOGETHER
					</p>
					<h1 className='py-4  text-gray-700'>
						Hi, I'm <span className='text-[#e3573c]'>Pabon</span>
					</h1>
					<h1 className='py-2 text-gray-700'>A Full-Stack Developer</h1>
					<p className='py-4 text-gray-600 max-w-[70%] mx-auto '>
						I am a full-stack (MERN) web developer specializing in building
						exceptional digital experiences. Currently, I am focused on building
						responsive front-end web applications while building back-end
						technologies also.
					</p>

					<a
						className='rounded-full shadow-lg shadow-[#e3573c] p-4  my-4 inline-block border border-[#e3573c] text-[#e3573c] hover:scale-105 hover:bg-[#e3573c] hover:text-[#fff] hover:shadow-gray-400 ease-in duration-500 font-bold'
						target='_blank'
						href='https://drive.google.com/u/0/uc?id=1m5W3GYbvoAX-vyucBMnl7gJgS5tL_0tN&export=download'
						title='Resume'
						download=''
						rel='noopener noreferrer'
					>
						Download Resume
					</a>

					<div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
						<Social />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
