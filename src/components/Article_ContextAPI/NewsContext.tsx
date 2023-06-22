import { createContext, useContext, useState } from "react";

interface NewsContextProps {
  detailNews: any;
  setDetailNews: (detailNews: any) => void;
}

const NewsContext = createContext<NewsContextProps>({
  detailNews: {},
  setDetailNews: () => {},
});

export function useNewsContext() {
  return useContext(NewsContext);
}

interface Props {
  children: React.ReactNode;
}

export function NewsProvider({ children }: Props) {
  const [detailNews, setDetailNews] = useState<any>({});
  return (
    <NewsContext.Provider
      value={{
        detailNews,
        setDetailNews,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
}
