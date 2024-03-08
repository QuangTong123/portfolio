import { Container, Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5,faCss3, faJava,faJs, faReact, faNode, faDatabase,faVuejs   } from '@fortawesome/free-brands-svg-icons';

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 10
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024},
            items: 5
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium, libero eu pharetra aliquet, felis elit efficitur justo, id viverra turpis dolor sit amet mauris. Integer volutpat risus vitae ante euismod, vel convallis lacus feugiat. Maecenas ac risus vel augue vulputate fermentum. Vivamus vel efficitur orci. In hac habitasse platea dictumst. Nulla facilisi. Vestibulum rhoncus laoreet enim, at congue est dapibus non. Sed sodales euismod augue, eget suscipit justo accumsan id. Nam scelerisque arcu at urna varius, at cursus erat convallis. Ut fringilla nisi sit amet nulla dictum fringilla. Sed nec justo vel sapien malesuada vehicula ac quis ex. Curabitur nec justo et dui tempus bibendum.
</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <FontAwesomeIcon icon={faHtml5} color="orange"/>
                                    <h5>HTML</h5>
                                </div>
                                <div className="item">
                                <FontAwesomeIcon icon={faCss3} color="blue"/>
                                    <h5>Css </h5>
                                </div>
                                <div className="item">
                                <FontAwesomeIcon icon={faJava} />
                                    <h5>Java</h5>
                                </div>
                                <div className="item">
                                <FontAwesomeIcon icon={faJs} color="yellow" />
                                    <h5>JavaScript</h5>
                                </div>
                                <div className="item">
                                <FontAwesomeIcon icon={faReact} color="#ADD8E6"/>
                                    <h5>React Js</h5>
                                </div>
                                <div className="item">
                                <i class="fa-solid fa-database" color="green"></i>
                                    <h5>PostgresSQL</h5>
                                </div>
                                <div className="item">
                                <i class="fa-brands fa-github"></i>
                                    <h5>github</h5>
                                </div>
                                <div className="item">
                                <FontAwesomeIcon icon={faVuejs} color="green" />
                                    <h5>Vue JS</h5>
                                </div>
                                <div className="item">
                                <FontAwesomeIcon icon={faJava} />
                                    <h5>Java</h5>
                                </div>
                                <div className="item">
                                <FontAwesomeIcon icon={faJava} />
                                    <h5>Java</h5>
                                </div>
                                <div className="item">
                                <FontAwesomeIcon icon={faJava} />
                                    <h5>Java</h5>
                                </div>
                                <div className="item">
                                <FontAwesomeIcon icon={faJava} />
                                    <h5>Java</h5>
                                </div>

                                
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
    const skillIcons = {
        
    } 
}