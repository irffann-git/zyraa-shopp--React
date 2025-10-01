import React from 'react'
import './Hero.css'
import Container from 'react-bootstrap/esm/Container'
import { Link, useNavigate } from 'react-router-dom'
import { Row, Col, Card } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';


function Hero() {
  const navigate = useNavigate();

  const cardClick = (page) => {
    navigate(page);
  };
  return (
    <div>
    <div className="Hero mb-5">
      <div className="hero-content">
       <h1>UP TO 50% + EXTRA 15% OFF</h1>
       <h6>Discound auto-applied at checkout Ends in</h6>
       <p> JUST 2 DAYS</p>
       <button>Get Start</button>
   
      </div> 
      
    </div><hr />





   <Container className='section1 mt-5 pt-5'>
      <h1 style={{color:'black',textShadow:'2px 2px 6px' }} className='text-center mb-5'>UNITED IN STYLE</h1>
      <div className='d-flex flex-wrap justify-content-center align-items-center gap-3 pb-5 mb-5'>
  <button onClick={() => cardClick("/Running")} className="custom-btn">
    <span className="custom-link">
      RUN SHOES UNDER <span className="price">$999</span>
    </span>
  </button>

  <button onClick={() => cardClick("/kids")} className="custom-btn">
    <span className="custom-link">
      KIDS SLEEPWEAR UNDER <span className="price">$499</span>
    </span>
  </button>

  <button onClick={() => cardClick("/Men")} className="custom-btn">
    <span className="custom-link">
      MEN T-SHIRTS UNDER <span className="price">$599</span>
    </span>
  </button>

  <button onClick={() => cardClick("/Women")} className="custom-btn">
    <span className="custom-link">
      WOMENS PARTY WEARS <span className="price">$1199</span>
    </span>
  </button>

  <button onClick={() => cardClick("/gym")} className="custom-btn">
    <span className="custom-link">
      GYM & WORKOUT UNDER <span className="price">$999</span>
    </span>
  </button>
</div>

      <hr />





        <Row className="g-4 mb-5 mt-5 pt-5">
  <Col lg={3} md={6}>
    <Card   onClick={() => cardClick("/LF")} className=" h-100 text-center border-0 shadow-sm">
      <Card.Img className='custom-card' src="/sec1card1.png" alt="Louis Philippe" />
        <h3 className="fw-bold">LOUIS PHILIPPE</h3>
        <p>Sophisticated shoes for formal charm</p>
      <Button variant="dark"><Link>view</Link></Button>
    </Card>
  </Col>

  <Col lg={3} md={6}>
    <Card   onClick={() => cardClick("/WoodLand")} className="h-100 text-center border-0 shadow-sm">
      <Card.Img className='custom-card ' src="/sec1card2.png" alt="Woodland" />
        <h3 className="fw-bold">WOODLAND</h3>
        <p>Tough leather style for bold explorers</p>
      <Button variant="dark"><Link>view</Link></Button>
    </Card>
  </Col>

  <Col lg={3} md={6}>
    <Card onClick={() => cardClick("/Nike")} className="h-100 text-center border-0 shadow-sm">
      <Card.Img className='custom-card ' src="/sec1card3.png" alt="Nike" />
        <h3 className="fw-bold">NIKE</h3>
        <p>Trendy sneakers for a modern look</p>
      <Button variant="dark"><Link>view</Link></Button>
    </Card>
  </Col>


  <Col lg={3} md={6}>
    <Card onClick={() => cardClick("/Adidas")} className=" h-100 text-center border-0 shadow-lg">
      <Card.Img  className='custom-card' src="/sec1card4.png" alt="Adidas" />
      <h3 className="fw-bold">ADIDAS</h3>
        <p>Casual comfort with everyday flair</p>
      <Button variant="dark"><Link>view</Link></Button>
    </Card>
  </Col>
</Row>

      <hr />
</Container>







    <Container className='section2 mt-4 mb-5 pb-5 '>
       <h1 style={{color:'black', fontWeight:"bold",textShadow:'2px 2px 6px' }} className='text-center pt-5'>ICONS, REINVENTED</h1>
       <h5 style={{color:'black'}} className='text-center pb-5 mb-4'>-- COLLECTIONS--</h5>
       <Row className="g-4">
  <Col lg={3} md={6}>
    <Card  onClick={() => cardClick("/gym")}  className="custom-card1 h-100 text-white shadow-lg border-0">
      <Card.Img src="/gym.png" alt="." />
      <Card.ImgOverlay className="d-flex flex-column justify-content-start text-center">
        <h3 style={{color:"white", fontWeight:"bold", textShadow:'2px 2px 2px black'}}>GYM STORE</h3>
        <p>Workout essentials built for strength and endurance</p>
      </Card.ImgOverlay>
      <Button variant="dark"><Link>view</Link></Button>
    </Card>
  </Col>

  <Col lg={3} md={6}>
    <Card onClick={() => cardClick("/Running")}  className="custom-card1 h-100 text-white shadow-lg border-0">
      <Card.Img src="/running.png" alt="." />
      <Card.ImgOverlay className="d-flex flex-column justify-content-start text-center">
        <h3 style={{color:"white", fontWeight:"bold", textShadow:'2px 2px 6px black'}}>RUNNING STROE</h3>
        <p style={{color:"white",textShadow:'2px 2px 6px black'}}>Lightweight gear designed for speed and comfort</p>
      </Card.ImgOverlay>
      <Button variant="dark"><Link>view</Link></Button>
    </Card>
  </Col>

  <Col lg={3} md={6}>
    <Card onClick={() => cardClick("/Travel")}  className="custom-card1 h-100 text-white shadow-lg border-0">
      <Card.Img src="/travel.png" alt="." />
      <Card.ImgOverlay className="d-flex flex-column justify-content-start text-center">
        <h3 style={{color:"white", fontWeight:"bold", textShadow:'2px 2px 6px black'}}>TRAVEL STORE</h3>
        <p style={{color:"white",textShadow:'2px 2px 6px black'}}>Durable and stylish bags, shoes & wear for every journey</p>
      </Card.ImgOverlay>
      <Button variant="dark"><Link>view</Link></Button>
    </Card>
  </Col>

  <Col lg={3} md={6}>
    <Card onClick={() => cardClick("/Jersey")}  className="custom-card1 h-100 text-white shadow-lg border-0">
      <Card.Img src="/jersey.png" alt="." />
      <Card.ImgOverlay className="d-flex flex-column justify-content-start text-center">
        <h3 style={{color:"white", fontWeight:"bold", textShadow:'2px 2px 6px black'}}>JERSEY STORE</h3>
        <p style={{color:"white",textShadow:'2px 2px 6px black'}}>Team jerseys and fan wear to show your true colors</p>
      </Card.ImgOverlay>
      <Button variant="dark"><Link>view</Link></Button>
    </Card>
  </Col>
</Row>
<hr />

    </Container>








    <div className="section3 m-0 p-0">
  <Row className="g-0">
    
    <Col lg={12} className="mb-5 p-0">
      <Card className="bg-dark text-white border-0">
        <img 
          src="/sec3img1.jpg" 
          alt="Background" 
          className="w-100 img-fluid"
          style={{ height: "600px", objectFit: "cover" }} 
        />
        <Card.ImgOverlay className="d-flex flex-column justify-content-center align-items-end">
          <div className="text-start">
            <h2 style={{ textShadow: "2px 2px 6px rgba(0,0,0,0.8)", color:"black", fontSize:"50px" }}>
              LOUIS PHILIPPE
            </h2>
            <p style={{ color:"black", textShadow: "2px 2px 6px rgba(0,0,0,0.8)" }}>
              Sophisticated shoes for formal charm
            </p>
            <div className="d-flex gap-4">
              <Button   onClick={() => cardClick("/LF")} variant="dark"><Link>FOR HIM</Link></Button>
              <Button onClick={() => cardClick("/LF")} variant="dark"><Link>FOR HER</Link></Button>
            </div>
          </div>
        </Card.ImgOverlay>
      </Card>
    </Col>

    <Col sm={12} className="mb-5 p-0">
      <Card className="bg-dark text-white border-0">
        <img 
          src="/sec3img2.png" 
          alt="Background" 
          className="w-100 img-fluid"
          style={{ height:"600px", objectFit:"cover" }} 
        />
        <Card.ImgOverlay className="d-flex flex-column justify-content-center align-items-end">
          <div className="text-start">
            <h2 style={{ textShadow: "2px 4px 6px black", color:"white", fontSize:"50px" }}>
              JERSEY CORNER
            </h2>
            <p style={{ color:"black", textShadow: "2px 2px 6px rgba(0,0,0,0.8)" }}>
              Team jerseys and fan wear to show your true colors
            </p>
            <div className="d-flex gap-4">
              <Button  onClick={() => cardClick("/Jersey")} variant="dark"><Link>FOR HIM</Link></Button>
              <Button  onClick={() => cardClick("/Jersey")} variant="dark"><Link>FOR HER</Link></Button>
            </div>
          </div>
        </Card.ImgOverlay>
      </Card>
    </Col>

    <Col sm={12} className="mb-5 p-0">
      <Card className="bg-dark text-white border-0">
        <img 
          src="/sec3img3.jpg" 
          alt="Background" 
          className="w-100 img-fluid"
          style={{ height:"600px", objectFit:"cover" }} 
        />
        <Card.ImgOverlay className="d-flex flex-column justify-content-center align-items-end">
          <div className="text-start">
            <h2 style={{ textShadow: "2px 1px 6px rgba(255, 255, 255, 0.8)", color:"white", fontSize:"50px" }}>
              GYM ACCESSORIES
            </h2>
            <p style={{ color:"white", textShadow: "2px 2px 6px rgba(0,0,0,0.8)" }}>
              Workout essentials built for strength
            </p>
            <div className="d-flex gap-4">
              <Button onClick={() => cardClick("/gym")} variant="light"><Link className='text-dark'>FOR HIM</Link></Button>
              <Button onClick={() => cardClick("/gym")} variant="light"><Link className='text-dark'>FOR HER</Link></Button>
            </div>
          </div>
        </Card.ImgOverlay>
      </Card>
    </Col>
    
  </Row>
  <hr />
</div>






        <Container className='mb-5 pb-5'>
          <h1 style={{color:'black', fontWeight:"bold",textShadow:'2px 2px 6px'  }} className='text-center pt-5'>STEP INTO THE MEN COLLECTION</h1>
       <h5 style={{color:'black'}} className='text-center mb-5 pb-5'>THE NEW DROP SHINES BRIGHT</h5>
          <Row style={{display:"flex",justifyContent:"space-evenly"}}>
  <Col lg={3} md={6}>
    <Card onClick={() => cardClick("/Men")}  className="custom-card1  text-white shadow-lg border-0">
      <Card.Img src="/sec2card1.png" alt="." />
      <Card.ImgOverlay className="d-flex flex-column justify-content-start align-items-center">
        <h3 style={{color:"white", fontWeight:"bold", textShadow:'2px 2px 2px black'}}>Urban Vibes</h3>
        <p>City style with a modern edge</p>
      </Card.ImgOverlay>
      <Button variant="dark"><Link>View</Link></Button>
    </Card>
  </Col>

  <Col lg={3} md={6}>
    <Card  onClick={() => cardClick("/Men")} className=" custom-card1 h-100 text-white shadow-lg border-0">
      <Card.Img src="/sec2card2.png" alt="." />
      <Card.ImgOverlay className="d-flex flex-column justify-content-strat align-items-center">
         <h3 style={{color:"white", fontWeight:"bold", textShadow:'2px 2px 6px black'}}>Denim Styles</h3>
        <p style={{color:"black"}}>Rugged, versatile, always in trend</p>
      </Card.ImgOverlay>
      <Button variant="dark"><Link>View</Link></Button>
    </Card>
  </Col>

  <Col lg={3} md={6}>
    <Card  onClick={() => cardClick("/Men")} className="custom-card1 h-100 text-white shadow-lg border-0">
      <Card.Img src="/sec2card3.png" alt="." />
      <Card.ImgOverlay className="d-flex flex-column justify-content-start align-items-center ">
        <h3 style={{color:"white", fontWeight:"bold", textShadow:'2px 2px 6px black'}}>Classic Tees</h3>
        <p style={{color:"black"}}>Everyday comfort, timeless fit</p>
      </Card.ImgOverlay>
      <Button variant="dark"><Link>View</Link></Button>
    </Card>
  </Col>

  <Col lg={3} md={6}>
    <Card  onClick={() => cardClick("/Men")} className="custom-card1 h-100 text-white shadow-lg border-0">
      <Card.Img src="/sec2card4.png" alt="." />
      <Card.ImgOverlay className="d-flex flex-column justify-content-start align-items-center">
        <h3 style={{color:"white", fontWeight:"bold", textShadow:'2px 2px 6px black'}}>Luxury Touch</h3>
        <p style={{color:"black"}}>Premium fashion, refined finish</p>
      </Card.ImgOverlay>
      <Button variant="dark"><Link>View</Link></Button>
    </Card>
  </Col>
</Row><hr />

    </Container>






        <Container className='section5 mb-5 pb-5'>
          <h1 style={{color:'black', fontWeight:"bold",textShadow:'2px 2px 6px'  }} className='text-center pt-5'>STEP INTO THE WOMEN COLLECTION</h1>
       <h5 style={{color:'black'}} className='text-center mb-5 pb-5'>THE NEW DROP SHINES BRIGHT</h5>
          <Row className="g-4">
  <Col lg={3} md={6}>
    <Card onClick={() => cardClick("/women")} className="custom-card1 h-100 text-white shadow-lg border-0">
      <Card.Img src="/sec4card1.png" alt="." />
       <Card.ImgOverlay className="d-flex flex-column justify-content-start align-items-center">    
        <h3 style={{color:"white", fontWeight:"bold", textShadow:'2px 2px 6px black'}}>Fusion Trends</h3>
        <p>Where modern meets tradition</p>
      </Card.ImgOverlay>
      <Button variant="dark"><Link>View</Link></Button>
    </Card>
  </Col>

  <Col lg={3} md={6}>
    <Card onClick={() => cardClick("/Women")} className="custom-card1 h-100 text-white shadow-lg border-0">
      <Card.Img src="/sec4card2.png" alt="." />
      <Card.ImgOverlay className="d-flex flex-column justify-content-start align-items-center">
        <h3 style={{color:"white", fontWeight:"bold", textShadow:'2px 2px 6px black'}}>Elegant Sarees</h3>
        <p>Draped in tradition defined by grace</p>
      </Card.ImgOverlay>
      <Button variant="dark"><Link>View</Link></Button>
    </Card>
  </Col>

  <Col lg={3} md={6}>
    <Card onClick={() => cardClick("/Women")} className="custom-card1 h-100 text-white shadow-lg border-0">
      <Card.Img src="/sec4card3.png" alt="." />
       <Card.ImgOverlay className="d-flex flex-column justify-content-start align-items-center">        <h3 style={{color:"white", fontWeight:"bold", textShadow:'2px 2px 6px black'}}>Evening Glam</h3>
        <p>Dazzle with stunning nightwear</p>
      </Card.ImgOverlay>
      <Button variant="dark"><Link>View</Link></Button>
    </Card>
  </Col>

  <Col lg={3} md={6}>
    <Card onClick={() => cardClick("/women")} className="custom-card1 h-100 text-white shadow-lg border-0">
      <Card.Img src="/sec4card4.png" alt="." />
       <Card.ImgOverlay className="d-flex flex-column justify-content-start align-items-center">
        <h3 style={{color:"white", fontWeight:"bold", textShadow:'2px 2px 6px black'}}>Office Smart</h3>
        <p>Work-ready outfits with style</p>
      </Card.ImgOverlay>
      <Button variant="dark"><Link>View</Link></Button>
    </Card>
  </Col>
</Row><hr />

        </Container>








        <Container className="section6 mb-5 pb-5">
         <h1 style={{color:'black', fontWeight:"bold",textShadow:'2px 2px 6px'  }} className='text-center pt-5'>STEP INTO THE KIDS COLLECTION</h1>
       <h5 style={{color:'black'}} className='text-center mb-5 pb-5'>THE NEW DROP SHINES BRIGHT</h5>
          <Row className="g-4">
  <Col lg={3} md={6}>
    <Card onClick={() => cardClick("/Kids")} className="custom-card1 h-100 text-white shadow-lg border-0">
      <Card.Img src="/sec6card1.png" alt="." />
      <Card.ImgOverlay className="d-flex flex-column justify-content-strat align-items-center  text-center">
        <h3 style={{color:"white", fontWeight:"bold", textShadow:'2px 2px 6px black'}}>Ethnic Wear</h3>
        <p className='text-dark'>Classic kurtas and sherwanis with timeless charm</p>
      </Card.ImgOverlay>
      <Button variant="dark"><Link>View</Link></Button>
    </Card>
  </Col>

  <Col lg={3} md={6}>
    <Card onClick={() => cardClick("/Kids")} className="custom-card1 h-100 text-white shadow-lg border-0">
      <Card.Img src="/sec6card2.png" alt="." />
      <Card.ImgOverlay className="d-flex flex-column justify-content-start align-items-center">
        <h3 style={{color:"white", fontWeight:"bold", textShadow:'3px 5px 9px  black'}}>School Wear</h3>
       <p className='text-dark'>Bright,comfy uniforms for learners</p>
      </Card.ImgOverlay>
      <Button variant="dark"><Link>View</Link></Button>
    </Card>
    
  </Col>

  <Col lg={3} md={6}>
    <Card onClick={() => cardClick("/Kids")} className="custom-card1 h-100 text-white shadow-lg border-0">
      <Card.Img src="/sec6card3.png" alt="." />
      <Card.ImgOverlay className="d-flex flex-column justify-content-start align-items-center">
        <h3 style={{color:"white", fontWeight:"bold", textShadow:'2px 2px 6px black'}}>Color Pop</h3>
        <p>Bright shades, brighter smiles</p>
      </Card.ImgOverlay>
      <Button variant="dark"><Link>View</Link></Button>
    </Card>
  </Col>

  <Col lg={3} md={6}>
    <Card  onClick={() => cardClick("/Kids")} className="custom-card1 h-100 text-white shadow-lg border-0">
      <Card.Img src="/sec6card4.png" alt="." />
      <Card.ImgOverlay className="d-flex flex-column justify-content-start align-items-center">
        <h3 style={{color:"white", fontWeight:"bold", textShadow:'2px 2px 6px black'}}>Everyday Comfort</h3>
        <p className='text-dark'>Soft and easy wear, all day long</p>
      </Card.ImgOverlay>
      <Button variant="dark"><Link>View</Link></Button>
    </Card>
  </Col>
</Row>

        </Container>

     </div>
  )
}

export default Hero
