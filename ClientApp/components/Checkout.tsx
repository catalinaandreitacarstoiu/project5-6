import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink, Redirect } from 'react-router-dom';
import * as Models from './lego_types'
import { ProductLoad } from './DetailProduct'
import { ShoppingCart } from './Shoppingcart'

type Headers = { 'content-type': 'application/json' }

type regState = { firstName: string, lastName: string, userName: string, emailAdress: string, password: string, adress: string, phoneNumber: string, Country: string, Date_of_birth: string, gender: string }

export async function CreateShoppingcart(Item_Number: string, user_id: number, amount: number) {
  let res = await fetch(`./ShoppingcartController/CreateShoppingcart/${Item_Number}/${user_id}/${amount}`, { method: 'post', credentials: 'include', headers: new Headers({ 'content-type': 'application/json' }) })

  return console.log("made shoppingcart", res)
}

export async function get_shoppingcart(): Promise<Models.Shoppingcart[]> {
  let res = await fetch(`./ShoppingcarController/Shoppingcart`, { method: 'get', credentials: 'include', headers: { 'content-type': 'application/json' } })
  let json = await res.json()
  console.log("received correct products", json)
  return json
}

export async function CreateHistory(order_id:number, Item_Number: string, user_id: number, amount:number, price:string, date:string) {
  let res = await fetch(`./HistoryController/CreateHistory/${order_id}/${Item_Number}/${user_id}/${amount}/${price}/${date}`, { method: 'post', credentials: 'include', headers: new Headers({ 'content-type': 'application/json' }) })

  return console.log("made history", res)
}

export async function UserInloggen(username: string, password: string): Promise<Models.Users> {
  let res = await fetch(`./UserController/Login/${username}/${password}`, { method: 'get', credentials: 'include', headers: new Headers })
  let json = res.json()
  return json
}

export async function get_correctproduct(item_Number: string): Promise<Models.Lego> {
  let res = await fetch(`./custom/CorrectProduct/${item_Number}`, { method: 'get', credentials: 'include', headers: new Headers })
  let json = await res.json()
  console.log("received correct products", json)
  return json
}

export async function get_correctuser(user_id: number): Promise<Models.Wishlist[]> {
  let res = await fetch(`./ShoppingcartController/CorrectUser/${user_id}`, { method: 'get', credentials: 'include', headers: new Headers })
  let json = await res.json()
  console.log("received correct users", json)
  return json
}

export async function delete_correctsc(user_id: number) {
  let res = await fetch(`./ShoppingcartController/DeleteUserSC/${user_id}`, { method: 'delete', credentials: 'include', headers: new Headers })
  return console.log("deleted shoppinglist")
}

export async function delete_correctproduct(user_id: number, item_number: string) {
  let res = await fetch(`./ShoppingcartController/Delete/${user_id}/${item_number}`, { method: 'delete', credentials: 'include', headers: { 'content-type': 'application/json' } })
  return console.log("deleted correct product from shoppingcart")

}

export async function delete_correctproduct2(user_id: number, item_number: string) {
  let res = await fetch(`./HistoryController/Delete/${user_id}/${item_number}`, { method: 'delete', credentials: 'include', headers: { 'content-type': 'application/json' } })
  return console.log("deleted correct product from history")

}

type LoadProducts = { load: Models.Lego, id: string, deleteItem: (index: string) => void }
type loginState = { lego: Models.Lego | 'loading', userName: string, password: string, loggedin: boolean, admin: boolean, userStatus: "Ingelogd" | 'Uitgelogd', user: Models.Users | "loading", legopr: Models.Lego[], wishlist2: Models.Shoppingcart[], firstName: string, lastName: string, emailAdress: string, adress: string, phoneNumber: string, Country: string, Date_of_birth: string, gender: string }

export class Checkout extends React.Component<RouteComponentProps<{}>, loginState> {
  constructor(props, conetxt) {
    super(props)
    this.state = {
      lego: 'loading',
      userStatus: "Uitgelogd",
      userName: "",
      password: "",
      loggedin: false,
      admin: false,
      user: "loading",
      legopr: [],
      wishlist2: [],
      firstName: "",
      lastName: "",
      emailAdress: "",
      adress: "",
      phoneNumber: "",
      Country: "",
      Date_of_birth: "",
      gender: ""
    }
  }

  componentWillUpdate(NextProps: any, NextState: any) {

    sessionStorage.setItem("user", JSON.stringify(NextState.user.id))
    sessionStorage.setItem("userStatus", NextState.userStatus)
  }



