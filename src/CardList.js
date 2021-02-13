import Card from "./Card";
import {robots} from "./robots";
import React from "react";

const CardList = ({robots}) => {
    return (
        <div>
            {
                robots.map((robot, index) => {
                    return <Card
                        key={robot.id}
                        id={robot.id}
                        name={robot.name}
                        email={robot.email}
                    />
                })
            }
        </div>
    )
}

export default CardList;
