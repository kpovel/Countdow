import Cookies from 'js-cookie';
import {addHours} from 'date-fns';

export const UI_ELEMENTS = {
  DATE: document.getElementById('date'),
  SUBMIT: document.getElementById('submit'),
  RESULT: document.getElementById('result'),
};

export function showResultCountdown(selectedDate, countdown) {
  const result = `Until ${selectedDate} left ${countdown}`;

  Cookies.set('lastResult', result, {expires: addHours(Date.now(), 1)});
  UI_ELEMENTS.RESULT.textContent = result;
}

function showLastResultOnRestart() {
  if (Cookies.get('lastResult')) {
    UI_ELEMENTS.RESULT.textContent = Cookies.get('lastResult');
  }
}
showLastResultOnRestart();
