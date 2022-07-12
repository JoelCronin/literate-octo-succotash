const express = require('express');
const db = require('./config/connection');
const routes = require('./routes')
// Require model
const { User, Thought } = require('./models');


const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

//Get all Users
// app.get('/api/users', (req, res) => {
//   User.find({}, (err, result) => {
//     if (result) {
//       res.status(200).json(result);
//     } else {
//       console.log('Uh Oh, something went wrong');
//       res.status(500).json({ message: 'something went wrong' });
//     }
//   });
// });

//Get one User by ID
// app.get('/api/users/:id', (req, res) => {
//   User.findOne({_id: req.params.id}, (err, result) => {
//     if (result) {
//       res.status(200).json(result);
//     } else {
//       console.log('Uh Oh, something went wrong');
//       res.status(500).json({ message: 'something went wrong' });
//     }
//   });
// });

// // Create new User
// app.post('/api/users', (req, res) => {
//   const newUser = new User({username: req.body.username, email: req.body.email});
//   newUser.save();
//   if (newUser) {
//     res.status(200).json(newUser);
//   } else {
//     console.log('Uh Oh, something went wrong');
//     res.status(500).json({ message: 'something went wrong' });
//   }
// });


// //Get all Thoughts
// app.get('/api/thoughts', (req, res) => {
//   Thought.find({}, (err, result) => {
//     if (result) {
//       res.status(200).json(result);
//     } else {
//       console.log('Uh Oh, something went wrong');
//       res.status(500).json({ message: 'something went wrong' });
//     }
//   });
// });

// //Get one Thought by ID
// app.get('/api/thoughts/:id', (req, res) => {
//   Thought.findOne({_id: req.params.id}, (err, result) => {
//     if (result) {
//       res.status(200).json(result);
//     } else {
//       console.log('Uh Oh, something went wrong');
//       res.status(500).json({ message: 'something went wrong' });
//     }
//   });
// });

// // Create new Thought
// app.post('/api/thou', (req, res) => {
//   const newUser = new Thought({thoughtText: req.body.thoughtText, username: req.body.username});
//   newUser.save();
//   if (newUser) {
//     res.status(200).json(newUser);
//   } else {
//     console.log('Uh Oh, something went wrong');
//     res.status(500).json({ message: 'something went wrong' });
//   }
// });






db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
    });
  });