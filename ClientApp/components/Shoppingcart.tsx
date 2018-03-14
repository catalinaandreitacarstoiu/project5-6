import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink, Redirect } from 'react-router-dom';
import * as Models from './lego_types'
import { ProductLoad, get_correctshoppingcartproduct } from './DetailProduct'
import { Checkout } from './Checkout'
import { Lego, Shoppingcart } from './lego_types';
import {PageHeader, Button} from 'react-bootstrap'

export async function addmonthsale(maand:number, jaar:number, amount:number) {
    let res = await fetch(`./SalesController/AddSales/${maand}/${jaar}/${amount}`, { method: 'post', credentials: 'include', headers: { 'content-type': 'application/json'} })
    console.log(maand,jaar,amount)
}

export async function addPurchase(_productID: string, _productName:string) {
    let res = await fetch(`./DataController/addPurchase/${_productID}/${_productName}`, { method: 'post', credentials: 'include', headers: { 'content-type' : 'application/json'} })
}

export async function get_correctproduct(item_Number: string): Promise<Models.Lego> {
    let res = await fetch(`./custom/CorrectProduct/${item_Number}`, { method: 'get', credentials: 'include', headers: { 'content-type': 'application/json' } })
    let json = await res.json()
    console.log("received correct products", json)
    return json
}

export async function get_shoppingcart(): Promise<Models.Shoppingcart[]> {
    let res = await fetch(`./ShoppingcarController/Shoppingcart`, { method: 'get', credentials: 'include', headers: { 'content-type': 'application/json' } })
    let json = await res.json()
    console.log("received correct products", json)
    return json
}

export async function get_correctuser(user_id: number): Promise<Models.Shoppingcart[]> {
    let res = await fetch(`./ShoppingcartController/CorrectUser/${user_id}`, { method: 'get', credentials: 'include', headers: { 'content-type': 'application/json' } })
    let json = await res.json()
    console.log("received correct users", json)
    return json
}

export async function delete_correctproduct(user_id: number, item_number: string) {
    let res = await fetch(`./ShoppingcartController/Delete/${user_id}/${item_number}`, { method: 'delete', credentials: 'include', headers: { 'content-type': 'application/json' } })
    return console.log("deleted correct product from shoppingcart")

}

export async function delete_correctproduct2(user_id: number, item_number: string) {
    let res = await fetch(`./HistoryController/Delete/${user_id}/${item_number}`, { method: 'delete', credentials: 'include', headers: { 'content-type': 'application/json' } })
    return console.log("deleted correct product from history")
}

export async function updateamount(item_number: string, user_id: number) {
    let res = await fetch(`./ShoppingcartController/Amount/${item_number}/${user_id}`, { method: 'post', credentials: 'include', headers: { 'content-type': 'application/json' } })
    // let json = await res.json()
    return console.log("updated amount", res.status)
}

export async function updateminamount(item_number: string, user_id: number) {
    let res = await fetch(`./ShoppingcartController/AmountMin/${item_number}/${user_id}`, { method: 'post', credentials: 'include', headers: { 'content-type': 'application/json' } })
    // let json = await res.json()
    return console.log("updated amount", res.status)
}

export async function CreateHistory(order_id:number, Item_Number: string, user_id: number, amount:number, price:string, date:string, saleprice:number) {
    let res = await fetch(`./HistoryController/CreateHistory/${order_id}/${Item_Number}/${user_id}/${amount}/${price}/${date}`, { method: 'post', credentials: 'include', headers: new Headers({ 'content-type': 'application/json' }) })
    return console.log("made history", res)
}

type WishlistRouterState = { legopr: Models.Lego[], shopcart: Models.Shoppingcart[], history: Models.History[], userStatus: "Ingelogd" | 'Uitgelogd', user: Models.Users | "loading", amount: number }

export class ShoppingCartRouter extends React.Component<RouteComponentProps<{ wishlist: number, lego: Models.Lego }>, WishlistRouterState> {
    constructor(props: RouteComponentProps<{ wishlist: number, lego: Models.Lego }>) {
        super(props)
        this.state = { legopr: [], shopcart: [], history: [], userStatus: "Uitgelogd", user: "loading", amount: 1 }
    }

