import express from 'express';
import { fetchBySiret } from './service/entreprise-infos-service.js';

const app = express();

app.get('/:siren', async (req, res) => {
	try {
		const data = await fetchBySiret(req.params.siren);
		let infos = {
			siren: data.unite_legale.siren,
			nom: data.unite_legale.denomination,
			adresse : data.unite_legale.etablissement_siege.geo_adresse
		};
		res.send(infos);
	} catch (error) {
		res.status(404).send(error.message);
	}
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Example app listening at http://localhost: ${port}...`)
});

export default app;