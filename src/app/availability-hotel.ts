export class AvailabilityHotel {
    id: number;
    id_hotel: number;
    date: Date;
    price: number;
    photos: string[];
    constructor(id: number, id_hotel: number, date: Date, price: number, photos: string[]) {
        this.id = id;
        this.id_hotel = id_hotel;
        this.date = date;
        this.price = price;
        this.photos = photos;
    }
}