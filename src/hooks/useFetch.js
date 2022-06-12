import { useEffect, useState } from "react";
import { getInfoCharacter, getInfoEpisode, getInfoLocation } from "../services/getInfo.js";

export const useFetch = (typeInfo) => {
	const [stateInfo, setStateInfo] = useState({
		info: {
			count: 0,
			pages: 0,
			next: '',
			prev: null
		},
		results: [],
		loading: true,
	});

	useEffect(() => {
		const fetchCharacter = async () => {
			const {
				info,
				results
			} = typeInfo === 'character' ? await getInfoCharacter() : typeInfo === 'location' ? await getInfoLocation() : await getInfoEpisode();

			setStateInfo({
				info,
				results,
				loading: false,
			});
		};

		fetchCharacter()
	}, []);

	return stateInfo;
};