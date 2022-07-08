const mongoose = require('mongoose');



const reactionSchema = new mongoose.Schema({
    reactionId: { 
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
    reactionBody: {
        type: String, 
        required: true,
        maxlength: 280,
    },
    username: { 
        type: String, 
        required: true, 
    },
    createdAt: {
        type: Date, default: Date.now
    },
    }
);

const Reaction =  mongoose.model('reaction', reactionSchema);

const handleError = (err) => console.error(err);

Reaction.find({}).exec((err, collection) => {
    if (err) {
      return handleError(err);
    }
    if (collection.length === 0) {
      return Reaction.insertMany(
        [
//ADD SEEDS HERE
        ],
        (insertError) =>
          insertError ? handleError(insertError) : console.log('Inserted')
      );
    }
    return console.log('Already populated');
  });
  
  module.exports = Reaction;