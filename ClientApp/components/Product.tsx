import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import * as Models from './lego_types'


type StarwarsProductComponentProps = {}
type StarwarsProductComponentState = { products: Models.Lego[] | "loading" }
type LoadProducts = { load: Models.Lego }

export async function get_product(): Promise<Models.Lego[]> {
    let res = await fetch(`./custom/Product`, { method: 'get', credentials: 'include', headers: { 'content-type': 'application/json' } })
    let json = await res.json()
    console.log("received correct products", json)
    return json
}

export class Product extends React.Component<RouteComponentProps<{}>, StarwarsProductComponentState> {
    constructor(props, context) {
        super();
        this.state = { products: "loading" };
    }

    componentWillMount() {
        get_product().then(products => this.setState({ ...this.state, products: products }))
        console.log("mapping", this.state.products)
    }

    render() {
        if (this.state.products == "loading") return <div>loading...</div>
        else
        return <div>
            {this.state.products.map(products => <div> name: <ProductLoad load={products} /> </div>)}
            {console.log("render", this.state.products)}
        </div>;
    }
}

export class ProductLoad extends React.Component<LoadProducts, {}> {
    constructor(props: LoadProducts) {
        super(props);
        this.state = {};
    }

    render() {
        // console.log("rendering", this.props.load.name)
        return <div>
            {this.props.load.name}
            
        </div>;
    }
}
