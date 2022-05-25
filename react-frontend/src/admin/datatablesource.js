export const bookRows = [
  {
    id: 1,
    title: "Snow",
    author: "Lươn Ngọc Đạt",
    email: "1snow@gmail.com",
    price: 35,
  },
  {
    id: 2,
    title: "Jamie Lannister",
    author: "Lươn Ngọc Đạt",
    email: "2snow@gmail.com",
    price: 42,
  },
  {
    id: 3,
    title: "Lannister",
    email: "3snow@gmail.com",
    price: 45,
    author: "Lươn Ngọc Đạt",
  },
  {
    id: 4,
    title: "Stark",
    email: "4snow@gmail.com",
    price: 16,
    author: "Lươn Ngọc Đạt",
  },
  {
    id: 5,
    title: "Targaryen",
    email: "5snow@gmail.com",
    author: "Lươn Ngọc Đạt",
    price: 22,
  },
  {
    id: 6,
    title: "Melisandre",
    email: "6snow@gmail.com",
    author: "Lươn Ngọc Đạt",
    price: 15,
  },
  {
    id: 7,
    title: "Clifford",
    email: "7snow@gmail.com",
    author: "Lươn Ngọc Đạt",
    price: 44,
  },
  {
    id: 8,
    title: "Frances",
    email: "8snow@gmail.com",
    author: "Lươn Ngọc Đạt",
    price: 36,
  },
  {
    id: 9,
    title: "Roxie",
    email: "snow@gmail.com",
    author: "Lươn Ngọc Đạt",
    price: 65,
  },
  {
    id: 10,
    title: "Roxie",  
    email: "snow@gmail.com",
    author: "Lươn Ngọc Đạt",
    price: 65,
  },
];

export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },
  {
    field: "age",
    headerName: "Age",
    width: 100,
  },
];
  
export const userRows = [
  {
    id: 1,
    username: "Snow",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "1snow@gmail.com",
    age: 35,
  },
  {
    id: 2,
    username: "Jamie Lannister",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "2snow@gmail.com",
    age: 42,
  },
  {
    id: 3,
    username: "Lannister",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "3snow@gmail.com",
    age: 45,
  },
  {
    id: 4,
    username: "Stark",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "4snow@gmail.com",
    age: 16,
  },
  {
    id: 5,
    username: "Targaryen",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "5snow@gmail.com",
    age: 22,
  },
  {
    id: 6,
    username: "Melisandre",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "6snow@gmail.com",
    age: 15,
  },
  {
    id: 7,
    username: "Clifford",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "7snow@gmail.com",
    age: 44,
  },
  {
    id: 8,
    username: "Frances",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "8snow@gmail.com",
    age: 36,
  },
  {
    id: 9,
    username: "Roxie",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    age: 65,
  },
  {
    id: 10,
    username: "Roxie",  
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    age: 65,
  },
];