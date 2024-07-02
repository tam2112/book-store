import { useState } from 'react';
import Book1 from '../../assets/books/book1.jpg';
import Book2 from '../../assets/books/book2.jpg';
import Book3 from '../../assets/books/book3.jpg';
import Vector from '../../assets/website/blue-pattern.png';

const ImageList = [
    {
        id: 1,
        img: Book1,
        title: 'His Life will forever be Changed',
        description:
            'lorem His Life will forever be Changed dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        id: 2,
        img: Book2,
        title: "Who's there",
        description:
            "Who's there lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        id: 3,
        img: Book3,
        title: 'Lost Boy',
        description:
            'Lost Boy, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
];

const Hero = ({ handleOrderPopup }) => {
    const [imageId, setImageId] = useState(Book1);
    const [title, setTitle] = useState('His Life will forever be Changed');
    const [description, setDescription] = useState(
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, impedit porro. In, est? Ut aliquid explicabo nisi ipsum quidem voluptatem.',
    );

    const bgImage = {
        backgroundImage: `url(${Vector})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
    };

    return (
        <>
            <div
                className="min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200"
                style={bgImage}
            >
                <div className="container pb-8 sm:pb-0">
                    <div className="grid grid-cols-1 sm:grid-cols-2">
                        {/* text content section */}
                        <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1">
                            <h1
                                data-aos="zoom-out"
                                data-aos-duration="500"
                                className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                            >
                                {title}
                                <p className="bg-clip-text text-transparent bg-gradient-to-b from-primary to-secondary text-right text-sm">
                                    by Anonymous
                                </p>
                            </h1>
                            <p data-aos="zoom-out" data-aos-duration="500" className="text-sm">
                                {description}
                            </p>
                            <div>
                                <button
                                    data-aos="zoom-in"
                                    data-aos-duration="500"
                                    className="btn-primary px-4 py-2 rounded-full mt-4 hover:scale-105 duration-200"
                                    onClick={handleOrderPopup}
                                >
                                    Order Now
                                </button>
                            </div>
                        </div>

                        {/* image section */}
                        <div className="min-h-[450px] flex justify-center items-center relative order-1 sm:order-2">
                            {/* main image */}
                            <div className="h-[300px] sm:h-[450px] overflow-hidden flex justify-center items-center">
                                <img
                                    data-aos="zoom-in"
                                    data-aos-once="true"
                                    src={imageId}
                                    alt=""
                                    className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125 object-contain mx-auto"
                                />
                            </div>

                            {/* other image list */}
                            <div className="flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 justify-center gap-4 lg:py-2 absolute -bottom-[40px] lg:-right-1 bg-white rounded-full">
                                {ImageList.map((item, index) => (
                                    <img
                                        data-aos="zoom-in"
                                        data-aos-once="true"
                                        key={index}
                                        src={item.img}
                                        alt={item.title}
                                        className="max-w-[100px] h-[100px] object-contain inline-block hover:scale-110 duration-200"
                                        onClick={() => {
                                            setImageId(item.id === 1 ? Book1 : item.id === 2 ? Book2 : Book3);
                                            setTitle(item.title);
                                            setDescription(item.description);
                                        }}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;
