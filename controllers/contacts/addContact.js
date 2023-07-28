import { Contact } from "../../models";

const addContact = async (req, res) => {
  const result = await Contact.create(req.body);

  res.status(201).json(result);
};

export default addContact;
