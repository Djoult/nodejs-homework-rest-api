import { Contact } from "../../models";

const getAllContacts = async (req, res) => {
  const result = await Contact.find({}, "-createdAt -updatedAt");

  res.json(result);
};

export default getAllContacts;
