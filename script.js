var map = L.map('map').setView([-1.294732, 36.819634], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

fetch('https://cotsm-transport-form.herokuapp.com/members')
    .then(response => response.json())
    .then(data => {
        data.forEach(member => {
            L.marker([member.latitude, member.longitude]).addTo(map)
                .bindPopup(`<h3 style="color: #f72585">${member.name}</h3>
                <b>Estate:</b> ${member.estate} <br> 
                <b>Nearest stage:</b> ${member.nearest_stage}`)
                ;
        });
    })