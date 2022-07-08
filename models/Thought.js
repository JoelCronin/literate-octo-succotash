const mongoose = require('mongoose');
const reactionSchema = require ('./Reaction')



const thoughtSchema = new mongoose.Schema({
    thoughtText: { 
        type: String, 
        required: true,
        minlength: 1,
        maxlength: 280,
    },
    createdAt: {
        type: Date, default: Date.now
    },
    username: { 
        type: String, 
        required: true, 
    },

    reactions: [reactionSchema],
    }
);

const Thought =  mongoose.model('Thoughts', thoughtSchema);

const handleError = (err) => console.error(err);

Thought.find({}).exec((err, collection) => {
    if (err) {
      return handleError(err);
    }
    if (collection.length === 0) {
      return Thought.insertMany(
        [
//ADD SEEDS HERE
        ],
        (insertError) =>
          insertError ? handleError(insertError) : console.log('Inserted')
      );
    }
    return console.log('Already populated');
  });
  
  module.exports = Thought;