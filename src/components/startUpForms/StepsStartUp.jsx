import React, { Component } from 'react';

class StepsStartUp extends Component {
    render() {
        const steps = [
            'Identitas Calon Penerbit',
            'Dokumen Calon Penerbit',
            'Informasi Perusahaan',
            'Informasi Finansial',
            'Informasi Non Finansial',
            'Media',
        ]
        return (
            <div className="steps-startup">
                <ul>
                    {
                        steps.map((res,i)=>
                        <li key={i} className={this.props.active === i+1? 'actbread' : ''}>
                            <div className="number">{i +1}</div> 
                            <span>{res}</span>
                        </li>
                        )
                    }
                </ul>
                <hr/>
            </div>
        );
    }
}

export default StepsStartUp;