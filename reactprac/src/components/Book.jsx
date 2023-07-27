import Header from "./Header"
import Like from "./LikeButton";
export default function Book({ bookName, author, rating, photo }) {
    return (
        <>
            <div style={{ backgroundColor: "pink" }}>
                <Header title={bookName} />
                <h2> {author} </h2>
                <h3> {rating} </h3>
                <img src={photo} style={{ width: "100px" }} />
                < Like />
            </div>
        </>
    )
};