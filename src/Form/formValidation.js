import { z } from 'zod';

export const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  companyName: z.string().min(2, 'Company name must be at least 2 characters'),
  countryCode: z.string().min(1, 'Please select country code'),
  phoneNumber: z.string().regex(/^[0-9]{10}$/, 'Phone number must be 10 digits'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  category: z.string().min(1, 'Please select a category'),
  hearAboutUs: z.string().min(1, 'Please select an option')
});