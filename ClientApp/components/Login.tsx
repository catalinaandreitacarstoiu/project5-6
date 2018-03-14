import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink, Redirect } from 'react-router-dom';
import * as Models from './lego_types'

type loginState = { userName: string, password: string, loggedin: boolean, userStatus: "Ingelogd" | "Uitgelogd" | "AdminIngelogd", user: Models.Users | "loading", admin: Models.Admins | 'loading' }

export async function CreateShoppingcart(Item_Number: string, user_id: number, amount:number) {
    let res = await fetch(`./ShoppingcartController/CreateShoppingcart/${Item_Number}/${user_id}/${amount}`, { method: 'post', credentials: 'include', headers: new Headers({ 'content-type': 'application/json' }) })

    return console.log("made shoppingcart", res)
}


export async function UserInloggen(username: string, password: string): Promise<Models.Users> {
    let res = await fetch(`./UserController/Login/${username}/${password}`, { method: 'get', credentials: 'include', headers: { 'content-type': 'application/json' } })
    let json = res.json()
    return json
}

export async function AdminInloggen(username: string, password: string): Promise<Models.Admins> {
    let res = await fetch(`./AdminController/Adminlogin/${username}/${password}`, { method: 'get', credentials: 'include', headers: { 'content-type': 'application/json' } })
    let json = res.json()
    return json
}

export class Login extends React.Component<RouteComponentProps<{}>, loginState> {
    constructor(props, context) {
        super(props)
        this.state = {
            userStatus: "Uitgelogd",
            userName: "",
            password: "",
            loggedin: false,
            user: "loading",
            admin: 'loading'
        }
    }
    componentWillUpdate(NextProps: any, NextState: any) {

        sessionStorage.setItem("user", JSON.stringify(NextState.user.id))
        sessionStorage.setItem("admin", NextState.admin.username)
        sessionStorage.setItem("userStatus", NextState.userStatus)
    }

    Inloggen() {
        UserInloggen(this.state.userName, this.state.password)
            .then(value => {
                if (value.userName != "") {
                    //this.setState({ ...this.state, loggedin: true, user: value, userStatus: "Ingelogd" }, () =>
                    // {let prevList = localStorage.getItem("shoppingcart")
                    // let currentList = prevList == null ? null : prevList.split(",").reverse()
                    // currentList.map(e => CreateShoppingcart(e, JSON.parse(sessionStorage.getItem("user"))), console.log("map shoppingcart")), location.replace('/')})
                    // localStorage.removeItem("shoppingcart")

                    this.setState({ ...this.state, loggedin: true, user: value, userStatus: "Ingelogd" },
                        () => {
                            let cart = localStorage.getItem("cart")
                            let cartlijst = JSON.parse(cart)
                            cartlijst != null ?
                                cartlijst.map((e: any) => CreateShoppingcart(e.lego, JSON.parse(sessionStorage.getItem("user")), 1),localStorage.removeItem("cart"))
                                :
                                console.log("localstorage cart is empty")
                        }
                    ), location.replace('/')
                }
                else {AdminInloggen(this.state.userName, this.state.password)
                    .then(value => {
                        if (value.username != "") { this.setState({ ...this.state, loggedin: true, admin: value, userStatus: "AdminIngelogd" }), location.replace('/') }
                        else {  alert("Wrong username or password!!!") }
                    })}
            }).catch(() => alert("Wrong username or password!!!"))

        
            // { this.setState({ loggedin: false }), alert("Wrong username or password") }
    }




    public render() {

        return <div>
            {sessionStorage.getItem("userStatus") == "Ingelogd" || sessionStorage.getItem("userStatus") == "AdminIngelogd" ?
                // <Redirect to={'/'}> </Redirect> 
                <div />
                :
                <div>
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
                    <NavLink to={'/registreren'} activeClassName='active'>
                        <button className='css-btn'>Registreren</button>
                    </NavLink>
                </div>
            }

        </div>

    }
}