    componentWillMount() {
        let prevList = localStorage.getItem("shoppingcart")
        let currentList = prevList == null ? null : prevList.split(",")
        console.log({ currentList })

        

        if (sessionStorage.getItem("userStatus") != "Ingelogd") {

            let cartlijst = JSON.parse(localStorage.getItem("cart"))
            cartlijst != null ?
                cartlijst.map((item: any) =>
                    get_correctproduct(item.lego).then(b => this.setState({ ...this.state, legopr: this.state.legopr.concat(b) }))
                        .catch(error => console.error(error)))
                :
                get_shoppingcart().then(b => this.setState({...this.state, shopcart:b}))
        }
        // currentList != null ? currentList.map(b =>
        //     get_correctproduct(b).then(b => this.setState({ ...this.state, legopr: this.state.legopr.concat(b) }))
        //         .catch(error => console.error(error))

        // )
        //     : null

        else {
            this.state.shopcart != null && sessionStorage.getItem("userStatus") == "Ingelogd" ?
                (get_correctuser(parseInt(sessionStorage.getItem("user"))).
                    then(pr => this.setState({ ...this.state, shopcart: pr.concat(this.state.shopcart) },
                        () => this.state.shopcart.map((p: Models.Shoppingcart) => get_correctproduct(p.item_Number).
                            then(p => this.setState({ ...this.state, legopr: this.state.legopr.concat(p) })))))).
                    catch(error => console.error(error))
                :
                null
        }
    }

    deleteItem(NextState: any) {
        // let prevListDelete = localStorage.getItem("shoppingcart")
        // let nextList = prevListDelete != null ? (prevListDelete.replace(NextState, "")) : ""
        // localStorage.setItem("shoppingcart", nextList != null ? nextList : nextList)
        // let prevList = localStorage.getItem("shoppingcart")
        // let currentList = prevList == null ? null : prevList.split(",").reverse()

        // currentList != null ? currentList.map(b =>
        //     get_correctproduct(b).then(b => this.setState({ ...this.state, legopr: this.state.legopr.concat(b) }), () => location.reload())
        //         .catch(error => console.error(error))

        // )
        //     : null

        let cart = localStorage.getItem("cart")
        let cartlijst = JSON.parse(cart)
        cartlijst != null ?
            cartlijst.map((e: any) => e.lego == NextState ?
                cartlijst.splice(cartlijst.indexOf(e), 1)
                :
                console.log("else"))

            :
            console.log("localstorage cart is empty")
        localStorage.setItem("cart", JSON.stringify(cartlijst))
        location.reload()
    }


    // deleteItem(NextState: any) {
    //     let prevListDelete = localStorage.getItem("shoppingcart")
    //     let nextList = localStorage.removeItem(NextState)
    //     let currentList = localStorage.setItem("shoppingcart", JSON.stringify(nextList))
    // }

    calcTotalPrice() {
        
        let cart = localStorage.getItem("cart")
        let cartlijst = JSON.parse(cart)
        
        console.log({cartlijst})
        let i = 0
        
        this.state.legopr.map(lg => cartlijst.map(e => 
                              lg.item_Number == e.lego?
                            i = i + (parseFloat(lg.usD_MSRP) * e.amount)
                                // console.log({e},{lg})
                              :
                              null
                                ))
        return i

    }

    calcTotalPriceDb() {
        let i = 0

        // this.state.legopr.map(lg => this.state.shopcart.map(e =>
        //                        i = i + (parseFloat(lg.usD_MSRP) * e.amount) ) )
        
        this.state.legopr.map(lg => 
                                    this.state.shopcart.map(sc => 
                                                                { if (sc.item_Number == lg.item_Number) 
                                                                    {i = i + parseFloat(lg.usD_MSRP) * sc.amount}
                                                                }
                                                            )
                             )

        console.log({i})
        
        return i
    }

    checkout() {
        let cart = localStorage.getItem("cart")
        let cartlijst = JSON.parse(cart)

        let i = 0
        let u = 0
        this.state.legopr.map(lg => 
            this.state.shopcart.map(sc => 
                                        { if (sc.item_Number == lg.item_Number) 
                                            {i = i + parseFloat(lg.usD_MSRP) * sc.amount}
                                        }
                                    )
        )

        this.state.legopr.map(lg => this.state.shopcart.map(sc => { if (sc.item_Number == lg.item_Number) {u = u + parseFloat(lg.usD_MSRP) * sc.amount}}))

        localStorage.setItem("checkout", "true")
        this.setState({ ...this.state, userStatus: "Ingelogd" })

        {
            let randomid = Math.floor(Math.random() * 10000);
            let user = sessionStorage.getItem("user")
            sessionStorage.getItem("userStatus") == "Ingelogd" ?
                addmonthsale(new Date().getMonth() + 1, new Date().getFullYear(), u).then(() => this.state.shopcart.map(f =>
                    CreateHistory(randomid,f.item_Number, JSON.parse(sessionStorage.getItem("user")), f.amount, f.price, new Date().toLocaleDateString(), parseFloat(f.price), ), location.replace('/checkout')))
                :
                this.state.legopr.map(lg => cartlijst.map(e => 
                    lg.item_Number == e.lego?
                    i = i + (parseFloat(lg.usD_MSRP) * e.amount)
                    :
                    null
                        ))
                addmonthsale(new Date().getMonth() + 1, new Date().getFullYear(), i)
                location.replace('/checkout')
        }
    }

