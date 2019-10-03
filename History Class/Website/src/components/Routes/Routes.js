import React from "react";
import { Route, Switch } from "react-router-dom";

import Navbar from "./../../components/General/Navigation/Navigation Bar";
import Footer from "./../../components/General/Footer/Footer";
import Homepage from "./../../components/Home Page/Homepage";
import Contact from "./../../components/Contact/Contact";
import Errorpage from "./../../components/Error Page/Error";
import Photos from "./../../components/Pages/Photos/Photos";

import Grade6 from "./../Pages/Grade 6/Grade6";
import Grade7 from "./../Pages/Grade 7/Grade7";
import Grade8 from "./../Pages/Grade 8/Grade8";
import Grade9 from "./../Pages/Grade 9/Grade9";
import Grade10 from "./../Pages/Grade 10/Grade10";
import GradeOL from "./../Pages/OL/OL";
import GradeAL from "./../Pages/AL/AL";

import Grade6FT from "./../Pages/Grade 6/components/First Term/FirstTerm";
import Grade7FT from "./../Pages/Grade 7/components/First Term/FirstTerm";
import Grade8FT from "./../Pages/Grade 8/components/First Term/FirstTerm";
import Grade9FT from "./../Pages/Grade 9/components/First Term/FirstTerm";
import Grade10FT from "./../Pages/Grade 10/components/First Term/FirstTerm";
import GradeOLFT from "./../Pages/OL/components/First Term/FirstTerm";
import GradeALFT from "./../Pages/AL/components/First Term/FirstTerm";

import Grade6FTPP from "./../Pages/Grade 6/components/Second Term/components/Provincial Papers/Papers";
import Grade7FTPP from "./../Pages/Grade 7/components/Second Term/components/Provincial Papers/Papers";
import Grade8FTPP from "./../Pages/Grade 8/components/Second Term/components/Provincial Papers/Papers";
import Grade9FTPP from "./../Pages/Grade 9/components/Second Term/components/Provincial Papers/Papers";
import Grade10FTPP from "./../Pages/Grade 10/components/Second Term/components/Provincial Papers/Papers";
import GradeOLFTPP from "./../Pages/OL/components/Second Term/components/Provincial Papers/Papers";
import GradeALFTPP from "./../Pages/AL/components/Second Term/components/Provincial Papers/Papers";

import Grade6FTWP from "./../Pages/Grade 6/components/Second Term/components/Western Province/Papers";
import Grade7FTWP from "./../Pages/Grade 7/components/Second Term/components/Western Province/Papers";
import Grade8FTWP from "./../Pages/Grade 8/components/Second Term/components/Western Province/Papers";
import Grade9FTWP from "./../Pages/Grade 9/components/Second Term/components/Western Province/Papers";
import Grade10FTWP from "./../Pages/Grade 10/components/Second Term/components/Western Province/Papers";
import GradeOLFTWP from "./../Pages/OL/components/Second Term/components/Western Province/Papers";
import GradeALFTWP from "./../Pages/AL/components/Second Term/components/Western Province/Papers";

import Grade6ST from "./../Pages/Grade 6/components/Second Term/SecondTerm";
import Grade7ST from "./../Pages/Grade 7/components/Second Term/SecondTerm";
import Grade8ST from "./../Pages/Grade 8/components/Second Term/SecondTerm";
import Grade9ST from "./../Pages/Grade 9/components/Second Term/SecondTerm";
import Grade10ST from "./../Pages/Grade 10/components/Second Term/SecondTerm";
import GradeOLST from "./../Pages/OL/components/Second Term/SecondTerm";
import GradeALST from "./../Pages/AL/components/Second Term/SecondTerm";

import Grade6STPP from "./../Pages/Grade 6/components/Second Term/components/Provincial Papers/Papers";
import Grade7STPP from "./../Pages/Grade 7/components/Second Term/components/Provincial Papers/Papers";
import Grade8STPP from "./../Pages/Grade 8/components/Second Term/components/Provincial Papers/Papers";
import Grade9STPP from "./../Pages/Grade 9/components/Second Term/components/Provincial Papers/Papers";
import Grade10STPP from "./../Pages/Grade 10/components/Second Term/components/Provincial Papers/Papers";
import GradeOLSTPP from "./../Pages/OL/components/Second Term/components/Provincial Papers/Papers";
import GradeALSTPP from "./../Pages/AL/components/Second Term/components/Provincial Papers/Papers";

