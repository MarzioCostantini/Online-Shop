import { useEffect, useState } from "react";
import { IProducts } from '../../Interfaces/Porducts';
import Header from "../components/header/Header";
import ProductList from "../components/productList/ProductList";

const apiLink = import.meta.env.VITE_API_LINK

const Home = () => {
    // * Hier ist meine "Globaler" state
    const [products, setProducts] = useState<IProducts[]>([])



    // * Hier Fetchen wir die Daten und schrieben sie in unseren "globalen" State
    useEffect(() => {
        fetch(apiLink)
            .then((res) => res.json())
            .then((pizza) => setProducts(pizza.products))
    }, [])



    return (
        <>
            {/* Hier schicken wir unser Array an Daten via Props an die Header Component */}
            <Header products={products} />

            <ProductList products={products} />

        </>
    );
}

export default Home;