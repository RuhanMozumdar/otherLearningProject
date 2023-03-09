const mailchimp = require("@mailchimp/mailchimp_marketing");
const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));

mailchimp.setConfig({
  apiKey: "9edd6ffc6733cac3575843d75c1e3358-us21",
  server: "us21",
});

async function getInformation() {
  //   const response = await mailchimp.ping.get();
  //   console.log(response);
  //   const response = await mailchimp.lists.getAllLists();
  //   console.log(response);
  // const response = await mailchimp.lists.getListMembersInfo("2b3fada4fe");
  // console.log(response);
}

//  getInformation();

const addMembers = async () => {
  const response = await mailchimp.lists.addListMember("2b3fada4fe", {
    email_address: "messi867@gmail.com",
    status: "subscribed",
  });
  console.log(response);
};

//   addMembers();

app.get("/audiance", async (req, res, next) => {
  const response = await mailchimp.lists.getListMembersInfo("2b3fada4fe");
  console.log(response);
  res.status(200).json(response);
});

app.post("/audiance", async (req, res, next) => {
    const {email,status}=req.body;

  const response = await mailchimp.lists.addListMember("2b3fada4fe", {
    email_address: email,
    status: "pending",
  });
  res.status(200).json(response);
});

app.listen(3000, () => console.log("server is running on 3000"));

// http://localhost:3000/audiance