import Grade6STWP from "./../Pages/Grade 6/components/Second Term/components/Western Province/Papers";
import Grade7STWP from "./../Pages/Grade 7/components/Second Term/components/Western Province/Papers";
import Grade8STWP from "./../Pages/Grade 8/components/Second Term/components/Western Province/Papers";
import Grade9STWP from "./../Pages/Grade 9/components/Second Term/components/Western Province/Papers";
import Grade10STWP from "./../Pages/Grade 10/components/Second Term/components/Western Province/Papers";
import GradeOLSTWP from "./../Pages/OL/components/Second Term/components/Western Province/Papers";
import GradeALSTWP from "./../Pages/AL/components/Second Term/components/Western Province/Papers";

import Grade6TT from "./../Pages/Grade 6/components/Third Term/ThirdTerm";
import Grade7TT from "./../Pages/Grade 7/components/Third Term/ThirdTerm";
import Grade8TT from "./../Pages/Grade 8/components/Third Term/ThirdTerm";
import Grade9TT from "./../Pages/Grade 9/components/Third Term/ThirdTerm";
import Grade10TT from "./../Pages/Grade 10/components/Third Term/ThirdTerm";
import GradeOLTT from "./../Pages/OL/components/Third Term/ThirdTerm";
import GradeALTT from "./../Pages/AL/components/Third Term/ThirdTerm";

import Grade6TTPP from "./../Pages/Grade 6/components/Third Term/components/Provincial Papers/Papers";
import Grade7TTPP from "./../Pages/Grade 7/components/Third Term/components/Provincial Papers/Papers";
import Grade8TTPP from "./../Pages/Grade 8/components/Third Term/components/Provincial Papers/Papers";
import Grade9TTPP from "./../Pages/Grade 9/components/Third Term/components/Provincial Papers/Papers";
import Grade10TTPP from "./../Pages/Grade 10/components/Third Term/components/Provincial Papers/Papers";
import GradeOLTTPP from "./../Pages/OL/components/Third Term/components/Provincial Papers/Papers";
import GradeALTTPP from "./../Pages/AL/components/Third Term/components/Provincial Papers/Papers";

import Grade6TTWP from "./../Pages/Grade 6/components/Third Term/components/Western Province/Papers";
import Grade7TTWP from "./../Pages/Grade 7/components/Third Term/components/Western Province/Papers";
import Grade8TTWP from "./../Pages/Grade 8/components/Third Term/components/Western Province/Papers";
import Grade9TTWP from "./../Pages/Grade 9/components/Third Term/components/Western Province/Papers";
import Grade10TTWP from "./../Pages/Grade 10/components/Third Term/components/Western Province/Papers";
import GradeOLTTWP from "./../Pages/OL/components/Third Term/components/Western Province/Papers";
import GradeALTTWP from "./../Pages/AL/components/Third Term/components/Western Province/Papers";

import Grade6LWS from "./../Pages/Grade 6/components/Lesson Wise Papers/LWP";
import Grade7LWS from "./../Pages/Grade 7/components/Lesson Wise Papers/LWP";
import Grade8LWS from "./../Pages/Grade 8/components/Lesson Wise Papers/LWP";
import Grade9LWS from "./../Pages/Grade 9/components/Lesson Wise Papers/LWP";
import Grade10LWS from "./../Pages/Grade 10/components/Lesson Wise Papers/LWP";
import GradeOLLWS from "./../Pages/OL/components/Lesson Wise Papers/LWP";
import GradeALLWS from "./../Pages/AL/components/Lesson Wise Papers/LWP";

