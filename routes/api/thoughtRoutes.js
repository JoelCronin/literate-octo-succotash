const router = require('express').Router();

const {
getAllThoughts,
getSingleThought,
createThought,
updateThought,
deleteThought,
addReaction,
deleteReaction
} = require('../../controllers/thoughtController')

// /api/thought
router.route('/')
.get(getAllThoughts)
.post(createThought);

// /api/thought/:thoughtid
router.route('/:thoughtId')
.get(getSingleThought)
.put(updateThought)
.delete(deleteThought);

// /api/thought/:thoughtId/reactions
router.route('/:thoughtId/reactions')
.post(addReaction);

// /api/thought/:thoughtId/reactions/:reactionId
router.route('/:thoughtId/reactions/:reactionId')
.delete(deleteReaction);

module.exports = router;