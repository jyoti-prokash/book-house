const Book = ({ book }) => {
  const { bookName, author, image, rating, tags } = book;
  return (
    <div className="card bg-base-100 w-96 border p-6">
      <figure className="border rounded-2xl bg-[#F3F3F3] py-8">
        <img className="m-6 w-[134px] h-[166px]"
          src={image}
          alt={bookName}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {bookName}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>By: {author}</p>
        <div className="border-b-2 border-dashed">
                <p>{tags}</p>
        </div>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  );
};

export default Book;
