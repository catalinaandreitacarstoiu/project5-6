import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import * as Models from './lego_types'
import { ProductLoad } from './DetailProduct'
import {PageHeader, Button} from 'react-bootstrap'

export async function get_correctproduct(item_Number: string): Promise<Models.Lego> {
    let res = await fetch(`./custom/CorrectProduct/${item_Number}`, { method: 'get', credentials: 'include', headers: { 'content-type': 'application/json' } })
    let json = await res.json()
    console.log("received correct products", json)
    return json
}

export async function get_correctuser(user_id: number): Promise<Models.Wishlist[]> {
    let res = await fetch(`./WishlistController/CorrectUser/${user_id}`, { method: 'get', credentials: 'include', headers: { 'content-type': 'application/json' } })
    let json = await res.json()
    console.log("received correct users", json)
    return json
}

export async function delete_correctproduct(user_id: number, item_number: string) {
    let res = await fetch(`./WishlistController/Delete/${user_id}/${item_number}`, { method: 'delete', credentials: 'include', headers: { 'content-type': 'application/json' } })
    return console.log("deleted correct product")

}

export async function CreateShoppingcart(Item_Number: string, user_id: number, amount:number) {
    let res = await fetch(`./ShoppingcartController/CreateShoppingcart/${Item_Number}/${user_id}/${amount}`, { method: 'post', credentials: 'include', headers: new Headers({ 'content-type': 'application/json' }) })

    return console.log("made shoppingcart", res)
}


export async function get_correctshoppingcartproduct(item_Number: string, user_id: number): Promise<Models.Shoppingcart[]> {
    let res = await fetch(`./ShoppingcartController/Shoppingcartalert/${item_Number}/${user_id}`, { method: 'get', credentials: 'include', headers: new Headers({ 'content-type': 'application/json' }) })
    let json = await res.json()
    console.log("received correct products", json)
    return json
}

type WishlistRouterState = { legopr: Models.Lego[], userStatus: "Ingelogd" | 'Uitgelogd', user: Models.Users | "loading", wishlist2: Models.Wishlist[] }

export class WishlistRouter extends React.Component<RouteComponentProps<{ wishlist: number, lego: Models.Lego }>, WishlistRouterState> {
    constructor(props: RouteComponentProps<{ wishlist: number, lego: Models.Lego }>) {
        super(props)
        this.state = { legopr: [], userStatus: "Uitgelogd", user: "loading", wishlist2: [] }
    }

    componentWillMount() {
        let prevList = localStorage.getItem("wishlist")
        let currentList = prevList == null ? null : prevList.split(",")

        sessionStorage.getItem("userStatus") != "Ingelogd" ?


            currentList != null
                ? currentList.map(b =>
                    get_correctproduct(b).then(b => this.setState({ ...this.state, legopr: this.state.legopr.concat(b) }))
                        .catch(error => console.error(error)))

                : null

            :

            this.state.wishlist2 != null && sessionStorage.getItem("userStatus") == "Ingelogd" ?
                (get_correctuser(parseInt(sessionStorage.getItem("user"))).
                    then(pr => this.setState({ ...this.state, wishlist2: pr.concat(this.state.wishlist2) },
                        () => this.state.wishlist2.map((p: Models.Shoppingcart) => get_correctproduct(p.item_Number).
                            then(p => this.setState({ ...this.state, legopr: this.state.legopr.concat(p) })))))).
                    catch(error => console.error(error))
                :
                null

    }

    deleteItem(NextState: any) {

        let prevListDelete = localStorage.getItem("wishlist")
        let prevList = localStorage.getItem("wishlist")
        let nextList = prevListDelete != null ? (prevListDelete.replace(NextState, ""))
            : ""
        let currentList = prevList == null ? null
            : prevList.split(",").reverse()
        localStorage.setItem("wishlist", nextList != null ? nextList
            : nextList)


        currentList != null ? currentList.map(b =>
            get_correctproduct(b).then(b => this.setState({ ...this.state, legopr: this.state.legopr.concat(b) }), () => location.reload())
                .catch(error => console.error(error))
        )
            : null





    }


