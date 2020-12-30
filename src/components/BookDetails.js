import React, { useState, useEffect } from "react";
import { getBookDetails } from "./../api/BookAPI";
import { Link } from "react-router-dom";

const BookDetails = (props) => {
    const [currentBook, setCurrentBook] = useState({});

    useEffect(() => {
        // setCurrentBook(props.location.book)
        // console.log(props.location.book);
    }, []);
    return (
        <div>
            {/* {console.log("details", currentBook)} */}
            <div className="row">
                <div className="col s12 m7">
                    <div className="card">
                        <div className="card-image">
                            {props.location.image == undefined ? (
                                <img
                                    src="https://picsum.photos/200/300"
                                    alt=""
                                    style={{ width: "10", height: "20" }}
                                />
                            ) : (
                                    <img
                                        src={props.location.image}
                                        alt=""
                                        style={{ width: "10", height: "20" }}
                                    />
                                )}
                            <span className="card-title">{props.location.title}</span>
                        </div>
                        <div className="card-content">
                            <p>{props.location.subtitle}</p>
                        </div>
                        <div className="card-content">
                            <p>{props.location.publisher}</p>
                        </div>
                        <div className="card-content">
                            <p>{props.location.publishedDate}</p>
                        </div>
                        <div className="card-action">
                            <Link to="/">Go to search page!</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    
};

export default BookDetails;