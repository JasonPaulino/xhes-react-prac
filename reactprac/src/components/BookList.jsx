import Book from "./Book"
import listBooks from "../listBooks.json"
function BookList() {
    return (
        <>
            <Book
                title="Xhes"
                author="xhes"
                rating={5}
                photo="https://alexbox.com/wp-content/uploads/2016/01/Cherries_web.jpg"
            />
            <Book
                title="Xhes420"
                author="xhes420"
                rating={420}
                photo="https://images.saatchiart.com/saatchi/771993/art/2815941/1885834-HSC00001-7.jpg"
            />
            {listBooks.map(book => {
                const { id, title, author, rating, photo } = book;
                return < Book {...book} key={id} />;
                // reutrn <Book id = {id} /> can also do this way
            })}
        </>
    )
}

export default BookList;