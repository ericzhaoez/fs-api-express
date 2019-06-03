const express = require("express")
const router = express.Router();

var users = new Array();

router.get("/", (req, res) => {
    res.send(users);
});

router.post("/", (req, res) => {

    console.log(req.body);

    const user = req.body;
    console.log(user);
        let bodyName = user.name;
        let bodySurname = user.surname;
        let bodyCellPhone = user.cellPhone;
        let bodyEmail = user.email;
        let bodyPassword = user.password;
        let bodyRole = user.role;

    const newUser = {
        id: users.length + 1,
        name: bodyName,
        surname: bodySurname,
        cellPhone: bodyCellPhone,
        email: bodyEmail,
        password: bodyPassword,
        role: bodyRole
    };

    users.push(newUser);

    return res.json(newUser);
    // users.push(user);
    // res.json(user);
});
module.exports = router;

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// app.get("/api/users", (req, res) => {
//     res.json(users);
// });

// app.post("/api/users", (req, res) => {
//     const user = req.body;
//     users.push(user);
//     res.json(user);
// });