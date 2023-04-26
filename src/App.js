import React from 'react';
import './App.css';
import { Nav,Navbar,Container,Carousel,Card,Button,Form } from 'react-bootstrap';

function App() {
  return (
    <><div className="App">
      <Navbar className='color'>
        <Container>
          <div class="logo">
            <img src="https://www.montagnedesreves.com/wp-content/uploads/2022/01/cropped-LOGO-NOIR.png" alt="logo" width="100px"></img>
        </div>
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
    <div className='carous'>

    <Carousel variant="dark">

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.skieur.com/media/guide_station/img/pra_loup%C2%A9ut_brendan_le_peru_10.jpg"
            alt="Pra Loup" />
          <Carousel.Caption>
            <h5> Pra Loup pour du ski grand domaine </h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.sauze.com/csx/scripts/resizer.php?filename=T004%2Fimg1%2F86%2F11%2FFR.9m25scnakrqk&mime=image%252Fjpeg&originalname=Ski-en-famille-au-Sauze-%28c%29UbayeTourisme-%2836%29.jpg&geometry=410x%3E"
            alt="Le Sauze" />

          <Carousel.Caption>
            <h5> Le Sauze pour du ski famille </h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://woody.cloudly.space/app/uploads/crt-paca/2021/02/thumbs/sainte-anne-ad04-manu-molle-1920x960.jpg"
            alt="Third slide" />

          <Carousel.Caption>
            <h5>Sainte-Anne pour du ski nature</h5>
          </Carousel.Caption>
        </Carousel.Item>      
      </Carousel><div class="Presentation">
        <h1>Skier près de Barcelonnette</h1>
        <p>À l'image des multiples sommets de la vallée de Barcelonnette, les domaines skiables et les espaces nordiques de la Vallée de l'Ubaye Serre-Ponçon sont pluriels et vous permettent de découvrir et d'alterner tous les plaisirs de la glisse.
          Au total, ce sont 280 km de pistes de ski alpin et 58 km de pistes de ski de fond qui vous attendant à proximité de Barcelonnette !</p>
      </div>
      </div>

    <div class="cards">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://www.ski-express.com/mag/wp-content/uploads//2016/10/H%C3%A9bergement.jpg" />
          <Card.Body>
            <Card.Title>Hébergements</Card.Title>
            <Card.Text>
              Les 13 communes de la Vallée de l'Ubaye Serre-Ponçon vous offrent de nombreux hébergements adaptés à vos envies et à votre budget pour votre séjour au ski.
            </Card.Text>
            <Button variant="primary">Où dormir</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://www.legrandbornand.com/medias/images/prestataires/multitailles/640x480_199842-beb_6828_1.jpg" />
          <Card.Body>
            <Card.Title>Cours de ski</Card.Title>
            <Card.Text>
              Nos moniteurs dipômés sont là pour vous transmettre leur passion de la glisse afin de vous permettre de progresser rapidement et en toute confiance.
            </Card.Text>
            <Button variant="primary">Les écoles et moniteurs</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://www.association-oxygene.eu/wp-content/uploads/2017/10/magasinski-val-thorens.jpg" />
          <Card.Body>
            <Card.Title> Loueurs de matériel de ski</Card.Title>
            <Card.Text>
              Les spécialistes de la location de ski et de snowboard de l'Ubaye vous proposent les plus gra
            </Card.Text>
            <Button variant="primary">Les magasins de location </Button>
          </Card.Body>
        </Card>
      </div>
      <div class="forms">
        <h3> Préparer votre séjour Ski</h3>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>

        </Form>
      </div></>
  );
}

export default App;
