import { useState } from "react";
import Calendar from "./components/Calendar";
import DateCard from "./components/DateCard";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-red-100 min-h-screen flex justify-center items-center">
      <Calendar />
    </div>
  );
};

export default App;
