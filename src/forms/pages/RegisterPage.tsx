import useFom from "../hooks/useForm";
import "../styles/styles.css"



enum fields {
    name = "name",
    email = "email",
    password = "password",
    passwordConfirmation = "passwordConfirmation"
}

function RegisterPage() {

    const { formData, handleChangeField, resetForm } = useFom({
        [fields.name]: "",
        [fields.email]: "",
        [fields.password]: "",
        [fields.passwordConfirmation]: ""
    });

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(formData);
    }

    return (
        <div>
            <h1>Register Page</h1>

            <form onSubmit={handleSubmit}>
                <input
                    id={fields.name}
                    onChange={handleChangeField}
                    value={formData[fields.name]}
                    type="text"
                    placeholder="name"
                />
                <input
                    id={fields.email}
                    onChange={handleChangeField}
                    value={formData[fields.email]}
                    type="email"
                    placeholder="email"
                />
                <input
                    id={fields.password}
                    onChange={handleChangeField}
                    value={formData[fields.password]}
                    type="password"
                    placeholder="password"
                />
                <input
                    id={fields.passwordConfirmation}
                    onChange={handleChangeField}
                    value={formData[fields.passwordConfirmation]}
                    type="password"
                    placeholder="confirm password"
                />
                <div className="container-buttons">

                    <button>Create</button>
                    <button onClick={resetForm} type="button">Cancel</button>
                </div>
            </form>
        </div>
    );
}

export default RegisterPage;