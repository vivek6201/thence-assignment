import * as yup from "yup";

export const schema = yup.object().shape({
  email: yup.string().email().required(),
  name: yup.string().min(8).max(32).required(),
});
