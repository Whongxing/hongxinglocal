import React from "react";
import {Redirect,Route} from "react-router-dom";
import {
 message
} from 'antd';

export  default  function PrivateRoute({ children, ...rest }) {
    console.log({ children, ...rest });
    return (
        <Route
            {...rest}
            render={({ location }) =>
                fakeAuth.isAuthenticated() ? (
                    children
                ) : (
                    message.error("请先登录"),
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
);}

export const fakeAuth = {
    isAuthenticated() {
        return localStorage.getItem("token");
    },
    authenticate(cb) {
        // fakeAuth.isAuthenticated = true;
        setTimeout(cb, 100); // fake async
    },
    signout(cb) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setTimeout(cb, 100);
    }
};
