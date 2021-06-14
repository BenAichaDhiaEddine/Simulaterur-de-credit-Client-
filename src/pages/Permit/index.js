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
import Select from 'react-select';

const optionGroup = [
	{
		label: "Picnic",
		options: [
			{ label: "Mustard", value: "Mustard" },
			{ label: "Ketchup", value: "Ketchup" },
			{ label: "Relish", value: "Relish" }
		]
	},
	{
		label: "Camping",
		options: [
			{ label: "Tent", value: "Tent" },
			{ label: "Flashlight", value: "Flashlight" },
			{ label: "Toilet Paper", value: "Toilet Paper" }
		]
	}
];

class PermitSystem extends Component {
    
    data = {
        columns: [
            {
                label: "Requests",
                field: "requests",
                sort: "asc",
                width: 150
            },
            {
                label: "Related features",
                field: "relatedFeatures",
                sort: "asc",
                width: 270
            },
            {
                label: "Total Requests",
                field: "totalRequests",
                sort: "asc",
                width: 200
            },
            {
                label: "Invoices",
                field: "invoices",
                sort: "asc",
                width: 100
            },
            {
                label: "Permits",
                field: "permits",
                sort: "asc",
                width: 150
            },

            {
                label: "Edit",
                field: "edit",
                sort: "asc",
                width: 100
            },
            {
                label: "Quick edit",
                field: "quickedit",
                sort: "asc",
                width: 100
            },



        ],
        rows: [
            {
                requests: "Tiger Nixon",
                relatedFeatures: "System Architect",
                totalRequests: "1200",
                invoices: "61",
                createdAt: "2011/04/25",
                features: "$320",
                permits: "2",
                citizens: "1400",
                errors: "2",
                stockage: "30",
                id: "1"
            },
            {
                requests: "Garrett Winters",
                relatedFeatures: "Accountant",
                totalRequests: "1100",
                invoices: "63",
                createdAt: "2011/07/25",
                features: "$170",
                permits: "2",
                citizens: "1400",
                errors: "2",
                stockage: "30",
                id: "2"
            },
            {
                requests: "Ashton Cox",
                relatedFeatures: "Junior Technical Author",
                totalRequests: "1500",
                invoices: "66",
                createdAt: "2009/01/12",
                features: "$86",
                permits: "2",
                citizens: "1400",
                errors: "2",
                stockage: "30",
                id: "3"
            },
            {
                requests: "Cedric Kelly",
                relatedFeatures: "Senior Javascript Developer",
                totalRequests: "800",
                invoices: "22",
                createdAt: "2012/03/29",
                features: "$433",
                permits: "2",
                citizens: "1400",
                errors: "2",
                stockage: "30",
                id: "4"
            },
            {
                requests: "Airi Satou",
                relatedFeatures: "Accountant",
                totalRequests: "600",
                invoices: "33",
                createdAt: "2008/11/28",
                features: "$162",
                permits: "2",
                citizens: "1400",
                errors: "2",
                stockage: "30",
                id: "5"
            },
            {
                requests: "Brielle Williamson",
                relatedFeatures: "Integration Specialist",
                totalRequests: "900",
                invoices: "61",
                createdAt: "2012/12/02",
                features: "$372",
                permits: "2",
                citizens: "1400",
                errors: "2",
                stockage: "30",
                id: "6"
            },
            {
                requests: "Herrod Chandler",
                relatedFeatures: "Sales Assistant",
                totalRequests: "1800",
                invoices: "59",
                createdAt: "2012/08/06",
                features: "$137",
                permits: "2",
                citizens: "1400",
                errors: "2",
                stockage: "30",
                id: "7"
            },
            {
                requests: "Rhona Davidson",
                relatedFeatures: "Integration Specialist",
                totalRequests: "1700",
                invoices: "55",
                createdAt: "2010/10/14",
                features: "$327",
                permits: "2",
                citizens: "1400",
                errors: "2",
                stockage: "30",
                id: "8"
            },
            {
                requests: "Colleen Hurst",
                relatedFeatures: "Javascript Developer",
                totalRequests: "1960",
                invoices: "39",
                createdAt: "2009/09/15",
                features: "$205",
                permits: "2",
                citizens: "1400",
                errors: "2",
                stockage: "30",
                id: "9"
            },
            {
                requests: "Sonya Frost",
                relatedFeatures: "Software Engineer",
                totalRequests: "1360",
                invoices: "23",
                createdAt: "2008/12/13",
                features: "$103",
                permits: "2",
                citizens: "1400",
                errors: "2",
                stockage: "30",
                id: "10"
            },
            {
                requests: "Jena Gaines",
                relatedFeatures: "totalRequests Maninvoicesr",
                totalRequests: "1800",
                invoices: "30",
                createdAt: "2008/12/19",
                features: "$90",
                permits: "2",
                citizens: "1400",
                errors: "2",
                stockage: "30",
                id: "11"
            },
            {
                requests: "Quinn Flynn",
                relatedFeatures: "Support Lead",
                totalRequests: "1980",
                invoices: "22",
                createdAt: "2013/03/03",
                features: "$342",
                permits: "2",
                citizens: "1400",
                errors: "2",
                stockage: "30",
                id: "12"
            },
            {
                requests: "Charde Marshall",
                relatedFeatures: "Regional Director",
                totalRequests: "1555",
                invoices: "36",
                createdAt: "2008/10/16",
                features: "$470",
                permits: "2",
                citizens: "1400",
                errors: "2",
                stockage: "30",
                id: "13"
            },
            {
                requests: "Haley Kennedy",
                relatedFeatures: "Senior Marketing Designer",
                totalRequests: "1730",
                invoices: "43",
                createdAt: "2012/12/18",
                features: "$313",
                permits: "2",
                citizens: "1400",
                errors: "2",
                stockage: "30",
                id: "14"
            },
            {
                requests: "Tatyana Fitzpatrick",
                relatedFeatures: "Regional Director",
                totalRequests: "1850",
                invoices: "19",
                createdAt: "2010/03/17",
                features: "$385",
                permits: "2",
                citizens: "1400",
                errors: "2",
                stockage: "30",
                id: "15"
            },
            {
                requests: "Michael Silva",
                relatedFeatures: "Marketing Designer",
                totalRequests: "London",
                invoices: "66",
                createdAt: "2012/11/27",
                features: "$198",
                permits: "2",
                citizens: "1400",
                errors: "2",
                stockage: "30",
                id: "16"
            },
            {
                requests: "Paul Byrd",
                relatedFeatures: "Chief Financial totalRequestsr (CFO)",
                totalRequests: "New York",
                invoices: "64",
                createdAt: "2010/06/09",
                features: "$725",
                permits: "2",
                citizens: "1400",
                errors: "2",
                stockage: "30",
                id: "17"
            },
            {
                requests: "Gloria Little",
                relatedFeatures: "Systems Administrator",
                totalRequests: "New York",
                invoices: "59",
                createdAt: "2009/04/10",
                features: "$237",
                permits: "2",
                citizens: "1400",
                errors: "2",
                stockage: "30",
                id: "18"
            },
            {
                requests: "Bradley Greer",
                relatedFeatures: "Software Engineer",
                totalRequests: "London",
                invoices: "41",
                createdAt: "2012/10/13",
                features: "$132",
                permits: "2",
                citizens: "1400",
                errors: "2",
                stockage: "30",
                id: "19"
            },
            {
                requests: "Dai Rios",
                relatedFeatures: "Personnel Lead",
                totalRequests: "Edinburgh",
                invoices: "35",
                createdAt: "2012/09/26",
                features: "$217",
                permits: "2",
                citizens: "1400",
                errors: "2",
                stockage: "30",
                id: "20"
            },
            {
                requests: "Jenette Caldwell",
                relatedFeatures: "Development Lead",
                totalRequests: "New York",
                invoices: "30",
                createdAt: "2011/09/03",
                features: "$345",
                permits: "2",
                citizens: "1400",
                errors: "2",
                stockage: "30",
                id: "21"
            },
            {
                requests: "Yuri Berry",
                relatedFeatures: "Chief Marketing totalRequestsr (CMO)",
                totalRequests: "New York",
                invoices: "40",
                createdAt: "2009/06/25",
                features: "$675",
                permits: "2",
                citizens: "1400",
                errors: "2",
                stockage: "30",
                id: "22"
            },
            {
                requests: "Caesar Vance",
                relatedFeatures: "Pre-Sales Support",
                totalRequests: "New York",
                invoices: "21",
                createdAt: "2011/12/12",
                features: "$106",
                permits: "2",
                citizens: "1400",
                errors: "2",
                stockage: "30",
                id: "23"
            },
            {
                requests: "Doris Wilder",
                relatedFeatures: "Sales Assistant",
                totalRequests: "Sidney",
                invoices: "23",
                createdAt: "2010/09/20",
                features: "$85",
                permits: "2",
                citizens: "1400",
                errors: "2",
                stockage: "30",
                id: "24"
            },
            {
                requests: "Angelica Ramos",
                relatedFeatures: "Chief Executive totalRequestsr (CEO)",
                totalRequests: "London",
                invoices: "47",
                createdAt: "2009/10/09",
                features: "$1",
                permits: "2",
                citizens: "1400",
                errors: "2",
                stockage: "30",
                id: "25"
            },
            {
                requests: "Gavin Joyce",
                relatedFeatures: "Developer",
                totalRequests: "Edinburgh",
                invoices: "42",
                createdAt: "2010/12/22",
                features: "$92",
                permits: "2",
                citizens: "1400",
                errors: "2",
                stockage: "30",
                id: "26"
            },
            {
                requests: "Jennifer Chang",
                relatedFeatures: "Regional Director",
                totalRequests: "Singapore",
                invoices: "28",
                createdAt: "2010/11/14",
                features: "$357",
                permits: "2",
                citizens: "1400",
                errors: "2",
                stockage: "30",
                id: "27"
            },
            {
                requests: "Brenden Wagner",
                relatedFeatures: "Software Engineer",
                totalRequests: "San Francisco",
                invoices: "28",
                createdAt: "2011/06/07",
                features: "$206",
                permits: "2",
                citizens: "1400",
                errors: "2",
                stockage: "30",
                id: "28"
            },
            {
                requests: "Fiona Green",
                relatedFeatures: "Chief Operating totalRequestsr (COO)",
                totalRequests: "San Francisco",
                invoices: "48",
                createdAt: "2010/03/11",
                features: "$850",
                permits: "2",
                citizens: "1400",
                errors: "2",
                stockage: "30",
                id: "29"
            },
            {
                requests: "Shou Itou",
                relatedFeatures: "Regional Marketing",
                totalRequests: "Tokyo",
                invoices: "20",
                createdAt: "2011/08/14",
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
            modalEdit: false,
            selectedMulti: null,
            selectedMultio: null,
        };
        this.togglemodal.bind(this);
    }
    togglemodal = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }
    togglemodalEdit = () => {
        this.setState(prevState => ({
            modalEdit: !prevState.modalEdit
        }));
    }
    handleMulti = selectedMulti => {
		this.setState({ selectedMulti });
    };
    handleMultio = selectedMultio => {
		this.setState({ selectedMultio });
	};
    componentDidMount() {
        this.data.rows = this.data.rows.map(row => {
            return {
                requests: row.requests,
                relatedFeatures: row.relatedFeatures,
                totalRequests: row.totalRequests,
                invoices: row.invoices,
                createdAt: row.createdAt,
                features: row.features,
                permits: row.permits,
                citizens: row.citizens,
                errors: row.errors,
                stockage: row.stockage,
                id: row.id,
                edit:
                    <Link to="/process" className=" waves-effect"
                        style={{ color: 'white', textDecoration: 'none', }}
                    >
                        <button className="btn btn-success waves-effect waves-light btn btn-success" value={row.id}>
                            Edit
                </button>
                    </Link>
                ,
                quickedit:
                    
                        <button className="btn btn-success waves-effect waves-light btn btn-success" value={row.id} onClick={this.togglemodalEdit}>
                            Quick edit
                </button>
                    
                ,
            }
        })
        this.setState({ datas: this.data });
    }
    render() {

        const { selectedMulti,selectedMultio } = this.state;
        return (
            <React.Fragment>
                <div className="page-content">
                    <div className="container-fluid">

                        <Breadcrumbs
                            title="Permit Requests" 
                            breadcrumbItem="Requests"
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
                            Add request
                            </ModalHeader >
                        <ModalBody>
                            

                            <div className="">
                                <Form>
                                    <Row>
                                        <Col sm="4">
                                            <FormGroup>
                                                <Label htmlFor="name">Name</Label>
                                                <Input id="name" name="name" type="text" className="form-control" />
                                            </FormGroup>
                                            <FormGroup>
                                                <Label htmlFor="name"></Label>
                                            
                                                <Dropdown
                                                    isOpen={this.state.singlebtn}
                                                    toggle={() =>
                                                        this.setState({ singlebtn: !this.state.singlebtn })
                                                    }
                                                >
                                                    <DropdownToggle className="btn btn-secondary" caret>
                                                    Related Features{" "}
                                                        <i className="mdi mdi-chevron-down"></i>
                                                    </DropdownToggle>
                                                    <DropdownMenu>
                                                        <DropdownItem>Action</DropdownItem>
                                                        <DropdownItem>Another action</DropdownItem>
                                                        <DropdownItem>Something else here</DropdownItem>
                                                    </DropdownMenu>
                                                </Dropdown>
                                                </FormGroup>
                                            <FormGroup>
                                                <Label htmlFor="totlaRequests">Total Requests</Label>
                                                <Input id="totlaRequests" name="totlaRequests" type="text" className="form-control" />
                                            </FormGroup>
                                            

                                        </Col>

                                        <Col sm="4">
                                            <FormGroup>
                                                <Label htmlFor="namear">Name Ar</Label>
                                                <Input id="namear" name="namear" type="text" className="form-control" />
                                            </FormGroup>
                                            <FormGroup>
                                                <Label htmlFor="invoices">Invoices</Label>
                                                <Input id="invoices" name="invoices" type="text" className="form-control" />
                                            </FormGroup>
                                            <FormGroup>
                                                <Label htmlFor="permits">Permits</Label>
                                                <Input id="permits" name="permits" type="text" className="form-control" />
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
                <Modal size="lg" isOpen={this.state.modalEdit} role="dialog" autoFocus={true} centered={true} className="exampleModal" tabIndex="-1" toggle={this.togglemodalEdit}>
                    <div className="modal-content">
                        <ModalHeader toggle={this.togglemodalEdit}>
                            Settings
                            </ModalHeader >
                        <ModalBody>
                            

                            <div className="">
                                <Form>
                                    <Row>
                                        <Col sm="6">
                                            <FormGroup>
                                                <Label htmlFor="name">Name</Label>
                                                <Input id="name" name="name" type="text" className="form-control" />
                                            </FormGroup>
                                            
                                               
                                            
                                            <FormGroup className="select2-container">
                                                    <label className="control-label">Create permission</label>
                                                    <Select
                                                        value={selectedMulti}
                                                        isMulti={true}
                                                        onChange={this.handleMulti}
                                                        options={optionGroup}
                                                        classNamePrefix="select2-selection"
                                                    />


                                            </FormGroup>
                                            
                                            
                                            

                                        </Col>

                                        <Col sm="6">
                                            <FormGroup>
                                                <Label htmlFor="namear">Name Ar</Label>
                                                <Input id="namear" name="namear" type="text" className="form-control" />
                                            </FormGroup>
                                            <FormGroup className="select2-container">
                                                    <label className="control-label">Owner</label>
                                                    <Select
                                                        value={selectedMultio}
                                                        isMulti={true}
                                                        onChange={this.handleMultio}
                                                        options={optionGroup}
                                                        classNamePrefix="select2-selection"
                                                    />


                                            </FormGroup>
                                           


                                        </Col>
                                        
                                    </Row>
                                    <Row>
                                        <Col sm="12">
                                           <h6> Default Configuration</h6>
                                                                        </Col>
                                        <Col sm="4">
                                            <FormGroup>
                                                <Label htmlFor="street">Dead Line</Label>
                                                <Input id="street" name="street" type="text" className="form-control" />
                                            </FormGroup>
                                        </Col>
                                        <Col sm="4">
                                            <FormGroup>
                                                <Label htmlFor="number">Permit expiration</Label>
                                                <Input id="nummber" name="number" type="text" className="form-control" />
                                            </FormGroup>
                                        </Col>
                                        <Col sm="4">
                                            <FormGroup>
                                                <Label htmlFor="zip">Invoice due</Label>
                                                <Input id="zip" name="zip" type="text" className="form-control" />
                                            </FormGroup>
                                        </Col>
                                        
                                    </Row>
                                    <Row>
                                        
                                        <Col sm="4">
                                            <FormGroup>
                                                <Label htmlFor="street">Upload</Label>
                                                <div className="custom-control custom-switch mb-2" dir="ltr">
                                                    <input type="checkbox" className="custom-control-input" id="customSwitch1" defaultChecked />
                                                    <label className="custom-control-label" htmlFor="customSwitch1" onClick={(e) => { this.setState({ toggleSwitch: !this.state.toggleSwitch }) }}></label>
                                                </div>
                                            </FormGroup>
                                        </Col>
                                        <Col sm="4">
                                            <FormGroup>
                                                <Label htmlFor="number">Supported Files</Label>
                                                <Input id="nummber" name="number" type="text" className="form-control" />
                                            </FormGroup>
                                        </Col>
                                        <Col sm="34">
                                            <FormGroup>
                                                <Label htmlFor="zip">Max size</Label>
                                                <Input id="zip" name="zip" type="text" className="form-control" />
                                            </FormGroup>
                                        </Col>
                                        
                                    </Row>
                                    <Row>
                                        
                                        <Col sm="4">
                                            <FormGroup>
                                                <Label htmlFor="street">Messenger</Label>
                                                <div className="custom-control custom-switch mb-2" dir="ltr">
                                                    <input type="checkbox" className="custom-control-input" id="customSwitch1" defaultChecked />
                                                    <label className="custom-control-label" htmlFor="customSwitch1" onClick={(e) => { this.setState({ toggleSwitch: !this.state.toggleSwitch }) }}></label>
                                                </div>
                                            </FormGroup>
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




export default withNamespaces()(PermitSystem);
