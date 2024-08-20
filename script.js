const restaurantData = [
    {
        name: "Pasta Palace",
        description: "Best pasta in town with a cozy atmosphere.",
        coordinates: [40.7128, -74.0060],
        image: "pasta_palace.jpg"
    },
    {
        name: "Sushi Central",
        description: "Authentic sushi made with the freshest ingredients.",
        coordinates: [34.0522, -118.2437],
        image: "sushi_central.jpg"
    },
    {
        name: "Burger Haven",
        description: "Delicious burgers with a wide variety of toppings.",
        coordinates: [41.8781, -87.6298],
        image: "burger_haven.jpg"
    },
    {
        name: "Taco Town",
        description: "Tasty tacos with fresh, locally-sourced ingredients.",
        coordinates: [29.7604, -95.3698],
        image: "taco_town.jpg"
    },
    {
        name: "Pizza Perfection",
        description: "Gourmet pizzas with a variety of unique toppings.",
        coordinates: [37.7749, -122.4194],
        image: "pizza_perfection.jpg"
    },
    {
        name: "BBQ Bliss",
        description: "Mouth-watering BBQ with a focus on slow-cooked meats.",
        coordinates: [35.2271, -80.8431],
        image: "bbq_bliss.jpg"
    },
    {
        name: "Seafood Shack",
        description: "Fresh seafood dishes straight from the ocean.",
        coordinates: [25.7617, -80.1918],
        image: "seafood_shack.jpg"
    }
];

const map = L.map('map').setView([37.0902, -95.7129], 4); // Centered on the US with appropriate zoom level

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
}).addTo(map);

restaurantData.forEach(restaurant => {
    const marker = L.marker(restaurant.coordinates).addTo(map);

    marker.on('click', () => {
        document.getElementById('content').innerHTML = `
            <h2>${restaurant.name}</h2>
            <p>${restaurant.description}</p>
            <img src="${restaurant.image}" alt="${restaurant.name}" style="width:100%;height:auto;">
        `;
    });
});

