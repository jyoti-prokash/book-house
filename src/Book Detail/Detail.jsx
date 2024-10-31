import { useParams } from "react-router-dom";


const Detail = () => {
    const param = useParams();
    console.log(param);

    return (
        <div>
            <h2>Book Details</h2>
        </div>
    );
};

export default Detail;