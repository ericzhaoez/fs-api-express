const express = require("express")
const router = express.Router();

var rentals = new Array();

router.get("/", (req, res) => {
    res.send(rentals);
});

router.post("/", (req, res) => {

    console.log(req.body);

    const rental = req.body;
    console.log(rental);
        let bodyName = rental.name;
        let bodyCity = rental.city;
        let bodyCountry = rental.country;
        let bodyPrice = rental.price;
        let bodyDuration = rental.duration;

    const newRental = {
        id: rentals.length + 1,
        name: bodyName,
        city: bodyCity,
        country: bodyCountry,
        price: bodyPrice,
        duration: bodyDuration,
    };

    rentals.push(newRental);

    return res.json(newRental);
    // rentals.push(rental);
    // res.json(rental);
});
module.exports = router;

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// app.get("/api/rentals", (req, res) => {
//     res.json(rentals);
// });

// app.post("/api/rentals", (req, res) => {
//     const rental = req.body;
//     rentals.push(rental);
//     res.json(rental);
// });