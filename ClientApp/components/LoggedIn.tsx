import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import * as Models from './lego_types'


type loginState = { userName: string, password: string, loggedin: boolean, admin: boolean, user:Models.Users | "loading"}
export class loggedIn extends React.Component<RouteComponentProps<{}>, loginState> {
    constructor(props, context)
    {
        super(props)
        this.state = { userName: "",
                       password: "",
                       loggedin: false,
                       admin: false,
                       user: "loading"}
    }


    public render() {
        return <div>You logged in!</div>
    }
}
 