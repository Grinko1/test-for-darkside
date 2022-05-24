import React, { useEffect, useState } from 'react';
import Articles from '../components/Articles/Articles';
import Settings from '../components/Settings/Settings';
import data from '../data.json';

function Home() {
  const [limit, setLimit] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);
  const pageQtt = Math.ceil(data.length / limit);

  const [currentArticle, setCurrentArticle] = useState([]);
  const pages = [];
  for (let i = 1; i <= pageQtt; i++) {
    pages.push(i);
  }

  const onChangePage = (item) => {
    setCurrentPage(item);
  };

  useEffect(() => {
    if (limit == '3') {
      if (currentPage === 1) {
        setCurrentArticle(data.slice(0, 3));
      } else if (currentPage === 2) {
        setCurrentArticle(data.slice(3, 6));
      } else if (currentPage === 3) {
        setCurrentArticle(data.slice(6, 9));
      } else if (currentPage === 4) {
        setCurrentArticle(data.slice(9, 11));
      }
    }

    if (limit == '5') {
      if (currentPage === 1) {
        setCurrentArticle(data.slice(0, 5));
      } else if (currentPage === 2) {
        setCurrentArticle(data.slice(5, 10));
      } else if (currentPage === 3) {
        setCurrentArticle(data.slice(10, 11));
      }
    }
    if (limit == '11') {
      setCurrentArticle(data);
    }
  }, [limit, currentPage]);

  return (
    <div className="App">
      <Settings setLimit={setLimit} />
      <Articles currentArticle={currentArticle} />
      <div className="pagination">
        {pages.length &&
          pages.map((item) => (
            <div key={item} className="pageItem" onClick={() => onChangePage(item)}>
              {item}
            </div>
          ))}
      </div>
    </div>
  );
}

export default Home;
