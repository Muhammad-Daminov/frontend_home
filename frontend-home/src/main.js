"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("react-dom/client");
require("./styles.css");
const CourseHeader_tsx_1 = __importDefault(require("./CourseHeader.tsx"));
// import NewsItem from "./Newsitem.tsx";
const root = (0, client_1.createRoot)(document.getElementById('root'));
root.render(<div className="p-7.75">
    <CourseHeader_tsx_1.default />
    </div>);
