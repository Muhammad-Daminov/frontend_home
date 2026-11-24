function LessonCard({image, time, title}) {
    return (
        <div className="flex flex-col gap-2 flex-1">
            <div className="relative w-full h-36 rounded-lg overflow-hidden bg-[#111315]">
                <img className="w-full h-full object-cover" src={image} alt="lesson"/>
                <div className="absolute bottom-2 left-2 flex flex-row items-center gap-1 bg-black/70 px-2 py-0.5 rounded">
                    <img className="w-3 h-3" src="/play.svg" alt="play"/>
                    <p className="text-[#F7F9FA] text-[12px]">{time}</p>
                </div>
            </div>
            <p className="text-[#F7F9FA] text-[14px] font-medium">{title}</p>
        </div>
    );
}

export default LessonCard;