const express = require('express');
const path = require('path');
const app = express();
const userModel = require('./models/user');

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render("index");
});

app.get('/read', async (req, res) => {
    let users = await userModel.find();
    res.render("read", { users });
});

app.get('/edit/:userid', async (req, res) => {
    let user = await userModel.findById(req.params.userid); // ❌ originally used findOne — corrected to findById
    res.render("edit", { user });
});

app.post('/update/:userid', async (req, res) => {
    let { image, name, email } = req.body;
    await userModel.findByIdAndUpdate(req.params.userid, {  // ❌ originally used findOneAndDelete — corrected to findByIdAndUpdate
        name,
        email,
        image
    }, { new: true });
    res.redirect("/read");
});

app.get('/delete/:id', async (req, res) => {
    await userModel.findByIdAndDelete(req.params.id);
    res.redirect("/read");
});

app.post('/create', async (req, res) => {
    let { name, email, image } = req.body;
    await userModel.create({ name, email, image });
    res.redirect("/read");
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
