import React from "react";
import { Link } from "react-router-dom";

const Book = (props) => {
    return (

        <div className="card-group">

            <div className="card">
                <div className="card-image" style={{  marginBottom: "30%", maxWidth: 350, minWidth: "100%", height: "auto"}}>
                    {props.data.volumeInfo.imageLinks == undefined ? (
                        <img
                            src="https://picsum.photos/200/300"
                            alt=""
                            style={{ width: "10", height: "20" }}
                        />
                    ) : (
                            <img
                                src={props.data.volumeInfo.imageLinks.thumbnail}
                                alt=""
                                style={{ width: "10", height: "20" }}
                            />
                        )}
                        </div>
                <div class="card-body">

                    <span className="card-title">{props.data.volumeInfo.title}
                    </span> 
                    <div className="card-content">
                    {props.data.volumeInfo.authors == undefined ? (
                        <p><h7>No Author Infos</h7></p>
                    ) : (
                       <p> {props.data.volumeInfo.authors[0]} </p>
                    )}
                    </div>
                    </div>
                <div className="card-action">
                    <Link to={{pathname: "/book/" + (props.data.volumeInfo.title).replace(/ /g, ''), title: props.data.volumeInfo.title ,  
                    subtitle: props.data.volumeInfo.subtitle, publisher: props.data.volumeInfo.publisher , publishedDate:props.data.volumeInfo.publishedDate, description:props.data.volumeInfo.description  }}>See Details</Link>
                    
                </div>
            </div>
            </div>


    



        

    


    );
};

export default Book;
