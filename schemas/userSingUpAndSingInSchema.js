import Joi from "joi";

import { emailRegexp, subscriptionList } from "../constants/constants.js";

const userSingUpAndSingInSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).required(),
  subscription: Joi.string().valid(...subscriptionList),
});
export default userSingUpAndSingInSchema;
