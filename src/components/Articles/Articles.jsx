import { Link } from 'react-router-dom';
import ArticalItem from './ArticalItem';
import './Articles.css';

const Articles = ({ currentArticle }) => {
  return (
    <>
      <div className="articles__container">
        {currentArticle.map((item) => (
          <Link to={`article/${item.id}`} key={item.id}>
            <ArticalItem title={item.title} text={item.text} time={item.time} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Articles;
