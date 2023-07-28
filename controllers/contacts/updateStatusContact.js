import { Contact } from "../../models";
import HttpError from "../helpers";

const updateStatusContact = async (req, res) => {
  const { contactId } = req.params;

  const result = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });

  if (!result) throw HttpError(404);

  res.json(result);
};

export default updateStatusContact;
