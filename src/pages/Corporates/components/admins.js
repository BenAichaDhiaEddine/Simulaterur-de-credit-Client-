import React, { useState, Fragment } from "react";
import { Row, Col, FormGroup, Label, Input, Button, Modal } from "reactstrap";
import ReactSelect from "react-select";
import { Controller, useForm } from "react-hook-form";
import { Form } from "redux-form";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import NewCorporateAdmin from "./new-employee";
import { getAdmins } from "../../../store/admins/actions";
import { addCorporateAdmin } from "../../../store/actions";

const Admins = ({ nextTab }) => {
  const defaultValues = {};
  const { register, reset, errors, handleSubmit, control } = useForm({ defaultValues });
  const { baseList, loading } = useSelector(({ Admins }) => Admins);
  const { corporate } = useSelector(({ Corporates }) => Corporates);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAdmins());

  }, []);

  const onSubmit = (data) => {
    let payload = {
      manager: data.ReactSelect.value,
      config: corporate.id,
    };
    dispatch(addCorporateAdmin(payload));
  };
  const isActive = () => {
    if (baseList.length != 0) {
      return true;
    }
    else
      return false;
  }
  return (
    <Fragment>
      <div className="text-sm-right">
        <NewCorporateAdmin />
      </div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>

          <Col>
            {!loading && baseList.length != 0 && (
              <FormGroup>
                <Label for="manager">Select Functional Admin</Label>
                <Controller
                  as={ReactSelect}
                  defaultValue={{
                    label: baseList[0]?.firstName?.fr + " " + baseList[0]?.lastName?.fr,
                    value: {
                      email: baseList[0]?.email,
                      firstName: baseList[0]?.firstName?.fr,
                      lastName: baseList[0]?.lastName?.fr
                    }
                  }}
                  options={baseList.map((item) => {
                    return {
                      label: item.firstName?.fr + " " + item.lastName?.fr,
                      value: {
                        email: item?.email,
                        firstName: item?.firstName?.fr,
                        lastName: item?.lastName?.fr
                      }
                    }
                  })}
                  name="ReactSelect"
                  isClearable
                  control={control}

                />
              </FormGroup>
            )}
          </Col>
        </Row>
        <Row>
          {isActive() ? (<Button
            type="submit"
            color="primary"
            className="mr-1 waves-effect waves-light"
          >
            Next
          </Button>) : (

            <div>No Admins yet Create One</div>)}
        </Row>

      </Form>
    </Fragment>
  );
};
export default Admins;