import './Settings.css';

const Settings = ({ setLimit }) => {
  return (
    <div className="settings">
      <div className="qtt__block">
        Показать на странице{' '}
        <select onChange={(e) => setLimit(e.target.value)}>
          <option value="3">3</option>
          <option value="5">5</option>
          <option value="11">Все</option>
        </select>
      </div>
    </div>
  );
};

export default Settings;
