import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./detailArticle.scss";
import { myDetailNews } from "../../reducers/newsSlice";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../stores/store";

function DetailArticle() {
  const { detailNews } = useAppSelector((state) => state.newsReducer);
  const dispatch = useDispatch();

  const { id } = useParams();
  //const { id } = useParams() giúp truy cập vào giá trị của tham số id
  // được truyền vào qua URL <Route path="/users/:id" component={UserProfile} />

  //format detailNews.ngayTao 2023-06-09T13:51:45.451883
  const dateTime = new Date(detailNews.ngayTao);
  const dateString = dateTime.toLocaleDateString(); // lấy ngày dưới dạng chuỗi
  const timeString = dateTime.toLocaleTimeString(); // lấy giờ dưới dạng chuỗi
  const formattedDateTime = `${dateString} ${timeString}`; // kết hợp ngày và giờ

  useEffect(() => {
    async function fetchNews() {
      try {
        const token = "3EC79C17-63ED-4166-BD58-04397B94312C";
        const response = await axios.get(
          `https://api-tintuc.enetviet.com/TinTucHeThong/GetChiTietTinTuc?id=${id}`,
          {
            headers: {
              Authorization: `${token}`,
            },
          }
        );
        dispatch(myDetailNews(response.data.data));
      } catch (error) {
        console.log(error);
      }
    }
    fetchNews();
  }, []);
  return (
    <div className="main">
      <div className="container mt-3">
        <div className="header-detail">
          <h1>{detailNews.tieuDe}</h1>
          <p>{formattedDateTime}</p>
          <p>{detailNews.tomTat}</p>
        </div>
        <div
          className="main-detail"
          dangerouslySetInnerHTML={{ __html: detailNews.noiDung }}
        ></div>
      </div>
    </div>
  );
}

export default DetailArticle;
