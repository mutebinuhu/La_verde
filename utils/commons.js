export const formatNumberWithCommas = (number)=> {
 if(number)  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
 return number
}
export function encodeURL(title) {
    return title.replace(/ /g, '+');
  }

export function decodeURL(encodedTitle) {
    return encodedTitle.replace(/\+/g, ' ');
  }