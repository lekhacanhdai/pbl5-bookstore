import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";

const New = ({ inputs, title }) => {
  const [file, setFile] = useState("");

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file ? URL.createObjectURL(file) : "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHgAtAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAEAAIDBQYBBwj/xABFEAABAwIDBAYFCgMGBwAAAAABAAIDBBEFEiExQVGRBhMiYXGBFEKhsdEVIzIzQ1JUYnPBB1NyJESSorLwNDVVlMLS4f/EABkBAAIDAQAAAAAAAAAAAAAAAAABAgMEBf/EACMRAAICAgICAwEBAQAAAAAAAAABAhEDEhMhBDEiQVEyIwX/2gAMAwEAAhEDEQA/APLclk9mmicXbgkxuqsiclv9JogTuRcULyRom0oAAsLqyheGakJyb+jNKaUuxscJI4KZkBZbbZKOQ3PZRMcgfYLLks6GGaoKpNAFb0r7HVVMUZGqMgkI9UlYMmOzo48qiaCGqAIdf1bI+PE25WgkXWXdWANsbNQ5qnXJadPFZJeHt7Na89Lo9UpazPC3XchK12YvPFUmB15fA0O22VpK8OGpXGl4bxzNuLR/NFLOwNcTvVXXuBjLVbVgzXDSqqalJuC5dLDGqso8jJdoydY3KTdVcpIWtqaBhBzXVNVYe0SFuZdnDNHGzKikLM2qgljINwVdVUDYgGtaq+Wy3RdnJnk7orDdMcCjHNFrod9lMnGVgrgo3IhyhcEF8WRJJ2VcTJ2WLGN8UTFECdbWQbHWCmjnLUIxzjL6LNsAYLi108vFhmKAFTI4WC4S52pKDNxv7LPr7fRTo5y12gAQEGbiigz8wS1si249Jlwysa0dloK5NXuOw28FUmQjRNMhJ1KjxJkVPLf9BlRWPfp7U703LEboRtt6bNZzdNyOJE45pp+zXYHiTcjRmA81om1YdFq4XXmmHulY8FoIAWjhqZuqvoe4FYc/h92jseL/ANBJayZczVjm6HihJq9mU5nAEIB9RK5pvoquplIddypj4qNE/Nig+aukkJFxlQ+VriSbnxVcaq17W81GK1264J71qjgowZvKUvQdUtGXVVNTDc3bopXVMxOpB8ULM57uIC0Rg0c35OVgbgb7SoHNRZbbaoJLblYaosFfooiVO9hKifGQg0xGXSXPJJMmGAAi10hoUKJCFLG66SKnGguMgBPDhxUUbb7SpMoGxTKGlYRBIG7bonrWquvbepWyO4qSKpY77Ci65uSuXudqhBJGoTmanRD6IahAJOxSRxPlfl2DilFE4i4B5KdhdDIHEaKvlgn2Dwzq0glkLY4xZx0UkU4Z9E6oaapaWkNvdDse87lok4yXRj4p+2Wj5esba9jxQVQ8OFib2XW3yqF7TwKzy0RZjhkb9grxqo3HKdUS6O6iLbD4pbJmjSS9kecnYuPOll09lQyStbuuVKhpdjJCCLWUBsDsTnSXXLgpUXpUcOxQvGimdZROISonEGLdUlISAUkF9g7tDqpY3WCGBuVK1CJyQYyYAJGa+woZt0bhtDLXzNZGLNJtm+CblS7K44tnSRLTUdVUNDooiWnY46Ao+DCX3vLMG8QwXWngwiQQtjYzRosEZBgTvXsO7aqOWT9G6Pi4l77MzHQQNtdjnn8xRkEIboyNrR3BaeLBYhqWuJHFFxYa0HSIclFqUvbLoxxw/lGdgbJb1lOYsws9od/ULrRDD3ggFn+UpslBpqz2LFkwTu0XrJH7MjU4eyznQjK77u4qpA+csGkG9rL0uLA6SamBlMjJXaAg7D4Kwgwqhgw8xSUkDnvYOuIYO27ieK1YHljFxZz/ACPFxZJKS6PNKeAW7dz3BFtp4f5TT4i62FT0Zp2RRClBa/1s7tSg/ktrNCL68FmyY80n2zVix4IKlEzTqaEj6lnJCz0MDvULe8Fa5+HM17P+UIeXCmkf/ClDFkTLJLE/aMNPhbTfJO4eI+CAmwuqaDka2QflOq3U2D3+ihH4S9puAdOIW6M5pGWXi4X66MDNHLF9bG9n9TbKLOvQZ8OdLEY5Y87HbQd6xOMYZJh8t23MLjoTtaeBVkcl9Mz5fF0VrtAmcldJBUIfvTXSdyk2Z1El7P8AspKHP3JI7Jag2zil1jg0kbuKtzSNA+rP+JCYi2BuGF0eXOZzG4E6gAA3VUZNs6c8cfw7gEE2KVhiAIY0XcW+738l6z0V6Osg+ee0Cws0cFU/w3wAUuCxVU7fnas9aO5htl9mvmvRIWiOMNFgAk+32CSiukCTUrG2aOGtt6c2BjR2RqnNzvcXBp12ablMyFx4N4a3UhETWDcDrwXQwk253KmAhbo+ZtwdbHYuemUcevWAcdqW8V9j1YwN7I1296JggmIzRgW4kqJtfh8myXXiLp8UtDUSCKKozP8AVDXpxnFukRnF0LEnOgpXVDvsxrYbln6XpKJJ2seBlLrAn2LT1uGemUUtKZjdzd52LEwdEcUdWsZLC9kWbV1xa283usnlyzRmtPRBG3lmhjju/MX23IEsG2/iAb27kZDHT0jBFTAda0WAJ1PNAOxOna8Plm63cBHGXe3RbHJJfIcU2+jhjHBMdECdg04rrsZi/Ay+ZjHvckMXp/XpZm+TXe4lV8sC3SQO+IbwOSiMGmniUaa7DpjbrA0/mBaumKKUXhlBHFpupbRf2LVgsFM17bOb7FS9I8Ajqad4LLgjUfDvWijY9j7WBbvO9STMzM4pNAj50xGKagr5aSRxuw6HiNxUBkf94r0H+J2BWiZisDe1Ccsth6hOh8j71h4YhIwOt3FG1KxqEb9AnWP4lJHGm7kkbkuNfhoJ6aOOMuebNA3aqkw/DjjXSODD4m2ZJLZ54MGrjyHuWpFVS+g4sJnMbJFSiRnec4sPMiyN/hLhIbFV43UDtPJggJ4bXEedh5FEajGxSe0qR6JSxNjDWtAZGwBrRuAGwIiWqhhHbdbx0QEs19OtLW/dYbe1DjJcmOJzjxt+5WeWZ/RNQ/QmTFHG/o8RPE2/c/BCSTVs980rWA7RbMTz09iHrMRpaPtVlXSU360wB5XVJWdNsCp7gVstS77tNCT7TYe1V/6TJfFF+acPt10sryNO08gchYJzKWlabiKK/HKCsgzpq+qYZMOwcmMHKX1lWyIX8/imv6U4vbQ4HTt7589vMOT4Zv6Dkj+m49Hp3WvFH/hC4+KSK8lHIIZQ0hrtqwR6ZVsWsuLYIO5rJH/6QVIz+IcUP/EzUtR3QU8jfaT+yfDMOSJvqfpGKCmjp6t5dUmxlfa+vAeSvJ8bpGsnHXtaWNABv6xXmU/Tzo22ljrOonqazYKbq8pZbi46W8Lqkw7p9T1WMOdjOHsio5SADC914uBIv2gtEZ5K7RU4Q/T0CpxCsrJi+kbG8xnbsdc9+y3iiohOIW5uqa+wDnEFxJ9n7pUMVH1Rq6F8boZQCHxuuwjuTajFMPh+sq4r8GnMeQVLbl7LFS9D7Sj7d48Gt+CVpfxDz4tb8FVTdKMJiNi6pf3spZHe5qHPTHBge16YPGjk+CNH+BsXTjKRZzonjg6P4H9lC+NrnZnQMB4sebqpb016OvcWnEGxuGhEsT2W5hFwY7g1UQKbFKR7j6omaDyKWr/AtBjZJGfVz1LO4gPH7olldONDJBKNweDGf3UDHB9jHI1w3WIKeHEcEW0PpnK6nZXUcsVRGOrkaWyNuCCCLGxXjPokmE4vVYZPdxY+zCdMw9U+YXsjnAG+Rt+INlhv4kYX11NDi1O352n7E1tpYTofI+9WwlfxZCSrtFB1JP2R5pIKGXrYmvGTUbzqkouy0mrcNkqJ55PScrZiLs1AsNg2dyv8PxbGqPD6eipZsOZDAzIz+zuJtxPfvTm0Tu4KRtGRvU221TK9UQz4t0jef+aMZ+hStHtJVdVMxirHz+I1sgO501hy1V16OeCXUOSTr0g1RlBglS0ktga4/nnt/paPemOwfE7WbHRt8HOPvutd1aRiKfIxaIxjsFxYm/WQt/Tdl9wTRguLtNxOAf1Stn1S4Ykckh6IyTMNxtt71LXtO1sj87T5EEKaPCpJ7MxClga0fa0YDH37x9E8gtN1S71Q4I5JD44mXqMBgGlKam3CbJ7wVBJgcwsInZydubRa/qUhDqjkkGkTJxYZi8cJhjqJGQE3MTKgtaTxsNE99FiwI9HeImgaf2p5P+/Ja1tOTsCeaJx22CN5C0iY0UePjZWvHhUOT2wdIxsxGX/uXrVuoXDehZqWYfRlt5I3kGkTNSYdi0shfUGKV52udI4k+a4cFqHbadl+6Uf+i0cYnZcPdfyXXOduuEckg0RR0+E1UP1LnRHgyVo/8QjoRicf0sRr2fpz3HvCLJdvuoyXd6W7HxoY6uxln1WKVh/rLfihpq/G5mPiqa2R8TwQ5py6jgiHlx4qBwPejYNEVcdNKwEBoOv3klYZSki2OkSfKVT+Lp+ScMRqPxVNySSTInPlKo/F0x8k4YlUfiqfkkkgLJG19S7+9U58l011SP7xTcikkojsXp1XuqKfkuGrq/xNPySSQMZ6bVDZUU/JL06qP28CSSKCznp1WPtoV0YjV/zafmUkkBZJHiVbfszU/NS/KOJfzKfmupIEcdX4kR9ZT81C6rrztdBzSSSsZA6tq76yQc1Ga6pvq+HmkknQCNXU2+lDzXGT1Ej2h0sDGk2LjsCSSQWEmE/9UoeT/go3RagfKdAb8M+nsSSTAEnfJHK5jZYJQPXbex5pJJJAf//Z"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>

              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
              ))}
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;