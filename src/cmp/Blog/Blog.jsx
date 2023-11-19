import "./Blog.css";
import{
    Container,
    Row,
    Col
} from "react-bootstrap";

const data =[
    {
        id:1,
        src: "travel1.jpg",
        alt: "travel1",
        title1: "Travel is comming",
        title2: "new",
        button: "Travel",
        desc: "18 Sep. 2017"
    },
    {
        id:2,
        src: "travel2.jpg",
        alt: "travel2",
        title1: "Travel is comming",
        title2: "new",
        button: "Travel",
        desc: "18 Sep. 2017"
    },
    {
        id:3,
        src: "travel3.jpg",
        alt: "travel3",
        title1: "Travel is comming",
        title2: "new",
        button: "Travel",
        desc: "18 Sep. 2017"
    }
];

const data1 =[
    {
        id:4,
        src: "travel4.jpg",
        alt: "travel4",
        title1: "Travel is comming",
        title2: "new",
        button: "Travel",
        desc: "18 Sep. 2017"
    },
    {
        id:5,
        src: "travel5.jpg",
        alt: "travel5",
        title1: "Travel is comming",
        title2: "new",
        button: "Travel",
        desc: "18 Sep. 2017"
    },
    {
        id:6,
        src: "travel6.jpg",
        alt: "travel6",
        title1: "Travel is comming",
        title2: "new",
        button: "Travel",
        desc: "18 Sep. 2017"
    }
];

const Column = (data)=>{
    return(
        <>
        <Col md className="mb-3 mb-md-0">
            <div className="wrap">
                <img src={data.blogData.src} alt={data.blogData.alt} width="100%" />
                <div className="text">
                    <h3>{data.blogData.title1}</h3>
                    <h3>{data.blogData.title2}</h3>
                    <button>{data.blogData.button}</button>
                    <p>{data.blogData.desc}</p>
                </div>
            </div>
        </Col>
        </>
    );
}

const Blog = ()=>{
    return(
        <>
        <Container className="blog-container">
            <Row className="mb-5">
                {
                    data.map((items)=>{
                        return <Column blogData={items} key={items.id} />
                    })
                }
            </Row>
            <Row>
                {
                    data1.map((items)=>{
                        return <Column blogData={items} key={items.id} />
                    })
                }
            </Row>
        </Container>
        </>
    );
}
export default Blog;