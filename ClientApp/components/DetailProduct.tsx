import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import * as Models from './lego_types'
import {PageHeader, Button} from 'react-bootstrap'


type StarwarsProductComponentProps = {}
type StarwarsProductComponentState = { products: Models.Lego | "loading", Item_Number: Models.Users | "loading", ID: Models.Users | "loading" }
type LoadProducts = { load: Models.Lego, id: string }

export async function addCart(item_Number:string, productName:string) {
    let res = await fetch(`./DataController/addCart/${item_Number}/${productName}`, { method: 'post', credentials: 'include', headers: { 'content-type' : 'application/json'}})
    console.log('added to cartdata')
}

export async function addWish(item_Number:string, productName:string) {
    let res = await fetch(`./DataController/addWish/${item_Number}/${productName}`, { method: 'post', credentials: 'include', headers: { 'content-type' : 'application/json'}})
    console.log('added to wishlistdata')
}


export async function get_correctproduct(item_Number: string): Promise<Models.Lego> {
    let res = await fetch(`./custom/CorrectProduct/${item_Number}`, { method: 'get', credentials: 'include', headers: new Headers({ 'content-type': 'application/json' }) })
    let json = await res.json()
    console.log("received correct products", json)
    return json
}

export async function get_correctshoppingcartproduct(item_Number: string, user_id: number): Promise<Models.Shoppingcart[]> {
    let res = await fetch(`./ShoppingcartController/Shoppingcartalert/${item_Number}/${user_id}`, { method: 'get', credentials: 'include', headers: new Headers({ 'content-type': 'application/json' }) })
    let json = await res.json()
    console.log("received correct products", json)
    return json
}

export async function CreateWishlist(Item_Number: string, user_id: number) {
    let res = await fetch(`./WishlistController/CreateWishlist/${Item_Number}/${user_id}`, { method: 'post', credentials: 'include', headers: new Headers({ 'content-type': 'application/json' }) })

    return console.log("made wishlist", res)
}

export async function CreateShoppingcart(Item_Number: string, user_id: number, amount: number, price:string) {
    let res = await fetch(`./ShoppingcartController/CreateShoppingcart/${Item_Number}/${user_id}/${amount}/${price}`, { method: 'post', credentials: 'include', headers: new Headers({ 'content-type': 'application/json' }) })

    return console.log("made shoppingcart", res)
}


export class CorrectProduct extends React.Component<RouteComponentProps<{ item_Number: string, ID: number }>, StarwarsProductComponentState> {
    constructor(props, context) {
        super();
        this.state = { products: "loading", Item_Number: "loading", ID: "loading" };
    }

    componentWillMount() {
        get_correctproduct(this.props.match.params.item_Number).then(products => this.setState({ ...this.state, products: products }))
        console.log("mapping", this.state.products)

        //  CreateWishlist(this.props.match.params.item_Number, this.props.match.params.ID).then(users => this.setState({...this.state, users:users}))
    }

    render() {
        if (this.state.products == "loading") return <div>loading...</div>
        else
            return <div>

                <ProductLoad lego={this.state.products} />

            </div>;
    }
}


type ShoppingState = { cart: boolean, wishlist: boolean }
type ProductLoadState = { lego: Models.Lego | "loading", cart: boolean, wishlist: boolean, userStatus: "Ingelogd" | 'Uitgelogd' | 'AdminIngelogd', ID: Models.Users | "loading" }
type ProductLoadProps = { lego: Models.Lego }
export class ProductLoad extends React.Component<ProductLoadProps, ProductLoadState> {
    constructor(props: ProductLoadProps) {
        super(props)
        this.state = { lego: "loading", cart: false, wishlist: false, userStatus: "Uitgelogd", ID: "loading" }
    }

