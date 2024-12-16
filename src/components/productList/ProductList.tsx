import { IProducts } from "../../../Interfaces/Porducts";
import ProductItem from "../productItem/ProductItem";
import "./ProductList.css"

interface PropsProductList {
    products: IProducts[]
}

const ProductList: React.FC<PropsProductList> = ({ products }) => {


    return (
        <section className="p-list">
            <div>
                <h3>All Articles</h3>
            </div>

            <section className="grid-layout">
                {products.map((item) => (
                    <ProductItem key={item.id} item={item} />
                ))}
            </section>


        </section>
    );
}

export default ProductList;