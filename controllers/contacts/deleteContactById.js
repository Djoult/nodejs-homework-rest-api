import { Contact } from "../../models";
import HttpError from "../../helpers";

const deleteContactById = async (req, res) => {
  const { contactId } = req.params;

  const result = await Contact.findByIdAndDelete(contactId);

  if (!result) throw HttpError(404);

  res.json({ message: "contact deleted" });
};

export default deleteContactById;
