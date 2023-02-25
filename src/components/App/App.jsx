// Link - обычные ссылки, 
// NavLink - ссылки навигации, в которых можно использовать по условию (если ссылка активна) стили и классы
import { Routes, Route, Link, NavLink } from "react-router-dom";

// Лайфхак: в один файл импортирую все страницы, а далее достаю именнованным импортом из одного файла
import {
        HomePage,
        ReactRouter,
        Counter,
        User
    } from "../Components";

import "./App.scss";

const App = () => {
    // указал какой у меня в css активный класс для ссылок
    const activeClass = "active-link";

    // чтобы не верстать много ссылок, сделал массив, который после прохожу с помощью map
    const linkData = [
        {path: "/", name: "Home page"},
        {path: "/counter", name: "Counter + Redux"},
        {path: "/react-router", name: "React Router"},
        {path: "/user", name: "Formik + Yup + Redux"},
    ];

    const links = linkData.map((e, i) => (
        <NavLink key={i} to={e.path}>
            {/* Если ссылка активна, то применяю специальный класс */}
            {({ isActive }) => (
                <span
                    className={
                        isActive ? activeClass : undefined
                    }>{e.name}</span>
            )}
        </NavLink>
    ));
    return (
        <div>
            {/* <Link to="/">Home page</Link> */}
            {links}
            {/* Указываю роуты, которые есть у меня в приложении
            а в index.jsx все приложение оборачиваю в BrowserRouter */}
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="counter" element={<Counter />} />
                <Route path="react-router" element={<ReactRouter />} />
                <Route path="user" element={<User />} />
            </Routes>
        </div>
    );
};

export default App;
