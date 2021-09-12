import express from 'express';
import { fetchBySiret } from './service/entreprise-infos-service.js';

const app = express();

// The only and main path for a given siren.
app.get('/:siren', async (req, res) => {
	try {
		const data = await fetchBySiret(req.params.siren);
		// Storing a siren, name and address of a given company in a JSON format.
		let infos = {
			siren: data.unite_legale.siren,
			nom: data.unite_legale.denomination,
			adresse : data.unite_legale.etablissement_siege.geo_adresse
		};
		res.send(infos);
	} catch (error) {
		// Catches a Not-found error if provided siren is wrong!
		res.status(404).send(error.message);
	}
})

// The port left to be defined in the environment, or it's running on 3000
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Example app listening at http://localhost: ${port}...`)
});

export default app;