import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { subDays, startOfMonth, endOfMonth, startOfWeek, endOfWeek } from 'date-fns';

import { DateRange } from '../types';

interface IDateSelector {
  startDate: Date | null;
  setStartDate: (date: Date | null) => void;
  endDate: Date | null;
  setEndDate: (date: Date | null) => void;
  range: DateRange;
  onRangeChange: (range: DateRange) => void;
}

const DateRangeSelector: React.FC<IDateSelector> = (props) => {
  
  const { startDate, setStartDate, endDate, setEndDate, range, onRangeChange } = props
  const [internalRange, setInternalRange] = useState<DateRange>(range);

  useEffect(() => {
    setInternalRange(range);
  }, [range]);

  const handleRangeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value as DateRange;
    setInternalRange(value);

    const today = new Date();
    switch (value) {
      case DateRange.LAST_DAY:
        setStartDate(subDays(today, 1));
        setEndDate(subDays(today, 1));
        break;
      case DateRange.LAST_WEEK:
        setStartDate(startOfWeek(subDays(today, 7)));
        setEndDate(endOfWeek(subDays(today, 7)));
        break;
      case DateRange.LAST_MONTH:
        setStartDate(startOfMonth(subDays(today, 30)));
        setEndDate(endOfMonth(subDays(today, 30)));
        break;
      case DateRange.ARBITRARY:
      default:
        setStartDate(null);
        setEndDate(null);
        break;
    }

    onRangeChange(value);
  };

  return (
    <div className="flex flex-col gap-2 border-2 p-4">
      <h2 className="text-xl">Выбор временного периода</h2>
      <select className="select select-primary w-full max-w-xs" value={internalRange} onChange={handleRangeChange}>
        <option value={DateRange.ARBITRARY}>Произвольный</option>
        <option value={DateRange.LAST_DAY}>Прошлый день</option>
        <option value={DateRange.LAST_WEEK}>Прошлая неделя</option>
        <option value={DateRange.LAST_MONTH}>Прошлый месяц</option>
      </select>

      {internalRange === DateRange.ARBITRARY && (
        <>
          <div>
            <label>От: </label>
            <DatePicker
              className='input input-primary input-md max-w-xs'
              selected={startDate}
              onChange={(date: Date | null) => setStartDate(date)}
              selectsStart
              startDate={startDate || undefined}
              endDate={endDate || undefined}
              dateFormat="dd.MM.yyyy"
            />
          </div>
          <div>
            <label>До: </label>
            <DatePicker
              className='input input-primary input-md max-w-xs'
              selected={endDate}
              onChange={(date: Date | null) => setEndDate(date)}
              selectsEnd
              startDate={startDate || undefined}
              endDate={endDate || undefined}
              minDate={startDate || undefined}
              dateFormat="dd.MM.yyyy"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default DateRangeSelector;