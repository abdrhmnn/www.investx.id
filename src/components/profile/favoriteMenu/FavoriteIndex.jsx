import React, { Component } from 'react';
import Card from '../../shared/Card'

class FavoriteIndex extends Component {
    render() {
        const objCards= [
            {name : 'TOKOPEDIA'},
            {name : 'BUKALAPAK'},
            {name : 'PT ABADI JAYA'},
        ]
        return (
            <div className='favourite-menu'>
                <p className="title">FAVORITE</p>
                <hr/>
                <div className="row">
                {
                    objCards.map((res,i)=>
                        <div className="col-md-6 mb-3" key={i}>
                            <Card name={res.name} />
                        </div>
                    )   
                }
                </div>
            </div>
        );
    }
}

export default FavoriteIndex;