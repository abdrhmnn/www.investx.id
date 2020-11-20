import React, { Component } from "react";

import { Formik, Field } from "formik";
import * as Yup from "yup";
import {
  InputText,
  InputSelect,
  InputTextArea,
} from "../../shared/InputComponents";
import {
  ButtonGroup,
  Button,
  FormHelperText,
  Tabs,
  Tab,
  Collapse,
} from "@material-ui/core";

import RekeningTab from "./RekeningTab";

class DataDiriProfile extends Component {
  state = {
    tabActive: 0,
    edit: false,
  };
  render() {
    const top100Films = [
      { label: "The Shawshank Redemption", year: 1994, value: "lala" },
      { label: "The Godfather", year: 1972 },
      { label: "The Godfather: Part II", year: 1974 },
      { label: "The Dark Knight", year: 2008 },
    ];

    const initialValueObj = {
      name: "Sagara Finn",
      born: "",
      tanggalLahir: "2017-05-24",
      dummy: null,
      phone: "0812345678",
      address: "",
      isSameAdd: false,
      gender: "",
    };

    const schemaObj = Yup.object({
      name: Yup.string().required(),
      born: Yup.string().required(),
      tanggalLahir: Yup.string().required(),
      address: Yup.string().required(),
      dummy: Yup.object().nullable().required(),
      gender: Yup.string().required(),
    });

    const { tabActive, edit } = this.state;
    return (
      <div
        className="data-diri-prof all-forms-style "
        style={{
          padding: "90px 100px 70px",
          backgroundColor: "white",
          justifyContent: "unset",
          alignItems: "unset",
        }}
      >
        <Tabs
          className="box-tabs border-bottom w-100 "
          value={tabActive}
          // indicatorColor="primary"
          // textColor="primary"
          // variant="scrollable"
          scrollButtons="off"
          // variant="fullWidth"
          onChange={(e, newValue) => this.setState({ tabActive: newValue })}
        >
          <Tab
            style={{
              fontSize: 16,
              minWidth: "25%",
              textTransform: "capitalize",
            }}
            label="Data diri"
          />
          <Tab
            style={{
              fontSize: 16,
              minWidth: "25%",
              textTransform: "capitalize",
            }}
            label="Rekening Bank"
          />
        </Tabs>
        {tabActive !== 0 ? null : (
          <div className="editprofile">
            <Button onClick={() => this.setState({ edit: !edit })}>
              Ubah <i className="fas fa-pen"></i>
              {/* {!edit ? <>Ubah <i className="fas fa-pen"></i> </> : 'batalkan'} */}
            </Button>
          </div>
        )}

        <Collapse in={tabActive === 0}>
          <div
            className="box-form-data"
            style={{
              border: "none",
              padding: "unset",
              margin: "unset",
              width: "unset",
            }}
          >
            <Formik
              initialValues={initialValueObj}
              validationSchema={schemaObj}
              onSubmit={(val) => {
                console.log(val);
              }}
            >
              {({
                handleBlur,
                handleSubmit,
                errors,
                values,
                touched,
                setFieldValue,
              }) => (
                <form onSubmit={handleSubmit} id="investorForm">
                  <div className="row">
                    <div className="col-md-12">
                      <Field
                        as={InputText}
                        label="Name"
                        type="text"
                        name="name"
                        placeholder="Nama Lengkap"
                        disabled={true}
                      />
                    </div>
                    <div className="col-md-12 ">
                      <ButtonGroup
                        className={
                          errors.gender
                            ? "button-gender line-error"
                            : "button-gender"
                        }
                        disabled={!this.state.edit}
                      >
                        <Button
                          className={
                            values.gender === "pria" ? "act-gen" : null
                          }
                          onClick={() => setFieldValue("gender", "pria")}
                        >
                          Pria
                        </Button>
                        <Button
                          className={
                            values.gender === "wanita" ? "act-gen" : null
                          }
                          onClick={() => setFieldValue("gender", "wanita")}
                        >
                          Wanita
                        </Button>
                      </ButtonGroup>
                      <FormHelperText
                        className="help-gender"
                        error={touched.gender && errors.gender ? true : false}
                        id="my-helper-text"
                      >
                        {errors.gender}
                      </FormHelperText>
                    </div>
                    <div className="col-md-6">
                      <Field
                        as={InputText}
                        label="Tempat Lahir"
                        type="text"
                        name="born"
                        placeholder="Tempat Lahir *"
                        helperText={touched.born && errors.born}
                        error={touched.born && errors.born ? true : false}
                        disabled={!this.state.edit}
                      />
                    </div>
                    <div className="col-md-6">
                      <Field
                        name="tanggalLahir"
                        type="date"
                        // defaultValue="2017-05-24"
                        label="Tanggal Lahir *"
                        helperText={touched.tanggalLahir && errors.tanggalLahir}
                        error={
                          touched.tanggalLahir && errors.tanggalLahir
                            ? true
                            : false
                        }
                        disabled={!this.state.edit}
                        as={InputText}
                      />
                    </div>
                    <div className="col-md-12">
                      <InputSelect
                        label="Status Pernikahan *"
                        name="dummy"
                        getOptionLabel={(val) => val.label}
                        options={top100Films}
                        helperText={touched.dummy && errors.dummy}
                        error={touched.dummy && errors.dummy ? true : false}
                        value={values.dummy}
                        onBlur={handleBlur}
                        onChange={(e, val) => setFieldValue("dummy", val)}
                        disabled={!this.state.edit}
                      />
                    </div>

                    <div className="col-md-12">
                      <InputSelect
                        label="Status Kewarganegaraan *"
                        name="dummy"
                        getOptionLabel={(val) => val.label}
                        options={top100Films}
                        helperText={touched.dummy && errors.dummy}
                        error={touched.dummy && errors.dummy ? true : false}
                        value={values.dummy}
                        onBlur={handleBlur}
                        onChange={(e, val) => setFieldValue("dummy", val)}
                        disabled={!this.state.edit}
                      />
                    </div>

                    <div className="col-md-6">
                      <Field
                        as={InputText}
                        label="Phone"
                        type="text"
                        name="phone"
                        // placeholder='Nama Lengkap'
                        // errorsMessage={touched.name && errors.name}
                        // error ={touched.name && errors.name}
                        disabled={!this.state.edit}
                      />
                    </div>

                    <div className="col-md-6">
                      <Field
                        as={InputText}
                        label="No Telepon Rumah"
                        type="text"
                        name="phone"
                        // placeholder=''
                        helperText={touched.dummy && errors.dummy}
                        error={touched.dummy && errors.dummy ? true : false}
                        disabled={!this.state.edit}
                      />
                    </div>

                    <div className="col-md-12">
                      <Field
                        as={InputTextArea}
                        label="Alamat Sesuai KTP *"
                        type="text"
                        name="address"
                        rows={5}
                        // placeholder=''
                        helperText={touched.address && errors.address}
                        error={touched.address && errors.address ? true : false}
                        disabled={!this.state.edit}
                      />
                    </div>
                    <div className="col-md-6">
                      <InputSelect
                        label="Provinsi *"
                        name="dummy"
                        getOptionLabel={(val) => val.label}
                        options={top100Films}
                        helperText={touched.dummy && errors.dummy}
                        error={touched.dummy && errors.dummy ? true : false}
                        value={values.dummy}
                        onBlur={handleBlur}
                        onChange={(e, val) => setFieldValue("dummy", val)}
                        disabled={!this.state.edit}
                      />
                    </div>
                    <div className="col-md-6">
                      <InputSelect
                        label="Kota/ Kabupaten *"
                        name="dummy"
                        getOptionLabel={(val) => val.label}
                        options={top100Films}
                        helperText={touched.dummy && errors.dummy}
                        error={touched.dummy && errors.dummy ? true : false}
                        value={values.dummy}
                        onBlur={handleBlur}
                        onChange={(e, val) => setFieldValue("dummy", val)}
                        disabled={!this.state.edit}
                      />
                    </div>
                    <div className="col-md-6">
                      <InputSelect
                        label="Kecamatan *"
                        name="dummy"
                        getOptionLabel={(val) => val.label}
                        options={top100Films}
                        helperText={touched.dummy && errors.dummy}
                        error={touched.dummy && errors.dummy ? true : false}
                        value={values.dummy}
                        onBlur={handleBlur}
                        onChange={(e, val) => setFieldValue("dummy", val)}
                        disabled={!this.state.edit}
                      />
                    </div>
                    <div className="col-md-6">
                      <InputSelect
                        label="Kode Pos *"
                        name="dummy"
                        getOptionLabel={(val) => val.label}
                        options={top100Films}
                        helperText={touched.dummy && errors.dummy}
                        error={touched.dummy && errors.dummy ? true : false}
                        value={values.dummy}
                        onBlur={handleBlur}
                        onChange={(e, val) => setFieldValue("dummy", val)}
                        disabled={!this.state.edit}
                      />
                    </div>

                    <div className="col-md-12">
                      <Field
                        as={InputTextArea}
                        label="Alamat Tinggal Sekarang"
                        type="text"
                        name="address"
                        rows={5}
                        // placeholder=''
                        helperText={touched.address && errors.address}
                        error={touched.address && errors.address ? true : false}
                        disabled={!this.state.edit}
                      />
                    </div>
                    {/* <div className="col-md-12 mb-3">
                                        <label className="d-inline mb-4" style={{fontSize : 14, cursor: 'pointer'}}>
                                            <Checkbox
                                                id='same'
                                                style={{color : '#01579B', marginBottom : 3}}
                                                name='isSameAdd'
                                                onChange={handleChange}
                                            />
                                                Sama Seperti KTP
                                        </label>
                                    </div> */}
                    {/* <Fade cascade  duration={500}  when={!values.isSameAdd}> */}
                    {/* <div className="col-md-6">
                                            <InputSelect 
                                                label='Provinsi *'
                                                name='dummy'
                                                getOptionLabel={(val)=>val.label}
                                                options={top100Films}
                                                helperText={touched.dummy && errors.dummy}
                                                // error ={touched.dummy && errors.dummy? true : false}
                                                // value={values.dummy}
                                                onBlur={handleBlur}  
                                                onChange={(e,val)=> setFieldValue('dummy', val)}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <InputSelect 
                                                label='Kota/ Kabupaten *'
                                                name='dummy'
                                                getOptionLabel={(val)=>val.label}
                                                options={top100Films}
                                                helperText={touched.dummy && errors.dummy}
                                                // error ={touched.dummy && errors.dummy? true : false}
                                                // value={values.dummy}
                                                onBlur={handleBlur}  
                                                onChange={(e,val)=> setFieldValue('dummy', val)}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <InputSelect 
                                                label='Kecamatan *'
                                                name='dummy'
                                                getOptionLabel={(val)=>val.label}
                                                options={top100Films}
                                                helperText={touched.dummy && errors.dummy}
                                                // error ={touched.dummy && errors.dummy? true : false}
                                                // value={values.dummy}
                                                onBlur={handleBlur}  
                                                onChange={(e,val)=> setFieldValue('dummy', val)}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <InputSelect 
                                                label='Kode Pos *'
                                                name='dummy'
                                                getOptionLabel={(val)=>val.label}
                                                options={top100Films}
                                                helperText={touched.dummy && errors.dummy}
                                                // error ={touched.dummy && errors.dummy? true : false}
                                                // value={values.dummy}
                                                onBlur={handleBlur}  
                                                onChange={(e,val)=> setFieldValue('dummy', val)}
                                            />
                                        </div> */}
                    {/* </Fade> */}
                  </div>
                </form>
              )}
            </Formik>
            <div
              className="foot-data-diri mt-5"
              style={{ justifyContent: "space-between", width: "unset" }}
            >
              <p className="pagreement">
                *Saya menjamin bahwa informasi yang saya cantumkan diatas adalah
                benar dan siap bertanggung jawab atas segala konsekuensi yang
                terjadi di kemudian hari, serta memiliki kemampuan analisis
                resiko terhadap saham penerbit dan memenuhi kriteria pemodal
                sesuai peraturan yang berlaku.
              </p>
              <Button
                disabled={!this.state.edit}
                className="pbuttonsub"
                type="submit"
                form="investorForm"
                style={{ width: 200, height: 60 }}
              >
                SIMPAN
              </Button>
            </div>
          </div>
        </Collapse>

        <Collapse in={tabActive === 1}>
          <RekeningTab />
        </Collapse>
      </div>
    );
  }
}

export default DataDiriProfile;
