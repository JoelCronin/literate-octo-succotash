const { Schema, Types, model } = require('mongoose');


const reactionSchema = new Schema({
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
        type: Date, 
        default: Date.now
    },
    },
);

const thoughtSchema = new Schema({
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
    },
    {
      toJSON: {
        virtuals: true,
      },
      id: false,
    }
);

thoughtSchema.virtual('reactionCount').get(function (){
  return this.reactions.length
});

const Thought =  model('Thought', thoughtSchema);

const handleError = (err) => console.error(err);

Thought.find({}).exec((err, collection) => {
    if (err) {
      return handleError(err);
    }
    if (collection) {
      Thought.deleteMany({});
      return Thought.insertMany(
        [
          {thoughtText: 'I like that', username: 'Joel'},
          {thoughtText: 'I like that very much', username: 'Sophie'}
        ],
        (insertError) =>
          insertError ? handleError(insertError) : console.log('Inserted')
      );
    }
    return console.log('Already populated');
  });
  
  module.exports = Thought;