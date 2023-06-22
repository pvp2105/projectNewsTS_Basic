import { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../DetailArticle/detailArticle.scss";
import { useNewsContext } from "./NewsContext";

function DetailArticle() {
  const { detailNews, setDetailNews } = useNewsContext();
  const { id } = useParams();

  const dateTime = new Date(detailNews.ngayTao);
  const dateString = dateTime.toLocaleDateString();
  const timeString = dateTime.toLocaleTimeString();
  const formattedDateTime = `${dateString} ${timeString}`;

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
        setDetailNews(response.data.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchNews();
  }, []);
  console.log(detailNews);

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