const Routes = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        {/*
        Main
         */}
        <Route exact path='/' component={Homepage} />
        <Route path='/Contact' component={Contact} />
        <Route path='/Photos' component={Photos} />
        {/*
        Grades
         */}
        <Route exact path='/Grade/6/' component={Grade6} />
        <Route exact path='/Grade/7/' component={Grade7} />
        <Route exact path='/Grade/8/' component={Grade8} />
        <Route exact path='/Grade/9/' component={Grade9} />
        <Route exact path='/Grade/10/' component={Grade10} />
        <Route exact path='/Grade/OL/' component={GradeOL} />
        <Route exact path='/Grade/AL/' component={GradeAL} />
        {/*
        First Term
         */}
        <Route exact path='/Grade/6/Term/FT' component={Grade6FT} />
        <Route exact path='/Grade/7/Term/FT' component={Grade7FT} />
        <Route exact path='/Grade/8/Term/FT' component={Grade8FT} />
        <Route exact path='/Grade/9/Term/FT' component={Grade9FT} />
        <Route exact path='/Grade/10/Term/FT' component={Grade10FT} />
        <Route exact path='/Grade/OL/Term/FT' component={GradeOLFT} />
        <Route exact path='/Grade/AL/Term/FT' component={GradeALFT} />
        {/*
        First Term Provicial Papers
         */}
        <Route exact path='/Grade/6/Term/FT/Papers/PP' component={Grade6FTPP} />
        <Route exact path='/Grade/7/Term/FT/Papers/PP' component={Grade7FTPP} />
        <Route exact path='/Grade/8/Term/FT/Papers/PP' component={Grade8FTPP} />
        <Route exact path='/Grade/9/Term/FT/Papers/PP' component={Grade9FTPP} />
        <Route
          exact
          path='/Grade/10/Term/FT/Papers/PP'
          component={Grade10FTPP}
        />
        <Route
          exact
          path='/Grade/OL/Term/FT/Papers/PP'
          component={GradeOLFTPP}
        />
        <Route
          exact
          path='/Grade/AL/Term/FT/Papers/PP'
          component={GradeALFTPP}
        />
        {/*
        First Term Western Province
         */}
        <Route exact path='/Grade/6/Term/FT/Papers/WP' component={Grade6FTWP} />
        <Route exact path='/Grade/7/Term/FT/Papers/WP' component={Grade7FTWP} />
        <Route exact path='/Grade/8/Term/FT/Papers/WP' component={Grade8FTWP} />
        <Route exact path='/Grade/9/Term/FT/Papers/WP' component={Grade9FTWP} />
        <Route
          exact
          path='/Grade/10/Term/FT/Papers/WP'
          component={Grade10FTWP}
        />
        <Route
          exact
          path='/Grade/OL/Term/FT/Papers/WP'
          component={GradeOLFTWP}
        />
        <Route
          exact
          path='/Grade/AL/Term/FT/Papers/WP'
          component={GradeALFTWP}
        />
        {/*
        Second Term
         */}
        <Route exact path='/Grade/6/Term/ST' component={Grade6ST} />
        <Route exact path='/Grade/7/Term/ST' component={Grade7ST} />
        <Route exact path='/Grade/8/Term/ST' component={Grade8ST} />
        <Route exact path='/Grade/9/Term/ST' component={Grade9ST} />
        <Route exact path='/Grade/10/Term/ST' component={Grade10ST} />
        <Route exact path='/Grade/OL/Term/ST' component={GradeOLST} />
        <Route exact path='/Grade/AL/Term/ST' component={GradeALST} />
        {/*
        Second Term Provicial Papers
         */}
        <Route exact path='/Grade/6/Term/ST/Papers/PP' component={Grade6STPP} />
        <Route exact path='/Grade/7/Term/ST/Papers/PP' component={Grade7STPP} />
        <Route exact path='/Grade/8/Term/ST/Papers/PP' component={Grade8STPP} />
        <Route exact path='/Grade/9/Term/ST/Papers/PP' component={Grade9STPP} />
        <Route
          exact
          path='/Grade/10/Term/ST/Papers/PP'
          component={Grade10STPP}
        />
        <Route
          exact
          path='/Grade/OL/Term/ST/Papers/PP'
          component={GradeOLSTPP}
        />
        <Route
          exact
          path='/Grade/AL/Term/ST/Papers/PP'
          component={GradeALSTPP}
        />
        {/*
        Second Term Western Province
         */}
        <Route exact path='/Grade/6/Term/ST/Papers/WP' component={Grade6STWP} />
        <Route exact path='/Grade/7/Term/ST/Papers/WP' component={Grade7STWP} />
        <Route exact path='/Grade/8/Term/ST/Papers/WP' component={Grade8STWP} />
        <Route exact path='/Grade/9/Term/ST/Papers/WP' component={Grade9STWP} />
        <Route
          exact
          path='/Grade/10/Term/ST/Papers/WP'
          component={Grade10STWP}
        />
        <Route
          exact
          path='/Grade/OL/Term/ST/Papers/WP'
          component={GradeOLSTWP}
        />
        <Route
          exact
          path='/Grade/AL/Term/ST/Papers/WP'
          component={GradeALSTWP}
        />
        {/*
        Third Term
         */}
        <Route exact path='/Grade/6/Term/TT' component={Grade6TT} />
        <Route exact path='/Grade/7/Term/TT' component={Grade7TT} />
        <Route exact path='/Grade/8/Term/TT' component={Grade8TT} />
        <Route exact path='/Grade/9/Term/TT' component={Grade9TT} />
        <Route exact path='/Grade/10/Term/TT' component={Grade10TT} />
        <Route exact path='/Grade/OL/Term/TT' component={GradeOLTT} />
        <Route exact path='/Grade/AL/Term/TT' component={GradeALTT} />
        {/*
        Third Term Provicial Papers
         */}
        <Route exact path='/Grade/6/Term/TT/Papers/PP' component={Grade6TTPP} />
        <Route exact path='/Grade/7/Term/TT/Papers/PP' component={Grade7TTPP} />
        <Route exact path='/Grade/8/Term/TT/Papers/PP' component={Grade8TTPP} />
        <Route exact path='/Grade/9/Term/TT/Papers/PP' component={Grade9TTPP} />
        <Route
          exact
          path='/Grade/10/Term/TT/Papers/PP'
          component={Grade10TTPP}
        />
        <Route
          exact
          path='/Grade/OL/Term/TT/Papers/PP'
          component={GradeOLTTPP}
        />
        <Route
          exact
          path='/Grade/AL/Term/TT/Papers/PP'
          component={GradeALTTPP}
        />
        {/*
        Third Term Western Province
         */}
        <Route exact path='/Grade/6/Term/TT/Papers/WP' component={Grade6TTWP} />
        <Route exact path='/Grade/7/Term/TT/Papers/WP' component={Grade7TTWP} />
        <Route exact path='/Grade/8/Term/TT/Papers/WP' component={Grade8TTWP} />
        <Route exact path='/Grade/9/Term/TT/Papers/WP' component={Grade9TTWP} />
        <Route
          exact
          path='/Grade/10/Term/TT/Papers/WP'
          component={Grade10TTWP}
        />
        <Route
          exact
          path='/Grade/OL/Term/TT/Papers/WP'
          component={GradeOLTTWP}
        />
        <Route
          exact
          path='/Grade/AL/Term/TT/Papers/WP'
          component={GradeALTTWP}
        />
        {/*
        Lesson Wise Papers
        */}
        <Route exact path='/Grade/6/Term/LWP/' component={Grade6LWS} />
        <Route exact path='/Grade/7/Term/LWP/' component={Grade7LWS} />
        <Route exact path='/Grade/8/Term/LWP/' component={Grade8LWS} />
        <Route exact path='/Grade/9/Term/LWP/' component={Grade9LWS} />
        <Route exact path='/Grade/10/Term/LWP/' component={Grade10LWS} />
        <Route exact path='/Grade/OL/Term/LWP/' component={GradeOLLWS} />
        <Route exact path='/Grade/AL/Term/LWP/' component={GradeALLWS} />
        <Route component={Errorpage} />
      </Switch>
      <Footer />
    </div>
  );
};

export default Routes;
