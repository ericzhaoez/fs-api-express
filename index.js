const express = require("express");

const app = express();

var properties = new Array();
var users = new Array();
var rentals = new Array();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const usersRouter = require("./users/index");
app.use("/api/users", usersRouter);

const rentalsRouter = require("./rental-listings/index");
app.use("/api/rentals", rentalsRouter);

app.get("/", (req, res) => {
    console.log(req.headers);
    res.send("<p>Hello</p>");
});

app.get("/properties", (req, res) => {
    // var properties = new Array();
    // properties.push({
    //     id: 1,
    //     name: "One",
    //     location: "Lisbon"
    // });
    res.json(properties);
});

app.post("/properties", (req, res) => {
    const property = req.body;
    // console.log(property);
    properties.push(property);
    res.json(property);
    // res.send();
});

app.listen(3000, (err) => {
    if (err) {
        console.log("Oops, error");
        return;
    }
    console.log("Server listening, port 3000.")
});

console.log("This app works.")

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));


// Mickey's office hours sample code:
// const express = require("express");
// const app = express();

// var users = new Array();

// app.post("/api/users", (req, res) => {
//     /*
//      * POST http://localhost:3000/api/users
//      * {
//      *   "firstname": "Miki",
//      *   "lastname": "von Ketelhodt",
//      *   "email": "miki@ixperience.co.za",
//      *   "password": "qwerty"
//      * }
//      **/

//     const user = req.body;
//     let bodyFirstname = user.firstname;
//     let bodyLastname = user.lastname;
//     let bodyEmail = user.email;
//     let bodyPassword = user.password;

//     const newUser = {
//         id: users.length + 1,
//         firstname: bodyFirstname,
//         lastname: bodyLastname,
//         email: bodyEmail,
//         password: bodyPassword
//     };

//     users.push(newUser);

//     return res.json(newUser);
//     /*
//      * {
//      *   "id": 1,
//      *   "firstname": "Miki",
//      *   "lastname": "von Ketelhodt",
//      *   "email": "miki@ixperience.co.za",
//      *   "password": "qwerty"
//      * }
//      */
// });

// app.post("/api/users/auth", (req, res) => {
//     /*
//      * POST http://localhost:3000/api/users/auth
//      * {
//      *   "email": "miki@ixperience.co.za",
//      *   "password": "qwerty"
//      * }
//      **/

//     const auth = req.body;
//     let bodyEmail = auth.email;
//     let bodyPassword = auth.password;

//     if (!bodyEmail) {
//         return res.status(400).json({message: "Expecting email, function failed"});
//     }

//     var foundUser = null;
//     var userQuery = (user) => {
//         if (user.email === bodyEmail && user.password === bodyPassword) {
//             foundUser = user;
//             return;
//         }
//     };
//     users.forEach(userQuery);

//     for (var k = 0; k < users.length; k++) {
//         var user = users[k];

//         if (user.email === bodyEmail && user.password === bodyPassword) {
//             foundUser = user;
//             return;
//         }
//     }

//     if (foundUser) {
//         return res.json(foundUser);
//     } else {
//         return res.status(401).json({message: "User not found!"});
//     }
// });

// app.listen(3000, (err) => console.log("Server running ..."));

// // var properties = new Array();

// // app.use(express.json());
// // app.use(express.urlencoded({ extended: false }));

// // const usersRouter = require("./user/index");
// // app.use("/api/users", usersRouter);

// // app.get("/", (req, res) => {
// //     console.log(req.headers);
// //     res.send("<p>Hello</p>");
// // });

// // app.get("/properties", (req, res) => {
// //     // var properties = new Array();
// //     // properties.push({
// //     //     id: 1,
// //     //     name: "One",
// //     //     location: "Lisbon"
// //     // });
// //     res.json(properties);
// // });

// // app.post("/properties", (req, res) => {
// //     const property = req.body;
// //     properties.push(property);
// //     // res.send();
// //     res.json(property);
// // });

// // app.listen(3000, (err) => {
// //     if (err) {
// //         console.log("Oops, error");
// //         return;
// //     }

// //     console.log("Server listening port 3000");
// // });

// // console.log("This app runs! Yay");
