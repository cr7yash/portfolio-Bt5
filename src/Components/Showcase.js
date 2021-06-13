import React from 'react';
import ShowcaseSVG from '../img/showcase.svg';
function Showcase() {
	return (
		<div className='bg-dark text-light p-5 text-center text-sm-start'>
			<div className='container'>
				<div className='d-sm-flex align-items-center justify-content-between'>
					<div>
						<h1>
							Become a{' '}
							<span className='text-warning'> web developer</span>
						</h1>
						<p className='lead my-4'>
							{' '}
							We focus on teaching our students the fundamentals
							of the latest and greatest technologies to prepare
							them for their first dev role
						</p>
						<button className='btn btn-primary btn-lg'>
							Start enrollment
						</button>
					</div>
					<img
						className='img-fluid w-50 d-none d-sm-block'
						src={ShowcaseSVG}
						alt=''
					/>
				</div>
			</div>
		</div>
	);
}

export default Showcase;
