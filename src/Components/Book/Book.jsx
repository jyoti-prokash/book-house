import { key } from "localforage";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { bookName, author, image, rating, tags,category,bookId } = book;
  return (
    <div className="card bg-base-100 w-96 border p-6">
      <figure className="border rounded-2xl bg-[#F3F3F3] py-8">
        <img className="m-6 w-[134px] h-[166px]"
          src={image}
          alt={bookName}
        />
      </figure>
      <div className="card-body px-0">
        <div className="flex justify-between">
            {
                tags.map((tag,index)=><button key={index} className="btn btn-xs text-green-500 font-bold bg-green-50">{tag}</button>)
            }
        </div>
        <h2 className="card-title">
          {bookName}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p className="font-bold">By: {author}</p>
        <div className="border-t-2 border-dashed my-3"></div>
        <div className="card-actions justify-between">
          <div className="badge badge-outline">{category}</div>
          <div className="badge badge-outline">{rating}</div>
        </div>
        <Link to={`/books/${bookId}`}><button className="btn bg-green-400 text-xl font-bold mt-2">Details</button></Link>
      </div>
    </div>
  );
};

export default Book;
