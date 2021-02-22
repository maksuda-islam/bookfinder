import react from "react";
import { Link } from "react-router-dom";

const Book = (props) => {
    return (
        <div className="col s12 m3">
            <div className="card">
                <div className="card-image">
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

                    <span className="card-title">{props.data.volumeInfo.title}</span>
                </div>
                    <div className="card-content">
                    {props.data.volumeInfo.authors == undefined ? (
                        <p><h2>"No Author Infos"</h2></p>
                    ) : (
                       <p> {props.data.volumeInfo.authors[0]} </p>
                    )};
                    </div>
                <div className="card-action">
                    <Link to={{pathname: "/book/" + props.data, title: props.data.volumeInfo.title ,  
                    subtitle: props.data.volumeInfo.subtitle, publisher: props.data.volumeInfo.publisher , publishedDate:props.data.volumeInfo.publishedDate, description:props.data.volumeInfo.description  }}>See Details</Link>
                    
                </div>
            </div>
        </div>
    );
};

export default Book;
