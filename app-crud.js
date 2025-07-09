// const express = require('express');
// const app = express();

// const userModel = require('./usermodel');

// app.get('/', (req, res) => {
//     res.send("hey");
// });

// app.get('/create', async (req, res) => {
//     let createdUser = await userModel.create({
//         name: "harshita",
//         email: "harshita@gmail.com",
//         username: "harshita"
//     });
//     res.send(createdUser);
// });

// app.get('/update', async (req, res) => {
//     let updatedUser = await userModel.findOneAndUpdate(
//         { username: "harsh" },
//         { name: "harsh naik" },
//         { new: true }
//     );
//     res.send(updatedUser);
// });

// app.get('/read', async (req, res) => {
//     let users = await userModel.find();
//     res.send(users);
// });

// app.get('/delete', async (req, res) => {
//     let users = await userModel.findOneAndDelete({username:"harshita"});
//     res.send(users);
// });


// app.listen(3000);
