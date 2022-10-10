import React from "react";
import Fade from "react-reveal/Fade";

export default function Work() {
	return (
		<div className="work container-fluid section" name="work">
			<Fade bottom>
				<h2 className="section-header">WORK EXPERIENCE</h2>
			</Fade>
			<div className="section-body section-width top-bot-border-xs">
				<Fade bottom>
					<a
						href="https://www.linkedin.com/in/sukhmandeep-kaur/overlay/1635498780037/single-media-viewer/?type=DOCUMENT&profileId=ACoAACei3ZYB1wqK2DGVmSj0dszmyBcOUm8RRK4"
						target="_blank"
						rel="noopener noreferrer"
						className="long-card"
					>
						<div className="long-card-body">
							<h5 className="title">Software developer - Co-op</h5>
							<h6>
								<a
									href="https://www.neovation.com/"
									target="_blank"
									rel="noopener noreferrer"
									style={{ textDecoration: "none" }}
								>
									Neovation Corporation
								</a>
							</h6>
							<p className="remarks">May 2022 - Aug 2022</p>
							<span className="badge badge-light tech">ColdFusion</span>
							<span className="badge badge-light tech">PHP</span>
							<span className="badge badge-light tech">Agile</span>
							<span className="badge badge-light tech">Testpad</span>
						</div>
					</a>
				</Fade>
			</div>
			<div className="section-body section-width top-bot-border-xs">
				<Fade bottom>
					<a
						href="https://library.rrc.ca/tutoring/peer_tutoring"
						target="_blank"
						rel="noopener noreferrer"
						className="long-card"
					>
						<div className="long-card-body">
							<h5 className="title">
								Peer Tutor - Business Technology Management
							</h5>
							<h6>
								<a
									href="https://library.rrc.ca/tutoring/peer_tutoring"
									target="_blank"
									rel="noopener noreferrer"
									style={{ textDecoration: "none" }}
								>
									Red River College Polytechnic
								</a>
							</h6>
							<p className="remarks">July 2021 - Present</p>
							<span className="badge badge-light tech">
								Programming in Python
							</span>
							<span className="badge badge-light tech">Statistics</span>
							<span className="badge badge-light tech">Database</span>
							<span className="badge badge-light tech">Web development</span>
						</div>
					</a>
				</Fade>
			</div>
			<div className="section-body section-width top-bot-border-xs">
				<Fade bottom>
					<a
						href="https://drive.google.com/file/d/1j1DNI3cz62S5fNF2F4_cFQM_ha8EYAK3/view?usp=sharing"
						target="_blank"
						rel="noopener noreferrer"
						className="long-card"
					>
						<div className="long-card-body">
							<h5 className="title">
								Contract integration developer - Internship
							</h5>
							<h6>
								<a
									href="https://www.jobvacancyresult.com/"
									target="_blank"
									rel="noopener noreferrer"
									style={{ textDecoration: "none" }}
								>
									Job Vacancy Result
								</a>
							</h6>
							<p className="remarks">Aug 2020 - Oct 2020</p>
							<span className="badge badge-light tech">Laravel</span>
							<span className="badge badge-light tech">PWA</span>
							<span className="badge badge-light tech">Mail integration</span>
							<span className="badge badge-light tech">REST APIs</span>
						</div>
					</a>
				</Fade>
			</div>
		</div>
	);
}