    render() {  
        console.log(this.state.legopr)
        return <div>
            <div className="container">
                <div className="row">

                        {this.state.legopr.map((lego: Models.Lego) =>
                            <ShoppingCart load={lego} id={lego.item_Number} deleteItem={(p) => this.deleteItem(p)} shopcart={this.state.shopcart.find(p => p.item_Number == lego.item_Number)} />)
                        }

                        <br></br>
                        
                        {sessionStorage.getItem("userStatus") !="Ingelogd" ? 
                        <div className="HeaderStyle"> Total price = {this.calcTotalPrice().toFixed(2) }</div> 
                        : 
                        <div className="HeaderStyle"> Total price = {this.calcTotalPriceDb().toFixed(2)} </div>
                        }
                        
                        <br></br>
                        <Button bsStyle="success" bsSize="large" onClick={() => this.checkout()}>Checkout</Button>
        </div>
        </div>
        </div>
    }
}

// type WishlistProps = { id: number }

type LoadProducts = { load: Models.Lego, id: string, deleteItem: (index: string) => void, shopcart: Models.Shoppingcart }
export class ShoppingCart extends React.Component<LoadProducts, { deleteID: string, amount: number }> {
    constructor(props: LoadProducts) {
        super(props);
        this.state = { deleteID: "", amount: 0 };
    }

    addToAmount() {
        return updateamount(this.props.shopcart.item_Number, JSON.parse(sessionStorage.getItem("user"))), location.reload()
    }

    deleteFromAmount() {
        return updateminamount(this.props.shopcart.item_Number, JSON.parse(sessionStorage.getItem("user"))), location.reload()
    }

    productDeleten() {
        let user = JSON.parse(sessionStorage.getItem("user"))
        user != null ?
            (delete_correctproduct(user, this.props.load.item_Number).then(() => location.reload()))
            : null
    }

    AddToLocalStoragePlus() {
        let cart = localStorage.getItem("cart")
        let cartlijst = JSON.parse(cart)
        cartlijst != null ?
            cartlijst.map((e: any) => e.lego == this.props.load.item_Number ?
                e.amount = e.amount + 1
                :
                null)

            :
            console.log("localstorage cart is empty")
        localStorage.setItem("cart", JSON.stringify(cartlijst))
        location.reload()


    }

    AddToLocalStorageMin() {
        let cart = localStorage.getItem("cart")
        let cartlijst = JSON.parse(cart)
        cartlijst != null ?
            cartlijst.map((e: any) => e.lego == this.props.load.item_Number ?
                e.amount = e.amount - 1
                :
                null)
            :
            console.log("localstorage cart is empty")
        localStorage.setItem("cart", JSON.stringify(cartlijst))
        location.reload()


    }
    amountParse() {
        var n = 0
        let cart = localStorage.getItem("cart")
        let cartlijst = JSON.parse(cart)
        cartlijst != null ?
            cartlijst.map((e: any) => 
            e.lego == this.props.load.item_Number ?
            n = n + e.amount
            :
            0)

            :
            null

        return n
    }
    // totalProd() {
    //     var n = 0
    //     let cart = localStorage.getItem("cart")
    //     let cartlijst = JSON.parse(cart)
    //     cartlijst != null ?
    //         cartlijst.map((e: any) => n = n + 1)
    //         :
    //         0

    //     return n
    // }


    render() {
        return <div className="HeaderStyle">
            <div className="container">
                <div className="row">
                <div className="col col-md-5">
                        <h1>{this.props.load.name}</h1>
                        <br></br>
                        <img src={this.props.load.image_URL} width={300} height={200} />
                        <br></br>
                        </div>
                        <div className="buttoonn">
                        <h4 >Price: €{this.props.load.usD_MSRP}</h4>

                        {/* <button onClick={() => this.deleteFromAmount()}>-</button> { this.props.shopcart.amount} <button onClick={() => this.addToAmount()}>+</button> */}

                        <h4>Amount:
                        <Button bsStyle="warning" bsSize="small" onClick={() => sessionStorage.getItem("userStatus") == "Ingelogd" ?

                                this.deleteFromAmount()
                                :
                                this.AddToLocalStorageMin()
                            }>-</Button>

                            {sessionStorage.getItem("userStatus") == "Ingelogd" ?
                                <div>{this.props.shopcart.amount}</div>
                                :
                                this.amountParse()
                            }

                            <Button bsStyle="warning" bsSize="small" onClick={() => sessionStorage.getItem("userStatus") == "Ingelogd" ?

                                this.addToAmount()
                                :
                                this.AddToLocalStoragePlus()

                            }>+</Button>
                        </h4>

                        <br />
                        <Button bsStyle="danger" bsSize="large" onClick={() => sessionStorage.getItem("userStatus") == "Ingelogd" ?
                            this.productDeleten()
                            :
                            this.props.deleteItem(this.props.load.item_Number)}>Remove from shoppingcart </Button>
                            </div>
                        {/* <div>total{this.totalProd()}</div> */}
        </div>
        </div>
        </div>
    }
}


