import React from 'react'

export default function Display(props) {
    return (
        <div>
            {props.businesses.map( business => {
                return(
                <div key={business.ID}>
                    <p><a href={business.Source} target="_blank">{business.Name}</a> | {business.Category} | {business.Promo}</p>
                    {Object.entries(business.Prov).map(([key, value]) => {
                    return(
                        <li>{value}</li>
                    )
                    })}
                </div>
                )
            })}
        </div>
    )
}

