import React from 'react';
import Navbar from './components/Navbar';
import Card from './components/Card';
import Footer from './components/Footer';
import data from './data.js';

function App() {
    const cards = data.map((item) => {
        return <Card key={item.id} item={item} />;
    });

    return (
        <div className='wrapper'>
            <Navbar />
            {cards}
            <Footer />
        </div>
    );
}

export default App;
