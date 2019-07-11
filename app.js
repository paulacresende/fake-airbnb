function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

const place = document.getElementById('airbnb');

fetch('https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72')
    .then(res => res.json())
    .then(data => {
        data.forEach(places => {
            let div = createNode('div'),
                p = createNode('p'),
                img = createNode('img'),
                type = document.createTextNode("Tipo:\n" + places["property_type"] + "\n"),
                name = document.createTextNode(places["name"]),
                price = document.createTextNode("\nPreço: $" + places["price"] + " / noite");
            img.src = places["photo"];
            append(div, img);
            append(div, type);
            append(div, p);
            append(p, name);
            append(div, p);
            append(p, price);
            append(place, div);
        })
    });