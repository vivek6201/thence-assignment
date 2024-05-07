import * as yup from "yup";

// yup schema, this is used by react hook form to validate the form with defined structure.

export const schema = yup.object().shape({
  email: yup.string().email().required(),
  name: yup.string().min(8).max(32).required(),
});
