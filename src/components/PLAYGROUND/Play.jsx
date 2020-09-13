import React, { Component } from 'react';
import Select from 'react-dropdown-select';
import {Formik} from 'formik'
import * as yup from 'yup'
import { InputText, InputCheckbox } from '../shared/InputComponents'

class Play extends Component {
    state={
        name : 'kemal',
        kabu : {}
    }

    componentDidMount(){
    }

    handleChange = (e) =>{
        this.setState({[e.target.name] : e.target.value})
    }  

    handleSub = (val)=>{
        console.log(val);
    }

    render() {
        const formSchema = yup.object({
            name : yup.string().required('nama wajib di isi'),
            password : yup.string().required().min(5,'minimal 5'),
        })
        
        return (
            <div className='container bg-light py-5'>
                <h1>play form</h1>

                     {/* ///////////////////FORMS//////////////////// */}
                     <Formik
                        initialValues={{name : 'kemal', password : '', trigger :''}}
                        validationSchema={formSchema}
                        onSubmit={(val)=> console.log(val, 'state :' + this.state)}
                        >
                            {
                                (f)=>(
                                    <form onSubmit={f.handleSubmit} id='play'>

                                   
                                    <div className="row">
                                        <InputText 
                                            className='col-md-12 bg-light'
                                            label='Name'
                                            type='text'
                                            name='name'
                                            value={f.values.name}
                                            placeholder='Nama Lengkap'
                                            onChange={f.handleChange}
                                            onBlur={f.handleBlur}
                                            disabled={false}
                                            errorsMessage={<span>{f.touched.name && f.errors.name}</span>}
                                            error ={f.errors.name}
                                        />
                                            <p>{f.touched.name && f.errors.name}</p>
                                        <InputText 
                                            className='col-md-12 bg-light'
                                            label='Pass'
                                            type='password'
                                            name='password'
                                            value={f.values.password}
                                            placeholder='Password'
                                            onChange={f.handleChange}
                                            onBlur={f.handleBlur}
                                            disabled={false}
                                            errorsMessage={<span>{f.touched.password && f.errors.password}</span>}
                                        />

                                        <InputCheckbox 
                                            value='coklat' 
                                            label='coklat'
                                            // labelColor='red'
                                            // color='blue'
                                            onChange={f.handleChange}
                                            onBlur={f.handleBlur}
                                            errorsMessage='pilih'
                                            error={true}
                                            legend='pilih dua'
                                         />

                                        <div className="col-md-6 ">
                                            <div className="label-cus">Industri Pekerjaan</div>
                                            <Select
                                                options={[
                                                    {label:'bandung', value: 'bandung'},
                                                    {label:'jakarta  ', value: 'jakarta  '},
                                                    {label:'bali', value: 'bali'}]}
                                                className='rs'
                                                name='kab'
                                                style={{boxShadow : 'none'}}
                                                placeholder='kabupaten'
                                                value={this.state.val}
                                                // onChange={(values) => console.log(values)}
                                                onChange={ (val)=> this.setState({kabu : val})}
                                                onBlur={f.handleBlur('kab')}
                                                closeOnSelect={true}
                                                dropdownHandleRenderer={({ state }) => (
                                                    // if dropdown is open show "–" else show "+"
                                                    <span>{state.dropdown ? <i className="fas fa-chevron-up"></i> : <i class="fas fa-chevron-down"></i>}</span>
                                                )}
                                            />
                                            <div className="error-input p-0">
                                                <span>{f.touched.trigger && Object.keys(this.state.kabu ).length === 0 ? <p>yayaya</p> : null}</span>
                                            </div>
                                        </div>


                                        {JSON.stringify(f.touched.name)}
                                        {JSON.stringify(f.touched.password)}
                                        {JSON.stringify(f.touched)}
                                        {JSON.stringify(f.errors)}
                                    </div>
                                    </form>
                                )
                            }
                        </Formik>

                            <button form='play'>submit</button>

                   {/* ///////////////////FORMS END//////////////////// */}
                   {/* <input type="text" defaultValue='kemal' name="" id=""/> */}


            </div>
        );
    }
}

export default Play;