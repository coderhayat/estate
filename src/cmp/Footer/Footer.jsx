import "./Footer.css";
import {
    Container,
    Row,
    Col
} from "react-bootstrap";
const Footer = ()=>{
    return(
        <>
        <div className="footer-full-width">
            <Container>
                <Row>
                    <Col md>
                        <h1 className="title">EstateAgency</h1>
                        <p>Enim minim veniam quis nostrud exercitation
                            ullamco laboris nisi ut aliquip exea
                            commodo consequat duis sed aute irure.
                        </p>
                        <p>Phone . +54 356 945234</p>
                        <p>Email . contact@example.com</p>
                    </Col>
                    <Col md className="p-cursor">
                        <h1 className="title">The Company</h1>
                        <p><i className="fa fa-solid fa-chevron-right"></i> Site Map</p>
                        <p><i className="fa fa-solid fa-chevron-right"></i> Legal</p>
                        <p><i className="fa fa-solid fa-chevron-right"></i> Agent Admin</p>
                        <p><i className="fa fa-solid fa-chevron-right"></i> Careers</p>
                        <p><i className="fa fa-solid fa-chevron-right"></i> Affiliate</p>
                        <p><i className="fa fa-solid fa-chevron-right"></i> Privacy Policy</p>
                    </Col>
                    <Col md className="p-cursor">
                        <h1 className="title">International sites</h1>
                        <p><i className="fa fa-solid fa-chevron-right"></i> Venezuela</p>
                        <p><i className="fa fa-solid fa-chevron-right"></i> China</p>
                        <p><i className="fa fa-solid fa-chevron-right"></i> Hong Kong</p>
                        <p><i className="fa fa-solid fa-chevron-right"></i> Argentina</p>
                        <p><i className="fa fa-solid fa-chevron-right"></i> Singapore</p>
                        <p><i className="fa fa-solid fa-chevron-right"></i> Philippines</p>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col className="d-flex justify-content-center icon">
                    <i className="fa fa-brands fa-facebook"></i>
                    <i className="fa fa-brands fa-twitter"></i>
                    <i className="fa fa-brands fa-instagram"></i>
                    <i className="fa fa-brands fa-linkedin"></i>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col className="footer-copyright">
                        <h6>© Copyright EstateAgency All Rights Reserved.</h6>
                        <p>Designed by Hayat</p>                    
                    </Col>
                </Row>
            </Container>
        </div>
        </>
    );
}
export default Footer;