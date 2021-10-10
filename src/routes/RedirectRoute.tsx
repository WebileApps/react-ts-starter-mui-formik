import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router';
import { RootStateType } from '../redux-store/reducers';
import { AuthRoutePropsType } from './ProtectedRoute';

function RedirectRoute({ component: Component, path = '', ...rest }: AuthRoutePropsType) {
    return (
        <Route
            {...rest}
            render={(props) =>
                rest.isLoggedIn ? (
                    <Redirect to="/dashboard" from={props.location.pathname} />
                ) : (
                    <Component {...props} />
                )
            }
        />
    );
}

export default connect(({ auth }: RootStateType) => {
    return { isLoggedIn: !!auth.token };
}, {})(RedirectRoute);
