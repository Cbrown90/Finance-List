import Card from "../UI/Card";
import ExpensesFilter from "./../ExpenseFilter/ExpenseFilter";
import ExpenseList from "./ExpenseList";
import "./Expenses.css";
import { useState } from "react";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filterDate, setfilterDate] = useState("2020");
  //   const [listToDisplay, setlistToDisplay] = useState(props.items);

  const onSetFilterHandler = (filterValue) => {
    setfilterDate(filterValue);
    // setlistToDisplay(props.items.filter((x) => x.date.getFullYear() == filterValue));
  };

  const filteredExpenses = props.items.filter((expenses) => {
    return expenses.date.getFullYear().toString() === filterDate;
  });

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={filterDate}
          onSetFilter={onSetFilterHandler}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpenseList items={filteredExpenses} />
      </Card>
    </li>
  );
}

export default Expenses;
