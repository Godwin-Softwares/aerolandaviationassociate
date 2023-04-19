import Home from './pages/home/Home';
import Courses from './pages/courses/Courses';
import Admission from './pages/admission/Admission';
import Student from './pages/student/Student';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import css from './styles/app.module.scss'
import {Routes, Route} from 'react-router-dom';
import VA1 from './pages/VA1/VA1';
import VA2 from './pages/VA2/VA2';
import VAEarth from './pages/VAEarth/VAEarth';

const App = () => {
  //don't forget to add font link in index.html
  return ( <div className={`bg-primary ${css.container}`}>
         <Routes>
          <Route path='/' element={<Home/>}/>

          {/* <Route path="courses">
              <Route index element={
                <Courses />
              }/>
              <Route path="VA1" element={
                 <VA1/>
            }/>
             <Route path="VA2" element={
                 <VA2/>
            }/>
             <Route path="VAEarth" element={
                 <VAEarth/>
            }/>

          </Route> */}

          
          <Route path='courses' element={<Courses/>}/>
          <Route path='VA1' element={<VA1/>}/>
          <Route path='VA2' element={<VA2/>}/>
          <Route path='VAEarth' element={<VAEarth/>}/>

          {/* <Route path='courses' element={<Courses/>}/> */}
          <Route path='admission' element={<Admission/>}/>
          <Route path='student' element={<Student/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='contact' element={<Contact/>}/>
        </Routes>
    {/* <Header/>
    <Hero/>
    <Partners/>
    <Courses/>
    <Testimonial/> */}
  </div>)
};

export default App;
