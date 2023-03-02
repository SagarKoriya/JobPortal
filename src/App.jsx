import React from "react";
import Home from "./Home";
import Profile from "./Profile";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/FooterDiv/Footer";
import ProfileBasic from "./ProfileBasic";
import ProfileAys from "./ProfileAys";
import NewGigBasic from "./NewGigBasic";
import NewGigExperience from "./NewGigExperience";
import NewGigImages from "./NewGigImages";
import Gig from "./Gig";
import ViewGigs from "./ViewGigs";
import ViewGigsElectrition from "./ViewGigsElectrition";
import ViewGigsCarpenter from "./ViewGigsCarpenter";
import ViewGigsPlumber from "./ViewGigsPlumber";
import ViewGigsPainter from "./ViewGigsPainter";
import Jobs from "./Jobs";
import JobsElectrition from "./JobsElectrition";
import JobsCarpenter from "./JobsCarpenter";
import JobsPlumber from "./JobsPlumber";
import JobsPainter from "./JobsPainter";
import PostjobBasic from "./PostjobBasic";
import PostjobDescription from "./PostjobDescription";
import PostjobWorkexperience from "./PostjobWorkexperience";
import PostjobFinish from "./PostjobFinish";


const App = () => {
  return (
    <div className="w-[95%] m-auto bg-white">

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Signin" element={<SignIn />} />
          <Route exact path="/Signup" element={<SignUp />} />
          <Route exact path="/Profile" element={<Profile />} />
          <Route exact path="/ProfileBasic" element={<ProfileBasic />} />
          <Route exact path="/ProfileAys" element={<ProfileAys />} />
          <Route exact path="/Gig" element={<Gig/>}/>
          <Route exact path="/NewGigBasic" element={<NewGigBasic />} />
          <Route exact path='/NewGigExperience' element={<NewGigExperience />} />
          <Route exact path='/NewGigImages' element={<NewGigImages />} />
          <Route exact path="/ViewGigs" element={<ViewGigs/>}/>
          <Route exact path='/ViewGigsElectrition' element={<ViewGigsElectrition/>}/>
          <Route exact path="/ViewGigsCarpenter" element={<ViewGigsCarpenter/>}/>
          <Route exact path="/ViewGigsPlumber" element={<ViewGigsPlumber/>}/>
          <Route exact path="/ViewGigsPainter" element={<ViewGigsPainter/>}/>
          <Route exact path="/Jobs" element={<Jobs/>}/>
          <Route exact path="/JobsElectrition" element={<JobsElectrition/>}/>
          <Route exact path="/JobsCarpenter" element={<JobsCarpenter/>}/>
          <Route exact path="/JobsPlumber" element={<JobsPlumber/>}/>
          <Route exact path="/JobsPainter" element={<JobsPainter/>}/>
          <Route exact path="/PostJobBasic" element={<PostjobBasic/>}/>
          <Route exact path="/PostjobDescription" element={<PostjobDescription/>}/>
          <Route exact path="/PostjobWorkexperience" element={<PostjobWorkexperience/>}/>
          <Route exact path="/PostjobFinish" element={<PostjobFinish/>}/>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>

  );
}

export default App;



