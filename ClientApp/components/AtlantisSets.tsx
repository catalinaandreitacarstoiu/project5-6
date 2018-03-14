import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import * as Models from './lego_types'
import {ProductLoad} from './ProductLoad';
import {Search} from './SearchFunction';

type AtlantisSetsComponentProps = {}
type AtlantisSetsComponentState = { products: Models.Lego[] | "loading" }
type LoadProducts = { load: Models.Lego }

export async function get_fusionproduct(theme:string): Promise<Models.Lego[]> {
    let res = await fetch(`./custom/AtlantisSets/${theme}`, { method: 'get', credentials: 'include', headers: { 'content-type': 'application/json' } })
    let json = await res.json()
    console.log("received correct products", json)
    return json
}

export class AtlantisSets extends React.Component<RouteComponentProps<{}>, AtlantisSetsComponentState> {
    constructor(props, context) {
        super();
        this.state = { products: "loading" };
    }

    componentWillMount() {
        get_fusionproduct("Atlantis").then(products => this.setState({ ...this.state, products: products }))
        console.log("mapping", this.state.products)
    }

    render() {
        if (this.state.products == "loading") return <div>loading...</div>
        else
        return <div>
            <Search products={this.state.products}/>
           
            {console.log("render", this.state.products)}
        </div>;
    }
}

