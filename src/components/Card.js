import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

export const BootstrapCard = (props) => {
  // Colocar valores por defecto
  const { name, image, gender, origin, status, species } = props;

  const alt = `Imagen de ${name}`;
  return (
    <Col>
      <Card style={{ width: '18rem', borderRadius: '20px', overflow: 'hidden' }} className="">
        <Card.Img variant="top" src={image} alt={alt} />
        <Card.Body className='text-center'>
          <Card.Title>{name}</Card.Title>
          <p className="especie">Especie: {species}</p>
          <p className="estado">Estado: {status}</p>
          <p className="genero">Genero: {gender}</p>
          <p className="origen">Origen: {origin.name}</p>
        </Card.Body>
      </Card>
    </Col>
  );
};
