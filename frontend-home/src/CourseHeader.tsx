import IconAndText from "./iconAndText.tsx";

function CourseHeader() {
    const rating = 4;
    const ratingArray = Array.from({length: 5});

    return (
        <div className="relative w-full min-w-240 h-48.5 bg-black rounded-lg border-[#F7F9FA]/8 border overflow-hidden">
            {/* Orqa fon rasmi va qoraytiruvchi qatlam */}
            <img className="blur-lg top-0 left-0 z-0 absolute w-full h-full object-cover" src="/header-backround.png" alt="image"/>
            <div className="absolute top-0 left-0 z-0 w-full h-full bg-black/50"></div>

            {/* Asosiy kontent */}
            <div className="relative z-10 flex flex-row justify-between w-full h-full p-8">
                <div className="flex flex-col justify-between h-full">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-[#F7F9FA] text-[32px] font-bold">Shaxmat donalari bilan tanishuv</h1>
                        <div className="flex flex-row items-center gap-3">
                            <img className="w-7 h-7" src="/cash.svg" alt="icon"/>
                            <p className="text-[#F7F9FA] text-[20px] font-bold">55 000.00 uzs</p>
                            <p className="text-[#F7F9FA]/64 text-[14px] line-through decoration-[#DC2D2D]/80">160 000.00 uzs</p>
                        </div>
                    </div>

                    <div className="flex flex-row gap-4">
                        <IconAndText icon="/dona.svg" text="Havaskor"/>
                        <IconAndText icon="/icon_student.svg" text="4 ta bo'lim"/>
                        <IconAndText icon="/play.svg" text="24 ta dars"/>
                    </div>
                </div>

                <div className="flex flex-col justify-between items-end h-full pt-1.75">
                    <div className="flex flex-row gap-2 items-center">
                        <div className="flex flex-row gap-1">
                            {ratingArray.map((_, index) => (
                                <img
                                    className="w-5 h-5"
                                    key={index}
                                    src={`/star-${index < rating ? 'filled' : 'empty'}.svg`}
                                    alt="icon"
                                />
                            ))}
                        </div>

                        <div className="w-px h-4 bg-[#1A2226]"></div>

                        <div className="flex flex-row items-center gap-1">
                            <p className="text-white text-[20px] font-medium">4.0</p>
                            <p className="text-[14px] text-[#6D7274]">(234 ta izoh)</p>
                        </div>
                    </div>

                    <div className="flex flex-row gap-4">
                        <button className="h-12.5 px-10 rounded-lg bg-[#1C92E0] text-white font-medium cursor-pointer hover:bg-[#1C92E0]/90">
                            Kursni sotib olish
                        </button>
                        <button className="flex items-center justify-center w-12.5 h-12.5 rounded-lg border border-[#F7F9FA]/30 bg-[#F7F9FA]/10 cursor-pointer hover:bg-[#F7F9FA]/20">
                            <img src="/heart.svg" alt="heart"/>
                        </button>
                        <button className="flex items-center justify-center w-12.5 h-12.5 rounded-lg border border-[#F7F9FA]/30 bg-[#F7F9FA]/10 cursor-pointer hover:bg-[#F7F9FA]/20">
                            <img src="/share.svg" alt="share"/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CourseHeader;