import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { CartData , SaleData, WishData, PurchaseData} from './ChartData';
import {Button, Glyphicon} from 'react-bootstrap'

export async function createMonth( maand:number, jaar:number ) {
    let res = await fetch(`./SalesController/thisMonth/${maand}/${jaar}`, { method: 'post', credentials: 'include', headers: { 'content-type' : 'application/json' }})
}

export class NavMenu extends React.Component<{}, {}> {
    public render() {
        return <div>
        <div className='main-nav'>
            <ul>
            <li>
            
            <NavLink to={'/'} exact activeClassName='active'>
                    <Button bsStyle="warning" bsSize="large">
                            <Glyphicon glyph="home">
                                Home 
                            </Glyphicon >
                    </Button>
                
                {/* <img src="http://www.stickpng.com/assets/images/5847e798cef1014c0b5e480e.png" width={80} height={50} /> */}
            </NavLink>
        </li>
        <li>
        {sessionStorage.getItem("userStatus") == "Ingelogd" ?
            <NavLink to={'/HistoryPage'} activeClassName='active'>
                <span className='glyphicon glyphicon'></span> 
                    <Button bsStyle="warning" bsSize="large">
                        History
                    </Button>
            </NavLink>
            :
            null}
    </li>

                <li>
                            <NavLink to={ '/databasebutton' } activeClassName='active'>
                                <span className='glyphicon glyphicon'></span> database
                            </NavLink>
                </li> 
                <li>
                <NavLink to={'/sets'} activeClassName='active'>
                    <span className='glyphicon glyphicon'></span> 
                    <Button bsStyle="warning" bsSize="large">
                        <Glyphicon glyph="th">
                            Sets 
                        </Glyphicon >
                     </Button>
                </NavLink>
            </li>
            <li>
            <NavLink to={'/separatebricks'} activeClassName='active'>
                <span className='glyphicon glyphicon'></span> 
                <Button bsStyle="warning" bsSize="large"> 
                    <Glyphicon glyph="ice-lolly-tasted" > 
                        Minifigures 
                    </Glyphicon>
                </Button>
            </NavLink>
        </li>

                <li>
                    {sessionStorage.getItem("userStatus") == "AdminIngelogd" ?
                        <div>
                            <Button bsStyle="warning" bsSize="large"   className="glyphicon glyphicon" data-toggle="modal" data-target="#myModal">
                                Admin Actions
                            </Button>
                        </div>
                        :
                        null}
                </li>

                <li className='dropdown'>

                    {sessionStorage.getItem("userStatus") == "Ingelogd" ?


                        <a href={'/'}
                            onClick={() => (sessionStorage.removeItem('user'), sessionStorage.removeItem('admin'), sessionStorage.removeItem('userStatus'))}

                        ><Button bsStyle="warning" bsSize="large">logout</Button></a>
                        :
                        sessionStorage.getItem("userStatus") == "AdminIngelogd" ?
                            <a href={'/'}
                                onClick={() => (sessionStorage.removeItem('admin'), sessionStorage.removeItem('user'), sessionStorage.removeItem('userStatus'))}

                            ><Button bsStyle="warning" bsSize="large">logout</Button></a>
                            :
                            <NavLink to={'/login'} activeClassName='active'>
                                <Glyphicon glyph="user"/>
                            </NavLink>

                    }
                </li>

                {sessionStorage.getItem("userStatus") != "AdminIngelogd" ? <div>
                <li className='dropdown-wish'>
                    <NavLink to={'/wishlist'} activeClassName='active'>
                        <Glyphicon glyph="list-alt"/>
                    </NavLink>
                </li>
                <li className='dropdown-shoppingcart' onClick={() => createMonth(new Date().getMonth() + 1, new Date().getFullYear())}>
                    <NavLink to={'/Shoppingcart'} activeClassName='active'>
                        <Glyphicon glyph="shopping-cart"/>
                    </NavLink>
                </li></div>
                :
                        null}
            </ul>
        </div>
        <div className="modal" id="myModal" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <Button bsStyle="warning" bsSize="large" type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></Button>
                    </div>
                    <div className="modal-body">
                    <a href={`/Userc`} >
                        <Button bsStyle="warning" bsSize="large" className="btn btn-primary btn-lg">Edit, create and update users</Button>
                    </a>
                    <a href={`/lego`} >
                        <Button bsStyle="warning" bsSize="large" type="button" className="btn btn-primary btn-lg">Edit, create and update lego products</Button>
                    </a>
                    <Button bsStyle="warning" bsSize="large" type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#dataModal">
                        Cart Graph
                    </Button>
                    <Button bsStyle="warning" bsSize="large" type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#data2Modal">
                        Sales Graph
                    </Button>
                    <Button bsStyle="warning" bsSize="large" type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#data3Modal">
                        Wish List Graph
                    </Button>
                    <Button bsStyle="warning" bsSize="large" type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#data4Modal">
                        Top purchased Graph
                    </Button>
                    </div>
                    <div className="modal-footer">
                        <Button bsStyle="warning" bsSize="large" type="button" className="btn btn-default" data-dismiss="modal">Close</Button>
                    </div>
                </div>
            </div>
        </div>
        <div className="modal" id="dataModal" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <Button bsStyle="warning" bsSize="large" type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></Button>
                    </div>
                    <div className="modal-body">
                        <CartData />
                    </div>
                    <div className="modal-footer">
                        <Button bsStyle="warning" bsSize="large" type="button" className="btn btn-default" data-dismiss="modal">Close</Button>
                    </div>
                </div>
            </div>
        </div>
        <div className="modal" id="data2Modal" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <Button bsStyle="warning" bsSize="large" type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></Button>
                    </div>
                    <div className="modal-body">
                        <SaleData />
                    </div>
                    <div className="modal-footer">
                        <Button bsStyle="warning" bsSize="large" type="button" className="btn btn-default" data-dismiss="modal">Close</Button>
                    </div>
                </div>
            </div>
        </div>
        <div className="modal" id="data3Modal" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <Button bsStyle="warning" bsSize="large" type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></Button>
                    </div>
                    <div className="modal-body">
                        <WishData />
                    </div>
                    <div className="modal-footer">
                        <Button bsStyle="warning" bsSize="large" type="button" className="btn btn-default" data-dismiss="modal">Close</Button>
                    </div>
                </div>
            </div>
        </div>
        <div className="modal" id="data4Modal" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <Button bsStyle="warning" bsSize="large" type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></Button>
                    </div>
                    <div className="modal-body">
                        <PurchaseData/>
                    </div>
                    <div className="modal-footer">
                        <Button bsStyle="warning" bsSize="large" type="button" className="btn btn-default" data-dismiss="modal">Close</Button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    }
}
