import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink, Redirect } from 'react-router-dom';
import * as Models from './lego_types'
import { ProductLoad } from './DetailProduct'

export async function delete_correctproduct(user_id: number, item_number:string) {
    let res = await fetch(`./ShoppingcartController/Delete/${user_id}/${item_number}`, { method: 'delete', credentials: 'include', headers: { 'content-type': 'application/json' } })
    return console.log("deleted correct product")
}

type LoadProducts = { load: Models.Lego, id: string, deleteItem: (index: string) => void }




export class Purchase extends React.Component<LoadProducts,  {deleteID: string}> {
    constructor(props, conetxt) {
        super(props)
        this.state = {deleteID: ""}
    }

    productDeleten()
    {   let user =  JSON.parse(sessionStorage.getItem("user"))
        user != null? 
        delete_correctproduct(user, this.props.load.item_Number).then(() => location.reload())
        : null  
    }
    

    render() {
        return <div>
            You have paid!
            {this.productDeleten()}
        </div>

    }
}

