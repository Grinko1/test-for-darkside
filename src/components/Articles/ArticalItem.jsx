import './ArticleItem.css';

const ArticalItem = ({title, text, time}) => {


  const prev = text.split('').slice(0, 250).join('') + '...'
      const date = new Date(time);
      const formattedDate = Intl.DateTimeFormat().format(date);

    return (
        <div className='article'>
            <h3 className='article__title'>{title}</h3>
            <p className='preview'> {prev}</p>
            <p className='article__date'>{formattedDate}</p>
        </div>
    );
};

export default ArticalItem;