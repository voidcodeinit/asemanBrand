$(document).ready(function () {
  $('.bxslider').bxSlider({
    auto: true,
    pager: false,
    controls: false,
  });
});
var map = L.map('map').setView([35.706717, 51.34722], 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

L.marker([35.706717, 51.34722])
  .addTo(map)
  .bindPopup('برج فناوری شریف')
  .openPopup();
