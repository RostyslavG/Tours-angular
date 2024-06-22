// import { Tour } from "./tour";
// import axios from 'axios';

// export const TUR_LIST: Tour[] = [];

// const numberOfHotels = 25;
// const toursPerHotel = 4;

// const unsplashApiUrl = 'https://source.unsplash.com/random'; 
// const natureKeyword = 'nature'; 

// async function getRandomImage(): Promise<string> {
//     try {
//         let response = await axios.get(`${unsplashApiUrl}?${natureKeyword}`, { responseType: 'blob' });
//         return URL.createObjectURL(response.data);
//     } catch (error) {
//         console.error('Failed to fetch random image:', error);
//         return '';
//     }
// }

// (async () => {
//     for (let i = 1; i <= numberOfHotels; i++) {
//         for (let j = 1; j <= toursPerHotel; j++) {
//             let tourId = (i - 1) * toursPerHotel + j;
//             let tourName = `Tour ${j}`;
//             let tourDescription = `Description for Tour ${j}`;
//             let tourPrice = getRandomPrice();
//             let tourImage = await getRandomImage(); 
//             TUR_LIST.push({id: tourId, id_hotel: i, name: tourName, description: tourDescription, price: tourPrice, image: tourImage});
            
//         }
//     }
// })();

// function getRandomPrice(): number {
//     return Math.floor(Math.random() * (500 - 100 + 1)) + 100;
// }