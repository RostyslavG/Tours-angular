// export class Tour {
//     id: number;
//     name: string;
//     description: string;
//     price: number;
//     image: string;
//     id_hotel: number;
//     constructor(id: number, name: string, description: string, price: number, image: string, id_hotel: number) {
//         this.id = id;
//         this.name = name;
//         this.description = description;
//         this.price = price;
//         this.image = image;
//         this.id_hotel = id_hotel;
//     }
// }


export interface Tour {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    id_hotel: number;
    created_at: string;
    updated_at: string;
}