// created to select random index from an array
export const getRandom = (val: number) => Math.floor(Math.random() * val);

// get current date with this format => Sunday, October 24, 2021
export const getCurrentDay = () => {
  let today = new Date();

  const day = today.getDate();
  const dayLong = today.toLocaleString("default", { weekday: "long" });
  const monthLong = today.toLocaleString("default", { month: "long" });
  const year = today.getFullYear();

  let val = dayLong + ", " + monthLong + " " + day + ", " + year;

  return val;
};
