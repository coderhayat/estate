import "./Contact.css";
import{
    Container,
    Row,
    Col
} from "react-bootstrap";
const Contact = ()=>{
    return(
        <>
        <Container className="contact-container">
            <p>CONTACT</p>
            <h4 className="mb-4">Need Help? Contact Us</h4>
            <form>
            <Row>
                <Col md className="col-md-7">
                    <Row className="mb-4">
                        <Col md className="mb-4 mb-md-0"><input type="text" name="Yourname" placeholder="Your Name" required className="name" /></Col>
                        <Col md><input type="email" name="email" placeholder="Your Email" required className="email"/></Col>
                    </Row>
                    <Row className="mb-4"><Col><input type="text" name="subject" placeholder="Subject" required className="subject" /></Col></Row>
                    <Row className="mb-4"><Col><textarea name="textarea" className="textarea" cols="30" rows="7" required placeholder="Message"></textarea></Col></Row>
                    <Row><Col><button type="submit">Send Message</button></Col></Row>
                </Col>
                <Col md className="col-md-5">
                    <Row><Col>
                    <i className="fa fa-solid fa-envelope"></i>
                     <h3>Say Hello</h3>
                     <p>Email. contact@example.com</p>
                     <p>Phone. +54 356 945234</p>
                    </Col></Row>
                    <Row><Col>
                    <i className="fa fa-solid fa-globe"></i>
                    <h3>Find us in</h3>
                    <p>Manhattan, Nueva York 10036,</p>
                    <p>EE. UU.</p>
                    </Col></Row>
                    <Row><Col>
                    <i className="fa fa-solid fa-location-arrow"></i>
                    <h3>Social networks</h3>
                    </Col></Row>
                </Col>
            </Row>
            </form>
        </Container>
        </>
    );
}
export default Contact;