import Home from './pages/Home';
import Courses from './pages/Courses';
import CourseDetail from './pages/CourseDetail';
import CorporateTraining from './pages/CorporateTraining';
import Facilities from './pages/Facilities';
import About from './pages/About';
import Contact from './pages/Contact';
import __Layout from './Layout.jsx';

export const PAGES = {
    "Home": Home,
    "Courses": Courses,
    "CourseDetail": CourseDetail,
    "CorporateTraining": CorporateTraining,
    "Facilities": Facilities,
    "About": About,
    "Contact": Contact,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};
