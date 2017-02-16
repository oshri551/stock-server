import { version } from '../../package.json';
import { Router } from 'express';
import stocks from './stocks';
import stock from './stock';
import buy from './buy';

export default ({ config, db }) => {
	let api = Router();

	// mount the facets resource
	api.use('/listofstocks', stocks({ config, db }));

	api.use('/stockdata', stock({ config, db }));

	api.use('/buy', buy({ config, db }));

	// perhaps expose some API metadata at the root
	api.get('/', (req, res) => {
		res.json({ version });
	});

	return api;
}
