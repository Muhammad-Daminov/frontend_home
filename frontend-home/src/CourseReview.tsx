function ReviewItem({avatar, author, date, rating, text}) {
    const stars = Array.from({length: 5});

    return (
        <div className="bg-[#1A1D1F] rounded-lg border border-[#F7F9FA]/8 p-5 flex flex-col gap-3">
            <div className="flex flex-row justify-between items-start">
                <div className="flex flex-row items-center gap-3">
                    <img className="w-10 h-10 rounded-full object-cover bg-[#2A2F33]" src={avatar} alt="user"/>
                    <div className="flex flex-col">
                        <p className="text-[#F7F9FA] text-[15px] font-semibold">{author}</p>
                        <div className="flex flex-row items-center gap-2">
                            <p className="text-[#F7F9FA]/50 text-[12px]">{date}</p>
                            <div className="flex flex-row gap-0.5">
                                {stars.map((_, index) => (
                                    <img
                                        key={index}
                                        className="w-3.5 h-3.5"
                                        src={`/star-${index < rating ? 'filled' : 'empty'}.svg`}
                                        alt="star"
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <p className="text-[#F7F9FA]/50 cursor-pointer">⋮</p>
            </div>
            <p className="text-[#F7F9FA]/80 text-[14px]">{text}</p>
        </div>
    );
}

function CourseReview() {
    return (
        <div className="flex flex-col gap-4">
            <h2 className="text-[#F7F9FA] text-[22px] font-bold">Kurs haqida izohlar</h2>
            <div className="flex flex-col gap-3">
                <ReviewItem
                    avatar="/Rectangle.1.png"
                    author="Jasurbek Narzullayev"
                    date="7 Sentyabr 2022 y. 15:52"
                    rating={4}
                    text="2010-yilda Nyu-Yorkda bo'lgan va katta shaxmat ishqibozlari uchun ajoyib darslar."
                />
                <ReviewItem
                    avatar="/Rectangle.2.png"
                    author="Muhammadamin Domlajonov"
                    date="7 Sentyabr 2022 y. 15:52"
                    rating={3}
                    text="Boshlang'ich o'rganuvchilar uchun juda foydali kurs ekan."
                />
                <ReviewItem
                    avatar="/Rectangle.3.png"
                    author="Shoxruh Sodirjonov"
                    date="7 Sentyabr 2022 y. 15:52"
                    rating={5}
                    text="Zo'r kurs! Ayniqsa piyoda va mot qilish darslari juda yoqdi."
                />
            </div>
        </div>
    );
}

export default CourseReview;