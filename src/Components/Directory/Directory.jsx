import CategoryItemComponent from '../category-item/CategoryItemComponent';

import './Directory.scss';

const Directory = ({ categories }) => {
  return (
    <div className='directory-container'>
      {categories.map((category) => (
        <CategoryItemComponent key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;