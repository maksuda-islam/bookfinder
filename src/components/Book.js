import react from "react";
import { Link } from "react-router-dom";
import Masonry from 'react-masonry-css';
const Book = (props) => {
    // const breakpointColumnsObj = {
    //     default: 4,
    //     1100: 3,
    //     700: 2,
    //     500: 1
    //   };
    return (
        // <Masonry
        // breakpointCols={breakpointColumnsObj}
        // className="my-masonry-grid"
        // columnClassName="my-masonry-grid_column">
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
                        <p><h7>No Author Infos</h7></p>
                    ) : (
                       <p> {props.data.volumeInfo.authors[0]} </p>
                    )}
                    </div>
                <div className="card-action">
                    <Link to={{pathname: "/book/" + props.data, title: props.data.volumeInfo.title ,  
                    subtitle: props.data.volumeInfo.subtitle, publisher: props.data.volumeInfo.publisher , publishedDate:props.data.volumeInfo.publishedDate, description:props.data.volumeInfo.description  }}>See Details</Link>
                    
                </div>
            </div>
        </div>
        // </Masonry>
    );
};

export default Book;
