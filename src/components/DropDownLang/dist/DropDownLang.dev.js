"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _react2 = require("@nextui-org/react");

var _reactRouterDom = require("react-router-dom");

var _reactI18next = require("react-i18next");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var DropDownLang = function DropDownLang(_ref) {
  var langs = _ref.langs,
      currentLanguage = _ref.currentLanguage;

  var _useTranslation = (0, _reactI18next.useTranslation)(),
      i18n = _useTranslation.i18n;

  var _React$useState = _react["default"].useState("default"),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      selectedColor = _React$useState2[0],
      setSelectedColor = _React$useState2[1];

  var lang = i18n.language;
  return {
    /* {
       langs.length > 2 ? (
         
             <Grid.Container gap={1.5} justify="flex-start">
               <Grid xs={12}>
                 <Grid>
                   <Dropdown>
                     <Dropdown.Button color={selectedColor}>
                         {currentLanguage.name}
                     </Dropdown.Button>
                     <Dropdown.Menu
                       color={selectedColor}
                       variant="shadow"
                       aria-label="Actions"
                     >
                       {
                         langs.map((lang,i)=> {
                           return (
                                 <Dropdown.Item key={i} className={lang.name == currentLanguage.name ? "nextui-c-kpzpMf-hXNyUb-cv" :""}  > 
                                    <Link to={`/${lang.code}`} onClick={()=> i18n.changeLanguage(lang.code)}>
                                     <p className='dropdown-p' >{lang.name}</p>
                                   </Link>
                                   
                                 </Dropdown.Item>
                           )
                         })
                       }
                     </Dropdown.Menu>
                   </Dropdown>
                 </Grid>
               </Grid>
             </Grid.Container>
       ):(
        <ul className="links">
       {
         langs.map((lag,i)=> {
           return(
             <li key={i} className={lag.code !== currentLanguage.code ? "" : "is-active"}  >
              <Link to={`/${lag.code}`} onClick={()=> i18n.changeLanguage(lag.code)}  className={lag.code !== currentLanguage.code ? "language-link" : "language-link session-active is-active" }
                 >{lag.name}</Link>
            </li>
           )
           
         })
       }
     </ul>
     )
     }
       </> */
  };
};

var _default = DropDownLang;
exports["default"] = _default;