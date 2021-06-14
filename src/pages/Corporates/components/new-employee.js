
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { withNamespaces } from "react-i18next";
import { Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from "reactstrap";
import { addAdmin, addAdminStatus } from "../../../store/admins/actions";

const NewCorporateAdmin = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const { errors, handleSubmit, control, reset, setError, clearErrors } = useForm();
  const { addAdminStatusState } = useSelector(({ Admins }) => Admins);

  const onSubmit = (data) => {
    let dataToSubmit = {
      "email": data.email,
      "firstName.ar": data.firstNameAr,
      "lastName.ar": data.lastNameAr,
      "firstName.fr": data.firstNameFr,
      "lastName.fr": data.lastNameFr
    }
    dispatch(addAdmin(dataToSubmit));
    if (!addAdminStatusState) {
      setError("email", {
        type: "manual",
        message: "Another admin with the same email exists"
      })
    } else {
      toggleModal();
    }
  };

  const toggleModal = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (addAdminStatusState) {
      clearErrors()
      toggleModal();
      dispatch(addAdminStatus(false))
    }
  }, [addAdminStatusState])

  return (
    <React.Fragment>
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
            Add New Corporate Admin
           </ModalHeader>
          <ModalBody>
            <div >
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
                  Add New Corporate Admin
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

export default withNamespaces()(NewCorporateAdmin);
