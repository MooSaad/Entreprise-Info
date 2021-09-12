import fetch from 'node-fetch';

// The basic URL of requesting and fetching information with a given siren.
const API_URL = 'https://entreprise.data.gouv.fr/api/sirene/v3/unites_legales/';
export const fetchBySiret = siren => {
	let url = API_URL + siren;
	return fetch(url).then(data => data.json());
}