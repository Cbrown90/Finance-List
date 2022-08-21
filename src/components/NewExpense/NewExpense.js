import react, {useState} from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = (props) => {
    const onSaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
       props.onAddExpense(expenseData);
    };
    const [displayNewExpense, setdisplayNewExpense] = useState(false);

    const displayNewExpenseHandler = (event) => {
        console.log(displayNewExpense);
        setdisplayNewExpense(!displayNewExpense);
    }
    let expenseDisplay = <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} setDisplayNewExpense={displayNewExpenseHandler}/>
    
    if (!displayNewExpense)
    {
      expenseDisplay = 
          <button type="submit" onClick={displayNewExpenseHandler} >Add New Expense</button>

    }

return(
    <div className="new-expense">
        {expenseDisplay}
    </div>
)
}

export default NewExpense;