const dataAPI = require("../models/contacts");
const HttpError = require("../helpers/HttpError");
const ctrlWrapper = require("../helpers/ctrlWrapper");

const getAllContacts = async (req, res) => {
  const result = await dataAPI.listContacts();

  res.json(result);
};

const getContactById = async (req, res) => {
  const { contactId } = req.params;

  const result = await dataAPI.getContactById(contactId);

  if (!result) throw HttpError(404);

  res.json(result);
};

const addContact = async (req, res) => {
  const result = await dataAPI.addContact(req.body);

  res.status(201).json(result);
};

const deleteContactById = async (req, res) => {
  const { contactId } = req.params;

  const result = await dataAPI.removeContact(contactId);

  if (!result) throw HttpError(404);

  res.json({ message: "contact deleted" });
};

const updateContactById = async (req, res) => {
  const { contactId } = req.params;

  const result = await dataAPI.updateContact(contactId, req.body);

  if (!result) throw HttpError(404);

  res.json(result);
};

module.exports = {
  getAllContacts: ctrlWrapper(getAllContacts),
  getContactById: ctrlWrapper(getContactById),
  addContact: ctrlWrapper(addContact),
  deleteContactById: ctrlWrapper(deleteContactById),
  updateContactById: ctrlWrapper(updateContactById),
};
