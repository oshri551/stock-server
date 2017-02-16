import resource from 'resource-router-middleware';
import stocks from '../models/stocks';
import app from '../index';

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

	/** GET /:id - Return a given entity 
     * Email notification
    */
	read({ stock }, res) {
        app.mailer.send('email', {
            to: 'oshri551@gmail.com',
            subject: `${stock.companyName}`,
            stock: stock
        }, (err) => {
            if(err) {
                //err sending the email
                res.status(400);
                res.send({Message: `There was an error sending the mail ${err}`});
                return;
            }
            res.json({Message: `Mail sent successfuly ${stock.symbol}`});
        })
		
	}
});