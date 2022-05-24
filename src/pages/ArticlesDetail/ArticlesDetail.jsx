import { useNavigate, useParams } from 'react-router';
import './ArticlesDetail.css';
import data from '../../data.json';
import { useEffect, useState } from 'react';
import { AiOutlineRollback } from 'react-icons/ai';

const ArticlesDetail = () => {
  const [article, setArticle] = useState({});
  const [time, setTime] = useState(0);
  let { id } = useParams();
  const [aId, setAId] = useState(id);
  const navigate = useNavigate();

  useEffect(() => {
    setArticle(data.find((item) => item.id === +aId));
    setTime(article.time);
  }, [id, aId]);

  useEffect(() => {
    if (article.time !== undefined) {
      const date = new Date(article.time);
      setTime(Intl.DateTimeFormat().format(date));
    }
  }, [id, article]);

  const prevArticle = () => {
    if (aId > 1) {
      setAId(+aId - 1);
    }
  };
  const nextArticle = () => {
    if (aId < data.length) {
      setAId(+aId + 1);
    }
  };

  return (
    <div className="detail">
      <button className="btnBack" onClick={() => navigate(-1)}>
        Назад <AiOutlineRollback className="backIcon" />
      </button>
      <h2 className="detail__title">{article.title}</h2>
      <p>{article.text}</p>
      <div className="article__time">{time}</div>
      <div className="btns">
        <button className={aId === 1 ? 'disableBtn' : 'nextBtn'} onClick={prevArticle}>
          Предыдущая
        </button>
        <button className={aId === data.length ? 'disableBtn' : 'nextBtn'} onClick={nextArticle}>
          Следующая
        </button>
      </div>
    </div>
  );
};

export default ArticlesDetail;
