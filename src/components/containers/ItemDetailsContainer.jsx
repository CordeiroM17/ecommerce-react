import { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail';
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { useParams } from 'react-router-dom';

const ItemDetailsContainer = () => {

  const { id } = useParams();

  const [prods, setProds] = useState([])

  useEffect(() => {
    const db = getFirestore();
    const prodsCollection = collection(db, "productos");
    getDocs(prodsCollection).then((querySnapshot) => {
      const data = querySnapshot.docs.map((doc) => ({...doc.data(), id: querySnapshot.id}));
      setProds(data);
    });
  }, []);

  const prodFilter = prods.filter((prod) => prod.id == id);

  return (
    <div className="item-list-container">
      <ItemDetail products={prodFilter}/>
    </div>
  )
}

export default ItemDetailsContainer;