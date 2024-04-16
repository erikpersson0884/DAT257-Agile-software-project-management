import { useState } from "react";
import "./InformationPage.css";
import image from "/src/assets/PlaceHolder.png";
import LoginForm from "../LoginForm/LoginForm";


function InformationCard() {
    return(
        <>
            <body>
                <div className="wrapper">
                    <div className="col-container">
                        <div className="col">
                            <div className="infocard">
                                <img src={image} className="cardimage" alt="PlaceHolder"></img>
                                <h1>
                                    Hunger
                                </h1>
                                In the realm of global humanitarian concerns,
                                the statistics of starvation paint a sobering picture of the challenges faced by millions worldwide.
                                According to recent data from reputable organizations like the World Food Programme (WFP)
                                and the Food and Agriculture Organization of the United Nations (FAO),
                                approximately 9% of the world's population suffers from chronic undernourishment.
                                This translates to over 690 million individuals, many of whom are children under the age of five.
                                <ul>
                                    <li>Reason One</li>
                                    <li>Reason Two</li>
                                    <li>Reason Three</li>
                                </ul>
                                The statistics reveal stark disparities across regions,
                                with Sub-Saharan Africa and South Asia bearing the brunt of food insecurity.
                                In these areas, factors such as conflict, climate change, poverty,
                                and inadequate infrastructure exacerbate the challenge of accessing nutritious food.
                                
                            </div>
                        </div>
                        <div className="col">
                            <div className="infocard">
                                <img src={image} className="cardimage" alt="PlaceHolder"></img>
                                <h1>
                                    Fear
                                </h1>
                                Furthermore, the impact of starvation extends beyond mere hunger,
                                affecting health outcomes, economic productivity, and overall human development.
                                Malnutrition, for instance, contributes to nearly half of all child deaths globally,
                                while also hindering cognitive development and perpetuating cycles of poverty.

                                While the statistics may seem daunting,
                                they also underscore the urgent need for concerted action at both local and global levels.
                                Initiatives aimed at improving agricultural productivity,
                                enhancing food distribution networks, promoting sustainable farming practices,
                                and addressing root causes of poverty and conflict are crucial steps toward alleviating
                                the scourge of starvation and ensuring a more food-secure future for all.
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-container">
                        <div className="col">
                            <div className="infocard">
                                <img src={image} className="cardimage" alt="PlaceHolder"></img>
                                <h1>
                                    Money
                                </h1>
                                Furthermore, the impact of starvation extends beyond mere hunger,
                                affecting health outcomes, economic productivity, and overall human development.
                                Malnutrition, for instance, contributes to nearly half of all child deaths globally,
                                while also hindering cognitive development and perpetuating cycles of poverty.

                            </div>
                        </div>
                        <div className="col">
                            <div className="infocard">
                                <img src={image} className="cardimage" alt="PlaceHolder"></img>
                                Furthermore, the impact of starvation extends beyond mere hunger,
                                affecting health outcomes, economic productivity, and overall human development.
                                Malnutrition, for instance, contributes to nearly half of all child deaths globally,
                                while also hindering cognitive development and perpetuating cycles of poverty.

                                While the statistics may seem daunting,
                                they also underscore the urgent need for concerted action at both local and global levels.
                                Initiatives aimed at improving agricultural productivity,
                                enhancing food distribution networks, promoting sustainable farming practices,
                                and addressing root causes of poverty and conflict are crucial steps toward alleviating
                                the scourge of starvation and ensuring a more food-secure future for all.
                                
                            </div>
                        </div>
                    </div>

                </div>
            </body>
        </>
    )
}

export default InformationCard;