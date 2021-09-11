import fetch from 'node-fetch';

const API_URL = 'https://entreprise.data.gouv.fr/api/sirene/v3/etablissements/';
export const fetchBySiret = siret => {
	let url = API_URL + siret;
	return fetch(url).then(data => data.json());
}