import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import * as Models from './lego_types'
import {Bar, Line, Pie} from 'react-chartjs-2';

type Datagraph = {name: string, amount: number}
type ChartDataState = { Datalist: Datagraph[] | "loading" }

export async function get_Cart(): Promise<Models.Data[]> {
    let res = await fetch(`./DataController/TopCart`, { method: 'get', credentials: 'include', headers: { 'content-type' : 'application/json' } })
	let json = await res.json()
	console.log("idk anymore time 2", json)
    return json
}

export async function get_Wish(): Promise<Models.Data[]> {
	let res = await fetch(`./DataController/TopWish`, { method: 'get', credentials: 'include', headers: { 'content-type' : 'application/json' } })
	let json = await res.json()
	console.log("idk anymore", json)
    return json
}

export async function get_sales(): Promise<Models.Sales[]> {
	let res = await fetch(`./SalesController/allsales`, { method: 'get', credentials: 'include', headers: { 'content-type': 'application/json'} })
	let json = await res.json()
	return json
}

export async function monthTop(): Promise<Models.purchases[]> {
	let res = await fetch(`./HistoryController/monthTop`, { method: 'get', credentials: 'include', headers: { 'content-type' : 'application/json' }})
	let json = await res.json()
	return json
}

export class CartData extends React.Component<{}, ChartDataState> 
{
	constructor(props, context){
		super();
		this.state = { Datalist: "loading" };
	}

	componentWillMount() 
	{
		get_Cart().then(legos => this.setState({...this.state, 
												   Datalist: legos.map(l => {return {name: l.productName, amount: l.shoppingcart}})
											   }))
	}

	render() {
		if (this.state.Datalist == "loading")
			return <div>Loading Graph...</div>
		else
		return <div>
				<Bar 
					width={200}
					height={200}
					data={{labels: this.state.Datalist.map(d => d.name)
									,
							datasets: [{
								label: 'Times added to cart',
								data:
									this.state.Datalist.map(d => d.amount)
								,
								backgroundColor:[
									'rgba(102,0,0,0.6)',
									'rgba(255,0,0,0.6)',
									'rgba(255,204,204,0.6)',
									'rgba(102,51,0,0.6)',
									'rgba(255,128,9,0.6)'							
								]
							}]
						}}	
					options={{
						title:{
							display:true,
							text:'Top cart items',
							fontSize:25
						},
						legend:{
							display:true,
							position:'right'
						},
						scales:{
							yAxes: [{
								ticks: {
									beginAtZero: true
								}
							}]
						}
					}}
				/>	
				</div>
	}
}

export class WishData extends React.Component<{}, ChartDataState> 
{
	constructor(props, context){
		super();
		this.state = { Datalist: "loading" };
	}

	componentWillMount() 
	{
		get_Wish().then(legos => this.setState({...this.state, 
												   Datalist: legos.map(l => {return {name: l.productName, amount: l.wishlist}})
											   }))
	}

	render() {
		if (this.state.Datalist == "loading")
			return <div>Loading Graph...</div>
		else
		return <div>
				<Bar 
					width={200}
					height={200}
					data={{labels: this.state.Datalist.map(d => d.name)
									,
							datasets: [{
								label: 'Times added to wish list',
								data:
									this.state.Datalist.map(d => d.amount)
								,
								backgroundColor:[
									'rgba(102,0,0,0.6)',
									'rgba(255,0,0,0.6)',
									'rgba(255,204,204,0.6)',
									'rgba(102,51,0,0.6)',
									'rgba(255,128,9,0.6)'							
								]
							}]
						}}	
					options={{
						title:{
							display:true,
							text:'Top wish list items',
							fontSize:25
						},
						legend:{
							display:true,
							position:'right'
						},
						scales:{
							yAxes: [{
								ticks: {
									beginAtZero: true
								}
							}]
						}
					}}
				/>	
				</div>
	}
}

type SaleDataState = { Salelist: Models.Sales[] | "loading"}

export class SaleData extends React.Component<{}, SaleDataState> 
{
	constructor(props, context){
		super();
		this.state = { Salelist: "loading" };
	}

	componentWillMount() 
	{
		get_sales().then(sale => this.setState({...this.state, 
												   Salelist: sale
											   }))
	}

	render() {
		if (this.state.Salelist == "loading")
			return <div>Loading Graph...</div>
		else
		return <div>
				<Bar 
					width={200}
					height={200}
					data={{labels: this.state.Salelist.map(d => d.month.toString()+ '-' + d.year.toString())
									,
							datasets: [{
								label: 'Sales per month',
								data:
									this.state.Salelist.map(d => d.totalsales)
								,
								backgroundColor:[
									'rgba(102,0,0,0.6)',
									'rgba(255,0,0,0.6)',
									'rgba(255,204,204,0.6)',
									'rgba(102,51,0,0.6)',
									'rgba(255,128,9,0.6)'							
								]
							}]
						}}	
					options={{
						title:{
							display:true,
							text:'Monthly sales',
							fontSize:25
						},
						legend:{
							display:true,
							position:'right'
						},
						scales:{
							yAxes: [{
								ticks: {
									beginAtZero: true
								}
							}]
						}
					}}
				/>	
				</div>
	}
}

type purchaseDataState = { Salelist: Models.purchases[] | "loading"}

export class PurchaseData extends React.Component<{}, purchaseDataState> 
{
	constructor(props, context){
		super();
		this.state = { Salelist: "loading" };
	}

	componentWillMount() 
	{
		monthTop().then(sale => this.setState({...this.state, 
												   Salelist: sale
											   }))
	}

	render() {
		console.log(this.state.Salelist)
		if (this.state.Salelist == "loading")
			return <div>Loading Graph...</div>
		else
		return <div>
				<Bar 
					width={200}
					height={200}
					data={{labels: this.state.Salelist.map(d => d.item_Number)
									,
							datasets: [{
								label: 'Purchases',
								data:
									this.state.Salelist.map(d => d.count)
								,
								backgroundColor:[
									'rgba(102,0,0,0.6)',
									'rgba(255,0,0,0.6)',
									'rgba(255,204,204,0.6)',
									'rgba(102,51,0,0.6)',
									'rgba(255,128,9,0.6)'							
								]
							}]
						}}	
					options={{
						title:{
							display:true,
							text:'Top purchased',
							fontSize:25
						},
						legend:{
							display:true,
							position:'right'
						},
						scales:{
							yAxes: [{
								ticks: {
									beginAtZero: true
								}
							}]
						}
					}}
				/>	
				</div>
	}
}