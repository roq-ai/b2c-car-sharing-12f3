import * as yup from 'yup';
import { carValidationSchema } from 'validationSchema/cars';

export const companyValidationSchema = yup.object().shape({
  description: yup.string(),
  image: yup.string(),
  name: yup.string().required(),
  user_id: yup.string().nullable().required(),
  car: yup.array().of(carValidationSchema),
});
