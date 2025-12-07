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
///////////////////////////////////////////////////////////////////////////////////////////////////////VERCEL//////////////////////////////////////////////////////////////////////////
// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const { OAuth2Client } = require("google-auth-library");
// require("dotenv").config();
// //model import
// const ConnectModel = require("./Models/post");
// const RegisterModel = require("./Models/user");
// const app = express();
// app.use(
//   cors({
//     origin: "https://grads-link-frontend.vercel.app",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     credentials: true,
//   })
// );
// app.use(express.json());

// //mdb
// // mongoose.connect("mongodb://127.0.0.1:27017/connectdb");
// mongoose
//   .connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("Mongodb Connected"))
//   .catch((err) => console.log(err));
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

// app.get("/", (req, res) => {
//   res.send("Server is running!");
// });
// //google login
// const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
// app.post("/google", async (req, res) => {
//   const credential = req.body.credential;
//   const ticket = await client.verifyIdToken({
//     idToken: credential,
//     audience: process.env.GOOGLE_CLIENT_ID,
//   });
//   const payload = ticket.getPayload();
//   const { name, email, sub, picture } = payload;
//   RegisterModel.findOne({ email })
//     .then((user) => {
//       if (!user) {
//         RegisterModel.create({ name: name, email: email, sub: sub, picture: picture });
//       }
//       const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "30d" });
//       res.json({ message: "Login Success", name: name, email: email, token });
//     })
//     .catch((err) => res.json(err));
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log("Server is Running");
// });

/////////////////////////////////////////////////////////////////////#######################################LH#########################################3
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
//model import
const ConnectModel = require("./Models/post");
const RegisterModel = require("./Models/user");
const leaderboardModel = require("./Models/leaderboard");
//import for google
const { OAuth2Client } = require("google-auth-library");
const app = express();
//cors lh
// app.use(cors());

