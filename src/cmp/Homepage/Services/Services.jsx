import { 
    Container,
    Row,
    Col
} from "react-bootstrap";
import "./Services.css";

const Services = ()=>{
    return(
        <>
        <Container className="s-container">
            <h1 className="my-5">Our Services</h1>
            <Row>
                <Col md>
                    <div className="mb-5"><h1><i className="fa fa-brands fa-opencart"></i> Lifestyle</h1></div>
                    <p>Sed porttitor lectus nibh. 
                        Cras ultricies ligula sed magna dictum porta.
                        Praesent sapien massa, convallis 
                        a pellentesque nec, egestas non nisi.
                    </p>
                    <p className="read-more">Read More <i className="fa fa-solid fa-chevron-right"></i></p>
                </Col>
                <Col md>
                    <div className="mb-5"><h1><i className="fa fa-regular fa-calendar"></i> Loans</h1></div>
                    <p>Nulla porttitor accumsan tincidunt.
                         Curabitur aliquet quam id dui posuere blandit. 
                         Mauris blandit aliquet elit,
                         eget tincidunt nibh pulvinar a.
                    </p>
                    <p className="read-more">Read More <i className="fa fa-solid fa-chevron-right"></i></p>
                </Col>
                <Col md>
                    <div className="mb-5"><h1><i className="fa fa-solid fa-list"></i> Sell</h1></div>
                    <p>Sed porttitor lectus nibh. 
                        Cras ultricies ligula sed magna dictum porta.
                        Praesent sapien massa, convallis 
                        a pellentesque nec, egestas non nisi.
                    </p>
                    <p className="read-more">Read More <i className="fa fa-solid fa-chevron-right"></i></p>
                </Col>
            </Row>
        </Container>
        </>
    );
}
export default Services;