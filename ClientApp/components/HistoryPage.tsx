import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import * as Models from './lego_types'
import { ProductLoad } from './DetailProduct'

type Headers = { 'content-type': 'application/json' }



export async function get_correctuser(user_id: number): Promise<Models.History[]> {
  let res = await fetch(`./HistoryController/CorrectUser/${user_id}`, { method: 'get', credentials: 'include', headers: { 'content-type': 'application/json' } })
  let json = await res.json()
  console.log("received correct users", json)
  return json
}

export async function get_history(): Promise<Models.History[]> {
  let res = await fetch(`./HistoryController/History`, { method: 'get', credentials: 'include', headers: { 'content-type': 'application/json' } })
  let json = await res.json()
  console.log("received correct history", json)
  return json
}

export async function get_correctproduct(item_Number: string): Promise<Models.Lego> {
  let res = await fetch(`./custom/CorrectProduct/${item_Number}`, { method: 'get', credentials: 'include', headers: { 'content-type': 'application/json' } })
  let json = await res.json()
  console.log("received correct products", json)
  return json
}


type HistoryState = { history: Models.History[], legopr: Models.Lego[], expanded: boolean }

export class HistoryPage extends React.Component<RouteComponentProps<{}>, HistoryState> {
  constructor(props: RouteComponentProps<{}>) {
    super(props)
    this.state = { history: [], legopr: [], expanded: false }
  }

  componentWillMount() {
    (get_correctuser(parseInt(sessionStorage.getItem("user"))).
      then(pr => this.setState({ ...this.state, history: pr.concat(this.state.history) },
        () => this.state.history.map((p: Models.History) => get_correctproduct(p.item_Number).
          then(p => this.setState({ ...this.state, legopr: this.state.legopr.concat(p) })))))).
      catch(error => console.error(error))
  }

  render() {

    return <div>

      {/* {this.state.history.map(e => 
      !this.state.expanded?
      <button onClick={() => this.didExpend(true)}>order number:{e.order_id}</button>
      :
      <button onClick={() => this.didExpend(false)}> Close </button>)} */}


      {this.state.history.map(e =>
        <Expanding his={e} order={e.order_id} load={this.state.legopr.find(p => e.item_Number == p.item_Number)} />)}

    </div>
  }
}

type LoadOrderNumbers = { his: Models.History, order: number, load: Models.Lego }
export class Expanding extends React.Component<LoadOrderNumbers, HistoryState> {
  constructor(props: LoadOrderNumbers) {
    super(props);
    this.state = { history: [], legopr: [], expanded: false };
  }



  didExpend(value) {
    this.setState({ ...this.state, expanded: value })
  }

  render() {
    return <div>

      {
        !this.state.expanded ?
        <button onClick={() => this.didExpend(true)}>order number:{this.props.his.order_id}, status: pending...</button>
        :
        <button onClick={() => this.didExpend(false)}> Close </button>
      }

      {
        this.state.expanded == true ?
          <div>
            <h3>{this.props.load.name}</h3>
            <img src={this.props.load.image_URL} width={300} height={200} />
            <h4>Amount: {this.props.his.amount}</h4>
            <h4>Price: €{(parseFloat(this.props.his.price) * this.props.his.amount).toFixed(2)}</h4>
            <h4>Status: pending...</h4>
            <h4>Date of purchase: {this.props.his.date}</h4>
            <br></br>
            <br></br>
          </div>
          :
          <div/>
      }
    </div>
  }
}


// type LoadProducts = { load: Models.Lego, id: string, his: Models.History }
// export class History extends React.Component<LoadProducts, {}> {
//   constructor(props: LoadProducts) {
//     super(props);
//     this.state = {};
//   }


//   render() {
//     // console.log("rendering", this.props.load.name)
//     return <div>


//       <h3>{this.props.load.name}</h3>

//       <img src={this.props.load.image_URL} width={300} height={200} />

//       <h4>Amount: {this.props.his.amount}</h4>

//       <h4>Price: €{(parseFloat(this.props.his.price) * this.props.his.amount).toFixed(2)}</h4>

//       <h4>Status: pending...</h4>

//       <h4>Date of purchase: {this.props.his.date}</h4>


//       <br></br>
//       <br></br>
//     </div>
//   }
// }