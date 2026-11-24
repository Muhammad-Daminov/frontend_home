// import ProfileSectionItem from "./ProfileSectionItem"


export default function App() {
    return <div>
                <div className="flex flex-row justify-between items-center h-16 px-5">
                    <h1 className="text-[12px] text-[#F7F9FA] font-bold">1. Asosiy donalar</h1>
                    <img src="/arrow-up.svg" alt="icon"/>
                </div>

                <div className="w-full bg-[#F7F9fa]/3 P-5">
                    <div className="flex flex-col gap-4 w-78">
                        <div className="w-full h-38.25 rounded-lg border border-[#F7F9FA]/16 overflow-hidden">
                            <img className="w-full h-full " src="/lesson-1.png" alt="image" />
                            <div className="absolute left-3 bottom-3 flex flex-row "></div>
                        </div>
                    </div>
                </div>
            </div>
}