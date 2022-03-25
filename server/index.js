const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/cookie", (req, res) => {
  const cookies = ["A faithful friend is a strong defense.", "A soft voice may be awfully persuasive.", "All your hard work will soon pay off.", "An inch of time is an inch of gold.", "Any day above ground is a good day.",
];

  let cookieIndex = Math.floor(Math.random() * cookies.length);
  let randomCookie = cookies[cookieIndex];

  res.status(200).send(randomCookie)
});

app.listen(4000, () => console.log("Server running on 4000"));
