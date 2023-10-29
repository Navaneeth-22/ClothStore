import './DirectoryItem.scss';
const {useNavigate} = require("react-router-dom");

const DirectoryItemComponent = ({ category }) => {
  const navigate = useNavigate();
  const { imageUrl, title, route } = category;

  const navigateHandler = () => {navigate(route)};
  return (
    <div className='directory-item-container' onClick={navigateHandler}>
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className='body'>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default DirectoryItemComponent;