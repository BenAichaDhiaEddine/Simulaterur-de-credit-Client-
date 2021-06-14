import React, { useState, useEffect } from "react";
import { MDBDataTable } from "mdbreact";
import {
  Row,
  Col,
  Card,
  CardBody,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { MDBBtn } from "mdbreact";

import { useDispatch, useSelector } from "react-redux";
import SpinnerPage from "../../components/loader";
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
import "../Tables/datatables.scss";
// import "./style.scss";
import "./switch.css";
import { withNamespaces } from "react-i18next";

import { useForm, Controller } from "react-hook-form";
import {
  addAdmin,
  EditAdmin,
  getFullAdmins,
  toggleAdmin,
  addAdminStatus,
  deleteAdmin,
} from "../../store/admins/actions";
import { Fragment } from "react";
const AdminList = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const { errors, handleSubmit, control, reset, setError, clearErrors } = useForm();
  const [selectedId, setSelectedId] = useState(null);
  const { baseList, loading, addAdminStatusState } = useSelector(({ Admins }) => Admins);
  const [mode, setMode] = useState("add");
  const onSubmit = (data) => {
    if (mode === "add") {
      let dataToSubmit = {
        "email": data.email,
        "firstName.ar": data.firstNameAr,
        "lastName.ar": data.lastNameAr,
        "firstName.fr": data.firstNameFr,
        "lastName.fr": data.lastNameFr
      }
      dispatch(addAdmin(dataToSubmit));
    } else {
      let dataToSubmit = {
        dataToSubmit : {
          "email": data.email,
          "firstName": {
                  "ar": data.firstNameAr,
                  "fr": data.firstNameAr
              },
              "lastName": {
                  "ar":  data.firstNameFr,
                  "fr": data.lastNameAr
              }
          },
        "id": selectedId,
      }
      dispatch(EditAdmin(dataToSubmit));
    }
    if (!addAdminStatusState) {
      setError("email", {
        type: "manual",
        message: "Another admin with the same email exists"
      })
    }
    if (addAdminStatusState) {
      toggleModal();
    }
  };
  const toggleModal = () => {
    setMode("add");
    setOpen(!open);
    setSelectedId(null);
    reset({
      firstNameAr: "",
      firstNameFr: "",
      lastNameAr: "",
      lastNameFr: "",
      email: "",
    });
  };
  useEffect(() => {
    dispatch(getFullAdmins());
  }, []);
  useEffect(() => {
    if (addAdminStatusState) {
      clearErrors()
      toggleModal();
      dispatch(addAdminStatus(false))
    }
  }, [addAdminStatusState])
  
  const mapDataToDisplay = () => {
    let rows = baseList.map((elm) => {
      return {
        firstName: elm?.firstName?.ar,
        lastName: elm?.lastName?.ar,
        email: elm?.email,
        address: elm?.address,
        status: elm?.activated ? (
          <MDBBtn
            pill="true"
            size="sm"
            color="danger"
            onClick={() => {
              dispatch(
                toggleAdmin({
                  id: elm?._id,
                  activated: false,
                })
              );
            }}
          >
            Disable
          </MDBBtn>
        ) : (
          <MDBBtn
            pill="true"
            size="sm"
            color="success"
            onClick={() => {
              dispatch(
                toggleAdmin({
                  id: elm?._id,
                  activated: true,
                })
              );
            }}
          >
            Enable
          </MDBBtn>
        ),
        phone: elm?.phone,
        actions: (
          <Fragment>
            <button
              className="btn btn-success waves-effect waves-light btn btn-success my-2"
              onClick={() => {
                reset({
                  firstNameAr: elm?.firstName?.ar,
                  firstNameFr: elm?.firstName?.fr,
                  lastNameAr: elm?.lastName?.ar,
                  lastNameFr: elm?.lastName?.fr,
                  email: elm?.email,
                });
                setSelectedId(elm?._id);
                setMode("edit");
                setOpen(true);
              }}
              value={elm?._id}
              style={{
                minWidth: "100px",
              }}
            >
              Edit
            </button>

            <br />

            <button
              className="btn btn-success waves-effect waves-light btn btn-danger "
              value={elm?._id}
              style={{
                minWidth: "100px",
              }}
              onClick={
                () => {
                  dispatch(deleteAdmin(elm?._id))
                }
              }
            >
              Delete
            </button>

            <br />
          </Fragment>
        ),
      };
    });
    return {
      columns: [
        {
          label: "First Name",
          field: "firstName",
          width: 150,
          attributes: {
            "aria-controls": "DataTable",
            "aria-label": "Name",
          },
        },
        {
          label: "Last Name",
          field: "lastName",
          width: 150,
        },
        {
          label: "Email",
          field: "email",
          width: 200,
        },
        {
          label: "Address",
          field: "address",
          sort: "asc",
          width: 100,
        },
        {
          label: "Phone",
          field: "phone",
          sort: "disabled",
          width: 150,
        },
        {
          label: "Status",
          field: "status",
          sort: "disabled",
          width: 100,
        },
        {
          label: "Actions",
          field: "actions",
          sort: "disabled",
          width: 100,
        },
      ],
      rows: rows,
    };
  };
  return (
    <React.Fragment>
      <div className="page-content">
        <div className="container-fluid">
          <Breadcrumbs title="Admins" breadcrumbItem="Admins" />

          <Row>
            <Col className="col-12">
              <Card>
                <CardBody>
                  <Row className="mb-2">
                    <Col sm="4"></Col>
                    <Col sm="8">
                      <div className="text-sm-right">
                        <Button
                          onClick={toggleModal}
                          type="button"
                          color="primary"
                          className="btn-rounded waves-effect waves-light mb-2 mr-2"
                        >
                          <i className="mdi mdi-plus mr-1"></i> Add&nbsp;&nbsp;{" "}
                        </Button>
                      </div>
                    </Col>
                  </Row>
                  {loading ? (
                    <SpinnerPage />
                  ) : (
                    <MDBDataTable
                      responsive
                      striped
                      bordered
                      data={mapDataToDisplay()}
                    />)}
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>


      <Modal
        size="lg"
        isOpen={open}
        role="dialog"
        autoFocus={true}
        centered={true}
        className="exampleModal"
        tabIndex="-1"
        toggle={toggleModal}
      >
        <div className="modal-content">
          <ModalHeader toggle={toggleModal}>
            {mode === "add" ? "Add Admin" : "Edit Admin"}
          </ModalHeader>
          <ModalBody>
            <div className="">
              <Form onSubmit={
                handleSubmit(onSubmit)
              }>
                <Row>
                  <Col sm="6">
                    <FormGroup>
                      <Label htmlFor="firstNameAr">First name Ar </Label>
                      <Controller
                        control={control}
                        name="firstNameAr"
                        defaultValue=""
                        rules={{ required: true }}
                        render={({ onChange, value }) => (
                          <Input
                            id="firstNameAr"
                            name="firstNameAr"
                            type="text"
                            className="form-control"
                            value={value}
                            onChange={onChange}
                          />
                        )}
                      />
                      {errors.firstNameAr && (
                        <span className="my-2 text-danger">
                          This field is required
                        </span>
                      )}
                    </FormGroup>
                  </Col>
                  <Col sm="6">
                    <FormGroup>
                      <Label htmlFor="lastNameAr">Last name Ar </Label>
                      <Controller
                        control={control}
                        defaultValue=""
                        name="lastNameAr"
                        rules={{ required: true }}
                        render={({ onChange, value }) => (
                          <Input
                            id="lastNameAr"
                            name="lastNameAr"
                            type="text"
                            className="form-control"
                            value={value}
                            onChange={onChange}
                          />
                        )}
                      />
                      {errors.lastNameAr && (
                        <span className="my-2 text-danger">
                          This field is required
                        </span>
                      )}
                    </FormGroup>
                  </Col>
                  <Col sm="6">
                    <FormGroup>
                      <Label htmlFor="firstNameFr">First Name Fr </Label>
                      <Controller
                        control={control}
                        name="firstNameFr"
                        defaultValue=""
                        rules={{ required: true }}
                        render={({ onChange, value }) => (
                          <Input
                            id="firstNameFr"
                            name="firstNameFr"
                            type="text"
                            className="form-control"
                            value={value}
                            onChange={onChange}
                          />
                        )}
                      />
                      {errors.firstNameFr && (
                        <span className="my-2 text-danger">
                          This field is required
                        </span>
                      )}
                    </FormGroup>
                  </Col>
                  <Col sm="6">
                    <FormGroup>
                      <Label htmlFor="lastNameFr">Last name Fr </Label>
                      <Controller
                        control={control}
                        defaultValue=""
                        name="lastNameFr"
                        rules={{ required: true }}
                        render={({ onChange, value }) => (
                          <Input
                            id="lastNameFr"
                            name="lastNameFr"
                            type="text"
                            className="form-control"
                            value={value}
                            onChange={onChange}
                          />
                        )}
                      />
                      {errors.lastNameFr && (
                        <span className="my-2 text-danger">
                          This field is required
                        </span>
                      )}
                    </FormGroup>
                  </Col>
                  <Col sm="6">
                    <FormGroup>
                      <Label htmlFor="email">Email</Label>
                      <Controller
                        control={control}
                        name="email"
                        defaultValue=""
                        rules={{ required: true }}
                        render={({ onChange, value }) => (
                          <Input
                            id="email"
                            name="email"
                            type="text"
                            className="form-control"
                            value={value}
                            onChange={onChange}
                          />
                        )}
                      />

                      {errors.email &&
                        <span className="my-2 text-danger">
                          {errors.email.message}
                        </span>
                      }
                    </FormGroup>
                  </Col>
                </Row>
                <Button
                  type="submit"
                  color="primary"
                  className="mr-1 waves-effect waves-light"
                >
                  Save Changes
                </Button>
                <Button type="button" color="secondary" onClick={toggleModal}>
                  Close
                </Button>
              </Form>
            </div>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </div>
      </Modal>
    </React.Fragment>
  );
};

export default withNamespaces()(AdminList);
