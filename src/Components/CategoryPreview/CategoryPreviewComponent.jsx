import './CategoryPreview.styles.scss'
import { Link } from 'react-router-dom';

import ProductCard from '../ProductComponent/ProductCard'

const CategoryPreviewComponent = ({ category, products }) => {
return (
        <div className='category-preview-container'>
    <h2>
      <Link className='title' to={category}>{category.toUpperCase()}</Link>
    </h2>
    <div className='preview'>
      {products && 
        products
            .filter((_, idx) => idx < 4)
            .map((product) => (
            <ProductCard key={product.id} product={product} />
            ))}
    </div>
  </div>
);
}

export default CategoryPreviewComponent;