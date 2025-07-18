function linkStrings (params) {
    params.forEach(element => {
        let data = {}, output = '';

        element = element.split(/&|\?/gm).map(m => m = m.trim());

        for (let el of element) {
            if (el.includes('=')) {
                let [key, value] = el.split('=').map(m => m = m.trim()), regex = /\s{2,}/;

                while (key.includes('+') || key.includes('%20')) key = key.replace('+', ' ').replace('%20', ' ');
                while (value.includes('+') || value.includes('%20')) value = value.replace('+', ' ').replace('%20', ' ');
                while (regex.test(key)) key = key.replace(regex, ' ');
                while (regex.test(value)) value = value.replace(regex, ' ');

                key = key.trim(); value = value.trim();

                if(!data[key]) data[key] = [];
                data[key].push(value);
            }
        }

        for (const key in data) output += `${key}=[${data[key].join(", ")}]`;
        console.log(output);
    });
}