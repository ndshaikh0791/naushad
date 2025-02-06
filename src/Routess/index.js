import { Routes,Route  } from "react-router-dom";
import '../Components/Header'
import HomePage from '../Pages/HomePage';
import AboutUsPage from '../Pages/AboutUsPage';
import CoursesPage from '../Pages/CoursesPage';
import GalleryPage from '../Pages/GalleryPage';
import PlacementPage from '../Pages/PlacementPage';
import StudentFeedbackPage from '../Pages/StudentFeedbackPage';
import BlogPage from '../Pages/BlogPage';
import ContactUsPage from '../Pages/ContactUsPage';



const Routess=()=>{
    return (
        <>
            <Routes>
                <Route path="home" element={<HomePage />} />
                <Route path="aboutus" element={<AboutUsPage />} />
                <Route path="courses" element={<CoursesPage />} />
                <Route path="gallery" element={<GalleryPage />} />
                <Route path="placement" element={<PlacementPage />} />
                <Route path="studentfeedback" element={<StudentFeedbackPage />} />
                <Route path="blog" element={<BlogPage />} />
                <Route path="contactus" element={<ContactUsPage />} />
            </Routes>
        </>
    )
}
export default Routess;