import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { getInfoOneCharacter } from '../services/getInfo'
import { useEffect } from 'react';

export const DetailLocation = () => {
  const [character, setCharacter] = useState({})
  const params = useParams()

  useEffect(() => {
    const fetchCharacter = async () => {
      const data = await getInfoOneCharacter(params.id);

    };
    setCharacter(fetchCharacter())
  }, [])



  console.log('CHARACTER => ', character);

  return (
    <div>DetailLocation</div>
  )
}
