const express = require("express")
const router = express.Router();

var bookings = new Array();

router.get("/", (req, res) => {
    res.send(bookings);
});

router.post("/", (req, res) => {

    console.log(req.body);

    const booking = req.body;
    console.log(booking);
        let bodyName = booking.name;
        let bodyCity = booking.city;
        let bodyCountry = booking.country;
        let bodyPrice = booking.price;
        let bodyDuration = booking.duration;

    const newBooking = {
        id: bookings.length + 1,
        name: bodyName,
        city: bodyCity,
        country: bodyCountry,
        price: bodyPrice,
        duration: bodyDuration,
    };

    bookings.push(newBooking);

    return res.json(newBooking);
    // bookings.push(booking);
    // res.json(booking);
});
module.exports = router;

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// app.get("/api/bookings", (req, res) => {
//     res.json(bookings);
// });

// app.post("/api/bookings", (req, res) => {
//     const booking = req.body;
//     bookings.push(booking);
//     res.json(booking);
// });