import Home from "./pages/Home";
import HomeAdmin from "./admin/pages/home/Home";
import BookDetail from "./pages/BookDetail";
import BookList from "./pages/BookList";
import Register from "./pages/Registration";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import User from "./admin/pages/user/User";
import Single from "./admin/pages/single/Single";
import NewUser from "./admin/pages/newuser/New";
import NewBook from "./admin/pages/newbook/New";
import Order from "./admin/pages/order/Order";
import ProductAdmin from "./admin/pages/book/Book";
import Detail from "./admin/pages/detailbook/Detail";
import Profile from "./admin/pages/profile/Profile";
import UserProfile from './pages/UserProfile';
import Comment from "./admin/pages/comment/Comment";
import Revenue from "./admin/pages/revenue/Revenue";
import AdminAuthors from "./admin/pages/authors/Author";
import AdminPublishers from "./admin/pages/publishers/Publisher";
import AdminGenre from "./admin/pages/genre/Genre";
import { userInputs } from "./admin/formSource";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/books" exact element={<BookList />} />
        <Route path="/books/:id" element={<BookDetail />} />
        <Route path="/carts" element={<Cart />} />
        <Route path="/home" element={<Home />} />
        <Route path="/admin" element={<HomeAdmin />} />
        <Route path="/admin/user" element={<User />} />
        <Route path="/admin/order" element={<Order />} />
        <Route path="/admin/books" element={<ProductAdmin />} />
        <Route path="/admin/authors" element={<AdminAuthors />} />
        <Route path="/admin/publishers" element={<AdminPublishers />} />
        <Route path="/admin/genres" element={<AdminGenre />} />
        <Route path="/admin/revenue" element={<Revenue />} />
        <Route path="/admin/books/:id" element={<Detail />} />
        <Route path="/admin/profile" element={<Profile />} />
        <Route path="/admin/user/single" element={<Single />} />
        <Route path="/admin/comment" element={<Comment />} />
        <Route
          path="/admin/books/new"
          element={<NewBook inputs={userInputs} title="Thêm sách" />}
        />
        import Navbar from './components/Navbar'; import Annoucement from
        './components/Annoucement'; import Newsletter from
        './components/Newsleter'; import Footer from './components/Footer';
        <Route
          path="/admin/user/new"
          element={<NewUser inputs={userInputs} title="Thêm người dùng" />}
        />
      </Routes>
    </Router>
  );
};

export default App;
