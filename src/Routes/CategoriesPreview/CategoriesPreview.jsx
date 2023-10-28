import { useContext } from 'react';
import { CategoriesContext } from '../../contexts/CategoriesContext';
import CategoryPreviewComponent from '../../Components/CategoryPreview/CategoryPreviewComponent';

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <>
      {Object.keys(categoriesMap).map((key) => {
        const products = categoriesMap[key];
        return <CategoryPreviewComponent key={key} category={key} products={products} />;
      })}
    </>
  );
};

export default CategoriesPreview;