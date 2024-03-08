import { Col, Row, Container, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from '../assets/img/projImg1.png';
import projImg2 from '../assets/img/projImg2.webp';
import projImg3 from '../assets/img/projImg3.jpeg';
import projImg4 from '../assets/img/projImg4.jpeg';


export const Projects = () => {

    const projects = [
        {
            title: "Vending Machine App",
            description: "description goes here",
            imgUrl: projImg1,
        }, 
        {
            title: "Tenmo",
            description: "description goes here",
            imgUrl: projImg2,
        }, 
        {
            title: "CrowdFunding Campaign",
            description: "description goes here",
            imgUrl: projImg3,
        }, 
        {
            title: "Portfolio",
            description: "description goes here",
            imgUrl: projImg4,
        },       
    ]
    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                    <h2>Projects</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium, libero eu pharetra aliquet, felis elit efficitur justo, id viverra turpis dolor sit amet mauris. Integer volutpat risus vitae ante euismod, vel convallis lacus feugiat. Maecenas ac risus vel augue vulputate fermentum. Vivamus vel efficitur orci. In hac habitasse platea dictumst. Nulla facilisi. Vestibulum rhoncus laoreet enim, at congue est dapibus non. Sed sodales euismod augue, eget suscipit justo accumsan id. Nam scelerisque arcu at urna varius, at cursus erat convallis. Ut fringilla nisi sit amet nulla dictum fringilla. Sed nec justo vel sapien malesuada vehicula ac quis ex. Curabitur nec justo et dui tempus bibendum.</p>
                    <Tab.Container id="projects-tab" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                        <Nav.Item>
                            <Nav.Link eventKey="first">Tab One</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Tab Two</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third">Tab Three</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tab.Pane eventKey="first">
                        <Row>
                            {
                                projects.map((project, index) => {
                                    return (
                                        <ProjectCard 
                                            key={index}
                                            {...project}
                                            />
                                    )
                                })
                            }
                        </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">Lorem ipsum</Tab.Pane>
                    <Tab.Pane eventKey="third">Lorem ipsum</Tab.Pane>
                    </Tab.Container>
                    </Col>
                </Row>
            </Container>
            {/* <img className="background-image-right" src={}></img> */}
        </section>
    )
}