    componentWillUpdate(NextProps: any, NextState: any) {



        let exists = NextState.lego.item_Number
        console.log("exist", NextState.wishlist, NextState.cart);


        if (NextState.wishlist == true && NextState.cart == false) {
            let currentlist = localStorage.getItem("wishlist")
            let list = currentlist == null ? NextState.lego.item_Number : currentlist.valueOf().toString() + "," + NextState.lego.item_Number
            console.log("1e", NextState);
            this.setState({ ...this.state, wishlist: false })
            return localStorage.setItem("wishlist", currentlist == null ? list : currentlist.includes(exists) ? (alert("You already have this item in your wishlist."), currentlist) : (alert("added to wishlist"), list));

        }

        if (NextState.wishlist == false && NextState.cart == true) {
            // let currentlist2 = localStorage.getItem("shoppingcart")
            // let list2 = currentlist2 == null ? NextState.lego.item_Number : currentlist2.valueOf().toString() + "," + NextState.lego.item_Number
            // console.log("2e", NextState);
            // this.setState({ ...this.state, cart: false })
            // return localStorage.setItem("shoppingcart", currentlist2 == null ? list2 : currentlist2.includes(exists) ? (alert("You already have this item in your shoppingcart, if you want to have more please change the amount in the shoppingcart."), currentlist2) : list2)

            let lijst = []
            let cart = localStorage.getItem("cart")
            if (cart != null) {
                if (cart.includes(exists)) {
                    alert("You already have this in your shoppingcart! Change the amount in the shoppingcart.")
                }
                else {
                    let cartlijst = JSON.parse(cart)
                    let item = { lego: NextState.lego.item_Number, amount: 1 }
                    localStorage.setItem("cart", JSON.stringify(cartlijst.concat(item)))
                    alert("added to shoppingcart")
                    addCart(this.props.lego.item_Number, this.props.lego.name);
                }

            }
            else {
                let item = { lego: NextState.lego.item_Number, amount: 1 }
                console.log({ item })
                localStorage.setItem("cart", JSON.stringify(lijst.concat(item)))
                console.log("concat", lijst)
                alert("added to shoppingcart")
                addCart(this.props.lego.item_Number, this.props.lego.name);
            }

        }
        else {
            console.log("else", NextState);
        }

    }

    Createn() {
        let user = JSON.parse(sessionStorage.getItem("user"))

        if (user != null) {
            CreateWishlist(this.props.lego.item_Number, user)
            alert("added to wishlist")
            addWish(this.props.lego.item_Number, this.props.lego.name);
        }
    }

    Createnshop() {
        let user = JSON.parse(sessionStorage.getItem("user"))

        // if (user != null) {
        //     CreateShoppingcart(this.props.lego.item_Number,
        //         user).then(() => get_correctshoppingcartproduct(this.props.lego.item_Number, user) ? alert("alert") : null )
        // }

        get_correctshoppingcartproduct(this.props.lego.item_Number, user).then(e => {
            console.log({ e })
            if (e.length == 0) {
                CreateShoppingcart(this.props.lego.item_Number, user, 1, this.props.lego.usD_MSRP)
                alert("added to shoppingcart")
                addCart(this.props.lego.item_Number, this.props.lego.name);
            }
            else {

                alert("You already have this product in your shoppingcart! Change the amount in the shoppingcart.")
            }

        })
    }

    settingState(input) {
        if ( input == 'wish' ) {
            this.setState({...this.state, lego:this.props.lego, wishlist: true});
            addWish(this.props.lego.item_Number, this.props.lego.name);
        }
        if ( input == 'cart' ) {
            this.setState({...this.state, lego:this.props.lego, cart: true});
            addCart(this.props.lego.item_Number, this.props.lego.name);
        }
    }

    render() {
        // console.log("rendering", this.props.load.name)
        return <div>
  
  <PageHeader className="HeaderStyle">{this.props.lego.name}</PageHeader>
            <br></br>
            <div className="HeaderStyle">
            <div className="container">
            <div className="row"> 
            <div className="col col-md-5">
            <img src={this.props.lego.image_URL} width={400} height={300} />
            </div>
            
            <br></br>
           <div className="col col-md-5 col-offset-3">
            <h3>Description</h3>
            <br />
            <p>Bring all of the action of the epic {this.props.lego.theme} to your adventurous builder with the {this.props.lego.name}. Your child will take on exciting challenges and obstacles with this functional, action-packed set. Builders can take a break from screen time and take on a new challenge! They can role play with their friends and take on the evils for incredible, larger than life stories! Designed with builders of all ages in mind, this toy with {this.props.lego.pieces} pieces will encourage open-ended building play, and inspire any imagination.  </p>
            
            <br></br>

            <h3>Price: €{this.props.lego.usD_MSRP}</h3>
            

            <br></br>
            {sessionStorage.getItem("userStatus") == "AdminIngelogd"
                ?
                <div>
                    <a href={`/Lego/Edit/${this.props.lego.item_Number}`} >
                        <Button bsStyle="warning" bsSize="large" >Edit </Button>
                    </a>

                    <a href={`/Lego/Delete/${this.props.lego.item_Number}`}>
                        <Button bsStyle="warning" bsSize="large">Delete</Button>
                    </a>
                </div>
                :
                <div>
                    <Button bsStyle="danger" bsSize="large" onClick={() => sessionStorage.getItem("userStatus") == "Ingelogd" ?
                        this.Createn()
                        :
                        this.settingState('wish')}>Add to wishlist
                        </Button>

                    <Button bsStyle="danger" bsSize="large" onClick={() => sessionStorage.getItem("userStatus") == "Ingelogd" ?
                        this.Createnshop()
                        :
                        this.settingState('cart')}>Add to shoppingcart
                        </Button>
                </div>
                
                
            }
            </div>
            </div>
            </div>
                </div> 
                </div>;
    }




}

