import { useEffect, useState } from "react";
import { IProducts } from "../../../Interfaces/Porducts";
import "./Header.css"

interface PropsHeader {
    products: IProducts[]
}

const Header: React.FC<PropsHeader> = ({ products }) => {
    const [search, setSearch] = useState<string>("")
    const [searchedProducts, setSearchedProducts] = useState<IProducts[]>([])


    // * Suchfunktion 
    // Hier Filter wir mit hilfe von useEffect die gefetchten daten die via hier via Props bekommen mit der Filter methode
    useEffect(() => {
        if (products) {
            let filterByTitle = products.filter((singleItem) => singleItem.title.toLowerCase().includes(search.toLowerCase()))

            setSearchedProducts(filterByTitle)
        } else {
            console.log("Keine Daten da 🤧");

        }

    }, [search, products])



    return (
        <header>
            <a href="#">
                <h2>Logo</h2>
            </a>

            <div>
                <nav>
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                </nav>

                <div className="search-box">
                    <input onChange={(event: React.ChangeEvent<HTMLInputElement>) => setSearch(event.target.value)} type="text" placeholder="search..." value={search} />

                    {/* Hier werden die gesuchenten Elemente angezeigt wenn der Input länger als Ein Zeichen ist */}
                    <section className="search-output">
                        {search.length > 0 && (
                            <div>
                                {searchedProducts.length > 0 ?
                                    searchedProducts.map((item, index) => (
                                        <a key={index} href="#">{item.title}</a>
                                    )) : (
                                        <p>nichts gefunden</p>
                                    )
                                }
                            </div>
                        )}

                    </section>
                </div>


            </div>
        </header>
    );
}

export default Header;