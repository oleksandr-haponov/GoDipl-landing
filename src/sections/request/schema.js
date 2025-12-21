import { z } from 'zod';

export const requestSchema = z.object({
  name: z.string().min(2, 'Введіть коректне ім’я'),
  contact: z.string().min(3, 'Введіть контакт для зв’язку'),
  project: z.string().min(5, 'Опишіть тему роботи'),
});
