"use strict";
(self["webpackChunkweather_app"] = self["webpackChunkweather_app"] || []).push([[524],{

/***/ 24:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `// extracted by mini-css-extract-plugin
export {};`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;QACQ,CAAA","sourcesContent":["// extracted by mini-css-extract-plugin\nexport {};"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 314:
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ 354:
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ 72:
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ 659:
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ 540:
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ 56:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ 825:
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ 113:
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ 553:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  G: () => (/* binding */ weatherStoredData)
});

;// CONCATENATED MODULE: ./src/DOM/DOMElements.js
function DOMElements() {
    const weatherInfoElements = {
        cityName: "city_name",
        countryName: "country_name",
        currentTime: "current_time",
        currentWeather: "current_weather",
        currentDescription: "weather_description",
        feelsLike: "feels_like",
        humidity: "humidity",
        chanceOfRain: "chance_of_rain",
        windSpeed: "wind_speed",
    };

    const weatherDays = {
        currentDay: "current_day",
        day0: {
            title: "day0",
            min: "day0_min",
            max: "day0_max"
        },
        day1: {
            title: "day1",
            min: "day1_min",
            max: "day1_max"
        },
        day2: {
            title: "day2",
            min: "day2_min",
            max: "day2_max"
        },
        day3: {
            title: "day3",
            min: "day3_min",
            max: "day3_max"
        },
        day4: {
            title: "day4",
            min: "day4_min",
            max: "day4_max"
        },
        day5: {
            title: "day5",
            min: "day5_min",
            max: "day5_max"
        },
        day6: {
            title: "day6",
            min: "day6_min",
            max: "day6_max"
        },
    }

    const inputElements = {
        mainSearchBar: "main_search_bar",
        searchBtn: "main_search_btn",
        fahrenheitBtn: "fahrenheit_btn",
        celsius: "celsius_btn",
    };

    return { weatherInfoElements, weatherDays, inputElements }
}
;// CONCATENATED MODULE: ./src/DOM/getDOMElements.js
function getDOMElements(items) {
    const elements = {};
    for (const [key, value] of Object.entries(items)) {
        elements[key] = document.querySelector(`#${value}`);
    };
    return elements;
}
;// CONCATENATED MODULE: ./src/Weather Data/getWeatherInfo.js


async function getWeatherInfo(userLocation, newDataRequest) {
    try {

        if (!newDataRequest && weatherStoredData) {
            return {
                success: true,
                data: weatherStoredData,
            };
        }
        
        if (!weatherStoredData || newDataRequest) {
            // const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${userLocation}?key=XDRLGMWDKUYLW6BM4HGMJM8RS`);
            const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${userLocation}?key=EWDMM28Z85VSJSSNBJ4PRYFAG`);
            
            if (!response.ok) {
                throw new Error(`HTTP Request Error: ${response.status}`);
            }

            weatherStoredData = await response.json();
        }
        
        const { 
            days: weatherDays,
            description: weatherDescription,
            resolvedAddress: weatherAddress,
            currentConditions: weatherCurrentConditions,
        } = weatherStoredData;

        return {
            success: true,
            data: { 
                weatherDays, 
                weatherDescription, 
                weatherAddress,
                weatherCurrentConditions 
            },
        };
    } catch (error) {
        return {
            success: false,
            error: error.message,
        };
    }
}
;// CONCATENATED MODULE: ./src/DOM/getDayDOMElement.js
function getDayDOMElement(list) {
    const elements = {};
    for (const [mainKey, mainValue] of Object.entries(list)) {
        if (mainValue === "current_day") {
            elements[mainKey] = document.querySelector(`#${mainValue}`);
        } else {
            elements[mainKey] = mainValue;
            for (const [subKey, subValue] of Object.entries(mainValue)) {
                mainValue[subKey] = document.querySelector(`#${subValue}`);
            }
        }
    }
    return elements;
}
;// CONCATENATED MODULE: ./src/Weather Data/changeTemperatureScale.js
function changeTemperatureScale(temperatureScale, value) {

    // Data is received in fahrenheit.
    const fahrenheit = value;
    const celsius = (fahrenheit - 32) * 5/9;
    let newValue = 0;

    switch (temperatureScale) {
        case 'Celsius':
            newValue = `${parseInt(celsius)} °C`;
        break;
        case 'Fahrenheit':
            newValue = `${parseInt(fahrenheit)} °F`;
        break
    }
    return newValue;
}
;// CONCATENATED MODULE: ./src/DOM/updateDayDOMElementInfo.js




function updateDayDOMElementInfo(day, index, temperatureScale) {
    
    const DOMDaysList = getDayDOMElement(DOMElements().weatherDays);
    const dayIndex = `day${index}`;
    const DOMDay = DOMDaysList[dayIndex];
    
    // Date will show 1 day before the one requested if "Hyphens" are used, if a "/" is used it works.
    const date = new Date(day.datetime.replace(/-/g, '\/'));
    const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    if (DOMDay) {
        DOMDay.title.textContent = weekDays[date.getDay()];
        DOMDay.min.textContent = `Min: ${changeTemperatureScale(temperatureScale, day.tempmin)}`;
        DOMDay.max.textContent = `Max: ${changeTemperatureScale(temperatureScale, day.tempmax)}`;
    }

    if (index == 0) {
        DOMDaysList['currentDay'].textContent = day.datetime;
    }
}
;// CONCATENATED MODULE: ./src/Weather Data/weatherDaysHandler.js


function weatherDaysHandler(data, temperatureScale) {

    // Extract only the first 7 days
    const days = data.weatherDays.slice(0, 7).map(({ datetime, tempmin, tempmax }) => ({
        datetime,
        tempmin,
        tempmax,
    }));

    days.forEach((day, index) => {
        updateDayDOMElementInfo(day, index, temperatureScale);
    });
}
;// CONCATENATED MODULE: ./src/DOM/updateDOMElementInfo.js


function updateDOMElementInfo(DOMElement, item, data, temperatureScale) {
    for (const [elementKey, dataKey] of Object.entries(item)) {
        const [mainKey, subKey] = dataKey.split('.');
        if (subKey) {
            if (checkWeatherValue(elementKey)) {
                DOMElement[elementKey].textContent = changeTemperatureScale(temperatureScale, data[mainKey][subKey]);
            } else if (addPercentageSymbol(elementKey)) {
                DOMElement[elementKey].textContent = `${data[mainKey][subKey]}%`;
            } else {
                DOMElement[elementKey].textContent = `${data[mainKey][subKey]}`;
            }
        } else {
            DOMElement[elementKey].textContent = data[mainKey];
        }
    }
}

function checkWeatherValue(value) {
    if (value == 'currentWeather' || value == 'feelsLike') {
        return true
    }
    return false
}

function addPercentageSymbol(value) {
    if (value == 'humidity' || value == 'chanceOfRain') {
        return true
    }
    return false
}
;// CONCATENATED MODULE: ./src/Weather Data/weatherInfoRequested.js


function weatherInfoRequested(DOMelement, data, temperatureScale) {

    const [city, country] = data.weatherAddress.split(',').map(info => info.trim());

    DOMelement.cityName.textContent = city;
    DOMelement.countryName.textContent = country;

    const dataMapping = {
        currentTime: 'weatherCurrentConditions.datetime',
        currentWeather: 'weatherCurrentConditions.temp',
        currentDescription: 'weatherDescription',
        feelsLike: 'weatherCurrentConditions.feelslike',
        humidity: 'weatherCurrentConditions.humidity',
        windSpeed: 'weatherCurrentConditions.windspeed',
        // chanceOfRain: 'chanceOfRain',
    };

    updateDOMElementInfo(DOMelement, dataMapping, data, temperatureScale);
}
;// CONCATENATED MODULE: ./src/Weather Data/requestData.js





function requestData(inputValue, element, temperatureScale, newDataRequest) {
    
    if (newDataRequest) {
        startRequest(inputValue, element, temperatureScale, newDataRequest);
    } else {
        inputValue = 'San Jose, CR';
        startRequest(inputValue, element, temperatureScale, newDataRequest);
    }
}

async function startRequest(inputValue, element, temperatureScale, newDataRequest) {
    const weatherData = await getWeatherInfo(inputValue, newDataRequest);

    if (weatherData.success) {
        // data will use the latest "City" stored.
        weatherStoredData = weatherData.data;

        weatherInfoRequested(element, weatherStoredData, temperatureScale);
        weatherDaysHandler(weatherStoredData, temperatureScale);
    } else {
        console.error(weatherData.error);
    }
}
;// CONCATENATED MODULE: ./src/DOM/displayWeather.js




function displayWeather(temperatureScale, newDataRequest) {

    const weatherDOMElements = DOMElements();

    const weatherElements = getDOMElements(weatherDOMElements.weatherInfoElements);
    const weatherInputs = getDOMElements(weatherDOMElements.inputElements);
    const userInput = weatherInputs.mainSearchBar;

    weatherInputs.searchBtn.addEventListener('click', () => {
        newDataRequest = true;
        requestData(userInput.value, weatherElements, temperatureScale, newDataRequest);
        newDataRequest = false;
    });

    weatherInputs.mainSearchBar.addEventListener('keydown', (event) => {
        if (event.key === "Enter") {
            newDataRequest = true;
            requestData(userInput.value, weatherElements, temperatureScale, newDataRequest);
            newDataRequest = false;
        }
    })

    weatherInputs.celsius.addEventListener('click', () => {
        temperatureScale = 'Celsius';
        weatherInputs.celsius.classList.toggle("active_temp")
        weatherInputs.fahrenheitBtn.classList.toggle("active_temp")
        requestData(userInput.value, weatherElements, temperatureScale, newDataRequest);
    });

    weatherInputs.fahrenheitBtn.addEventListener('click', () => {
        temperatureScale = 'Fahrenheit';
        weatherInputs.celsius.classList.toggle("active_temp")
        weatherInputs.fahrenheitBtn.classList.toggle("active_temp")
        requestData(userInput.value, weatherElements, temperatureScale, newDataRequest);
    });
}
;// CONCATENATED MODULE: ./src/DOM/DOMLoad.js




function DOMLoad(temperatureScale, newDataRequest) {
    document.addEventListener('DOMContentLoaded', () => {
        newDataRequest = true;

        const weatherDOMElements = DOMElements();
        const weatherElements = getDOMElements(weatherDOMElements.weatherInfoElements);

        requestData('San Jose, CR', weatherElements, temperatureScale, newDataRequest);
    })
}
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(72);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(825);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(659);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(56);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(540);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(113);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/style.css
var style = __webpack_require__(24);
;// CONCATENATED MODULE: ./src/style.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(style/* default */.A, options);




       /* harmony default export */ const src_style = (style/* default */.A && style/* default */.A.locals ? style/* default */.A.locals : undefined);

;// CONCATENATED MODULE: ./src/index.js
// JS Files



// CSS


// JS
let temperatureScale = 'Celsius';
let newDataRequest = false;
let weatherStoredData;

const weather = displayWeather(temperatureScale, newDataRequest);

const reloadDOM = DOMLoad(temperatureScale, newDataRequest);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__(553));
/******/ }
]);
//# sourceMappingURL=app.bundle.js.map