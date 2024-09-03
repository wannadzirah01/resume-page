import React, { useState } from "react";
import "./App.css";
import myImage from "./wannadzirah.png";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function App() {
    const [showExperience, setShowExperience] = useState(false);
    const [showProjects, setShowProjects] = useState(false);
    const [showEducation, setShowEducation] = useState(false);
    const [showSkills, setShowSkills] = useState(false);
    const [showLanguages, setShowLanguages] = useState(false);

    return (
        <div className="App">
            <header className="App-header">
                <div className="header-content">
                    <div className="header-text">
                        <h1>Wan Nadzirah binti Wan Abdullah</h1>
                        <p>
                            A self-driven and passionate fresh graduate with a
                            curious mind, eager to learn new skills, and gain
                            new knowledge. Seeking to leverage my technical
                            skills in software engineering within a dynamic and
                            innovative company that leverages modern
                            technologies. Committed to contributing to team
                            success and continuous personal growth in a
                            collaborative and challenging environment.
                        </p>
                        <div className="contact-info">
                            <div className="contact-item">
                                <FaPhoneAlt className="contact-icon" />
                                <span>+6013-382 8508</span>
                            </div>
                            <div className="contact-item">
                                <FaEnvelope className="contact-icon" />
                                <span>wannadzirah.wa@gmail.com</span>
                            </div>
                            <div className="contact-item">
                                <FaMapMarkerAlt className="contact-icon" />
                                <span>Batu Caves, Selangor</span>
                            </div>
                        </div>
                    </div>
                    <div className="header-image">
                        <img src={myImage} alt="Wan Nadzirah" />
                    </div>
                </div>
            </header>
            <div className="section">
                <section>
                    <h2>Experience</h2>
                    <button onClick={() => setShowExperience(!showExperience)}>
                        {showExperience ? "Hide" : "Show"} Experience
                    </button>
                    {showExperience && (
                        <div>
                            <p>
                                <b>
                                    Malayan Banking Berhad, Maybank (Intern) |
                                    March 2023 – September 2023
                                </b>
                            </p>
                            <li>
                                Developed a RESTful API using Spring Boot,
                                optimizing data processing with Hibernate and
                                JPA for seamless interactions with Microsoft SQL
                                Server, and conducted API testing using Postman.
                            </li>
                            <li>
                                Implemented automated daily email notification
                                using Java Spring Boot.
                            </li>
                            <li>
                                Performed a cleanup job using Spring Boot,
                                automating the deletion of inactive reports
                                stored in Minio.
                            </li>
                            <li>
                                Utilized GitHub for version control, effectively
                                managing code repositories and collaborating
                                with team members, and integrated code changes
                                into a CI/CD pipeline, ensuring smooth and
                                automated deployments.
                            </li>
                        </div>
                    )}
                </section>

                <section>
                    <h2>Projects</h2>
                    <button onClick={() => setShowProjects(!showProjects)}>
                        {showProjects ? "Hide" : "Show"} Projects
                    </button>
                    {showProjects && (
                        <div>
                            <p>
                                <b>Final Year Project</b>
                            </p>
                            <li>
                                Developed a web application leveraging Flask for
                                the backend, React.js for the frontend, and
                                MySQL as the database.
                            </li>
                            <li>
                                The web application is a ticketing system that
                                is developed for IMCC which is an organization
                                in USM to help them manage the Bantu 1 to-1
                                service which is a personalized assistance
                                service that they offered to USM students.
                            </li>
                            <li>
                                <a
                                    href="https://github.com/wannadzirah01/IMCC_Bantu_1to1"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Explore the complete code for this project
                                    on my GitHub repository.
                                </a>
                            </li>
                            <p>
                                <b>Resume Page</b>
                            </p>
                            <li>
                                Built a personal resume web page using React.js,
                                showcasing information about experience,
                                projects, skills, education, and more.
                            </li>
                            <li>
                                Deployed the resume page using GitHub Pages for
                                easy access and sharing.
                            </li>
                            <li>
                                <a
                                    href="https://github.com/wannadzirah01/resume-page"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Explore the complete code for this project
                                    and the live resume page deployed on my
                                    GitHub repository.
                                </a>
                            </li>
                        </div>
                    )}
                </section>

                <section>
                    <h2>Education</h2>
                    <button onClick={() => setShowEducation(!showEducation)}>
                        {showEducation ? "Hide" : "Show"} Education
                    </button>
                    {showEducation && (
                        <div>
                            <p>
                                <b>
                                    Universiti Sains Malaysia, Bachelor of
                                    Computer Science (Hons) | 2020 - 2024
                                </b>
                            </p>
                            <li>
                                Major: Software Engineering | Minor: Mathematics
                            </li>
                            <li>CGPA: 3.50</li>
                            <p>
                                <b>
                                    Kolej MARA Kulim, Pre-University USM | 2019
                                    - 2020
                                </b>
                            </p>
                            <li>CGPA: 4.00</li>
                            <li>MUET: Band 5</li>
                            <p>
                                <b>
                                    Maktab Rendah Sains MARA (MRSM) Parit,
                                    Secondary Education | 2014 - 2018
                                </b>
                            </p>
                            <li>SPM: 9A</li>
                            <li>IGCSE: 4A 2B</li>
                        </div>
                    )}
                </section>

                <section>
                    <h2>Technical Skills</h2>
                    <button onClick={() => setShowSkills(!showSkills)}>
                        {showSkills ? "Hide" : "Show"} Technical Skills
                    </button>
                    {showSkills && (
                        <div>
                            <li>
                                Programming Languages: Python, Java, C++,
                                JavaScript, SQL
                            </li>
                            <li>
                                Web Development: React.js (Frontend), Flask
                                (Backend), HTML, CSS
                            </li>
                            <li>Databases: MySQL, Microsoft SQL Server</li>
                            <li>
                                Tools & IDEs: Visual Studio Code, IntelliJ IDEA,
                                Git
                            </li>
                            <li>Design & Prototyping: Figma</li>
                        </div>
                    )}
                </section>

                <section>
                    <h2>Languages</h2>
                    <button onClick={() => setShowLanguages(!showLanguages)}>
                        {showLanguages ? "Hide" : "Show"} Languages
                    </button>
                    {showLanguages && (
                        <div>
                            <li>Bahasa Malaysia</li>
                            <li>English</li>
                        </div>
                    )}
                </section>
            </div>
        </div>
    );
}

export default App;
