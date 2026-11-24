function ModuleRow({title}) {
    return (
        <div className="flex flex-row justify-between items-center py-4 border-t border-[#F7F9FA]/8">
            <p className="text-[#F7F9FA] text-[18px] font-semibold">{title}</p>
            <img className="w-5 h-5" src="/chevron.svg" alt="icon"/>
        </div>
    );
}

export default ModuleRow;