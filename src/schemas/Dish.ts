import { FieldError, UseFormRegister } from "react-hook-form";
import { z, ZodType } from "zod";

export type FormData = {
    name:        string
    category:    string
    ingredients: string
    price:       number
    description: string
};

export const DishSchema: ZodType<FormData> = z
    .object({
        name: z.string()
            .min(1, { message: "Requer o campo nome" }),
        category: z.string()
            .min(1, { message: "Requer o campo nome" }),
        ingredients: z.string()
            .min(1, { message: "Requer o campo nome" }),
        price: z.number()
            .min(0, { message: "Requer o campo nome" }),
        description: z.string()
            .min(1, { message: "Requer o campo nome" }),
    });

export type FormFieldProps = {
    id: string
    type: string;
    placeholder: string;
    name: ValidFieldNames;
    error: FieldError | undefined;
    valueAsNumber?: boolean;
    register: UseFormRegister<FormData>;
};

export type ValidFieldNames =
    | "name"
    | "category"
    | "ingredients"
    | "price"
    | "description"