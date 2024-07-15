export const formatNumberWithCommas = (number)=> {
  if(number) number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return number;
  }