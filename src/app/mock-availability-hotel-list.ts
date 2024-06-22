import { AvailabilityHotel } from "./availability-hotel";

export const AVAILABILITY_HOTEL_LIST: AvailabilityHotel[] = [];


for (let i = 1; i <= 25; i++) {
    let startDate = new Date();
    let endDate = new Date(startDate.getTime() + Math.random() * 90 * 24 * 60 * 60 * 1000);
    let randomDate = new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));
    let randomPrice = Math.floor(Math.random() * (500 - 50 + 1)) + 50;
    let randomPhotos: string[] = [];
    let numberOfPhotos = Math.floor(Math.random() * 5) + 1; 
    for (let j = 0; j < numberOfPhotos; j++) {
        randomPhotos.push(`photo_${j + 1}.jpg`);
    }
    AVAILABILITY_HOTEL_LIST.push(new AvailabilityHotel(i, i, randomDate, randomPrice, randomPhotos));
}
