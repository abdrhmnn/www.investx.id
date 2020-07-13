import React, { Component } from 'react';
import Navbar from '../shared/Navbar';
import ojk from '../../assets/img/ojk.svg'
import x from '../../assets/img/bg/x.svg'
import human from '../../assets/img/bg/human.svg'
import Footer from '../shared/Footer';

class Home extends Component {
    render() {
        const arr = [1,2,3,4]
        return (
            <div className='home' style={{backgroundImage: `url(${x}), url(${human})`}}>
                <Navbar />
                <div className="container contain-home">
                    <div className="wrap">
                        <p className="title">EQUITY <br/><span>CROWDFUNDING</span></p>
                        <p className="desc">Cras vel arcu massa. Pellentesque at rhoncus justo, sed rutrum felis. Nullam vel mi in justo fringilla hendrerit in a nisi. Mauris tempus erat est.</p>
                        <button className="but-solid">Start Investing</button>
                        <button className="but">Get Funding</button> <br/>
                        <img src={ojk} alt=""/>
                    </div>
                </div>


                <div className="last-invest">
                {
                    arr.map((res,i)=>(
                        <div className="card-last" key={i}>
                            <img src="https://pbs.twimg.com/profile_images/1108355467888259072/gxh4yKYO.png" alt=""/>
                            <p className="name">
                                Kemal Aditya Invested <span>$1000 </span>
                                in <span>Fleting</span>
                                <br/>
                                <small>2 hours again</small>
                            </p> 
                        </div>
                    ))
                }
                </div>
                <Footer />

            </div>
        );
    }
}

export default Home;