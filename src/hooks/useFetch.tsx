import { useEffect, useState } from "react";
import { DataInterface } from "../interfaces/getInfoInterface.js";
import { getInfo } from "../services/getInfo.js";

export const useFetch = () => {
	const [ stateInfo, setStateInfo ] = useState<DataInterface>({
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
		const fetch = async () => {
			const {
				info,
				results
			} = await getInfo();
			
			setStateInfo({
				info,
				results,
				loading: false,
			});
		};
		fetch();
	}, []);

	return stateInfo;
};