//cors render
app.use(
  cors({
    origin: "https://grads-link-frontend.vercel.app",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());

//mdb lh
// mongoose.connect("mongodb://127.0.0.1:27017/connectdb");

//mdb render
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Mongodb Connected"))
  .catch((err) => console.log(err));

//post
app.post("/add", async (req, res) => {
  try {
    const companyName = req.body.companyName;
    const jobrole = req.body.jobrole;
    const experience = req.body.experience;
    const link = req.body.link;
    const postedBy = req.body.postedBy;
    const email = req.body.email;
    console.log(companyName);

    await ConnectModel.create({
      companyName: companyName,
      jobrole: jobrole,
      experience: experience,
      link: link,
      postedBy: postedBy,
    });

    await leaderboardModel.updateOne({ email: email }, [
      {
        $set: {
          numJobPosts: { $add: ["$numJobPosts", 1] },
          totalPoints: {
            $add: [
              { $multiply: [{ $add: ["$numJobPosts", 1] }, 10] },
              { $multiply: ["$dailyStreak", 5] },
              { $multiply: ["$referrals", 25] },
            ],
          },
        },
      },
    ]);
    //LEADERBOARDMODEL RANK
    const lbdata = await leaderboardModel.find().sort({ totalPoints: -1 });
    const ops = lbdata.map((user, index) => ({
      updateOne: {
        filter: { _id: user.id },
        update: { $set: { rank: index + 1 } },
      },
    }));
    await leaderboardModel.bulkWrite(ops);
    return res.json({ message: "success lb and cc" });
  } catch (err) {
    return res.json({ error: err.message });
  }
});
//get
app.get("/get", (req, res) => {
  ConnectModel.find()
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

app.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const loggedinuser = req.body.loggedinuser;
    const email = req.body.email;
    const jobdata = await ConnectModel.findOne({ postedBy: loggedinuser });
    const lbdata = await leaderboardModel.findOne({ email: email });

    if (!jobdata) {
      return res.json({ message: "no jobdata" });
    }
    if (!lbdata) {
      return res.json({ message: "no lb data" });
    }
    await ConnectModel.findOneAndDelete({ _id: id, postedBy: loggedinuser });
    // await leaderboardModel.updateOne({ email: email }, { $inc: { numJobPosts: -1 } });

    //totalpoints update
    await leaderboardModel.updateOne({ email: email }, [
      {
        $set: {
          numJobPosts: { $subtract: ["$numJobPosts", 1] },
          totalPoints: {
            $add: [
              { $multiply: [{ $subtract: ["$numJobPosts", 1] }, 10] },
              { $multiply: ["$dailyStreak", 5] },
              { $multiply: ["$referrals", 25] },
            ],
          },
        },
      },
    ]);

    //LEADERBOARDMODEL RANK
    const lbdatarank = await leaderboardModel.find().sort({ totalPoints: -1 });
    const ops = lbdatarank.map((user, index) => ({
      updateOne: {
        filter: { _id: user.id },
        update: { $set: { rank: index + 1 } },
      },
    }));
    await leaderboardModel.bulkWrite(ops);

    return res.json({ message: "Deleted Successfully!!!" });
  } catch (err) {
    res.json({ error: err.message });
  }
});

app.post("/regpost", async (req, res) => {
  try {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const regdata = await RegisterModel.findOne({ email: email });
    if (!regdata) {
      const encryptedpw = await bcrypt.hash(password, 10);
      await RegisterModel.create({
        name: name,
        email: email,
        password: encryptedpw,
      });
      return res.json({ message: "Registration Success!!!" });
    }
    if (regdata) {
      return res.json({ message: "Email Already Exists" });
    }
  } catch (err) {
    return res.json({ error: err.message });
  }
});
//referral code create
app.post("/createrefcode", async (req, res) => {
  try {
    const email = req.body.email;
    const regdata = await RegisterModel.findOne({ email: email });
    const referralCode = regdata._id.toString().substring(18, 24);
    console.log(referralCode);
    await RegisterModel.updateOne({ email: email }, { $set: { referralCode: referralCode } });
    return res.json({ message: "referral code created" });
  } catch (err) {
    return res.json({ error: err.message });
  }
});
//get referal code
app.get("/getrefcode", async (req, res) => {
  try {
    const loggedinemail = req.query.loggedinemail;
    const regdata = await RegisterModel.findOne({ email: loggedinemail });
    if (!regdata) {
      return res.json({ message: "no reg data" });
    }
    if (regdata) {
      const referralcode = regdata.referralCode;
      return res.json({ referralcode: referralcode });
    }
  } catch (err) {
    return res.json({ error: err.message });
  }
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

//google login
// const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
// app.post("/google", async (req, res) => {
//   const credential = req.body.credential;

//   //VERIFY TOKEN
//   //await - waits for google responds
//   const ticket = await client.verifyIdToken({
//     idToken: credential,
//     audience: process.env.GOOGLE_CLIENT_ID,
//   });
//   //to get user info from gg token
//   const payload = ticket.getPayload();
//   const { sub, email, name, picture } = payload;

//   RegisterModel.findOne({ email })
//     .then((user) => {
//       if (!user) {
//         RegisterModel.create({ name: name, email: email, sub: sub, picture: picture });
//       }
//       const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "30d" });
//       res.json({
//         message: "Login Success",
//         name: user.name,
//         email: user.email,
//         token,
//       });
//     })
//     .catch((err) => res.json(err));
// });
//google login
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
app.post("/google", async (req, res) => {
  const credential = req.body.credential;
  try {
    const ticket = await client.verifyIdToken({
      idToken: credential,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    const payload = ticket.getPayload();
    const { sub, email, name, picture } = payload();
    let user = await RegisterModel.findOne({ email });
    if (!user) {
      user = await RegisterModel.create({ name: name, email: email, sub: sub, picture: picture });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "30d" });
    res.json({ message: "Login Success", name: user.name, email: user.email, token });
  } catch (err) {
    console.log(err);
    res.json({ error: "Google login error" });
  }
});
//LEADERBOARD CREATE FROM JOBSPAGE
app.post("/createlb", async (req, res) => {
  try {
    const loggedinEmail = req.body.loggedinEmail;
    const name = req.body.loggedinuser;
    const lbdata = await leaderboardModel.findOne({ email: loggedinEmail });

    if (!lbdata) {
      await leaderboardModel.create({
        rank: null,
        name: name,
        numJobPosts: 0,
        dailyStreak: 1,
        referrals: 0,
        totalPoints: 0 * 10 + 1 * 5 + 0 * 25,
        email: loggedinEmail,
        openDate: new Date(),
      });
      //LEADERBOARDMODEL RANK
      const lbdata = await leaderboardModel.find().sort({ totalPoints: -1 });
      const ops = lbdata.map((user, index) => ({
        updateOne: {
          filter: { _id: user.id },
          update: { $set: { rank: index + 1 } },
        },
      }));
      await leaderboardModel.bulkWrite(ops);

      return res.json({ message: "created lb success" });
    }

    return res.json({ message: "lb already exists" });
  } catch (err) {
    return res.json({ error: err.message });
  }
});
//LEADERBOARD GET FROM DB - LB.JSX
app.get("/getlb", async (req, res) => {
  await leaderboardModel
    .find()
    .sort({ rank: 1 })
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

//LEADERBOARD UPDATE STREAK
app.post("/updateStreak", async (req, res) => {
  try {
    const postedBy = req.body.loggedinuser;
    const loggedinEmail = req.body.loggedinEmail;

    const today = new Date().toLocaleDateString("en-IN", {
      timeZone: "Asia/Kolkata",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });

    const lbdata = await leaderboardModel.findOne({ email: loggedinEmail });

    if (!lbdata) {
      return res.json({ message: "no lb data" });
    }
    const previousdate = lbdata.openDate;
    const previousdateString = new Date(previousdate).toLocaleDateString("en-IN", {
      timeZone: "Asia/Kolkata",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
    if (today !== previousdateString) {
      await leaderboardModel.updateOne(
        { email: loggedinEmail },
        { $set: { openDate: new Date() } }
      );
      // await leaderboardModel.updateOne({ email: loggedinEmail }, { $inc: { dailyStreak: 1 } });
      await leaderboardModel.updateOne({ email: loggedinEmail }, [
        {
          $set: {
            dailyStreak: { $add: ["$dailyStreak", 1] },
            totalPoints: {
              $add: [
                { $multiply: [{ $add: ["$dailyStreak", 1] }, 5] },
                { $multiply: ["$numJobPosts", 10] },
                { $multiply: ["$referrals", 25] },
              ],
            },
          },
        },
      ]);
      //LEADERBOARDMODEL RANK
      const lbdata = await leaderboardModel.find().sort({ totalPoints: -1 });
      const ops = lbdata.map((user, index) => ({
        updateOne: {
          filter: { _id: user._id },
          update: { $set: { rank: index + 1 } },
        },
      }));
      await leaderboardModel.bulkWrite(ops);
      return res.json({ message: "update streak working successfully" });
    }
  } catch (err) {
    return res.json({ message: err.message });
  }
});
//LEADERBOARD UPDATE REFERRAL
app.post("/updatereferrallb", async (req, res) => {
  try {
    const { refcode } = req.body;
    const regdata = await RegisterModel.findOne({ referralCode: refcode });
    if (regdata) {
      const referreremail = regdata.email;
      await leaderboardModel.updateOne({ email: referreremail }, [
        {
          $set: {
            referrals: { $add: ["$referrals", 1] },
            totalPoints: {
              $add: [
                { $multiply: [{ $add: ["$referrals", 1] }, 25] },
                { $multiply: ["$dailyStreak", 5] },
                { $multiply: ["$numJobPosts", 10] },
              ],
            },
          },
        },
      ]);
      //LEADERBOARDMODEL RANK
      const lbdata = await leaderboardModel.find().sort({ totalPoints: -1 });
      const ops = lbdata.map((user, index) => ({
        updateOne: {
          filter: { _id: user.id },
          update: { $set: { rank: index + 1 } },
        },
      }));
      await leaderboardModel.bulkWrite(ops);

      return res.json({ message: "update referral success" });
    }
  } catch (err) {
    return res.json({ error: err.message });
  }
});

//health
app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});
//port-lh
// app.listen(3000, () => {
//   console.log("Server is Running");
// });

//port-render
app.get("/", (req, res) => {
  res.send("Server is running!");
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server is Running");
});
