import React from "react";
import './index.css';
import { AppContext } from "./components/contextApi";

import Header from './components/Header';
import Feed from './components/Feed';

import SearchResults from './components/SearchResults';

import VideoDetails from './components/VideoDetails';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

const App =()=> {
  return (
    <AppContext>
      <Router>
        <div className="flex flex-col h-full">
          <Header/>
          <Routes>
            <Route path="/" exact element={<Feed/>}/>
            <Route path="/searchResult/:searchQuery" element={<SearchResults/>}/>
            <Route path="/video/:id" element={<VideoDetails/>}/>
          </Routes>
        </div>
      </Router>
    </AppContext>
  );
}

export default App;
