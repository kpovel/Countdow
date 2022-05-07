import {UI_ELEMENTS, showResultCountdown} from './view.js';
import {format, intervalToDuration, formatDuration} from 'date-fns';

UI_ELEMENTS.SUBMIT.addEventListener('click', getResultCountdown);


// eslint-disable-next-line require-jsdoc
function getResultCountdown() {
  const selectedDate = UI_ELEMENTS.DATE.valueAsNumber;
  const formattedSelectedDate = format(new Date(selectedDate), 'PPP');

  const restTime = intervalToDuration({
    start: Date.now(),
    end: selectedDate,
  });

  const formattedRestTime = formatDuration(
      restTime,
      {format: ['years', 'months', 'days', 'hours', 'minutes']},
  );

  showResultCountdown(formattedSelectedDate, formattedRestTime);
}
