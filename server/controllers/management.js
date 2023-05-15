import User from "../models/User.js";

export const getAdmins = async (req, res) => {
  try {
    const admins = await User.find({ role: "admin" }).select("-password");
    res.status(200).send(admins);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};
