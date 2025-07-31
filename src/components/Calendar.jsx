import DateCard from "./DateCard";
import scheduleList from "../scheduleList.json";
const Calendar = () => {
  return (
    <div className="bg-blue-400 rounded-2xl shadow p-12 my-20">
      <h1 className="bg-white mb-6 text-right font-bold text-6xl p-4 rounded-2xl">
        August, 2025
      </h1>
      <div className="grid grid-cols-7 justify-items-center gap-6">
        {/* 디벨롭 : 동적 빈칸 처리 */}
        <div className="w-40 h-52"></div>
        <div className="w-40 h-52"></div>
        <div className="w-40 h-52"></div>
        <div className="w-40 h-52"></div>
        <div className="w-40 h-52"></div>
        {scheduleList.map((value) => (
          <DateCard
            key={value.date}
            date={value.date}
            isSat={value.isSat}
            isHoliday={value.isHoliday}
            todos={value.todos}
          />
        ))}
      </div>
    </div>
  );
};

export default Calendar;
