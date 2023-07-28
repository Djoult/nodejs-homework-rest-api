import { Contact } from "../../models";
import HttpError from "../../helpers";

const getContactById = async (req, res) => {
  const { contactId } = req.params;

  const result = await Contact.findById(contactId);

  if (!result) throw HttpError(404);

  res.json(result);
};

export default getContactById;
