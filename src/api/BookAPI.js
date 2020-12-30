import axios from 'axios';

const BookAPI = axios.create({
    baseURL: "https://www.googleapis.com/books/v1",
});
const getBooksByTerm=(SearchTerm, setBooks, start_index, setTotalPages) =>{
    BookAPI.get('/volumes',{
        params:{
            q: SearchTerm,
            startIndex: start_index,
            maxResults: 15
        },
    }).then((response)=> {
        setBooks(response.data.items);
        setTotalPages(Math.ceil(response.data.totalItems/15));
    });
};

const getBookDetails =(bookID, setCurrentBook) =>{
    BookAPI.get('volumes/'+bookID)
    .then((response) =>{
        setCurrentBook(response.data);

    });
};

export {getBooksByTerm, getBookDetails};