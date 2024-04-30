import md5 from 'md5';


export const BaseURL = 'https://gateway.marvel.com:443/v1/public/characters';
export const publicKey=  'f9080e08b7439de42ef66edfb2130c1e';
export const privateKey = '7cb9d691524a5226954632018378b44de0597329';
export const timestamp = Number(new Date());
export const hash = md5(timestamp+privateKey+publicKey);

export default { BaseURL, publicKey, privateKey, timestamp, hash };