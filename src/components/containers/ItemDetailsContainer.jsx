import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail';
import Data from '../../data.json';

const ItemDetailsContainer = () => {

  const { id } = useParams();

  const [prods, setProds] = useState([]);

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

  const prodFilter = Data.filter((prod) => prod.id == id);

  return (
    <div className="item-list-container">
      <ItemDetail producto={prodFilter}/>
    </div>
  )
}

export default ItemDetailsContainer;