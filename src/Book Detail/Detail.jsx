import { useLoaderData, useParams } from "react-router-dom";
import { addStoredList } from "../Components/Utility/Utility";

const Detail = () => {
    const {bookId} = useParams();
    const id = parseInt(bookId);
    const data = useLoaderData();
    const book = data.find(book => book.bookId === id)
    const {image,bookName,author,category,review,tags,totalPages,publisher,yearOfPublishing,rating} = book;


const handleRead = (id) =>{
    addStoredList(id)
}

    return (
        <div className="md:flex justify-between gap-2 my-10">
            <div className="bg-[#1313130D] py-20 px-28 rounded-2xl">
                    <img className="h-[564px] w-[425px]" src={image} alt={bookName} />
            </div>
            <div className="w-4/6 px-10">
                <p className="text-4xl font-bold">{bookName}</p>
                <p className="text-lg text-gray-500 font-bold">By:{author}</p>
                {/* <div className="divider divider-horizontal"></div> */}
                <p className="border-y-2 text-lg text-gray-500 font-bold my-3 py-3">{category}</p>
                <span className="font-bold">Review: </span><p className="text-gray-500">{review}</p>
            <div className="my-5 py-3 border-b-2">
            <span className="font-bold">Tag:</span> <span>{
                tags.map((tag,index)=><button key={index} className="btn btn-xs text-green-500 font-bold bg-green-50">#{tag}</button>)
            }</span>
            </div>
            <div className="my-5 space-y-3 text-lg">
            <p className="text-gray-500">Number of pages: <span className="text-black font-bold">{totalPages}</span></p>
            <p className="text-gray-500">Publisher: <span className="text-black font-bold">{publisher}</span></p>
            <p className="text-gray-500">Year of Publishing: <span className="text-black font-bold">{yearOfPublishing}</span></p>
            <p className="text-gray-500">Ratting: <span className="text-black font-bold">{rating}</span></p>
            <div className="mr-5">
            <button onClick={()=>handleRead(bookId)} className="btn btn-outline mr-8">Read</button>
            <button class="btn bg-[#50B1C9] text-white">Wishlist</button>
            </div>
            </div>
            </div>
        </div>
    );
};

export default Detail;