import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
    const cardArray = robots.map((user, i) => {
        return (
        <Card 
        key={i} 
        username={robots[i].username} 
        name={robots[i].name} 
        email={robots[i].email} 
        />
        )
    })
    return(
        <div>
            {cardArray}
        </div>
    );
}

export default CardList;