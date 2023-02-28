import React, {useContext} from "react";
import ExpanseItem from "./ExpenseItem";
import { AppContext } from "../context/AppContext";

const ExpenseList = () => {
    let {expenses} = useContext(AppContext);

    return (
        <table className="table">
            <thead className="thead-light">
                <tr>
                    <th scope="col">Department</th>
                    <th scope="col">Allocated Budget</th>
                    <th scope="col">Increase by 10</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                {expenses.map((expense) => 
                    <ExpanseItem id={expense.id} key={expense.id} name={expense.name} cost={expense.cost} />
                )}
            </tbody>
        </table>
    );
};

export default ExpenseList;