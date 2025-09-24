import * as yup from 'yup';

const phoneRegex = /^(?:\+\d{1,3}\s?)?(\d{10,})$/;

export const contactFormSchema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email address').required('Email is required'),
  phone: yup
    .string()
    .matches(phoneRegex, 'Phone number is not valid')
    .required('Phone number is required'),
  query: yup.string().required('Query is required'),
});