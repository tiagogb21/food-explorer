import { FormFieldProps } from '@/schemas/User';

export const FormField: React.FC<FormFieldProps> = ({
    id,
    type,
    placeholder,
    name,
    register,
    error,
    valueAsNumber,
}) => {
    return (
        <div className="flex flex-col gap-2">
            <label htmlFor={id} className="text-light-400">{name.split(' ').map((char) => char.charAt(0).toUpperCase() + char.slice(1)).join(' ')}</label>
            <input
                id={id}
                type={type}
                placeholder={placeholder}
                className="w-full p-4 rounded-md text-light-500 bg-dark-900"
                {...register(name, { valueAsNumber })}
            />
            {error && <span className="text-tomato-400">{error.message}</span>}
        </div>
    );
};
