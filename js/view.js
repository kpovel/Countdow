export const UI_ELEMENTS = {
  DATE: document.getElementById('date'),
  SUBMIT: document.getElementById('submit'),
  RESULT: document.getElementById('result'),
};

// eslint-disable-next-line require-jsdoc
export function showResultCountdown(selectedDate, countdown) {
  UI_ELEMENTS.RESULT.textContent = `Until ${selectedDate} left ${countdown}`;
}
