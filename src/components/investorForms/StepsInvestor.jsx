import React, { Component, Fragment } from 'react';
import '../../styles/circle.css';

class StepsInvestor extends Component {
    render() {
        const steps = [
            'Data Diri',
            'Pendidikan & Pekerjaan',
            'Dokumen',
            'Bank',
            'Preference',
        ]

        const active = this.props.active
        const whereStep = steps[active - 1]
        const percentage = steps.map((res, i) => active === i + 1 ? active * 20 : null)
        
        const onPage = active + '/' + steps.length

        return (
            <Fragment>
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

                
                <div className="steps-invest-mobile">
                    <div class={`c100 p${percentage[active - 1]} small`}>
                        <span>{percentage}%</span>
                        <div class="slice">
                            <div class="bar"></div>
                            <div class="fill"></div>
                        </div>
                    </div>

                    <div>
                        <div style={{ fontSize: '14px' }}>{whereStep} ({onPage})</div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default StepsInvestor;