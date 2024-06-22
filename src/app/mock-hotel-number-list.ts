import { HotelNumber } from "./hotel-number";

export const HOTEL_NUMBERS_LIST: HotelNumber[] = [];

for (let i = 1; i <= 25; i++) {
    let numberOfRooms = Math.floor(Math.random() * 100) + 50;

    for (let j = 1; j <= numberOfRooms; j++) {
        let roomNumber = `${i}${j.toString().padStart(3, '0')}`;
        HOTEL_NUMBERS_LIST.push(new HotelNumber(HOTEL_NUMBERS_LIST.length + 1, i, roomNumber));
    }
}