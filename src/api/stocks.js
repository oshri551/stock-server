import resource from 'resource-router-middleware';
import stocks from '../models/stocks';

export default ({ config, db }) => resource({

	/** GET / - List all stocks */
	index({ params }, res) {
		res.json(stocks);
	}
});
