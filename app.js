import express from 'express';
import { fetchBySiret } from './service/entreprise-infos-service.js';

const app = express();

// let siret = '34503941600085';
// let url = 'https://entreprise.data.gouv.fr/api/sirene/v3/etablissements/' + siret;
// const response = await fetch(url);
// const data = await response.json();
// console.log(data.etablissement.geo_adresse);

app.get('/:siret', async (req, res) => {
	try {
		const infos = await fetchBySiret(req.params.siret);
		res.send(infos.etablissement.geo_adresse);
	} catch (error) {
		res.status(404).send(error.message);
	}
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Example app listening at http://localhost: ${port}...`)
});