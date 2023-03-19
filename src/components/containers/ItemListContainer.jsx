import ItemList from "../ItemList";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore } from 'firebase/firestore';

const ItemListContainer = () => {

  const { category } = useParams();

  const [prods, setProds] = useState([])

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "productos");
    getDocs(itemsCollection).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => ({...doc.data(), id: doc.id}));
      setProds(docs)
    });
  }, []);

  const catFilter = prods.filter((prod) => prod.category == category);

  return (
    <div className="item-list-container">
      {category ? <ItemList producto={catFilter} /> : <ItemList producto={prods} />}
    </div>
  )
};

export default ItemListContainer;