import { AttributesHotel } from "./attributes-hotel";

// const ATTRIBUTES_HOTEL_LIST: AttributesHotel[] = [
//     {id: 1, id_hotel: 1, value: true, description: 'wifi'},
//     {id: 2, id_hotel: 1, value: true, description: 'parking'},
//     {id: 3, id_hotel: 1, value: true, description: 'bar'},

//     {id: 4, id_hotel: 2, value: true, description: 'swimming pool'},
//     {id: 5, id_hotel: 2, value: true, description: 'bar'},
//     {id: 6, id_hotel: 2, value: true, description: 'beach'},

//     {id: 7, id_hotel: 3, value: true, description: 'gym'},
//     {id: 8, id_hotel: 3, value: true, description: 'restaurant'},
//     {id: 9, id_hotel: 3, value: true, description: 'spa'},

//     {id: 10, id_hotel: 4, value: true, description: 'parking'},
//     {id: 11, id_hotel: 4, value: true, description: 'restaurant'},
//     {id: 12, id_hotel: 4, value: true, description: 'conference room'},

//     {id: 13, id_hotel: 5, value: true, description: 'wifi'},
//     {id: 14, id_hotel: 5, value: true, description: 'swimming pool'},
//     {id: 15, id_hotel: 5, value: true, description: 'spa'},


// ]

export const ATTRIBUTES_HOTEL_LIST: AttributesHotel[] = [];

for (let i = 1; i <= 25; i++) {                
    for (let j = 1; j <= 3; j++) {
        let id: number = ATTRIBUTES_HOTEL_LIST.length + 1;
        let id_hotel: number = i;
        let value: boolean = true;
        let description: string = '';

        switch (j) {
            case 1:
                description = 'wifi';
                break;
            case 2:
                description = 'parking';
                break;
            case 3:
                const randomIndex = Math.floor(Math.random() * 5); 
                switch (randomIndex) {
                    case 0:
                        description = 'swimming pool';
                        break;
                    case 1:
                        description = 'gym';
                        break;
                    case 2:
                        description = 'restaurant';
                        break;
                    case 3:
                        description = 'spa';
                        break;
                    case 4:
                        description = 'conference room';
                        break;
                }
                break;
        }
        ATTRIBUTES_HOTEL_LIST.push({id, id_hotel, value, description});
    }
}