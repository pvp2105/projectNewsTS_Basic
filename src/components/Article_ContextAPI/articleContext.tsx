import { useEffect, useMemo } from "react";
import "../Article/article.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import { useNewsContext } from "./NewsContext";

function Article() {
  const {
    news,
    skip,
    hasMore,
    handleChangeSKip,
    setHasMore,
    handleChangeNews,
  } = useNewsContext();

  const limit = 8;

  const newsView = useMemo(() => {
    const newsList = [...news];
    const view = newsList?.sort((a, b) => {
      const preDate: any = a.ngayTao;
      const currentDate: any = b.ngayTao;

      return new Date(currentDate).getTime() - new Date(preDate).getTime();
    });

    return view;
  }, [news]);

  function loadMoreData(): void {
    handleChangeSKip(limit);
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const token = "3EC79C17-63ED-4166-BD58-04397B94312C";
        const response = await axios.get(
          `http://api-tintuc.enetviet.com/TinTucHeThong/GetDanhSachTinTuc?cap_don_vi=4&loai_nguoi_dung=4&ma_so=shn&skip=${skip}&limit=${limit}`,
          {
            headers: {
              Authorization: `${token}`,
            },
          }
        );
        handleChangeNews(response.data.data);

        setHasMore(response.data.data.length > 0);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [skip]);

  useEffect(() => {
    return () => {
      handleChangeNews([]);
      handleChangeSKip(0);
      setHasMore(true);
    };
  }, []);

  return (
    <div className="main">
      <div className="news m-2">
        <div className="row list-item m-3 justify-content-center">
          {newsView.slice(0, 1).map((newsItem) => (
            <Link
              to={`/detailArticle/${newsItem.id}`}
              key={newsItem.id}
              className="col-md-9 item-first "
            >
              <img className="head-item" src={newsItem.anhDaiDien} alt="News" />
              <div className="name-item-first m-2 ms-4">{newsItem.tieuDe}</div>
            </Link>
          ))}
          <div className="col-md-3 items-right">
            {newsView.slice(1, 4).map((newsItem) => (
              <Link
                to={`/detailArticle/${newsItem.id}`}
                key={newsItem.id}
                className="item-next ms-1"
              >
                <img
                  className="head-item"
                  src={newsItem.anhDaiDien}
                  alt="News"
                />
                <div className="name-item m-2">{newsItem.tieuDe}</div>
              </Link>
            ))}
          </div>
          <InfiniteScroll
            dataLength={newsView.length}
            next={loadMoreData}
            hasMore={hasMore}
            loader={<h4>Loading...</h4>}
            scrollThreshold={1.0}
          >
            <div className="row list-item-more mb-5">
              {newsView.slice(4).map((newsItem) => (
                <Link
                  to={`/detailArticle/${newsItem.id}`}
                  key={newsItem.id}
                  className="col-md-3 item-more mt-3"
                >
                  <img
                    className="head-item"
                    src={newsItem.anhDaiDien}
                    alt="News"
                  />
                  <div className="name-item m-2">{newsItem.tieuDe}</div>
                </Link>
              ))}
            </div>
          </InfiniteScroll>
        </div>
      </div>
    </div>
  );
}

export default Article;