  Inloggen() {
    // console.log("inloggen")F
    // UserInloggen(this.state.userName, this.state.password)
    //     .then(value => {
    //         if (value.firstName != "") 
    //         {
    //             this.setState({ ...this.state, loggedin: true, user: value, userStatus: "Ingelogd" }, () =>
    //             {let prevList = localStorage.getItem("shoppingcart")
    //             let currentList = prevList == null ? null : prevList.split(",").reverse()
    //             currentList.map(e =>  CreateHistory(e, JSON.parse(sessionStorage.getItem("user"))), console.log("map history"))})
    //             localStorage.removeItem("shoppingcart")

    //         }
    //         else { this.setState({ loggedin: false }), console.log("else") }
    //     })

    UserInloggen(this.state.userName, this.state.password)
      .then(value => {
        if (value.userName != "") {
          this.setState({ ...this.state, loggedin: true, user: value, userStatus: "Ingelogd" },
            () => {
              let randomid = Math.floor(Math.random() * 10000);
              let cart = localStorage.getItem("cart")
              let cartlijst = JSON.parse(cart)
              cartlijst != null ?
                cartlijst.map((e: any) => CreateHistory(randomid, e.lego, JSON.parse(sessionStorage.getItem("user")), e.amount, e.price,new Date().toLocaleDateString()), localStorage.remove("cart"))
                :
                console.log("localstorage cart is empty")
            }
          )
        }
        else { this.setState({ loggedin: false }), console.log("else") }
      })
  }



  render() {
    return <div className="headerStyle">

      {sessionStorage.getItem("userStatus") == "Ingelogd" ?

        <Purchase />

        :
        <div>
          <h2>Already have an account?</h2>
          <div className='css-card'>
            <div className='css-container css-red'>
              <h2>Inloggen</h2>
            </div><br />
            <div className='css-container'>
              <p className='inner-addon left-addon'>
                <i className='css-icons css-text-red'>account_circle</i>
                <input className='css-input css-lightred' value={this.state.userName}
                  onChange={event => this.setState({ ...this.state, userName: event.target.value })} placeholder='Gebruikersnaam' />
              </p>
              <p className='inner-addon left-addon'>
                <i className='css-icons css-text-red'>lock</i>
                <input type='password' className='css-input css-lightred' value={this.state.password}
                  onChange={event => this.setState({ ...this.state, password: event.target.value })} placeholder='Wachtwoord' />
              </p>
              <p>

                <button className='css-btn' onClick={() => this.Inloggen()}>Log in</button>
              </p>
            </div>
          </div>

          <br />
          <h2>Don't have an account? Make one for free!</h2>
          <NavLink to={'/registreren'} activeClassName='active'>
            <button className='css-btn'>Registreren</button>
          </NavLink>

          <h2>Want to continue your purchase without account?</h2>
          <div><div className='css-card'>
            <div className='css-container css-red'>
              <h2>Personal information</h2>
            </div><br />
            <div className='css-container'>
              <p>
                <span className='css-text-red'>First Name:</span>
                <input className='css-input css-lightred' />
              </p>
              <p>
                <span className='css-text-red'>Last Name:</span>
                <input className='css-input css-lightred' />
              </p>
              <p>
                <span className='css-text-red'>Email adress:</span>
                <input className='css-input css-lightred' />
              </p>
              <p>
                <span className='css-text-red'>Adress:</span>
                <input className='css-input css-lightred' />
              </p>
              <p>
                <span className='css-text-red'>Phone Number:</span>
                <input className='css-input css-lightred' />
              </p>
              <p>
                <span className='css-text-red'>Country:</span>
                <input className='css-input css-lightred' />
              </p>
              <p>
                <span className='css-text-red'>Date of Birth(DD-MM-YY): </span>
                <input className='css-input css-lightred' />
              </p>
              <p>
                <a href={'/PurchaseRoute'}> <button className='css-btn' >Purchase</button> </a>
              </p>
            </div>
          </div>
          </div>;
                </div>
      }

    </div>

  }
}

export class PurchaseRoute extends React.Component<RouteComponentProps<{}>, {}> {
  constructor(props, conetxt) {
    super(props)
    this.state = {}
  }

  render() {
    return <div>
      <Purchase />
    </div>
  }
}

export type PurchaseProps = { lego: Models.Lego }
export class Purchase extends React.Component<{}, {}> {
  constructor(props, conetxt) {
    super(props)
    this.state = {}
  }

  // componentWillMount() {
  //   localStorage.getItem("userStatus")
  //   localStorage.removeItem("checkout")
  //   localStorage.removeItem("cart")
  // }


  productDeleten() {
    let user = JSON.parse(sessionStorage.getItem("user"))
    user != null ?
      delete_correctsc(user)

      : null
  }



  render() {
    console.log("render")
    return <div>

      Order has been made! Go back to the homepage.
            {this.productDeleten()}
            



    </div>

  }
}

