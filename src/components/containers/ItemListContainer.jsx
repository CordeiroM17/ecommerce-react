import ItemList from "../ItemList";
import Data from '../../data.json';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ItemListContainer = () => {

  const { category } = useParams();

  const [prods, setProds] = useState([])

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(Data);
        const data = await response.json();
        setProds(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  const catFilter = Data.filter((prod) => prod.category == category);
  return (
    <div className="item-list-container">
      {category ? <ItemList producto={catFilter} /> : <ItemList producto={Data} />}
    </div>
  )
};

export default ItemListContainer;