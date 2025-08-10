import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./BondiTech.jpeg"
								alt="BondiTech Logo"
								className="work-image"
							/>
							<div className="work-title">BondiTech LLC</div>
							<div className="work-subtitle">
								Software Developer
							</div>
							<div className="work-duration">Jul. 2024 - Present</div>
						</div>
						<div className="work">
							<img
								src="./Kumiyunwii.jpg"
								alt="Kumiyunwii Logo"
								className="work-image"
							/>
							<div className="work-title">Kumi (Shanghai) Information Technology Co., Ltd</div>
							<div className="work-subtitle">
								Frontend Developer Intern
							</div>
							<div className="work-duration">Jun. 2023 - Sep. 2023</div>
						</div>
						<div className="work">
							<img
								src="./Portalle.jpeg"
								alt="Portalle.us Logo"
								className="work-image"
							/>
							<div className="work-title">Portalle Inc.</div>
							<div className="work-subtitle">
								Frontend Developer Intern
							</div>
							<div className="work-duration">Sep. 2022 - Mar. 2023</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
