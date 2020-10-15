import React from 'react';
import {InputText, InputSelect, InputTextArea} from '../../shared/InputComponents'
import { Formik , Field} from "formik";
import {Checkbox, ButtonGroup, Button, FormHelperText, Fab} from '@material-ui/core'
import logofillbank from '../../../images/profile/logofillbank.svg'



const ModalFillBank = (close, open)=> {
    const objBanks = [
        {label: 'BCA', value : 'bca'},
        {label: 'Mandiri', value : 'mandiri'},
    ]

    return (
        <>
        <div className='fill-bank-profile text-center'>
            <img src={logofillbank} alt="bank-logo"/>
            <Formik
            initialValues={{
                selectBank : '',
                name : ''
            }}
            onSubmit={(val)=>{
                console.log(val)
            }}
            >
                {({values, handleChange, handleSubmit, touched, errors, setFieldValue, handleBlur})=>(
                    <form className="wrapperform" onSubmit={handleSubmit}>
                        <div className="w-100 mb-2">
                            <InputSelect 
                                label='Nama Bank/ Kartu kredit'
                                name='selectBank'
                                getOptionLabel={(val)=>val.label}
                                options={objBanks}
                                helperText={touched.selectBank && errors.selectBank}
                                error ={touched.selectBank && errors.selectBank? true : false}
                                value={values.selectBank}
                                onBlur={handleBlur}  
                                onChange={(e,val)=> setFieldValue('selectBank', val)}
                                required
                            />

                        </div>
                        <div className="w-100 mb-2">
                            <Field 
                                as={InputText}
                                label='Kantor Cabang'
                                type='text'
                                name='name'
                                helperText={touched.name && errors.name}
                                error ={touched.name && errors.name? true : false}
                                required
                            />
                        </div>
                        <div className="w-100 mb-2">
                            <Field 
                                as={InputText}
                                label='Nama Pemilik Rekening'
                                type='text'
                                name='name'
                                helperText={touched.name && errors.name}
                                error ={touched.name && errors.name? true : false}
                                required
                            />
                        </div>
                        <div className="w-100 mb-2">
                            <Field 
                                as={InputText}
                                label='No Rekening'
                                type='text'
                                name='name'
                                helperText={touched.name && errors.name}
                                error ={touched.name && errors.name? true : false}
                                required
                            />
                        </div>
                        <div className="w-100 text-right">
                            <Button style={{ height: '40px', width: '25%' }} className='savebank' type='submit'>Simpan</Button>
                            <Button className='cancel-fill-bank' style={{ height: '40px', backgroundColor: 'unset', color : 'black' }}  onClick={close} type='button'>Batalkan</Button>
                        </div>
                    </form>
                )}
        </Formik>
        </div>
        </>
    );
}


export default ModalFillBank;