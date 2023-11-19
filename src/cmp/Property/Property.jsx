import "./Property.css";
import {
    Container,
    Row,
    Col
} from "react-bootstrap";

const data = [
    {
       id: 1,
       src: "img1.jpg",
       alt: "img1",
       title1: "204 RINO",
       title2: "VENDA ROAD FIVE",
       button: "RENT | $ 12.000",
       desc: "Click here to view",
       icon: "fa fa-solid fa-chevron-right"
    },
    {
        id: 2,
        src: "img2.jpg",
        alt: "img2",
        title1: "204 Mount",
        title2: "Olive Road Two",
        button: "RENT | $ 14.000",
        desc: "Click here to view",
        icon: "fa fa-solid fa-chevron-right"
     },
     {
        id: 3,
        src: "img3.jpg",
        alt: "img3",
        title1: "204 RINO",
        title2: "VENDA ROAD FIVE",
        button: "RENT | $ 18.000",
        desc: "Click here to view",
        icon: "fa fa-solid fa-chevron-right"
     }
];

const Column = (data)=>{
    return(
        <>
        <Col md>
            <div className="contai-ner">
                <img src={data.proData.src} alt={data.proData.alt} width="100%" />
                <div className="text">
                    <h3>{data.proData.title1}</h3>
                    <h3>{data.proData.title2}</h3>
                    <button>{data.proData.button}</button>
                    <p>{data.proData.desc} <i className={data.proData.icon}></i></p>
                </div>
            </div>
        </Col>
        </>
    );
}

const Property = ()=>{
    return(
        <>
        <Container className="mt-5 pt-5">
            <h1 className="property-title">Our Amazing Properties</h1>
            <Row>
                {
                    data.map((items)=>{
                        return <Column proData={items} key={items.id} />
                    })
                }
            </Row>
        </Container>
        </>
    );
}
export default Property;