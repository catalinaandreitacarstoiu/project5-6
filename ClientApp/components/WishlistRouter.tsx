import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import * as Models from './lego_types'

type ShoppingState = {model:Models.Lego | "loading"}
type ShoppingProps = {id:string}

export class WishlistRouter extends React.Component<RouteComponentProps<{id:string}>, ShoppingState> {
    constructor(props:RouteComponentProps<{id:string}>) {
        super(props);
        this.state = {model:"loading"};
    }

    componentWillMount()
    {
        // localStorage.setItem()
        
        return localStorage.setItem("wishlit",this.props.match.params.id.toString())
    }

    componentWillUpdate(NextProps:any, NextState:any)
    {
       localStorage.setItem("wishlist", NextProps.id.toString())
    }
    public render() {
        return <div>
            {/* <Wishlist /> */}
        </div>;
    }
}

