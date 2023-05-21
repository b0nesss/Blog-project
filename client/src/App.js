import './App.css';
// import Header from './header';
// import Post from './post';
import {Routes,Route} from "react-router-dom";
// import Post2 from "./post2";
// import Post3 from "./post3";
import Layout from './layout';
import Homepage from './pages/HomePage';
import Loginpage from './pages/LoginPage';
import Signuppage from './pages/SignUpPage';
import { UserContextProvider } from './UserContext';
import CreatePost from './pages/CreatePost';
import PostPage from './pages/PostPage';
import EditPost from './pages/EditPost';
import DeletePost from './pages/DeletePost';
function App() {
  return (
    <UserContextProvider>
    <Routes>
      <Route path='/' element={<Layout />}>
      <Route index element={<Homepage />} />
      <Route path="/login" element={<Loginpage/>} />
      <Route path='/signup' element={<Signuppage/>}/>
      <Route path='/post' element={<CreatePost/>} />
      <Route path='/post/:id' element={<PostPage />} />
      <Route path='/edit/:id' element={<EditPost />} />
      <Route path='/delete/:id' element={<Homepage />} />
      </Route>
    </Routes>
   </UserContextProvider>
  );
}

export default App;
