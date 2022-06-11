import { Link } from "react-router-dom";
import Social from "../components/Social";

const Error = () => {
	return (
		<div id='hero' className='w-full h-screen text-center'>
			<div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
				<div>
					<div className='row  text-center'>
						<h1 className='display-1  text-bold text-[#e3573c] my-6'>Oops!</h1>
						<h3 className='display-4 text-gray-900 my-6'>
							404 - PAGE NOT FOUND
						</h3>
						<p className='text-muted mb-8'>
							The page you are looking for might have removed had its name
							changed or is temporarily unavailable.
						</p>
						<Link
							to='/'
							className='text-[#e3573c] font-bold text-decoration-none btn btn-link btn-outline-secondary my-8 p-6 fs-3 w-50 mx-auto'
						>
							GO TO HOMEPAGE
						</Link>
					</div>

					<div className='flex items-center justify-between max-w-[330px] m-auto py-4 mt-16'>
						<Social />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Error;
