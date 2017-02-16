import resource from 'resource-router-middleware';
import stocks from '../models/stocks';

export default ({ config, db }) => resource({

	/** Property name to store preloaded entity on `request`. */
	id : 'stock',

	/** For requests with an `id`, you can auto-load the entity.
	 *  Errors terminate the request, success sets `req[id] = data`.
	 */
	load(req, id, callback) {
		let stock = stocks.find( stock => stock.symbol===id ),
			err = stock ? null : 'Not found';
		callback(err, stock);
	},

	/** GET /:id - Return a given entity */
	read({ stock }, res) {

        //Change the current value rundomly +-1;
        stock.setValue();
		res.json(stock);
	}
});