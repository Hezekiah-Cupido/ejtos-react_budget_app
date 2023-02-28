import React, {useContext} from "react";
import { AppContext } from "../context/AppContext";

const ExpenseTotal = () => {
    let {expenses} = useContext(AppContext);

    let totalExpenses = expenses.reduce((total, item) => total + item.cost, 0);

    return (
        <div className="alert alert-primary">
            <span>Spent so far: £{totalExpenses}</span>
        </div>
    );
};

export default ExpenseTotal;