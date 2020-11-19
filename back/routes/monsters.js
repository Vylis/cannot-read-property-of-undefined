const express = require('express');
const router = express.Router();
const connection = require('../config');

router.get('/', (req, res) => {
	connection.query('SELECT * FROM monsters', (err, results) => {
		if (err) {
			res.sendStatus(500);
		} else {
			res.status(200).json(results);
		}
	});
});

router.get('/:id', (req, res) => {
	const id = req.params.id;
	connection.query(
		'SELECT * FROM monsters WHERE ID = ?',
		[id],
		(err, results) => {
			if (err) {
				res.sendStatus(500);
			} else {
				if (results.length === 0) {
					res.status(404).send('Creature not found');
				} else {
					res.status(200).json(results);
				}
			}
		}
	);
});

module.exports = router;
