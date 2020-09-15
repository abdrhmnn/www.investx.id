import React, { Component } from 'react';

class StepsInvestor extends Component {
    render() {
        const steps = [
            'Data Diri',
            'Pendidikan & Pekerjaan',
            'Dokumen',
            'Bank',
            'Preference',
        ]
        return (
            <div className="steps-invest">
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

export default StepsInvestor;