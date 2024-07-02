import { FaStar } from 'react-icons/fa';
import Img1 from '../../assets/books/book1.jpg';
import Img2 from '../../assets/books/book2.jpg';
import Img3 from '../../assets/books/book3.jpg';

const ServicesData = [
    {
        id: 1,
        img: Img1,
        title: 'His Life',
        description:
            'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        id: 2,
        img: Img2,
        title: "Who's there",
        description:
            'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        id: 3,
        img: Img3,
        title: 'Lost Boy',
        description:
            'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
];

const BestBooks = ({ handleOrderPopup }) => {
    return (
        <>
            <div className="py-10">
                <div className="container">
                    {/* Header section */}
                    <div className="text-center mb-20 max-w-[400px] mx-auto">
                        <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                            Trending Books
                        </p>
                        <h1 className="text-3xl font-bold">Best Books</h1>
                        <p className="text-xs text-gray-400">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis et sit officia dolorem
                            perspiciatis dolores dolorum enim ut, eius eligendi!
                        </p>
                    </div>

                    {/* Card section */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-24 md:gap-5 place-items-center">
                        {ServicesData.map((book) => (
                            <div
                                data-aos="zoom-in"
                                key={book.id}
                                className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary dark:hover:bg-primary hover:text-white relative shadow-xl duration-500 group max-w-[300px]"
                            >
                                <div className="h-[100px]">
                                    <img
                                        src={book.img}
                                        alt=""
                                        className="max-w-[100px] block mx-auto transform -translate-y-14 group-hover:scale-105 duration-300 shadow-md"
                                    />
                                </div>
                                <div className="p-4 text-center">
                                    <div className="w-full flex items-center justify-center">
                                        <FaStar className="text-yellow-500" />
                                        <FaStar className="text-yellow-500" />
                                        <FaStar className="text-yellow-500" />
                                        <FaStar className="text-yellow-500" />
                                        <FaStar className="text-yellow-500" />
                                    </div>
                                    <h1 className="text-xl font-bold">{book.title}</h1>
                                    <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                                        {book.description}
                                    </p>
                                    <button
                                        className="bg-gradient-to-r from-primary to-secondary px-4 py-2 rounded-full mt-4 text-white hover:scale-105 duration-200 group-hover:from-white group-hover:to-white group-hover:text-primary"
                                        onClick={handleOrderPopup}
                                    >
                                        Order Now
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default BestBooks;
