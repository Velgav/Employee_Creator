import * as z from "zod";

export const EmployeeContactSchema = z.object({
    emailAddress: z.string().email("Email should be valid").min(1, "Email is mandatory"),
    mobileNumber: z.string().min(1, "Mobile number is mandatory"),
    address: z.string().optional(),
});

export type EmployeeContactData = z.infer<typeof EmployeeContactSchema>;
