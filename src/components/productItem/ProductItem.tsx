import { IProducts } from "../../../Interfaces/Porducts";
import "./ProductItem.css"

interface PropsItem {
    item: IProducts
}

const ProductItem: React.FC<PropsItem> = ({ item }) => {



    return (
        <article className="p-item">
            <img src={item.thumbnail} alt={`Sport Sachen ${item.title}`} />
            <h4>{item.title}</h4>
            <p>{item.description.slice(0, 40)}...</p>
            <button className="btn">Zum Product</button>
        </article>
    );
}

export default ProductItem;