import './categories-directory.styles.scss';
import CategoryItem from '../category-item/category-item.component';
import categories from './categories';


const CategoriesDirectory = ({ category }) =>{
return (
    <div className="categories-directory">
      {categories.map((category)=> (
      <CategoryItem 
        key = {category.id}
        category = {category}
      />
      ))}
    </div>
)
}
export default CategoriesDirectory;