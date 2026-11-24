export default function profileSectionItem ({label, image}){
    return <div className="hover:border-[#1C92E0] hover:drop-shadow-[#1C92E0] hover:drop-shadow-[0px_4px-32px] flex flex-row items-center gap-2 bg-[#13181C] w-71 rounded-2xl border border-[#1F272A0] ps-4.5 group ">
        <img src={image} alt="icon"/>
        <h2 className="text-[#9DA1A3] text-[16px] font-medium">{label}</h2>
    </div>
}