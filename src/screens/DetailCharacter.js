import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { getInfoOneCharacter } from '../services/getInfo'
import { useEffect } from 'react';

export const DetailCharacter = () => {
  const [character, setCharacter] = useState({})
  const [stateInfo, setStateInfo] = useState({
    dataCharacter: {},
    loading: true,
  });
  const params = useParams()

  useEffect(() => {
    const fetchCharacter = async () => {
      const data = await getInfoOneCharacter(params.id);
      // setStateInfo({
      //   dataCharacter: character,
      //   loading: false,
      // });
    };
    // const data = fetchCharacter()
    setCharacter(fetchCharacter())
  }, [])



  console.log('CHARACTER => ', character);

  return (
    <div>DetailCharacter</div>
  )
}
