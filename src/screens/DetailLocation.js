import { useParams } from 'react-router-dom'
import { Navbar } from '../components/Navbar';
import { useFetchDetails } from '../hooks/useFetchDetails';
import { Card } from 'react-bootstrap';

export const DetailLocation = () => {
  const { id } = useParams()

  const { info } = useFetchDetails('location', id);

  return (
    <>
      <Navbar />
      <div className="row mt-5">
        <div className="col">
          <div className="container-episode-card d-flex justify-content-center align-items-center">
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>{info?.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Dimension: {info?.dimension}</Card.Subtitle>
                <Card.Text>
                  Type: {info?.type}
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}

// created: "2017-11-10T12:42:04.162Z"
// dimension: "Dimension C-137"
// id: 1
// name: "Earth (C-137)"
// residents: (27) ['https://rickandmortyapi.com/api/character/38', 'https://rickandmortyapi.com/api/character/45', 'https://rickandmortyapi.com/api/character/71', 'https://rickandmortyapi.com/api/character/82', 'https://rickandmortyapi.com/api/character/83', 'https://rickandmortyapi.com/api/character/92', 'https://rickandmortyapi.com/api/character/112', 'https://rickandmortyapi.com/api/character/114', 'https://rickandmortyapi.com/api/character/116', 'https://rickandmortyapi.com/api/character/117', 'https://rickandmortyapi.com/api/character/120', 'https://rickandmortyapi.com/api/character/127', 'https://rickandmortyapi.com/api/character/155', 'https://rickandmortyapi.com/api/character/169', 'https://rickandmortyapi.com/api/character/175', 'https://rickandmortyapi.com/api/character/179', 'https://rickandmortyapi.com/api/character/186', 'https://rickandmortyapi.com/api/character/201', 'https://rickandmortyapi.com/api/character/216', 'https://rickandmortyapi.com/api/character/239', 'https://rickandmortyapi.com/api/character/271', 'https://rickandmortyapi.com/api/character/302', 'https://rickandmortyapi.com/api/character/303', 'https://rickandmortyapi.com/api/character/338', 'https://rickandmortyapi.com/api/character/343', 'https://rickandmortyapi.com/api/character/356', 'https://rickandmortyapi.com/api/character/394']
// type: "Planet"
// url: "https://rickandmortyapi.com/api/location/1"