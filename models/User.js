const mongoose = require('mongoose');

const validateEmail = (email) => {
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email);
  };

const userSchema = new mongoose.Schema({
    username: { 
        type: String, 
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String, 
        unique: true,
        required: true,
        validate: [validateEmail, "Please enter a valid email"],
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            "Please fill a valid email address",
          ],
    },
    thoughts: [{ type: Schema.Types.ObjectId, ref: 'Thought' }],
    friends: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    }
);

const User =  mongoose.model('User', userSchema);

const handleError = (err) => console.error(err);

User.find({}).exec((err, collection) => {
    if (err) {
      return handleError(err);
    }
    if (collection.length === 0) {
      return User.insertMany(
        [
//ADD SEEDS HERE
        ],
        (insertError) =>
          insertError ? handleError(insertError) : console.log('Inserted')
      );
    }
    return console.log('Already populated');
  });
  
  module.exports = User;