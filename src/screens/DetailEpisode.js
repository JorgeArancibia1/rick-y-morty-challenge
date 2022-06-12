import { useParams } from 'react-router-dom'
import { useFetchDetails } from '../hooks/useFetchDetails';


export const DetailEpisode = () => {
  const { id } = useParams()

  const { info } = useFetchDetails('episode', id);

  return (
    <div>
      <h1>{info?.name}</h1>
    </div>
  )
}






// air_date: "December 16, 2013"
// characters: (24) ['https://rickandmortyapi.com/api/character/1', 'https://rickandmortyapi.com/api/character/2', 'https://rickandmortyapi.com/api/character/12', 'https://rickandmortyapi.com/api/character/17', 'https://rickandmortyapi.com/api/character/38', 'https://rickandmortyapi.com/api/character/45', 'https://rickandmortyapi.com/api/character/96', 'https://rickandmortyapi.com/api/character/97', 'https://rickandmortyapi.com/api/character/98', 'https://rickandmortyapi.com/api/character/99', 'https://rickandmortyapi.com/api/character/100', 'https://rickandmortyapi.com/api/character/101', 'https://rickandmortyapi.com/api/character/108', 'https://rickandmortyapi.com/api/character/112', 'https://rickandmortyapi.com/api/character/114', 'https://rickandmortyapi.com/api/character/169', 'https://rickandmortyapi.com/api/character/175', 'https://rickandmortyapi.com/api/character/186', 'https://rickandmortyapi.com/api/character/201', 'https://rickandmortyapi.com/api/character/268', 'https://rickandmortyapi.com/api/character/300', 'https://rickandmortyapi.com/api/character/302', 'https://rickandmortyapi.com/api/character/338', 'https://rickandmortyapi.com/api/character/356']
// created: "2017-11-10T12:56:34.022Z"
// episode: "S01E03"
// id: 3
// name: "Anatomy Park"
// url: "https://rickandmortyapi.com/api/episode/3"