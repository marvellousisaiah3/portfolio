import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Flutter",
    "Dart",
    "Widget Tree",
    "State Management",
    "Provider",
    "Riverpod",
    "GetX",
    "Firebase",
    "REST APIs",
    "UI Design",
    "Material Design"
];

const labelsSecond = [
    "Git",
    "GitHub Actions",
    "Docker",
    "AWS",
    "Azure",
    "Linux",
    "CI/CD Pipelines",
    "DevOps",
    "Testing Automation",
    "Deployment",
    "Cloud Infrastructure"
];

const labelsThird = [
    "Java",
    "Spring Boot",
    "Hibernate",
    "JDBC",
    "REST APIs",
    "Microservices",
    "MySQL",
    "MongoDB",
    "Maven",
    "JUnit",
    "Docker"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Flutter Developer</h3>
                    <p>I have built mobile applications using Flutter with a focus on clean, responsive UI design. I work with core Flutter concepts like widgets, navigation, state management, and API integration. I follow the SDLC process for structured development from design to deployment.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>Backend(API) Developer</h3>
                    <p>Once the backend services are developed, I focus on setting up robust server-side architecture, API integrations, and database management. I also implement testing strategies, CI/CD pipelines, and deployment automation to ensure smooth releases and reliable production performance during Go-Live.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Java Developer</h3>
                    <p>I build scalable backend applications using Java, focusing on secure APIs, business logic, and performance. I work with both relational and NoSQL databases, implement error handling, and follow clean coding practices. I also support testing, CI/CD, and production deployments</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;