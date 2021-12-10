import React, { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { UserContext } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (
        <div>
            <Routes>
                <Route
                    {...rest}
                    render={({ location }) =>
                        loggedInUser.email ? (
                            children
                        ) : (
                            <Navigate to={{
                                pathname: "/signIn",
                                state: { from: location }
                            }}
                            />
                        )
                    }
                />
            </Routes>
        </div>
    );
};

export default PrivateRoute;

