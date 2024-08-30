import { useEffect, useState } from "react";
import StockRow, { StockRowMem } from "./stockRow";

const stockArray = [
    {
        id: 1,
        item: "chair",
        description: "very old",
        price: 200,
    },
    {   
        id: 2,
        item: "table",
        description: "very old",
        price: 400,
    },
    {    
        id: 3,
        item: "lamp",
        description: "very old",
        price: 150,
    },
];

const StockList = () => {
    const [stock, setHouses] = useState(stockArray); //when add stock button is used the component is re-rendered but setStock is used in use useEffect
                                                     //re-rendering again causing an infinate loop solution is to instruct react to only use useEffect in certain cases

    /*useEffect(() => {  //cannot deal with async functionc so we wrap the fetch in an extra function and call that instead
        const fetchStock = async () => {
            const response = await fetch("/api/stock");
            const stock = await response.json();
            setStock(stock);
        }
        fetchStock();
    }); []); //empty dependancy array is used to solve infinate loops as useEffect is only used once 
    */

    const addStock = () => {
        setHouses([
            ...stock,
            {
                id: 3,
                item: "mirror",
                description: "rlly old",
                price: 2000,
            },
        ]);
    };

    return(    
        <>
            <div className="row">
                <h5 className="themeFontColor text-center" id="tableTitle">
                    Our Stock
                </h5>
            </div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Item</th> 
                        <th>Description</th>
                        <th>Asking Price</th>
                    </tr>
                </thead>
                <tbody>
                {stock.map((s) => <StockRow key = {s.id} stock = {s}/> )}
                </tbody>
            </table>
            <button className="btn btn-primary" onClick={addStock}>
                Add Stock
            </button>
        </>
    );
};

export default StockList;