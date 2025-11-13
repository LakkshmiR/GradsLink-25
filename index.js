///////////////////////////////////////////////////////////////////aws////////////////////////////////////////////////////
// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// require("dotenv").config();
// //model import
// const ConnectModel = require("./Models/post");
// const RegisterModel = require("./Models/user");
// const app = express();
// app.use(cors());
// app.use(express.json());

// //mdb
// mongoose.connect("mongodb://127.0.0.1:27017/connectdb");
// //post
// app.post("/add", (req, res) => {
//   const companyName = req.body.companyName;
//   const jobrole = req.body.jobrole;
//   const experience = req.body.experience;
//   const link = req.body.link;
//   const postedBy = req.body.postedBy;
//   console.log(companyName);
//   ConnectModel.create({
//     companyName: companyName,
//     jobrole: jobrole,
//     experience: experience,
//     link: link,
//     postedBy: postedBy,
//   })
//     .then((result) => res.json(result))
//     .catch((err) => res.json(err));
// });
// //get
// app.get("/get", (req, res) => {
//   ConnectModel.find()
//     .then((result) => res.json(result))
//     .catch((err) => res.json(err));
// });
// //delete
// app.delete("/delete/:id", (req, res) => {
//   const { id } = req.params;
//   const loggedinuser = req.body.loggedinuser;
//   ConnectModel.findOne({ postedBy: loggedinuser }).then((user) => {
//     if (user) {
//       ConnectModel.findByIdAndDelete({ _id: id })
//         .then((result) => res.json("Deleted Successfully!!!"))

//         .catch((err) => res.json(err));
//     }
//     //  else {
//     //   res.json("posted person can only delete");
//     // }
//   });
// });

// //Register
// //post
// app.post("/regpost", (req, res) => {
//   const name = req.body.name;
//   const email = req.body.email;
//   const password = req.body.password;
//   RegisterModel.findOne({ email: email }).then((user) => {
//     if (user) {
//       res.json("Email Already Exists");
//     } else {
//       bcrypt.hash(password, 10).then((encryptedpw) => {
//         RegisterModel.create({
//           name: name,
//           email: email,
//           password: encryptedpw,
//         })
//           .then((result) => res.json("Registration Success!!!"))
//           .catch((err) => res.json(err));
//       });
//     }
//   });
// });
// //login
// app.post("/login", (req, res) => {
//   const loginemail = req.body.loginemail;
//   const loginpw = req.body.loginpw;
//   RegisterModel.findOne({ email: loginemail })
//     .then((user) => {
//       if (!user) {
//         return res.json("No user");
//       }
//       if (user) {
//         bcrypt.compare(loginpw, user.password).then((ismatch) => {
//           if (!ismatch) {
//             return res.json("Wrong password");
//           }
//           const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "30d" });
//           return res.json({
//             message: "Login success",
//             name: user.name,
//             email: user.email,
//             token: token,
//           });
//         });
//       }
//     })
//     .catch((err) => res.json(err));
// });

// //post forgotpw
// app.post("/forgotpw", (req, res) => {
//   const registeremail = req.body.registeremail;
//   const newpw = req.body.newpw;
//   RegisterModel.findOne({ email: registeremail })
//     .then((user) => {
//       if (!user) {
//         return res.json("No user found!!!");
//       } else {
//         bcrypt.hash(newpw, 10).then((encryptednewpw) => {
//           RegisterModel.updateOne({ email: registeremail }, { password: encryptednewpw })
//             .then((result) => res.json("Password Reset Successfull"))
//             .catch((err) => res.json(err));
//         });
//       }
//     })
//     .catch((err) => res.json(err));
// });
// //total users
// app.get("/totalusers", async (req, res) => {
//   const usercount = await RegisterModel.countDocuments();
//   res.json(usercount);
// });
// app.listen(3000, () => {
//   console.log("Server is Running");
// });

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
//model import
const ConnectModel = require("./Models/post");
const RegisterModel = require("./Models/user");
const app = express();
app.use(cors());
app.use(express.json());

//mdb
// mongoose.connect("mongodb://127.0.0.1:27017/connectdb");
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Mongodb Connected"))
  .catch((err) => console.log(err));
//post
app.post("/add", (req, res) => {
  const companyName = req.body.companyName;
  const jobrole = req.body.jobrole;
  const experience = req.body.experience;
  const link = req.body.link;
  const postedBy = req.body.postedBy;
  console.log(companyName);
  ConnectModel.create({
    companyName: companyName,
    jobrole: jobrole,
    experience: experience,
    link: link,
    postedBy: postedBy,
  })
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});
//get
app.get("/get", (req, res) => {
  ConnectModel.find()
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});
//delete
app.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  const loggedinuser = req.body.loggedinuser;
  ConnectModel.findOne({ postedBy: loggedinuser }).then((user) => {
    if (user) {
      ConnectModel.findByIdAndDelete({ _id: id })
        .then((result) => res.json("Deleted Successfully!!!"))

        .catch((err) => res.json(err));
    }
    //  else {
    //   res.json("posted person can only delete");
    // }
  });
});

//Register
//post
app.post("/regpost", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  RegisterModel.findOne({ email: email }).then((user) => {
    if (user) {
      res.json("Email Already Exists");
    } else {
      bcrypt.hash(password, 10).then((encryptedpw) => {
        RegisterModel.create({
          name: name,
          email: email,
          password: encryptedpw,
        })
          .then((result) => res.json("Registration Success!!!"))
          .catch((err) => res.json(err));
      });
    }
  });
});
//login
app.post("/login", (req, res) => {
  const loginemail = req.body.loginemail;
  const loginpw = req.body.loginpw;
  RegisterModel.findOne({ email: loginemail })
    .then((user) => {
      if (!user) {
        return res.json("No user");
      }
      if (user) {
        bcrypt.compare(loginpw, user.password).then((ismatch) => {
          if (!ismatch) {
            return res.json("Wrong password");
          }
          const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "30d" });
          return res.json({
            message: "Login success",
            name: user.name,
            email: user.email,
            token: token,
          });
        });
      }
    })
    .catch((err) => res.json(err));
});

//post forgotpw
app.post("/forgotpw", (req, res) => {
  const registeremail = req.body.registeremail;
  const newpw = req.body.newpw;
  RegisterModel.findOne({ email: registeremail })
    .then((user) => {
      if (!user) {
        return res.json("No user found!!!");
      } else {
        bcrypt.hash(newpw, 10).then((encryptednewpw) => {
          RegisterModel.updateOne({ email: registeremail }, { password: encryptednewpw })
            .then((result) => res.json("Password Reset Successfull"))
            .catch((err) => res.json(err));
        });
      }
    })
    .catch((err) => res.json(err));
});
//total users
app.get("/totalusers", async (req, res) => {
  const usercount = await RegisterModel.countDocuments();
  res.json(usercount);
});

app.get("/", (req, res) => {
  res.send("Server is running!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server is Running");
});
