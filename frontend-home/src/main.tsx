import {createRoot} from "react-dom/client";
import './styles.css';

import CourseHeader from "./CourseHeader.tsx";
import LessonCard from "./LessonCard.tsx";
import ModuleRow from "./ModuleRow.tsx";
import CourseReview from "./CourseReview.tsx";

const root = createRoot(document.getElementById('root')!);

root.render(
    <div className="p-7.75 flex flex-col gap-6 max-w-[1376px] mx-auto">
        <CourseHeader/>

        <div className="w-full bg-[#1A1D1F] rounded-lg border border-[#F7F9FA]/8 p-6 flex flex-col gap-4">
            <div className="flex flex-row justify-between items-center">
                <p className="text-[#F7F9FA] text-[18px] font-semibold">1. Asosiy donalar</p>
                <img className="w-5 h-5 rotate-180" src="/chevrone.svg" alt="icon"/>
            </div>

            <div className="flex flex-row gap-4">
                <LessonCard image="/lesson-1.png" time="07:12" title="1.1 Kirish"/>
                <LessonCard image="/Lesson-2.png" time="08:15" title="1.2 Mot qilish"/>
                <LessonCard image="/Lesson-3.png" time="21:45" title="1.3 Piyoda bilan tanishuv"/>
            </div>

            <div>
                <ModuleRow title="2. Eng ko'p foydalaniladigan donalar"/>
                <ModuleRow title="3. Mot qilish oson bo'lgan donalar"/>
            </div>
        </div>

        <CourseReview/>
    </div>
);