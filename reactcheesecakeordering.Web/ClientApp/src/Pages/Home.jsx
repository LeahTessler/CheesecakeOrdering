import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

const Home = () => {

    
    return (
        <div className="container" style={{ marginTop: 80 }}>
            <div className="d-flex align-items-center justify-content-center" >
            <div className="text-center">
                    <h1 className="display-4">Welcome to the Cheesecake Factory</h1>
                    <p className="lead">
                        <a href="/order"><button className="btn btn-dark btn-lg">
                            Click here to order your own custom cheesecake</button>
                        </a>
                    </p>
                </div>
            </div>
        </div>
      
    );
};

export default Home;