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

class Status extends Component {
    data = {
        columns: [
            {
                label: "Feature item",
                field: "featureItem",
                sort: "asc",
                width: 150
            },
            {
                label: "NameFR",
                field: "nameFr",
                sort: "asc",
                width: 270
            },
            {
                label: "NameAR ",
                field: "nameAr",
                sort: "asc",
                width: 200
            },
            {
                label: "Children feature",
                field: "childrenFeature",
                sort: "asc",
                width: 100
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
                color: "#000fff",
                nameFr: "System Architect",
                nameAr: "1200",
                childrenFeature: "61",
                featureItem: <i className="bx bx-user font-size-16 align-mchildrenFeaturedle mr-1"></i>,
                features: "$320",
                permits: "2",
                citizens: "1400",
                errors: "2",
                stockage: "30",
                
            },
            {
                color: "#000fff",
                nameFr: "Accountant",
                nameAr: "1100",
                childrenFeature: "63",
                featureItem: <i className="bx bx-buildings font-size-16 align-middle mr-1"></i>,
                features: "$170",
                permits: "2",
                citizens: "1400",
                errors: "2",
                stockage: "30",
                id: "2"
            },
            {
                color: "#000fff",
                nameFr: "Junior Technical Author",
                nameAr: "1500",
                childrenFeature: "66",
                featureItem: <i className="bx bx-badge-check font-size-16 align-middle mr-1"></i>,
                features: "$86",
                permits: "2",
                citizens: "1400",
                errors: "2",
                stockage: "30",
                id: "3"
            },
            {
                color: "#000fff",
                nameFr: "Senior Javascript Developer",
                nameAr: "800",
                childrenFeature: "22",
                featureItem: <i className="bx bx-badge-check font-size-16 align-middle mr-1"></i>,
                features: "$433",
                permits: "2",
                citizens: "1400",
                errors: "2",
                stockage: "30",
                id: "4"
            },
            {
                color: "#000fff",
                nameFr: "Accountant",
                nameAr: "600",
                childrenFeature: "33",
                featureItem: <i className="bx bx-badge-check font-size-16 align-middle mr-1"></i>,
                features: "$162",
                permits: "2",
                citizens: "1400",
                errors: "2",
                stockage: "30",
                id: "5"
            },
            {
                color: "#000fff",
                nameFr: "Integration Specialist",
                nameAr: "900",
                childrenFeature: "61",
                featureItem: <i className="bx bx-badge-check font-size-16 align-middle mr-1"></i>,
                features: "$372",
                permits: "2",
                citizens: "1400",
                errors: "2",
                stockage: "30",
                id: "6"
            },
            {
                color: "#000fffr",
                nameFr: "Sales Assistant",
                nameAr: "1800",
                childrenFeature: "59",
                featureItem: <i className="bx bx-badge-check font-size-16 align-middle mr-1"></i>,
                features: "$137",
                permits: "2",
                citizens: "1400",
                errors: "2",
                stockage: "30",
                id: "7"
            },
            {
                color: "#000fff",
                nameFr: "Integration Specialist",
                nameAr: "1700",
                childrenFeature: "55",
                featureItem: <i className="bx bx-badge-check font-size-16 align-middle mr-1"></i>,
                features: "$327",
                permits: "2",
                citizens: "1400",
                errors: "2",
                stockage: "30",
                id: "8"
            },
            {
                color: "#000fff",
                nameFr: "Javascript Developer",
                nameAr: "1960",
                childrenFeature: "39",
                featureItem: <i className="bx bx-badge-check font-size-16 align-middle mr-1"></i>,
                features: "$205",
                permits: "2",
                citizens: "1400",
                errors: "2",
                stockage: "30",
                id: "9"
            },
            {
                color: "#000fff",
                nameFr: "Software Engineer",
                nameAr: "1360",
                childrenFeature: "23",
                featureItem: <i className="bx bx-badge-check font-size-16 align-middle mr-1"></i>,
                features: "$103",
                permits: "2",
                citizens: "1400",
                errors: "2",
                stockage: "30",
                id: "10"
            },
            {
                color: "#000fff",
                nameFr: "nameAr Manidr",
                nameAr: "1800",
                childrenFeature: "30",
                featureItem: <i className="bx bx-badge-check font-size-16 align-middle mr-1"></i>,
                features: "$90",
                permits: "2",
                citizens: "1400",
                errors: "2",
                stockage: "30",
                id: "11"
            },
            {
                color: "#000fff",
                nameFr: "Support Lead",
                nameAr: "1980",
                childrenFeature: "22",
                featureItem: <i className="bx bx-badge-check font-size-16 align-middle mr-1"></i>,
                features: "$342",
                permits: "2",
                citizens: "1400",
                errors: "2",
                stockage: "30",
                id: "12"
            },
            {
                color: "#000fff",
                nameFr: "Regional Director",
                nameAr: "1555",
                childrenFeature: "36",
                featureItem: <i className="bx bx-badge-check font-size-16 align-middle mr-1"></i>,
                features: "$470",
                permits: "2",
                citizens: "1400",
                errors: "2",
                stockage: "30",
                id: "13"
            },
            {
                color: "#000fff",
                nameFr: "Senior Marketing Designer",
                nameAr: "1730",
                childrenFeature: "43",
                featureItem: <i className="bx bx-badge-check font-size-16 align-middle mr-1"></i>,
                features: "$313",
                permits: "2",
                citizens: "1400",
                errors: "2",
                stockage: "30",
                id: "14"
            },
            {
                color: "#000fff",
                nameFr: "Regional Director",
                nameAr: "1850",
                childrenFeature: "19",
                featureItem: <i className="bx bx-badge-check font-size-16 align-middle mr-1"></i>,
                features: "$385",
                permits: "2",
                citizens: "1400",
                errors: "2",
                stockage: "30",
                id: "15"
            },
            {
                color: "#000fff",
                nameFr: "Marketing Designer",
                nameAr: "London",
                childrenFeature: "66",
                featureItem: <i className="bx bx-badge-check font-size-16 align-middle mr-1"></i>,
                features: "$198",
                permits: "2",
                citizens: "1400",
                errors: "2",
                stockage: "30",
                id: "16"
            },
            {
                color: "#000fff",
                nameFr: "Chief Financial nameArr (CFO)",
                nameAr: "New York",
                childrenFeature: "64",
                featureItem: <i className="bx bx-badge-check font-size-16 align-middle mr-1"></i>,
                features: "$725",
                permits: "2",
                citizens: "1400",
                errors: "2",
                stockage: "30",
                id: "17"
            },
            {
                color: "#000fff",
                nameFr: "Systems Administrator",
                nameAr: "New York",
                childrenFeature: "59",
                featureItem: <i className="bx bx-badge-check font-size-16 align-middle mr-1"></i>,
                features: "$237",
                permits: "2",
                citizens: "1400",
                errors: "2",
                stockage: "30",
                id: "18"
            },
            {
                color: "#000fff",
                nameFr: "Software Engineer",
                nameAr: "London",
                childrenFeature: "41",
                featureItem: <i className="bx bx-badge-check font-size-16 align-middle mr-1"></i>,
                features: "$132",
                permits: "2",
                citizens: "1400",
                errors: "2",
                stockage: "30",
                id: "19"
            },
            {
                color: "#000fff",
                nameFr: "Personnel Lead",
                nameAr: "Edinburgh",
                childrenFeature: "35",
                featureItem: <i className="bx bx-badge-check font-size-16 align-middle mr-1"></i>,
                features: "$217",
                permits: "2",
                citizens: "1400",
                errors: "2",
                stockage: "30",
                id: "20"
            },
            {
                color: "#000fff",
                nameFr: "Development Lead",
                nameAr: "New York",
                childrenFeature: "30",
                featureItem: <i className="bx bx-badge-check font-size-16 align-middle mr-1"></i>,
                features: "$345",
                permits: "2",
                citizens: "1400",
                errors: "2",
                stockage: "30",
                id: "21"
            },
            {
                color: "#000fff",
                nameFr: "Chief Marketing nameArr (CMO)",
                nameAr: "New York",
                childrenFeature: "40",
                featureItem: <i className="bx bx-badge-check font-size-16 align-middle mr-1"></i>,
                features: "$675",
                permits: "2",
                citizens: "1400",
                errors: "2",
                stockage: "30",
                id: "22"
            },
            {
                color: "#000fff",
                nameFr: "Pre-Sales Support",
                nameAr: "New York",
                childrenFeature: "21",
                featureItem: <i className="bx bx-badge-check font-size-16 align-middle mr-1"></i>,
                features: "$106",
                permits: "2",
                citizens: "1400",
                errors: "2",
                stockage: "30",
                id: "23"
            },
            {
                color: "#000fff",
                nameFr: "Sales Assistant",
                nameAr: "Sidney",
                childrenFeature: "23",
                featureItem: <i className="bx bx-badge-check font-size-16 align-middle mr-1"></i>,
                features: "$85",
                permits: "2",
                citizens: "1400",
                errors: "2",
                stockage: "30",
                id: "24"
            },
            {
                color: "#000fff",
                nameFr: "Chief Executive nameArr (CEO)",
                nameAr: "London",
                childrenFeature: "47",
                featureItem: <i className="bx bx-badge-check font-size-16 align-middle mr-1"></i>,
                features: "$1",
                permits: "2",
                citizens: "1400",
                errors: "2",
                stockage: "30",
                id: "25"
            },
            {
                color: "#000fff",
                nameFr: "Developer",
                nameAr: "Edinburgh",
                childrenFeature: "42",
                featureItem: <i className="bx bx-badge-check font-size-16 align-middle mr-1"></i>,
                features: "$92",
                permits: "2",
                citizens: "1400",
                errors: "2",
                stockage: "30",
                id: "26"
            },
            {
                color: "#000fff",
                nameFr: "Regional Director",
                nameAr: "Singapore",
                childrenFeature: "28",
                featureItem: <i className="bx bx-badge-check font-size-16 align-middle mr-1"></i>,
                features: "$357",
                permits: "2",
                citizens: "1400",
                errors: "2",
                stockage: "30",
                id: "27"
            },
            {
                color: "#000fff",
                nameFr: "Software Engineer",
                nameAr: "San Francisco",
                childrenFeature: "28",
                featureItem: <i className="bx bx-badge-check font-size-16 align-middle mr-1"></i>,
                features: "$206",
                permits: "2",
                citizens: "1400",
                errors: "2",
                stockage: "30",
                id: "28"
            },
            {
                color: "#000fff",
                nameFr: "Chief Operating nameArr (COO)",
                nameAr: "San Francisco",
                childrenFeature: "48",
                featureItem: <i className="bx bx-badge-check font-size-16 align-middle mr-1"></i>,
                features: "$850",
                permits: "2",
                citizens: "1400",
                errors: "2",
                stockage: "30",
                id: "29"
            },
            {
                color: "#000fff",
                nameFr: "Regional Marketing",
                nameAr: "Tokyo",
                childrenFeature: "20",
                featureItem: <i className="bx bx-badge-check font-size-16 align-middle mr-1"></i>,
                features: "$163",
                permits: "2",
                citizens: "1400",
                errors: "2",
                stockage: "30",
                id: "30"
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
                color: row.color,
                nameFr: row.nameFr,
                nameAr: row.nameAr,
                childrenFeature: row.childrenFeature,
                featureItem: row.featureItem,
                features: row.features,
                permits: row.permits,
                citizens: row.citizens,
                errors: row.errors,
                stockage: row.stockage,
                id: row.id,
                edit:
                    <Link to="/status/edit" className=" waves-effect"
                        style={{ color: 'white', textDecoration: 'none', }}
                    >
                        <button className="btn btn-success waves-effect waves-light btn btn-success" value={row.id}>
                            Edit
                </button>
                    </Link>
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
                            title="Permit System" 
                            breadcrumbItem="Features"
                        />

                        <Row>
                            <Col className="col-12">
                                <Card>
                                    <CardBody>
                                        <Row className="mb-2">
                                            <Col sm="4">

                                            </Col>
                                            <Col sm="8">
                                                <div className="text-sm-right" >
                                                    <Button onClick={this.togglemodal} type="button" color="success" className="btn-rounded waves-effect waves-light mb-2 mr-2"><i className="mdi mdi-plus mr-1"

                                                    ></i> Add&nbsp;&nbsp;  </Button>
                                                </div>
                                            </Col>
                                        </Row>
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
                            Add feature
                            </ModalHeader >
                        <ModalBody>
                            

                            <div className="">
                                <Form>
                                    <Row>
                                        <Col sm="4">
                                            <FormGroup>
                                                <Label htmlFor="namefr">NameFR</Label>
                                                <Input id="namefr" name="namefr" type="text" className="form-control" />
                                            </FormGroup>
                                            
                                            
                                            

                                        </Col>

                                        <Col sm="4">
                                            <FormGroup>
                                                <Label htmlFor="namear">Name Ar</Label>
                                                <Input id="namear" name="namear" type="text" className="form-control" />
                                            </FormGroup>
                                            <FormGroup>
                                                <Label htmlFor="childrenFeature">Children feature</Label>
                                                <Input id="childrenFeature" name="childrenFeature" type="text" className="form-control" />
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




export default withNamespaces()(Status);
