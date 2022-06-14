import { useEffect, useState } from "react";
import { getInfoOneCharacter, getInfoOneEpisode, getInfoOneLocation } from "../services/getInfo.js";

export const useFetchDetails = (typeInfo, id) => {
  const [stateInfo, setStateInfo] = useState({
    info: null,
    loading: true,
  });

  useEffect(() => {
    const fetchInfo = async (id) => {
      const data = typeInfo === 'character' ? await getInfoOneCharacter(id) : typeInfo === 'location' ? await getInfoOneLocation(id) : await getInfoOneEpisode(id);
      setStateInfo({
        info: data,
        loading: false,
      });
    };

    fetchInfo(id)
  }, []);

  return stateInfo;
};