    render() {
        console.log(this.state.legopr)
        return <div>

            {this.state.legopr.map((lego: Models.Lego) =>
                <Wishlist load={lego} id={lego.item_Number} deleteItem={(p) => this.deleteItem(p)} />)}


        </div>
    }
}

type WishlistProps = { id: number }

type LoadProducts = { load: Models.Lego, id: string, deleteItem: (index: string) => void }
export class Wishlist extends React.Component<LoadProducts, { cart: boolean, load: Models.Lego | "loading" }> {
    constructor(props: LoadProducts) {
        super(props);
        this.state = { cart: false, load: "loading" };
    }

    componentWillUpdate(NextProps: any, NextState: any) {


        let exists = NextState.load.item_Number
        console.log("exist", NextState.wishlist, NextState.cart);

        if (NextState.cart == true) {
            //     let currentlist2 = localStorage.getItem("shoppingcart")
            //     let list2 = currentlist2 == null ? NextState.load.item_Number : currentlist2.valueOf().toString() + "," + NextState.load.item_Number
            //     console.log("2e", NextState);
            //     this.setState({...this.state, cart: false})
            //     return localStorage.setItem("shoppingcart",  currentlist2 == null ? list2 : currentlist2.includes(exists)? (alert("You already have this item in your shoppingcart."), currentlist2) : list2 )

            // }

            let lijst = []
            let cart = localStorage.getItem("cart")
            if (cart != null) {
                if (cart.includes(exists)) {
                    alert("You already have this in your shoppingcart! Change the amount in the shoppingcart.")
                    location.reload()
                }
                else {
                    let cartlijst = JSON.parse(cart)
                    let item = { lego: NextState.load.item_Number, amount: 1 }
                    localStorage.setItem("cart", JSON.stringify(cartlijst.concat(item)))
                    alert("Added to shoppingcart! Product remains in the wishlist just in case you need it later again!")
                    
                }
            }
            
            else {
                let item = { lego: NextState.load.item_Number, amount: 1 }
                console.log({ item })
                localStorage.setItem("cart", JSON.stringify(lijst.concat(item)))
                console.log("concat", lijst)
                alert("Added to shoppingcart! Product remains in the wishlist just in case you need it later again!")
                    
                
            }
        }

        else {
            console.log("else", NextState);
        }


    }



    productDeleten() {
        let user = JSON.parse(sessionStorage.getItem("user"))
        user != null ?
            delete_correctproduct(user, this.props.load.item_Number).then(() => location.reload())
            : null
    }

    Createnshop() {
        let user = JSON.parse(sessionStorage.getItem("user"))

        get_correctshoppingcartproduct(this.props.load.item_Number, user).then(e => {
            console.log({ e })
            if (e.length == 0) {
                CreateShoppingcart(this.props.load.item_Number, user, 1)
                alert("added to shoppingcart")
            }
            else {

                alert("You already have this product in your shoppingcart! Change the amount in the shoppingcart.")
            }

        }
        )
    }

    render() {
        // console.log("rendering", this.props.load.name)
        return <div className="HeaderStyle" >

            <div className="HeaderStyle">           
            <div className="container">
            <div className="row"> 
            <div className="col col-md-5">
                        <h1>{this.props.load.name}</h1>
                        <br></br>
                        <img src={this.props.load.image_URL} width={300} height={200} />
                        <br></br>
                        </div>
                        <div className="col col-md-5 col-offset-3">
                        
                        </div>
                        <div className="buttoonn">
                        <div className="pricee">
                        <h3>Price: €{this.props.load.usD_MSRP}</h3>

                        <Button bsStyle="danger" bsSize="large" onClick={() => sessionStorage.getItem("userStatus") == "Ingelogd" ?
                            this.productDeleten()
                            :
                            this.props.deleteItem(this.props.load.item_Number)}>Remove from wishlist </Button>
                        </div>
                        <br></br>
<Button bsStyle="danger" bsSize="large" onClick={() => sessionStorage.getItem("userStatus") == "Ingelogd" ?
                            this.Createnshop()
                            :
                            this.setState({ ...this.state, load: this.props.load, cart: true })}>Add to shoppingcart </Button>
                    </div>
        </div>
        </div>
        </div>
        </div>
    }
}

