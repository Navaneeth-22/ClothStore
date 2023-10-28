import DirectoryItemComponent from '../DirectoryItem/DirectoryItemComponent';

import './Directory.scss';

const Directory = ({ categories }) => {
  return (
    <div className='directory-container'>
      {categories.map((category) => (
        <DirectoryItemComponent key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;