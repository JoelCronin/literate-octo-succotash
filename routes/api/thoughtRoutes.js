const router = require('express').Router();

const {
getAllThoughts,
getSingleThought,
createThought,
} = require('../../controllers/thoughtController')

// /api/thought
router.route('/').get(getAllThoughts).post(createThought);

// /api/thought/:id
router.route('/:id').get(getSingleThought);

module.exports = router;