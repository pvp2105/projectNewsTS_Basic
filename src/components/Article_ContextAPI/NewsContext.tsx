import { createContext, useContext, useState } from "react";

interface NewsContextProps {
  news: any[];
  skip: number;
  hasMore: boolean;
  detailNews: any;

  handleChangeSKip: (number: number) => void;
  handleChangeNews: (news: any[]) => void;
  setNews: (news: any[]) => void;
  setHasMore: (hasMore: boolean) => void;
  setDetailNews: (detailNews: any) => void;
}

const NewsContext = createContext<NewsContextProps>({
  news: [],
  skip: 0,
  hasMore: true,
  detailNews: {},

  handleChangeSKip: () => {},
  handleChangeNews: () => {},
  setNews: () => {},
  setHasMore: () => {},
  setDetailNews: () => {},
});

export function useNewsContext() {
  return useContext(NewsContext);
}

interface Props {
  children: React.ReactNode;
}

export function NewsProvider({ children }: Props) {
  const [news, setNews] = useState<any[]>([]);
  const [skip, setSkip] = useState<number>(0);
  const [hasMore, setHasMore] = useState<boolean>(true);

  console.log(skip);

  const [detailNews, setDetailNews] = useState<any>({});

  const handleChangeSKip = (limit: number) => {
    setSkip((pre: number) => {
      return pre + limit;
    });
  };
  const handleChangeNews = (news: any[]) => {
    setNews((prev: any[]) => {
      return [...prev, ...news];
    });
  };

  return (
    <NewsContext.Provider
      value={{
        news,
        skip,
        hasMore,
        detailNews,
        setNews,
        handleChangeSKip,
        setHasMore,
        setDetailNews,
        handleChangeNews,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
}
