const router = require('express').Router();

const {
getAllThoughts,
getSingleThought,
createThought,
updateThought,
deleteThought
} = require('../../controllers/thoughtController')

// /api/thought
router.route('/').get(getAllThoughts).post(createThought);

// /api/thought/:thoughtid
router.route('/:thoughtId')
.get(getSingleThought)
.put(updateThought)
.delete(deleteThought);

module.exports = router;