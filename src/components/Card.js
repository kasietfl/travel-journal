import React from 'react';

function Card(props) {
    return (
        <div className='card'>
            <img
                className='card--img'
                src={`../images/${props.item.image}`}
                alt=''
            />
            <div className='card--content'>
                <div className='card--location'>
                    <img src='../images/location.png' alt='' />
                    <p className='card--country'>{props.item.location}</p>
                    <a className='card--link' href={props.item.googleMapsUrl}>
                        View on Google Maps
                    </a>
                </div>
                <h2 className='card--title'>{props.item.title}</h2>
                <p className='card--date'>
                    {props.item.startDate} - {props.item.endDate}
                </p>
                <p className='card--desc'>{props.item.description}</p>
            </div>
        </div>
    );
}

export default Card;
