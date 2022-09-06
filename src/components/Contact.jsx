import React from 'react';
import { SiGithub, SiTelegram, SiGmail } from 'react-icons/si';
import { useIntersection } from '../hooks/useIntersection';
import { useEffect } from 'react';
import './Contact.scss';

const Contact = () => {
	const [containerRef, isVisible] = useIntersection({
		root: null,
		rootMargin: '0px',
		threshold: 1.0,
	});

	useEffect(() => {
		if (isVisible) {
			containerRef.current.classList.add('contact-animation');
		}
	}, [isVisible]);

	return (
		<section className="contact">
			<div id="contact" className="contact__container" ref={containerRef}>
				<h1 className="contact__title">CONTACT ME</h1>
				<div className="contact__info">
					<div className="contact__info-gh">
						<a target="_blank" rel="noopener noreferrer" href="https://github.com/THEFULGORE">
							<SiGithub size={70} className="contact-icon" />
							<h1>@THEFULGORE</h1>
						</a>
					</div>
					<div className="contact__info-gm">
						<a target="_blank" rel="noopener noreferrer" href="mailto:arthur.abuladze@gmail.com">
							<SiGmail size={70} className="contact-icon" />
							<h1>arthur.abuladze@gmail.com</h1>
						</a>
					</div>
					<div className="contact__info-tg">
						<a target="_blank" rel="noopener noreferrer" href="https://telegram.me/thefulgore">
							<SiTelegram size={70} className="contact-icon" />
							<h1>@THEFULGORE</h1>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
