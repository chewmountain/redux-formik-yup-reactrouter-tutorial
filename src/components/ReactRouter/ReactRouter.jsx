const ReactRouter = () => {
    return (
        <div>
            <h2>React Router Dom</h2>
            <p>
                Чтобы переключаться между страницами необходим React Router Dom.
            </p>
            <p>Установка:</p>
            <code>
                npm install react-router-dom
            </code>
            <p>
                В App.js необходимо создать роуты. Для этого импортируем необходимые зависимости:
            </p>
            <code>
                {`import { Routes, Route } from "react-router-dom";`}
            </code>
            <p>
                Далее импортируем наши компоненты и создаем роуты:
            </p>
            <code>
                {`<Routes>`} <br />
                {` <Route index element={<HomePage />} />`} <br />
                {` <Route path="counter" element={<Counter />} />`} <br />
                {` <Route path="react-router" element={<ReactRouter />} />`} <br />
                {`<Routes />`}
            </code>
        </div>
    );
};

export default ReactRouter;