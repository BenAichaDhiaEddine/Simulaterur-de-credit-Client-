
import React, { Component } from "react";
import { MDBDataTable } from "mdbreact";
import { Row, Col, Card, CardBody, Button, CardTitle, CardSubtitle, Modal, ModalHeader, ModalBody, Table, ModalFooter, Form, FormGroup, Label, Input,  Dropdown, DropdownMenu, DropdownItem, DropdownToggle } from "reactstrap";

import Dropzone from 'react-dropzone';
//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';
import "../Tables/datatables.scss";
// import "./style.scss";
import { withNamespaces } from 'react-i18next';
import { Link } from "react-router-dom";

class Process extends Component {
    data = {
        columns: [
            {
                label: "Order",
                field: "order",
                sort: "asc",
                width: 150
            },
            {
                label: "Name",
                field: "name",
                sort: "asc",
                width: 270
            },
            {
                label: "Deadline ",
                field: "deadline",
                sort: "asc",
                width: 200
            },
            
            {
                label: "Description",
                field: "description",
                sort: "asc",
                width: 150
            },
            {
                label: "Status",
                field: "status",
                sort: "asc",
                width: 150
            },
            {
                label: "Edit",
                field: "edit",
                sort: "asc",
                width: 100
            },


        ],
        rows: [
            {
                order: <i className="bx bx-user font-size-16 align-middle mr-1"></i>,
                name: "verification documents",
                deadline: "3 jours ",
                description: " fichier NR",
                status: "en cours",
                id: "61",
                icon: <i className="bx bx-user font-size-16 align-middle mr-1"></i>,
                features: "$320",
                permits: "2",
                citizens: "1400",
                errors: "2",
                stockage: "30",
                id: "1"
            },
            {
                order: <i className="bx bx-user font-size-16 align-middle mr-1"></i>,
                name: "verification documents",
                deadline: "3 jours ",
                description: " fichier NR",
                status: "en cours",
                id: "63",
                icon: <i className="bx bx-buildings font-size-16 align-middle mr-1"></i>,
                features: "$170",
                permits: "2",
                citizens: "1400",
                errors: "2",
                stockage: "30",
                id: "2"
            },
            {
                order: <i className="bx bx-user font-size-16 align-middle mr-1"></i>,
                name: "verification documents",
                deadline: "3 jours ",
                description: " fichier NR",
                status: "en cours",
                id: "66",
                icon: <i className="bx bx-badge-check font-size-16 align-middle mr-1"></i>,
                features: "$86",
                permits: "2",
                citizens: "1400",
                errors: "2",
                stockage: "30",
                id: "3"
            },
            

        ]
    };
    constructor(props) {
        super(props);
        this.state = {
            datas: {},
            modal: false,
        };
        this.togglemodal.bind(this);
    }
    togglemodal = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }
    componentDidMount() {
        this.data.rows = this.data.rows.map(row => {
            return {
                order: row.order,
                name: row.name,
                deadline : row.deadline,
                description: row.description,
                status: row.status,
                
                // id: row.id,
                edit:
                    
                        <button className="btn btn-success waves-effect waves-light btn btn-success" value={row.id}
                        onClick={this.togglemodal}
                        >
                            Edit
                </button>
                    
                ,
            }
        })
        this.setState({ datas: this.data });
    }
    render() {


        return (
            <React.Fragment>
                <div className="page-content">
                    <div className="container-fluid">

                        <Breadcrumbs
                            title="Permit Requests" 
                            breadcrumbItem="Process"
                        />

                        <Row>
                            <Col className="col-12">
                                <Card>
                                    <CardBody>
                                        {/* <Row className="mb-2">
                                            <Col sm="4">

                                            </Col>
                                            <Col sm="8">
                                                <div className="text-sm-right" >
                                                    <Button onClick={this.togglemodal} type="button" color="success" className="btn-rounded waves-effect waves-light mb-2 mr-2"><i className="mdi mdi-plus mr-1"

                                                    ></i> Add&nbsp;&nbsp;  </Button>
                                                </div>
                                            </Col>
                                        </Row> */}
                                        {/* <CardTitle>Stripped example </CardTitle> */}
                                        {/* <CardSubtitle className="mb-3">
                      mdbreact DataTables has most features enabled by default, so
                      all you need to do to use it with your own tables is to call
                    the construction function:{" "}
                      <code>&lt;MDBDataTable striped /&gt;</code>.
                  </CardSubtitle> */}

                                        <MDBDataTable responsive striped bordered data={this.state.datas}

                                        />

                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </div>
                <Modal size="lg" isOpen={this.state.modal} role="dialog" autoFocus={true} centered={true} className="exampleModal" tabIndex="-1" toggle={this.togglemodal}>
                    <div className="modal-content">
                        <ModalHeader toggle={this.togglemodal}>
                            Edit Process
                            </ModalHeader >
                        <ModalBody>
                            

                            <div className="">
                                <Form>
                                    <Row>
                                        <Col sm="4">
                                            <FormGroup>
                                                <Label htmlFor="order">Order</Label>
                                                <Input id="order" name="order" type="text" className="form-control" />
                                            </FormGroup>
                                            <FormGroup>
                                                <Label htmlFor="name">Name</Label>
                                                <Input id="name" name="name" type="text" className="form-control" />
                                            </FormGroup>
                                            <FormGroup>
                                                <Label htmlFor="deadLine">DeadLine</Label>
                                                <Input id="deadLine" name="deadLine" type="text" className="form-control" />
                                            </FormGroup>
                                            
                                            

                                        </Col>

                                        <Col sm="4">
                                            <FormGroup>
                                                <Label htmlFor="description">Description</Label>
                                                <Input id="description" name="description" type="text" className="form-control" />
                                            </FormGroup>
                                            
                                            <FormGroup>
                                                <Label htmlFor="taskItems">Task Items</Label>
                                                <Input id="taskItems" name="taskItems" type="text" className="form-control" />
                                            </FormGroup>
                                            <FormGroup>
                                                <Label htmlFor="status">Status</Label>
                                                <Input id="statu" name="status" type="text" className="form-control" />
                                            </FormGroup>
                                           
                                        </Col>
                                        <Col sm="4">
                                            <Dropzone
                                                onDrop={acceptedFiles =>
                                                    this.handleAcceptedFiles(acceptedFiles)
                                                }
                                            >
                                                {({ getRootProps, getInputProps }) => (
                                                    <div className="dropzone">
                                                        <div
                                                            className="dz-message needsclick"
                                                            {...getRootProps()}
                                                        >
                                                            <input {...getInputProps()} />
                                                            <div className="dz-message needsclick">
                                                                <div className="mb-3">
                                                                    <i className="display-4 text-muted bx bxs-cloud-upload"></i>
                                                                </div>
                                                                <h4>Drop files here or click to upload.</h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </Dropzone>

                                        </Col>
                                    </Row>



                                    <Button type="submit" color="primary" className="mr-1 waves-effect waves-light">Save Changes</Button>
                                    <Button type="button" color="secondary" onClick={this.togglemodal}>Close</Button>
                                </Form>
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            
                        </ModalFooter>
                    </div>
                </Modal>
            </React.Fragment>
        );
    }
}




export default withNamespaces()(Process);
