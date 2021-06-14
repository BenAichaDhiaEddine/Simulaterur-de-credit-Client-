import React, { Component } from "react";
import { Container, Row, Col, Card, CardBody, Media, } from "reactstrap";



// Pages Components

import Logs from "./Logs";
import Sftp from "./Sftp";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

//i18n
import { withNamespaces } from 'react-i18next';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reports: [
                { title: "Banks", iconClass: "bx-copy-alt", description: "30" },
                { title: "Requests", iconClass: "bx-archive-in", description: "193" },
                { title: "Users", iconClass: "bx-purchase-tag-alt", description: "200" },
                { title: "Organizations", iconClass: "bx-purchase-tag-alt", description: "157" }
            ],
            email: [
                { title: "Week", linkto: "#", isActive: false },
                { title: "Month", linkto: "#", isActive: false },
                { title: "Year", linkto: "#", isActive: true }
            ],
            modal: false
        };
        this.togglemodal.bind(this);
    }

    togglemodal = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>

                        {/* Render Breadcrumb */}
                        <Breadcrumbs title={this.props.t('Dashboard')} breadcrumbItem={this.props.t('Dashboard')} />

                        <Row>
                            {/* <Col xl="4">
                                <WelcomeComp />
                                <MonthlyEarning />
                            </Col> */}
                            <Col xl="12">
                                <Row>
                                    {/* Reports Render */}
                                    {
                                        this.state.reports.map((report, key) =>
                                            <Col md="3" key={"_col_" + key}>
                                                <Card className="mini-stats-wid">
                                                    <CardBody>
                                                        <Media>
                                                            <Media body>
                                                                <p className="text-muted font-weight-medium">{report.title}</p>
                                                                <h4 className="mb-0">{report.description}</h4>
                                                            </Media>
                                                            <div className="mini-stat-icon avatar-sm rounded-circle bg-primary align-self-center">
                                                                <span className="avatar-title">
                                                                    <i className={"bx " + report.iconClass + " font-size-24"}></i>
                                                                </span>
                                                            </div>
                                                        </Media>
                                                    </CardBody>
                                                </Card>
                                            </Col>
                                        )
                                    }
                                </Row>

                                <Card>
                                    {/* <CardBody>
                                        <CardTitle className="mb-4 float-sm-left">
                                            Email Sent
                                        </CardTitle>
                                        <div className="float-sm-right">
                                            <ul className="nav nav-pills">
                                                {
                                                    this.state.email.map((mail, key) =>
                                                        <li className="nav-item" key={"_li_" + key}>
                                                            <Link className={mail.isActive ? "nav-link active" : "nav-link"} to={mail.linkto}>{mail.title}</Link>
                                                        </li>
                                                    )
                                                }
                                            </ul>
                                        </div>
                                        <div className="clearfix"></div>
                                        <StackedColumnChart />
                                    </CardBody> */}
                                </Card>
                            </Col>
                        </Row>

                        {/* <Row>
                            <Col xl="4">
                                <SocialSource />
                            </Col>
                            <Col xl="4">
                                <ActivityComp />
                            </Col>

                            <Col xl="4">
                                <TopCities />
                            </Col>
                        </Row> */}

                        <Row>
                            <Col lg="6">
                                <Logs />
                            </Col>
                            <Col lg="6">
                                <Sftp />
                            </Col>
                        </Row>
                    </Container>
                </div>
                {/* <Modal isOpen={this.state.modal} role="dialog" autoFocus={true} centered={true} className="exampleModal" tabindex="-1" toggle={this.togglemodal}>
                    <div className="modal-content">
                        <ModalHeader toggle={this.togglemodal}>
                            Order Details
                        </ModalHeader >
                        <ModalBody>
                            <p className="mb-2">Product id: <span className="text-primary">#SK2540</span></p>
                            <p className="mb-4">Billing Name: <span className="text-primary">Neal Matthews</span></p>

                            <div className="table-responsive">
                                <Table className="table table-centered table-nowrap">
                                    <thead>
                                        <tr>
                                            <th scope="col">Product</th>
                                            <th scope="col">Product Name</th>
                                            <th scope="col">Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">
                                                <div>
                                                    <img src={modalimage1} alt="" className="avatar-sm" />
                                                </div>
                                            </th>
                                            <td>
                                                <div>
                                                    <h5 className="text-truncate font-size-14">Wireless Headphone (Black)</h5>
                                                    <p className="text-muted mb-0">$ 225 x 1</p>
                                                </div>
                                            </td>
                                            <td>$ 255</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                <div>
                                                    <img src={modalimage2} alt="" className="avatar-sm" />
                                                </div>
                                            </th>
                                            <td>
                                                <div>
                                                    <h5 className="text-truncate font-size-14">Hoodie (Blue)</h5>
                                                    <p className="text-muted mb-0">$ 145 x 1</p>
                                                </div>
                                            </td>
                                            <td>$ 145</td>
                                        </tr>
                                        <tr>
                                            <td colspan="2">
                                                <h6 className="m-0 text-right">Sub Total:</h6>
                                            </td>
                                            <td>$ 400</td>
                                        </tr>
                                        <tr>
                                            <td colspan="2">
                                                <h6 className="m-0 text-right">Shipping:</h6>
                                            </td>
                                            <td>Free</td>
                                        </tr>
                                        <tr>
                                            <td colspan="2">
                                                <h6 className="m-0 text-right">Total:</h6>
                                            </td>
                                            <td>$ 400</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <Button type="button" color="secondary" onClick={this.togglemodal}>Close</Button>
                        </ModalFooter>
                    </div>
                </Modal> */}
            </React.Fragment>
        );
    }
}

export default withNamespaces()(Dashboard);
