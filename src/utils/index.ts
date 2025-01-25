export const formatToInr = (number: number) => {
  const formattedNumber = new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR" }).format(number);
  return formattedNumber.replace(/\.00$/, ""); 
};
