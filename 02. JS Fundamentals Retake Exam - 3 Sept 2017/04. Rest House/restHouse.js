function solution(rooms, guests) {
    let tmp = [], sorted, triples = rooms.filter(r => r.type === "triple"), dBedded = rooms.filter(r => r.type === "double-bedded"), data = { triples, dBedded, teaHouse: 0 };

    for (let i = 0; i < rooms.length; i++) {
        if (rooms[i].type === "triple") rooms[i]["free"] = 3;
        else rooms[i]["free"] = 2;

        rooms[i]["guests"] = [];
    }

    function handleTriples(guest) {
        let isBooked = true;

        for (let i = 0; i < data.triples.length; i++) {
            if (data.triples[i].free === 3 || (data.triples[i].guests[0].gender === guest.gender && 0 < data.triples[i].free)) {
                data.triples[i].free--;
                data.triples[i].guests.push(guest);
                isBooked = false;
                break;
            }
        }
        if (isBooked) data.teaHouse++;
    }

    for (let i = 0; i < guests.length; i++) {
        if (guests[i].first.gender === guests[i].second.gender) {
            handleTriples(guests[i].first);
            handleTriples(guests[i].second);
        } else {
            let isBooked = true;

            for (let j = 0; j < data.dBedded.length; j++) {
                if (data.dBedded[j].free === 2) {
                    data.dBedded[j].guests.push(guests[i].first);
                    data.dBedded[j].guests.push(guests[i].second);
                    data.dBedded[j].free = 0;
                    isBooked = false;
                    break;
                }
            }
            if (isBooked) data.teaHouse += 2;
        }
    }

    for (const room of data.dBedded) { tmp.push(room); }
    for (const room of data.triples) { tmp.push(room); }
    sorted = tmp.sort((a, b) => a.number.localeCompare(b.number));

    for (const room of sorted) {
        console.log(`Room number: ${room.number}`);
        room.guests.sort((a, b) => a.name.localeCompare(b.name)).forEach(guest => {
            console.log(`--Guest Name: ${guest.name}`);
            console.log(`--Guest Age: ${guest.age}`);
        });
        console.log(`Empty beds in the room: ${room.free}`);
    }
    console.log(`Guests moved to the tea house: ${data.teaHouse}`);
}