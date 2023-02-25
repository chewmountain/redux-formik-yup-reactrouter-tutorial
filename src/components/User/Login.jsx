// Формик на компонентах
import { Formik, Form, Field, ErrorMessage } from "formik";
// Yup = валидатор форм
import * as Yup from "yup";

import { useDispatch } from "react-redux";
import { login, logout } from "../../store/userSlice";

const Login = () => {
    const dispatch = useDispatch();

    const handleLogin = (values) => {
        dispatch(login(values));
    }

    const handleLogout = () => {
        dispatch(logout());
    }

    return (
        <div>
            <Formik
                // инициализирую инпуты, которые есть в моей форме. Название должны совпадать с name
                initialValues={{
                    name: "",
                    age: 0,
                    city: ""
                }}
                // Провожу валидацию с помощью Yup
                validationSchema = {Yup.object({
                    name: Yup.string()
                            .min(2, 'Имя должно содержать минимум 2 символа')
                            .required('Поле должно быть заполнено'),
                    age: Yup.number()
                            .min(1, 'Некорректный возраст')
                            .required('Поле должно быть заполнено'),
                    city: Yup.string()
                            .min(2, 'В названии должно быть более 2-х символов')
                            .required('Поле должно быть заполнено')
                })}
                // Вешаю обработчик событий
                onSubmit = {values => handleLogin(values)}
                // JSON.stringify(values, null, 2) - для передачи на сервер в формате JSON
            >
                <Form>
                    <h2>Enter your data:</h2>
                    <Field
                        id="name"
                        name="name"
                        type="text"
                    />
                    <ErrorMessage name="name" component="div" />
                    <Field
                        id="age"
                        name="age"
                        type="number"
                    />
                    <ErrorMessage name="age" component="div" />
                    <Field
                        id="city"
                        name="city"
                        type="text"
                    />
                    <ErrorMessage name="city" component="div" />
                    <button type="submit">Login</button>
                    <button type="button" onClick={() => handleLogout()}>Logout</button>
                </Form>
            </Formik>
        </div>
    );
};

export default Login;