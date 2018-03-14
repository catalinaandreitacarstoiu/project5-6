import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import * as Models from './lego_types'
import { ProductLoad } from 'ClientApp/components/Product';
import { CartData } from './ChartData';


export class adminmode extends React.Component<RouteComponentProps<{}>, {}> {
    constructor() {
        super();
        this.state = {}
    }
    render() {
        return <div>
            <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#dataModal">
            Cart Graph
            </button>   
        <div className="modal fade" id="dataModal" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    </div>
                    <div className="modal-body">
                        <CartData />
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
            
        </div>
    }
}

