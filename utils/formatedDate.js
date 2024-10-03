export const getFormattedDate = (date) => {
  const options = { year: "numeric", month: "short", day: "2-digit" };
  return new Intl.DateTimeFormat("en-US", options).format(date);
};

export const getDateMinusDays = (date, days) => {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
};
