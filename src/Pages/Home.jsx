import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Categories, PizzaBlock, SortPopUp } from '../components';
import LoadingPizzas from '../components/LoadingPizzas';
import { addPizzaToCart } from '../redux/actions/cartAC';
import { setCategory, setSortBy } from '../redux/actions/filtersAC';
import { fetchPizzas } from '../redux/actions/pizzasAC';

const categoryItems = ['Мяcные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const popUpItems = [
        { name: 'популярности', type: 'popular', order: "desc" },
        { name: 'цене', type: 'price', order: "desc" },
        { name: 'алфавиту', type: 'name', order: "asc" },
        ];

const Home = () => {
  const items = useSelector(({ pizzas }) => pizzas.items);
  const isLoading = useSelector(({ pizzas }) => pizzas.isLoading);
  const cartItems = useSelector(({ cart }) => cart.items);
  const { sortBy, category } = useSelector(({ filters }) => filters);

  const dispatch = useDispatch();

  React.useEffect(() => {
      dispatch(fetchPizzas(sortBy, category));
  },[sortBy, category, dispatch]);

  const onSelectCategory = (index) => {
    dispatch(setCategory(index));
  }
  
  const onSelectSortBy = (type) => {
    dispatch(setSortBy(type));
  }

  const handleAddPizzaToCart = (obj) => {
    dispatch(addPizzaToCart(obj))
  }
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={category}
          onClickCategory={onSelectCategory}
          items={categoryItems} />
        <SortPopUp activeSortBy={sortBy.type} items={popUpItems} onClickSortBy={onSelectSortBy} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading ? items.map(obj => (
          <PizzaBlock 
          onClickAddPizza={handleAddPizzaToCart}
          addedCount={cartItems[obj.id] && cartItems[obj.id].items.length}
          key={obj.id} {...obj} />
        )) : Array(8).fill(<LoadingPizzas />)}
      </div>
    </div>
  )
}

export default Home;