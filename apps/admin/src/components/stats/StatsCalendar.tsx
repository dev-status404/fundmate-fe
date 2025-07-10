import React, { useState } from 'react';
import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  format,
  addMonths,
  subMonths,
  getISOWeek,
  isSameMonth,
  isSameDay,
} from 'date-fns';
import classNames from 'classnames';

const StatsCalendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const renderHeader = () => (
    <div className="flex justify-between items-center w-full px-2">
      <span
        className="material-icons text-black text-[20px] cursor-pointer"
        onClick={() => setCurrentDate(subMonths(currentDate, 1))}
      >
        {`<`}
      </span>
      <span className="text-[16px] font-normal">
        {format(currentDate, 'MMMM yyyy')}
      </span>
      <span
        className="material-icons text-black text-[20px] cursor-pointer"
        onClick={() => setCurrentDate(addMonths(currentDate, 1))}
      >
        {`>`}
      </span>
    </div>
  );

  const renderDays = () => {
    const days = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
    return (
      <div className="grid grid-cols-8 gap-[4px] mt-1">
        <div></div>
        {days.map((day) => (
          <div
            key={day}
            className="w-10 h-10 flex items-center justify-center text-[16px]"
          >
            {day}
          </div>
        ))}
      </div>
    );
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentDate);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart, { weekStartsOn: 1 });
    const endDate = endOfWeek(monthEnd, { weekStartsOn: 1 });
    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = '';

    while (day <= endDate) {
      const weekNumber = getISOWeek(day);
      days = [
        <div
          key={`week-${weekNumber}`}
          className="w-9 h-10 bg-[#333] text-white text-[12px] rounded flex items-center justify-center"
        >
          {weekNumber % 100}
        </div>,
      ];

      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, 'd');
        const cloneDay = day;
        const isWeekend = [0, 6].includes(day.getDay());
        const isToday = isSameDay(day, selectedDate ?? new Date());

        days.push(
          <div
            key={day.toString()}
            className={classNames(
              "w-10 h-[43px] rounded flex items-center justify-center text-[16px] cursor-pointer",
              {
                "text-gray-400": !isSameMonth(day, monthStart),
                "bg-[#333] text-white": isToday,
                "text-[#DC3E3E]": !isToday && day.getDay() === 0,
                "text-[#00406C]": !isToday && day.getDay() === 6,
              }
            )}
            onClick={() => setSelectedDate(cloneDay)}
          >
            {formattedDate}
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div key={day.toString()} className="grid grid-cols-8 gap-[6px] mt-1">
          {days}
        </div>
      );
    }
    return <div>{rows}</div>;
  };

  return (
    <div className="w-[340px] h-[330px] flex flex-col items-center p-[6px]">
      {renderHeader()}
      {renderDays()}
      {renderCells()}
    </div>
  );
};

export default StatsCalendar;
