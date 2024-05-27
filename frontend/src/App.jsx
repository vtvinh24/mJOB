import "./App.css";
import "react-router-dom";
import HomePage from "./pages/home/HomePage";
import PageNotFound from "./pages/technical/PageNotFound";
import Forum from "./pages/forum/Forum";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddPost from "./pages/forum/AddPost";
import PostDetail from "./pages/forum/PostDetail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />

          <Route exact path="/forum" element={<Forum />} />
          <Route exact path="/add-post" element={<AddPost />} />
          <Route path="/posts/:id" element={<PostDetail />} />

          {/*
                    
                    <Route exact path='/post' element={<Post />} />
                    
                    <Route exact path='/login' element={<Login />} />
                    <Route exact path='/settings' element={<Settings />} />
                    <Route exact path='/profile' element={<Profile />} />
                    <Route exact path='/jobs' element={<Jobs />} />
                    */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
