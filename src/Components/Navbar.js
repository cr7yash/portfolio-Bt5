import React from 'react';

function Navbar() {
	return (
		<nav className='navbar navbar-expand-lg bg-dark bg-gradient navbar-dark'>
			<div className='container'>
				<a href='#' className='navbar-brand'>
					Frontend Bootcamp
				</a>
				<button
					class='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navMenu'
				>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div className='collapse navbar-collapse' id='navMenu'>
					<ul className='navbar-nav ms-auto'>
						<li className='nav-item'>
							<a href='learn' className='nav-link'>
								What You'll Learn
							</a>
						</li>
						<li className='nav-item'>
							<a href='questions' className='nav-link'>
								Questions
							</a>
						</li>
						<li className='nav-item'>
							<a href='instructors' className='nav-link'>
								Instructors
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
