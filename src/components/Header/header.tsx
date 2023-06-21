import React, { useEffect, useState } from "react";
import "./header.scss";
import { Navbar, Nav } from "react-bootstrap";
import axios from "axios";

function Header() {
  interface Title {
    id: number;
    tenDanhMuc: string;
    }

  const [titles, setTitles] = useState<Title[]>([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const token = "3EC79C17-63ED-4166-BD58-04397B94312C";
        const response = await axios.get(
          "http://api-tintuc.enetviet.com/DanhMucTinTuc/GetDanhSachDanhMucTinTuc?loai_nguoi_dung=4&skip=0&limit=30",
          {
            headers: {
              Authorization: `${token}`,
            },
          }
        );
        setTitles(response.data.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);
  return (
    <header className="fixed-top">
      <Navbar bg="light" expand="lg" style={{ borderBottom: "1px solid #ccc" }}>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            {titles.map((title) => (
              <Nav.Link className="mytitle" href="#" key={title.id}>
                {title.tenDanhMuc}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

export default Header;
