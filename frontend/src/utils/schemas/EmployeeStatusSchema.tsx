import * as z from "zod";

export const EmployeeStatusSchema = z.object({
    employeeType: z.union([z.enum(['PERMANENT', 'CONTRACT']), z.string()]),
    startDate: z.number().min(0, { message: "Start date must be a valid timestamp" }),
    finishDate: z.number().min(0, { message: "Finish date must be a valid timestamp if provided" }).nullable(),
    isOngoing: z.boolean(),
    isPartTime: z.boolean(),
    hours: z.number().optional(),
});

export type EmployeeStatusData = z.infer<typeof EmployeeStatusSchema>;
