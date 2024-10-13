import * as z from "zod";
import { EmployeeContactSchema } from "./EmployeeContactSchema";
import { EmployeeStatusSchema } from "./EmployeeStatusSchema";

export const EmployeeSchema = z.object({
  id: z.number(),
  createdAt: z.string().transform((date) => new Date(date)), // Transforming to Date object
  updatedAt: z.string().transform((date) => new Date(date)), // Transforming to Date object
  firstName: z.string().min(1, "First name is mandatory").max(50),
  lastName: z.string().min(1, "Last name is mandatory").max(50),
  gender: z.union([z.enum(["MALE", "FEMALE", "OTHER"]), z.string()]),
  department: z.string().max(100).optional().nullable(), // Make department nullable
  salary: z.number().optional().nullable(), // Make salary nullable
  position: z.string().max(100).optional().nullable(), // Make position nullable
  contact: z.lazy(() => EmployeeContactSchema), // Updated to reference the defined schema
  status: z.lazy(() => EmployeeStatusSchema), // Required field
});

export const EmployeeResponseSchema = z.object({
  id: z.number(),
  createdAt: z.string().transform((date) => new Date(date)), // Transforming to Date object
  updatedAt: z.string().transform((date) => new Date(date)),
  firstName: z.string().min(1, "First name is mandatory").max(50),
  lastName: z.string().min(1, "Last name is mandatory").max(50),
  gender: z.union([z.enum(["MALE", "FEMALE", "OTHER"]), z.string()]),
  department: z.string().max(100).optional(),
  salary: z.number().optional(),
  position: z.string().max(100).optional(),
  contacts: z.array(EmployeeContactSchema),
  status: z.lazy(() => EmployeeStatusSchema),
});

export const EmployeePayloadSchema = z.object({
  firstName: z.string().min(1, "First name is mandatory").max(50),
  lastName: z.string().min(1, "Last name is mandatory").max(50),
  gender: z.union([z.enum(["MALE", "FEMALE", "OTHER"]), z.string()]),
  department: z.string().max(100).optional(),
  salary: z.number().optional(),
  position: z.string().max(100).optional(),
  contact: z.lazy(() => EmployeeContactSchema).optional(),
  status: z.lazy(() => EmployeeStatusSchema).optional(),
});

export const EmployeeFormSchema = z.object({
  firstName: z.string().min(1, "First name is mandatory").max(50),
  lastName: z.string().min(1, "Last name is mandatory").max(50),
  gender: z.union([z.enum(["MALE", "FEMALE", "OTHER"]), z.string()]),
  department: z.string().max(100).optional(),
  salary: z.number().optional(),
  position: z.string().max(100).optional(),
  emailAddress: z.string().email("Email should be valid").min(1, "Email is mandatory"),
  mobileNumber: z.string().min(1, "Mobile number is mandatory"),
  address: z.string().optional(),
  employeeType: z.union([z.enum(['PERMANENT', 'CONTRACT']), z.string()]),
  startDate: z.number().min(0, { message: "Start date must be a valid timestamp" }),
  finishDate: z.number().min(0, { message: "Finish date must be a valid timestamp if provided" }).nullable(),
  isOngoing: z.boolean(),
  isPartTime: z.boolean(),
  hours: z.number().optional(),
});

export type EmployeeData = z.infer<typeof EmployeeSchema>;

export type EmployeeFormData = z.infer<typeof EmployeeFormSchema>;

export type EmployeePayloadData = z.infer<typeof EmployeePayloadSchema>;

export type EmployeeResponseData = z.infer<typeof EmployeeResponseSchema>;