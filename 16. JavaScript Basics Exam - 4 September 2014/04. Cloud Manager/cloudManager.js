function solution(params) {
    params.pop(); //този ред е добавен заради judge system
    let data = {}, otuput = {};

    params.forEach(element => {
        let [name, type, size] = element.split(/\s+/).map(m => m = m.trim());

        if (!data[type]) data[type] = { files: [], memory: 0 };
        if (!data[type].files.includes(name)) data[type].files.push(name);
        data[type].files.sort();
        data[type].memory += +(size.split(/mb/i)[0]);
    });

    Object.keys(data).sort().forEach(key => otuput[key] = { files: data[key].files, memory: data[key].memory.toFixed(2) });
    console.log(JSON.stringify(otuput));
}