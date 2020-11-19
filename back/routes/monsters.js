const express = require('express');
const router = express.Router();
const connection = require('../config');

// GET ROUTES
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

// POST ROUTES
router.post('/', (req, res) => {
	connection.query('INSERT INTO monsters SET ?', req.body, (err, results) => {
		if (err) {
			return res.sendStatus(500);
		}
		connection.query(
			'SELECT * FROM monsters WHERE id = ?',
			results.insertId,
			(err2, records) => {
				if (err2) {
					return res.sendStatus(500);
				}
				const insertedEntity = records[0];
				const host = req.get('localhost');
				const location = `https://${host}${req.url}/${insertedEntity.id}`;
				res.status(201).set('Location', location).json(insertedEntity);
			}
		);
	});
});

// PUT

router.put('/:id', (req, res) => {
	const idMonster = req.params.id;
	const formData = req.body;

	connection.query(
		'UPDATE monsters SET ? WHERE id = ?',
		[formData, idMonster],
		(err) => {
			if (err) {
				console.log(err);
				return res.status(500).send('Erreur while trying to modify a creature');
			}
			connection.query(
				'SELECT * FROM monsters WHERE id = ?',
				idMonster,
				(err2, records) => {
					if (err2) {
						return res.sendStatus(500);
					}
					const insertedEntity = records[0];
					const host = req.get('localhost');
					const location = `https://${host}${req.url}/${insertedEntity.id}`;
					res.status(201).set('Location', location).json(insertedEntity);
				}
			);
		}
	);
});

// DELETE

router.delete('/:id', (req, res) => {
	const idMonster = req.params.id;

	connection.query('DELETE FROM monsters WHERE id = ?', req.params.id, (err) => {
		if (err) {
			console.log(err);
			res.status(500).send('Error while trying to delete a creature');
		} else {
			res.status(200).send('Success');
		}
	});
});

module.exports = router;
