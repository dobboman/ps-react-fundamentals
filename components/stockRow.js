import currencyFormatter from "@/helpers/currencyFormatter";
import React from "react";

const StockRow = ({stock: {item, description, price}}) => {
    return(
       
            <tr>
                <td>{item}</td>
                <td>{description}</td>
                <td>{currencyFormatter.format(price)}</td>
            </tr>
        
    )
};

const StockRowMem = React.memo(StockRow);

export default StockRow;
export {StockRowMem}; //cache output to optimize re-rendering but this JSX is so small there is minimal gain