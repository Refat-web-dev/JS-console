let hotel = [
    [{
            room: 1,
            price: 300,
            brand: "Luxe",
            children: false,
        },
        {
            room: 2,
            price: 4000,
            brand: "Deluxe",
            children: true,
        },
        {
            room: 3,
            price: 1000,
            brand: "Deluxe",
            children: false,
        },
        {
            room: 4,
            price: 900,
            brand: "Luxe",
            children: true,
        },
    ],
    [{
            room: 5,
            price: 700,
            brand: "Luxe",
            children: true,
        },
        {
            room: 6,
            price: 79000,
            brand: "President",
            children: true,
        },
        {
            room: 7,
            price: 600,
            brand: "Luxe",
            children: false,
        },
        {
            room: 8,
            price: 950,
            brand: "Luxe",
            children: true,
        },
    ],
    [{
            room: 9,
            price: 1900,
            brand: "Deluxe",
            children: false,
        },
        {
            room: 10,
            price: 5000,
            brand: "Deluxe",
            children: true,
        },
        {
            room: 11,
            price: 1000,
            brand: "Deluxe",
            children: false,
        },
        {
            room: 12,
            price: 250,
            brand: "Luxe",
            children: false,
        },
    ],
    [{
            room: 13,
            price: 10000,
            brand: "President",
            children: true,
        },
        {
            room: 11,
            price: 8000,
            brand: "President",
            children: false,
        },
    ],
];

let rooms = {
    all_roms: [],
    rooms: 0,
};
let brands = {
    president: [],
    deluxe: [],
    luxe: [],
};

let room_level = {
    perviy: 0,
    vtoroy: 0,
    tretiy: 0,
    chetvertiy: 0,
};

let totalRoomPrice = 0

for (let floor of hotel) {
    for (let cabin of floor) {

        totalRoomPrice += cabin.price

        if (cabin.room) {
            rooms.all_roms.push(cabin)
            rooms.rooms++
        }
        cabin.eting = Math.random().toFixed() >= 1

        if (cabin.children) {
            console.log(cabin);
        }

        for (let rank in brands) {
            if (rank === cabin.brand.toLowerCase()) {
                brands[rank].push(cabin)
            }
        }
    }
}

console.log(brands);

rooms.all_roms.sort((a, b) => a.room - b.room)

console.log(rooms, rooms.all_roms.at(-1));

console.log(totalRoomPrice + ' стоят все комнаты вместе взятые');
//1 отфильтровать по категориям
//2 добавить ключ eting с буленовым значением в каждый номер
//3 посчитать и красиво раставить все команты переменную rooms
//4 найти самую дорогую комнату
//5 посчитать сколько стоит каждый этаж
//6 посчитать сколько стоят все комнаты вместе взятые
//7 найти все комнаты в которых живут дети
//6 посчитать сколько стоят все комнаты вместе взятые
//7 найти все комнаты в которых живут дети