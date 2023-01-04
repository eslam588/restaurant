"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _leaflet = _interopRequireDefault(require("leaflet"));

require("leaflet-routing-machine");

require("leaflet-routing-machine/dist/leaflet-routing-machine.css");

var _reactLeaflet = require("react-leaflet");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var LeafletRoutingMachine = function LeafletRoutingMachine() {
  var map = (0, _reactLeaflet.useMap)();

  var DefaultIcon = _leaflet["default"].icon({
    iconUrl: "/marche.gif",
    iconSize: [90, 90]
  });

  (0, _react.useEffect)(function () {
    var marker1 = _leaflet["default"].marker([36.8065, 10.1815], {
      icon: DefaultIcon
    }).addTo(map);

    map.on("click", function (e) {
      _leaflet["default"].marker([e.latlng.lat, e.latlng.lng]).addTo(map);

      _leaflet["default"].Routing.control({
        waypoints: [_leaflet["default"].latLng(36.8065, 10.1815), _leaflet["default"].latLng(e.latlng.lat, e.latlng.lng)],
        lineOptions: {
          styles: [{
            color: "blue",
            weight: 4,
            opacity: 0.7
          }]
        },
        routeWhileDragging: false,
        geocoder: _leaflet["default"].Control.Geocoder.nominatim(),
        addWaypoints: false,
        draggableWaypoints: false,
        fitSelectedRoutes: true,
        showAlternatives: true
      }).on("routesfound", function (e) {
        e.routes[0].coordinates.forEach(function (c, i) {
          setTimeout(function () {
            marker1.setLatLng([c.lat, c.lng]);
          }, 1000 * i);
        });
      }).addTo(map);
    });
  }, []);
  return null;
};

var _default = LeafletRoutingMachine;
exports["default"] = _default;