import { FieldError, UseFormRegister } from "react-hook-form";
import { z, ZodType } from "zod";

export type FormData = {
    name: string
    email: string
    password: string
};

export const UserSchema: ZodType<FormData> = z
    .object({
        name: z.string()
            .min(1, { message: "Requer o campo nome" }),
        email: z.string().email('Requer um e-mail válido'),
        password: z
            .string()
            .min(6, { message: "A senha deve ter no mínimo 6 caracteres" }),
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
    | "email"
    | "password";