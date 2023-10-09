
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Contact from './components/contact/Contact'
import Home from './components/home/Home';
import Post from './components/posts/Post'
import Header from './components/Header'
import MainLayout from './layouts/MainLayout'

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="article/:id" element={<Post />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default Router;
