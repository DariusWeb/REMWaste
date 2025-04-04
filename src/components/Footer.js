import React from 'react';
import { useSkipContext } from '../context/SkipContext';

function Footer() {
	const { selectedSkip } = useSkipContext();
	const skipSize = selectedSkip?.size;
	const skipPrice = selectedSkip?.price.toFixed(2);
	const hireDays = `${selectedSkip?.hire_period_days} day hire`;

	if (!selectedSkip) {
		return null;
	}

	return (
	<footer className="footer">
		<div className="footer-inner">
			<div className="footer-details">
				<div className="container-size">{skipSize}</div>
				<div className="currency">£{skipPrice}</div>
				<div className="hire-days">{hireDays}</div>
			</div>
			
			<div className="actions">
				<button className="back-btn">Back</button>
				<button className="next-btn">Continue
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
						<path d="M5 12h14"></path>
						<path d="m12 5 7 7-7 7"></path>
					</svg>
				</button>
			</div>
		</div>
	</footer>
	);
}

export default Footer;
