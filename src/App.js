import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import VideoDetail from "./components/VideoDetail";
import ChannelDetail from "./components/ChannelDetail";
import Searchfeed from "./components/Searchfeed";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Box sx={{ backgroundColor: "#000" }}>
          <Navbar />

          <Routes>
            <Route exact path="/" element={<Feed />} />
            <Route exact path="/video:id" element={<VideoDetail />} />
            <Route exact path="/channel:id" element={<ChannelDetail />} />
            <Route exact path="/video/:searchTerm" element={<Searchfeed />} />
          </Routes>
        </Box>
      </BrowserRouter>{" "}
    </>
  );
};

export default App;
