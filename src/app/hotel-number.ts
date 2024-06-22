export class HotelNumber {
    id: number;
    id_hotel: number;
    roomNumber: string;
    constructor(id: number, id_hotel: number, roomNumber: string) {
        this.id = id;
        this.id_hotel = id_hotel;
        this.roomNumber = roomNumber;
    }
}