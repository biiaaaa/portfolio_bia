import React from "react";
import "./expe.css";
import Data from "./Data";
import Card from "./Card";

const Expe = () => {
    return (
        <section className="resume container section" id="expe">
            <h2 className="section__title">Experiências</h2>
<br/>

            <div className="resume__container grid">
                <div className="timeline grid">
                    {Data.map((val, id) => {
                        if (val.category === "freelancer") {
                            return(
                                <Card key={id} 
                                icon={val.icon} 
                                title={val.title} 
                                year={val.year}
                                desc={val.desc}/>
                            );
                        }
                    })}

                </div>

                <div className="timeline grid">
                    {Data.map((val, id) => {
                        if (val.category === "educação") {
                            return(
                                <Card key={id} 
                                icon={val.icon} 
                                title={val.title} 
                                year={val.year}
                                desc={val.desc}/>
                            );
                        }
                    })}

                </div>
                
                
            </div>
        </section>
    )
}

export default Expe