export class AttributesHotel {
    id: number;
    id_hotel: number;
    value: boolean;
    description: string;
    constructor(id: number, id_hotel: number, value: boolean, description: string) {
        this.id = id;
        this.id_hotel = id_hotel;
        this.value = value;
        this.description = description;
    }
}