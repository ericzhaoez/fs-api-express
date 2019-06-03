const express = require("express")
const router = express.Router();

var registrants = new Array();

router.get("/", (req, res) => {
    res.send(registrants);
});

router.post("/", (req, res) => {

    console.log(req.body);

    const registrant = req.body;
    console.log(registrant);
        let bodyName = registrant.name;
        let bodySurname = registrant.surname;
        let bodyCellPhone = registrant.cellPhone;
        let bodyEmail = registrant.email;
        let bodyPassword = registrant.password;
        let bodyRole = registrant.role;

    const newRegistrant = {
        id: registrants.length + 1,
        name: bodyName,
        surname: bodySurname,
        cellPhone: bodyCellPhone,
        email: bodyEmail,
        password: bodyPassword,
        role: bodyRole
    };

    registrants.push(newRegistrant);

    return res.json(newRegistrant);
    // registrants.push(registrant);
    // res.json(registrant);
});
module.exports = router;

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// app.get("/api/registrants", (req, res) => {
//     res.json(registrants);
// });

// app.post("/api/registrants", (req, res) => {
//     const registrant = req.body;
//     registrants.push(registrant);
//     res.json(registrant);
// });