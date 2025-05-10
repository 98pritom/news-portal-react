import { FaEye, FaShareAlt } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { MdOutlineBookmarkBorder } from "react-icons/md";

const NewsCard = ({ news }) => {
    const { title,
        image_url,
        thumbnail_url,
        details,
        total_view,
        rating,
        author,
    } = news;
    console.log(news);
    return (
        <div className="card bg-base-100 shadow-md rounded-lg overflow-hidden">
            <div className="flex items-center justify-between px-4 pt-4">
                <div className="flex items-center gap-3">
                    <img
                        src={author?.img}
                        alt="author"
                        className="w-10 h-10 rounded-full"
                    />
                    <div>
                        <h2 className="text-sm font-semibold">{author?.name}</h2>
                        <p className="text-xs text-gray-500">{author?.published_date?.split(" ")[0]}</p>
                    </div>
                </div>
                <div className="flex items-center gap-2 text-xl text-gray-500">
                    <MdOutlineBookmarkBorder />
                    <FaShareAlt />
                </div>
            </div>

            <div className="card-body p-4">
                <h2 className="card-title text-base font-semibold">
                    {title}
                </h2>
                <figure className="py-3">
                    <img src={thumbnail_url || image_url} alt="news" className="w-full object-cover rounded-lg" />
                </figure>
                <p className="text-sm text-gray-700">
                    {details.length > 150 ? (
                        <>
                            {details.slice(0, 150)}... <span className="text-blue-600 cursor-pointer">Read More</span>
                        </>
                    ) : (
                        details
                    )}
                </p>
                <div className="flex justify-between items-center pt-4 border-t mt-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1 text-orange-500">
                        {Array.from({ length: 5 }).map((_, idx) => (
                            <AiFillStar key={idx} className={`${idx < Math.round(rating.number) ? 'text-orange-500' : 'text-gray-300'}`} />
                        ))}
                        <span className="ml-1 text-black font-semibold">{rating.number}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <FaEye />
                        <span>{total_view}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;