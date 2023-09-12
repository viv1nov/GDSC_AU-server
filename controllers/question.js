import { QueModel } from "../model/Que1.js";

export const submitQuestions = async (req, res) => {
  const { owner, email, que1, que2, que3, que4, que5, task, time, submitedBy } =
    req.body;

  try {
    const newSubmit = new QueModel({
      owner,
      email,
      que1,
      que2,
      que3,
      que4,
      que5,
      task,
      time,

      submitedBy,
    });
    await newSubmit.save();
    return res.json(newSubmit);
  } catch (error) {
    return res.json(error);
  }
};

export const fetchRespones = async (req, res) => {
  try {
    const response = await QueModel.find({});
    return res.json(response);
  } catch (error) {
    return res.json(error);
  }
};

export const fetchSingleResponse = async (req, res) => {
  const resID = req.params.resID;
  try {
    console.log(resID);
    const single = await QueModel.find({ submitedBy: resID });
    return res.json(single);
  } catch (error) {
    return res.json(error);
  }
};
