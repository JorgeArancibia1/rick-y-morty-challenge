import { useFetchDetails } from '../hooks/useFetchDetails';
import { useParams } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

export const DetailCharacter = () => {
  const { id } = useParams()

  const { info } = useFetchDetails('character', id);

  console.log(info);

  return (
    <>
      <Navbar />
      <Row xs={1} md={2} className=" mt-5 border p-5 mx-5">
        <Col className="col d-flex justify-content-center align-items-center"><img src={info?.image} alt={info?.name} className="avatar mb-4" /></Col>
        <div className="col">
          <div className="row">
            <h1 className="name">{info?.name}</h1>
            <p className="especie">Especie: {info?.species}</p>
            <p className="genero">Genero: {info?.gender}</p>
            <p className="estado">Estado: {info?.status}</p>
            <p className="estado">Ubicación: {info?.location.name}</p>
            <p className="origen">Origen: {info?.origin.name}</p>
          </div>
        </div>
      </Row>
    </>
  )
}

// created: "2017-11-04T18:50:21.651Z"
// episode: (51) ['https://rickandmortyapi.com/api/episode/1', 'https://rickandmortyapi.com/api/episode/2', 'https://rickandmortyapi.com/api/episode/3', 'https://rickandmortyapi.com/api/episode/4', 'https://rickandmortyapi.com/api/episode/5', 'https://rickandmortyapi.com/api/episode/6', 'https://rickandmortyapi.com/api/episode/7', 'https://rickandmortyapi.com/api/episode/8', 'https://rickandmortyapi.com/api/episode/9', 'https://rickandmortyapi.com/api/episode/10', 'https://rickandmortyapi.com/api/episode/11', 'https://rickandmortyapi.com/api/episode/12', 'https://rickandmortyapi.com/api/episode/13', 'https://rickandmortyapi.com/api/episode/14', 'https://rickandmortyapi.com/api/episode/15', 'https://rickandmortyapi.com/api/episode/16', 'https://rickandmortyapi.com/api/episode/17', 'https://rickandmortyapi.com/api/episode/18', 'https://rickandmortyapi.com/api/episode/19', 'https://rickandmortyapi.com/api/episode/20', 'https://rickandmortyapi.com/api/episode/21', 'https://rickandmortyapi.com/api/episode/22', 'https://rickandmortyapi.com/api/episode/23', 'https://rickandmortyapi.com/api/episode/24', 'https://rickandmortyapi.com/api/episode/25', 'https://rickandmortyapi.com/api/episode/26', 'https://rickandmortyapi.com/api/episode/27', 'https://rickandmortyapi.com/api/episode/28', 'https://rickandmortyapi.com/api/episode/29', 'https://rickandmortyapi.com/api/episode/30', 'https://rickandmortyapi.com/api/episode/31', 'https://rickandmortyapi.com/api/episode/32', 'https://rickandmortyapi.com/api/episode/33', 'https://rickandmortyapi.com/api/episode/34', 'https://rickandmortyapi.com/api/episode/35', 'https://rickandmortyapi.com/api/episode/36', 'https://rickandmortyapi.com/api/episode/37', 'https://rickandmortyapi.com/api/episode/38', 'https://rickandmortyapi.com/api/episode/39', 'https://rickandmortyapi.com/api/episode/40', 'https://rickandmortyapi.com/api/episode/41', 'https://rickandmortyapi.com/api/episode/42', 'https://rickandmortyapi.com/api/episode/43', 'https://rickandmortyapi.com/api/episode/44', 'https://rickandmortyapi.com/api/episode/45', 'https://rickandmortyapi.com/api/episode/46', 'https://rickandmortyapi.com/api/episode/47', 'https://rickandmortyapi.com/api/episode/48', 'https://rickandmortyapi.com/api/episode/49', 'https://rickandmortyapi.com/api/episode/50', 'https://rickandmortyapi.com/api/episode/51']
// gender: "Male"
// id: 2
// image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg"
// location: {name: 'Citadel of Ricks', url: 'https://rickandmortyapi.com/api/location/3'}
// name: "Morty Smith"
// origin: {name: 'unknown', url: ''}
// species: "Human"
// status: "Alive"
// type: ""
// url: "https://rickandmortyapi.com/api/character/2"