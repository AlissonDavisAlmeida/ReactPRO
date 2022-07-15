import { ErrorMessage, useField } from "formik";

interface MyCheckBoxInputProps {
    label: string;
    name: string;
    [key: string]: any;
}

export const MyCheckBoxInput = ({ label, ...props }: MyCheckBoxInputProps) =>{


    const [field] = useField({...props, type: "checkbox"})

    return (
        <>
            <label>
                <input type="checkbox" {...field} {...props}/>
                {label}

            </label>
            <ErrorMessage name={props.name} component="span"/>

        </>
    );
}

