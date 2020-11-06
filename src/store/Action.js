export let INCREMENT = "INCREMENT";
export let DECREMENT = "DECREMENT";

export const increment = () => {
  return { type: "INCREMENT" };
};
export const decrement = () => {
  return { type: "DECREMENT" };
};
