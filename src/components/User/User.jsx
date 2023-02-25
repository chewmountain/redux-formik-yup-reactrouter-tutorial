import { useSelector } from "react-redux";

import Login from "./Login";

const User = () => {
    // const user = useSelector(state => state.user.value);
    const user = useSelector(state => state.user.value);
    return (
        <div>
            <h2>My profile data</h2>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <p>City: {user.city}</p>
            <Login />
        </div>
    );
};

export default User;