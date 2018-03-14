import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import * as Models from './lego_types'
import { ProductLoad } from './ProductLoad';
import { NinjagoSets } from './NinjagoSets';
import {FormGroup, FormControl} from 'react-bootstrap'

type state = { search: "" }
type productprops = { products: Models.Lego[] }

export class Search extends React.Component<productprops, state>{
    constructor(props: productprops) {
        super(props);
        this.state = { search: "" }
    }


    updateSearch(event) {
        this.setState({ search: event.target.value.substr(0, 20) });
    }

    render() {
        let filteredproducts = this.props.products.filter((products) => { return products.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1; });
        
        return <form>
            <FormGroup>
            <FormControl
						type="text"
						value={this.state.search}
						placeholder="Enter text"
						onChange={this.updateSearch.bind(this)}
					/>

            {/* <input type="text" className=""
                value={this.state.search}
                onChange={this.updateSearch.bind(this)} /> */}
                {filteredproducts.map((products) => {
            return <ProductLoad load={products}
            key = {products.item_Number}
            />
        })}

            
           

         </FormGroup>

        </form>
    }

}