import React from 'react'
import Home from './Home'

const Home2 = () => {
    return (
        <div>
            <Home />
            <div>
                <div className="hero-section bg-dark text-white text-center py-5">
                    <div className="container">
                        <h1 className="display-4">Welcome to Our Store</h1>
                        <p className="lead">Discover the best products at unbeatable prices.</p>
                        <a href="/itemform" className="btn btn-primary btn-lg">Show Products</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home2
