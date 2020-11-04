import React, { Component, Fragment } from 'react';

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

        const active = this.props.active
        const whereStep = steps[active - 1]
        const percentage = steps.map((res, i) => active === i + 1 ? active * 16.6 : null)
        const finalPercentage = Math.round(percentage[active - 1])

        const onPage = active + '/' + steps.length

        return (
            <Fragment>
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
                
                <div className="steps-startup-mobile">
                    <div class={`c100 p${finalPercentage} small`}>
                        <span>{finalPercentage}%</span>
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

export default StepsStartUp;