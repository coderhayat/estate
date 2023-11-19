import "./About.css";
import {
    Container,
    Row,
    Col
} from "react-bootstrap"
const About = ()=>{
    return(
        <>
        <Container className="about">
            <Row>
                <Col md>
                    <img src="men1.jpg" alt="men1" width="100%" />
                </Col>
                <Col md className="para">
                    <h1>We Do Great Design For Creative Folks</h1>
                    <p>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                        Vivamus magna justo, lacinia eget consectetur sed, 
                        convallis at tellus. Praesent sapien massa, convallis
                        a pellentesque nec, egestas non nisi.
                        Vestibulum ante ipsum primis in faucibus
                        orci luctus et ultrices posuere cubilia Curae; Donec velit neque,
                        auctor sit amet aliquam vel, ullamcorper sit amet ligula.
                    </p>
                    <p>Sed porttitor lectus nibh. Vivamus magna justo,
                        lacinia eget consectetur sed, convallis at tellus.
                        Mauris blandit aliquet elit, eget tincidunt
                        nibh pulvinar a. Vivamus magna justo, lacinia
                        eget consectetur sed, convallis at tellus.
                    </p>
                </Col>
            </Row>
        </Container>
        <Container className="about-team">
            <h1 className="title">Meet Our Team</h1>
            <Row>
                <Col md className="about-team-one mb-3">
                    <img src="men2.jpg" alt="men2" width="100%" />
                    <div className="middle">
                        <div className="text">
                            <h3 className="mb-5">Margaret Sotillo <br /> Escala</h3>
                            <p>Sed porttitor lectus nibh, Cras ultricies
                                ligula sed magna dictum porta two.
                            </p>
                            <p>Phone: +54 356 945234</p>
                            <p>Email: agents@example.com</p>
                            <div className="icon-box">
                                <i className="fa fa-brands fa-facebook"></i>
                                <i className="fa fa-brands fa-twitter"></i>
                                <i className="fa fa-brands fa-instagram"></i>
                                <i className="fa fa-brands fa-linkedin"></i>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col md className="about-team-one mb-3">
                    <img src="men3.jpg" alt="men3" width="100%" />
                    <div className="middle">
                        <div className="text">
                            <h3 className="mb-5">Stiven Spilver <br /> Darw</h3>
                            <p>Sed porttitor lectus nibh, Cras ultricies
                                ligula sed magna dictum porta two.
                            </p>
                            <p>Phone: +54 356 945234</p>
                            <p>Email: agents@example.com</p>
                            <div className="icon-box">
                                <i className="fa fa-brands fa-facebook"></i>
                                <i className="fa fa-brands fa-twitter"></i>
                                <i className="fa fa-brands fa-instagram"></i>
                                <i className="fa fa-brands fa-linkedin"></i>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col md className="about-team-one">
                    <img src="men4.jpg" alt="men4" width="100%" />
                    <div className="middle">
                        <div className="text">
                            <h3 className="mb-5">Emma Toledo <br /> Cascada</h3>
                            <p>Sed porttitor lectus nibh, Cras ultricies
                                ligula sed magna dictum porta two.
                            </p>
                            <p>Phone: +54 356 945234</p>
                            <p>Email: agents@example.com</p>
                            <div className="icon-box">
                                <i className="fa fa-brands fa-facebook"></i>
                                <i className="fa fa-brands fa-twitter"></i>
                                <i className="fa fa-brands fa-instagram"></i>
                                <i className="fa fa-brands fa-linkedin"></i>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
        </>
    );
}
export default About;