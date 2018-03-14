import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import * as Models from './lego_types'
import { ButtonToolbar } from 'react-bootstrap'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
type LoadProducts = { load: Models.Lego }

export class ProductLoad extends React.Component<LoadProducts, {}> {
  constructor(props: LoadProducts) {
    super(props);
    this.state = {};

  }

  render() {
    return <div className="figuurtjesrow">
      <ul>
        <li>
          <a href="#" >
            <NavLink to={`/DetailProduct/${this.props.load.item_Number}`}>
              <div className="figuurtjes">
                <Card>
                  <CardImg src={this.props.load.image_URL} alt="Card image cap" width={300} height={200} />
                  <CardBody>


                    <div className="hoii"> <CardTitle className="HeaderStyle"> {this.props.load.name} </CardTitle>
                      <CardTitle>{this.props.load.euR_MSRP == "NA" ?
                        <CardTitle className="HeaderStyle" > €{this.props.load.usD_MSRP}</CardTitle>
                        :
                        <CardTitle className="HeaderStyle">€{this.props.load.euR_MSRP}</CardTitle>}
                      </CardTitle>


                      <Button color="danger"> Shop </Button> </div>

                  </CardBody>
                </Card>

              </div>
            </NavLink>

          </a >
        </li>
      </ul>
    </div>;
  }
}