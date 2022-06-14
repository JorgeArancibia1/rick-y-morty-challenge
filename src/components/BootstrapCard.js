import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

export const BootstrapCard = (props) => {
  // Colocar valores por defecto
  const { name, image, id, gender, origin, status, species, typeCard = 'character' } = props;

  const alt = `Imagen de ${name}`;
  return (
    <Col>
      <Link to={typeCard === 'location' ? `/detail-location/${id}` : typeCard === 'episode' ? `/detail-episode/${id}` : `/detail-character/${id}`}>
        <Card style={{ width: '18rem', borderRadius: '20px', overflow: 'hidden' }} className="">
          {typeCard === 'character' && <Card.Img variant="top" src={image} alt={alt} />}
          <Card.Body className='text-center'>
            <Card.Title>{name}</Card.Title>
            {/*  */}
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
};
