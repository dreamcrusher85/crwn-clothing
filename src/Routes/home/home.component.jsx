
import categories from '../../components/categories-directory/categories';
import CategoriesDirectory from '../../components/categories-directory/categories-directory.component';

const Home = () => {
  
  return (
    <div>
      <CategoriesDirectory categories = {categories.category}/>
    </div>    
  )
   
}

export default Home;
