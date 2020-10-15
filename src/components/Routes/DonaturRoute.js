import React from 'react'
import { Route, Redirect, withRouter } from 'react-router-dom'

const DonaturRoute = ({ component: Component, match, path, location, ...rest }) => {
    const ok = localStorage.getItem("HAYUBERBAGI:token");

    localStorage.removeItem("HAYUBERBAGI:redirect");

    return (
        <Route
            {...rest}
            render={(props) => ok ?
                (
                    <Component {...props} />
                ) : path === "/donasi" ?
                    (<Redirect to={`/login?path=${location.pathname}`} />) :
                    (<Redirect to={`/private?path=${location.pathname}`} />)
            }
        />
    )
}

export default withRouter(DonaturRoute);