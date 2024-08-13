"use strict";
(self["webpackChunkweather_app"] = self["webpackChunkweather_app"] || []).push([[524],{

/***/ 543:
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

/***/ 779:
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
        currentDayIcon: "current_day_icon",
        day0: {
            title: "day0",
            min: "day0_min",
            max: "day0_max",
            icon: "day0_icon",
        },
        day1: {
            title: "day1",
            min: "day1_min",
            max: "day1_max",
            icon: "day1_icon",
        },
        day2: {
            title: "day2",
            min: "day2_min",
            max: "day2_max",
            icon: "day2_icon",
        },
        day3: {
            title: "day3",
            min: "day3_min",
            max: "day3_max",
            icon: "day3_icon",
        },
        day4: {
            title: "day4",
            min: "day4_min",
            max: "day4_max",
            icon: "day4_icon",
        },
        day5: {
            title: "day5",
            min: "day5_min",
            max: "day5_max",
            icon: "day5_icon",
        },
        day6: {
            title: "day6",
            min: "day6_min",
            max: "day6_max",
            icon: "day6_icon",
        },
    }

    const inputElements = {
        mainSearchBar: "main_search_bar",
        searchBtn: "main_search_btn",
        fahrenheitBtn: "fahrenheit_btn",
        celsiusBtn: "celsius_btn",
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
            const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${userLocation}?key=XDRLGMWDKUYLW6BM4HGMJM8RS`);
            // const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${userLocation}?key=EWDMM28Z85VSJSSNBJ4PRYFAG`);
            
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
        if (mainValue === "current_day" || mainValue === "current_day_icon") {
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
;// CONCATENATED MODULE: ./src/DOM/assignIcons.js
function assignIcons(icon, iconClass) {

    const icons = {
        "clear-day": `<path class="cls-1" d="M67.77,27.58c-.16-1-.56-1-1.29-.84-2.08.37-4.17.68-6.24,1.1a2.07,2.07,0,0,1-.4,0,26.14,26.14,0,0,0-4.63-9.62,27.84,27.84,0,0,0-2.45-2.73,1.49,1.49,0,0,1,.31-.49c1-1.07,1.89-2.21,2.83-3.33s1.48-1.77,1.42-2.31-.65-1-1.85-2c-.59-.49-.89-.46-1.36.12-1.3,1.6-2.69,3.14-4,4.75a1.54,1.54,0,0,1-.65.54A26.53,26.53,0,0,0,36.11,8c.08-1.68,0-3.36,0-5,0-2.95,0-2.91-3-2.91-.8,0-1.07.19-1,1,.06,2.12,0,4.24,0,6.36a2.21,2.21,0,0,1,0,.54,26.5,26.5,0,0,0-13.48,4.87,1.94,1.94,0,0,1-.33-.32c-.88-1.11-1.8-2.18-2.71-3.26-.66-.76-1.27-2-2-2.13S12,8.26,11.1,8.85c-.58.4-.52.73-.1,1.22,1.42,1.63,2.78,3.31,4.2,4.95a4.23,4.23,0,0,1,.32.42C15,16,14.46,16.47,14,17A26.16,26.16,0,0,0,8.34,27.86l-.42,0c-1.34-.19-2.67-.51-4-.73C.51,26.57.63,26.39.05,29.48c-.19,1,.2,1.11.92,1.23,2.09.34,4.16.75,6.25,1.05a1.77,1.77,0,0,1,.42.12A26.72,26.72,0,0,0,10.13,46a1.51,1.51,0,0,1-.35.24c-1.32.7-2.59,1.49-3.89,2.24C3.24,50,3.27,50,4.86,52.65c.39.66.68.73,1.31.35,1.77-1.08,3.59-2.06,5.35-3.15a1.67,1.67,0,0,1,.71-.27c.24.34.47.7.73,1a26.58,26.58,0,0,0,9.82,7.88,1.72,1.72,0,0,1-.13.46c-.92,2.18-1.58,4.47-2.58,6.61,3.43,1.75,3.72,2,4.15.76.67-2,1.48-3.87,2.13-5.84a2.06,2.06,0,0,1,.28-.54,26.65,26.65,0,0,0,14.42.14c.48,1.56,1.06,3.1,1.6,4.64,1,2.77,1,2.74,3.79,1.74.75-.27.94-.54.64-1.32-.77-2-1.43-4-2.16-6-.05-.14-.09-.26-.12-.38a26.74,26.74,0,0,0,9.41-6.95A23.66,23.66,0,0,0,56,49.57a1.38,1.38,0,0,1,.31.17c1.2.74,2.43,1.44,3.65,2.15.88.5,1.88,1.5,2.62,1.34s1.11-1.66,1.72-2.5c.42-.57.26-.86-.31-1.18-1.88-1.07-3.73-2.2-5.61-3.26L58,46.11a26.84,26.84,0,0,0,2.53-14.22,2.26,2.26,0,0,1,.37-.11c1.33-.27,2.69-.41,4-.66C68.31,30.49,68.25,30.69,67.77,27.58Zm-24,26.58c-8.27,3.73-15.94,3.05-22.92-2l-1.65-1.25a10.32,10.32,0,0,1-1-.92,22.13,22.13,0,0,1-5.45-9.73c-2.61-9.33,1.54-20,9.44-24.42a18,18,0,0,1,9.34-3.33q9.07-.74,15.37,3.81c.35.26.69.52,1,.8s.43.34.64.53c.54.48,1.06,1,1.57,1.56l.47.52c.51.59,1,1.21,1.48,1.87.16.22.3.45.46.67,5.22,7.88,4.71,18.91-1.12,25.61A18,18,0,0,1,43.81,54.16Z"/>`,
        "clear-night": `<path class="cls-1" d="M39.27,8.15Q33,3.62,23.9,4.34c-3.24.27-9.45,3.38-9.67,3.51-7.69,4.55-11.69,15-9.12,24.23a25.4,25.4,0,0,0,.8,2.42,21.46,21.46,0,0,0,5.53,8L39.56,8.38Z"/><path class="cls-2" d="M43.8,6.34c-.25-.22-.51-.43-.77-.64s-.51-.4-.77-.59l-.46-.36A25.7,25.7,0,0,0,23.41.19a25.66,25.66,0,0,0-11.56,4.2c-9.15,5.61-14,18-10.93,29a28.26,28.26,0,0,0,3.63,8.06h0c.24.35.47.71.73,1.05A27.32,27.32,0,0,0,8.54,46h0c.29.26.59.5.9.73l1.24,1c.49.36,1,.68,1.49,1L15,45.16,42.87,11.44,45.6,8.13C45,7.5,44.42,6.9,43.8,6.34ZM11.44,42.45a21.46,21.46,0,0,1-5.53-8,25.4,25.4,0,0,1-.8-2.42C2.54,22.89,6.54,12.4,14.23,7.85a22.47,22.47,0,0,1,25,.3l.29.23Z"/>`,
        "partly-cloudy-night": `<path class="cls-1" d="M39.33,14.28Q33,9.75,24,10.47c-3.24.26-9.45,3.38-9.66,3.51C6.6,18.53,2.6,29,5.17,38.21c.24.84.5,1.64.8,2.41a21.44,21.44,0,0,0,5.54,8L39.63,14.51Z"/><path class="cls-2" d="M18.37,52.82a15.06,15.06,0,0,1,3.21-7.63,13.31,13.31,0,0,1,8.11-4.63c.64-.11,1-.26,1.15-.91A27,27,0,0,1,39,26.14l3.55-2.68a27.47,27.47,0,0,1,12.09-3.91c10-.6,18,3.19,24,11.18a2.49,2.49,0,0,0,2.17,1.13A17.88,17.88,0,0,1,97.43,45.65a3.06,3.06,0,0,0,1.08,1.77c4.33,3.83,5.11,10.35,1.75,14.56A9.77,9.77,0,0,1,94,65.48c-1,.18-1.53-.07-1.34-1.2a3.29,3.29,0,0,0,0-.76c-.13-1.29.17-2.11,1.74-2.12a3.59,3.59,0,0,0,2.22-1.15A6.25,6.25,0,0,0,96.44,51a11.28,11.28,0,0,1-3.15-5.55,12.83,12.83,0,0,0-9.08-9h0a.41.41,0,0,0-.53-.21c-5.13-1.72-11.94.54-14.83,4.94a10.11,10.11,0,0,1,6,6.66c.74,2.66.75,2.66-2,2.66a2.78,2.78,0,0,0-.5,0c-.79.15-1-.25-1.1-1a6,6,0,0,0-5.63-5.14,6.32,6.32,0,0,0-6.12,4.13c-.24.65.11,1.61-.58,1.91a6.13,6.13,0,0,1-2.15.07.56.56,0,0,0-.13,0c-1.3.29-1.34-.46-1.22-1.42a10,10,0,0,1,7.88-8.31c.56-.11,1.16-.08,1.54-.7a18.33,18.33,0,0,1,8-6.87,12.68,12.68,0,0,1,1.68-.55c.67-.13.63-.37.27-.81A21.23,21.23,0,0,0,65.06,25h0a.42.42,0,0,0-.53-.22A21.55,21.55,0,0,0,53,23.65,22.91,22.91,0,0,0,34.18,42.59c-.19,1.25-.5,1.8-2,1.72a8.85,8.85,0,0,0-8.6,4.82,8.92,8.92,0,0,0,.1,9.51c1.16,2.31,3.18,3,5.58,3h49.9c1.93,0,1.93,0,2,1.86-.11,2-.11,2-2.15,2-16.33,0-32.67-.16-49,.07-8.33.12-11.46-6.17-11.65-11.63C18.37,53.58,18.37,53.2,18.37,52.82Z"/><path class="cls-3" d="M84.93,63.54c.11-1.87.11-1.87,2-1.87a2.9,2.9,0,0,0,.51,0c1.12-.21,1.56.24,1.35,1.36a2.15,2.15,0,0,0,0,.5c-.11,2-.11,2-1.83,2C85,65.52,85,65.52,84.93,63.54Z"/><path class="cls-4" d="M11.44,42.45a21.46,21.46,0,0,1-5.53-8,25.4,25.4,0,0,1-.8-2.42C2.54,22.89,6.54,12.4,14.23,7.85a22.47,22.47,0,0,1,25,.3l.29.23s3,2.14,3.52,2.68a.3.3,0,0,1,0,.08l2.48-3C45,7.5,44.42,6.9,43.8,6.34c-.25-.22-.51-.43-.77-.64s-.51-.4-.77-.59l-.46-.36A25.7,25.7,0,0,0,23.41.19a25.66,25.66,0,0,0-11.56,4.2c-9.15,5.61-14,18-10.93,29a28.26,28.26,0,0,0,3.63,8.06h0c.24.35.47.71.73,1.05A27.32,27.32,0,0,0,8.54,46h0c.29.26.59.5.9.73l1.24,1c.49.36,1,.68,1.49,1L15,45.16,27.26,30.35l-3.55-2.76Z"/><polygon class="cls-4" points="37.24 11.19 33.96 15.17 37.45 18.01 40.75 14.01 37.24 11.19"/>`,
        "partly-cloudy-day": `<path class="cls-1" d="M31.27,56.19a15,15,0,0,1,3.21-7.62,13.32,13.32,0,0,1,8.11-4.64c.64-.11,1-.26,1.15-.91a27,27,0,0,1,8.2-13.51l3.55-2.68a27.51,27.51,0,0,1,12.09-3.91c10-.6,18,3.2,24,11.18a2.5,2.5,0,0,0,2.17,1.13A17.87,17.87,0,0,1,110.33,49a3.11,3.11,0,0,0,1.08,1.77c4.33,3.83,5.12,10.35,1.76,14.56a9.82,9.82,0,0,1-6.3,3.5c-1.05.18-1.52-.07-1.34-1.19a3.35,3.35,0,0,0,0-.77c-.13-1.28.17-2.11,1.74-2.12a3.68,3.68,0,0,0,2.23-1.14,6.27,6.27,0,0,0-.12-9.29,11.28,11.28,0,0,1-3.15-5.55,12.83,12.83,0,0,0-9.07-9h0a.41.41,0,0,0-.53-.21c-5.13-1.72-11.94.54-14.83,4.94a10.11,10.11,0,0,1,6,6.66c.74,2.66.75,2.66-2,2.66a2.9,2.9,0,0,0-.51,0c-.79.15-1-.25-1.1-1a6,6,0,0,0-5.63-5.14,6.33,6.33,0,0,0-6.12,4.13c-.23.65.11,1.61-.58,1.91a6.12,6.12,0,0,1-2.15.07H69.5c-1.3.29-1.34-.46-1.23-1.42a10,10,0,0,1,7.88-8.31c.56-.11,1.16-.08,1.54-.7a18.3,18.3,0,0,1,8-6.87A12.55,12.55,0,0,1,87.34,36c.68-.13.64-.37.27-.81A21.25,21.25,0,0,0,78,28.32h0a.43.43,0,0,0-.54-.22A21.44,21.44,0,0,0,65.94,27,22.89,22.89,0,0,0,47.08,46c-.19,1.25-.5,1.8-2,1.72a8.88,8.88,0,0,0-8.61,4.82,9,9,0,0,0,.1,9.51c1.16,2.31,3.18,3,5.58,3h49.9c1.93,0,1.93,0,2,1.87-.11,2-.11,2-2.15,2-16.33,0-32.67-.16-49,.07-8.33.12-11.46-6.17-11.65-11.62C31.28,57,31.28,56.57,31.27,56.19Z"/><path class="cls-2" d="M97.83,66.91c.11-1.87.11-1.87,2-1.87a2.9,2.9,0,0,0,.51,0c1.12-.21,1.56.24,1.35,1.36a2.11,2.11,0,0,0,0,.5c-.11,2-.11,2-1.83,2C97.92,68.89,97.92,68.89,97.83,66.91Z"/><path class="cls-3" d="M55,20.91a24,24,0,0,0-3.79-5.1c-.49-.49-.55-.79-.06-1.32.94-1,1.82-2.14,2.72-3.21C55.74,9,55.71,9,53.43,7.12c-.65-.54-.9-.41-1.36.17-1.25,1.57-2.6,3.05-3.83,4.62-.52.65-.86.66-1.53.21a23.42,23.42,0,0,0-11-4c-.71-.06-.93-.32-.9-1,0-1.45,0-2.89,0-4.34C34.82,0,34.82,0,32,0c-.77,0-1,.18-1,1,.06,2,0,4.09,0,6.13,0,.57,0,1-.76,1a23.64,23.64,0,0,0-11.34,4.1c-.58.39-.87.24-1.25-.24-.84-1.06-1.73-2.09-2.61-3.13-.63-.74-1.22-2-1.95-2.06S11.52,8,10.69,8.52c-.56.39-.5.7-.09,1.17,1.36,1.58,2.67,3.2,4,4.77.41.48.57.76,0,1.32A23.9,23.9,0,0,0,8.71,26c-.2.73-.53.92-1.25.77-1.41-.29-2.83-.53-4.25-.76C.5,25.57.57,25.59,0,28.39c-.17.95.2,1.07.9,1.18,2,.33,4,.72,6,1,.67.1.82.33.77,1A23.7,23.7,0,0,0,9.79,43.34c.26.58.22.86-.37,1.17-1.27.68-2.5,1.43-3.75,2.16-2.55,1.47-2.52,1.46-1,4,.37.63.65.71,1.27.33,1.7-1,3.45-2,5.15-3,.68-.42,1.05-.46,1.59.29a24.44,24.44,0,0,0,7.2,6.57c.81.51,2.17.63,2.34,1.51s-1,3.2-1.11,3.35c-.28.61,3.4,1.77,3.5,1.73.47-.16.78-2,1.18-3.06a1.83,1.83,0,0,0,.08-.25c.08-.32.24-.58.61-.48.63.16.67-.27.78-.69s.27-.88.41-1.32a1.62,1.62,0,0,1,0-.63c.46-.91-.06-1.13-.81-1.37-7.54-2.36-12.51-7.33-14.64-14.93-2.5-9,1.55-19.15,9.16-23.43A17.27,17.27,0,0,1,30.36,12c9.63-.78,16.87,3.07,21.57,11.56.29.54.54.81,1.15.42a7.44,7.44,0,0,1,1.16-.48C55.92,22.62,55.92,22.62,55,20.91Z"/>`,
        cloudy: `<path class="cls-1" d="M0,31.1A14,14,0,0,1,3,24a12.39,12.39,0,0,1,7.57-4.33c.59-.1.92-.24,1.06-.85a25.25,25.25,0,0,1,7.66-12.6l3.31-2.5A25.59,25.59,0,0,1,33.88.06C43.24-.5,50.69,3,56.31,10.49a2.31,2.31,0,0,0,2,1A16.67,16.67,0,0,1,73.77,24.41a2.85,2.85,0,0,0,1,1.65c4,3.58,4.77,9.66,1.64,13.59a9.23,9.23,0,0,1-5.88,3.27c-1,.17-1.42-.07-1.25-1.12a3.41,3.41,0,0,0,0-.71c-.12-1.2.16-2,1.62-2A3.48,3.48,0,0,0,73,38a5.84,5.84,0,0,0-.11-8.66,10.52,10.52,0,0,1-2.94-5.18,12,12,0,0,0-8.47-8.38h0a.4.4,0,0,0-.5-.19c-4.78-1.6-11.14.51-13.84,4.62a9.38,9.38,0,0,1,5.56,6.21c.69,2.48.7,2.48-1.87,2.48a2.46,2.46,0,0,0-.47,0c-.74.14-.92-.24-1-.9A5.61,5.61,0,0,0,44,23.23a5.91,5.91,0,0,0-5.71,3.85c-.22.61.1,1.5-.54,1.78a5.53,5.53,0,0,1-2,.07h-.12c-1.21.27-1.25-.43-1.14-1.33a9.34,9.34,0,0,1,7.35-7.75c.52-.1,1.08-.07,1.44-.65a17,17,0,0,1,7.44-6.41,12.41,12.41,0,0,1,1.56-.52c.63-.12.59-.35.25-.76a19.89,19.89,0,0,0-9-6.41h0c-.1-.22-.29-.24-.5-.21a20.09,20.09,0,0,0-10.72-1,21.39,21.39,0,0,0-17.6,17.67c-.17,1.16-.46,1.67-1.87,1.6a8.28,8.28,0,0,0-8,4.5A8.33,8.33,0,0,0,5,36.54c1.07,2.15,3,2.81,5.2,2.81H56.71c1.81,0,1.81,0,1.91,1.74-.11,1.87-.11,1.87-2,1.87-15.24,0-30.48-.16-45.72.06C3.11,43.13.19,37.26,0,32.17,0,31.82,0,31.46,0,31.1Z"/><path class="cls-2" d="M62.11,41.1c.1-1.74.1-1.74,1.88-1.74a2.57,2.57,0,0,0,.48,0c1-.19,1.45.22,1.26,1.27a1.52,1.52,0,0,0,0,.47C65.67,43,65.67,43,64.06,43,62.19,43,62.19,43,62.11,41.1Z"/>`,
        wind: `<path d="M42.3,52.79a1.66,1.66,0,0,1,1.75-1c2.65,0,5.3,0,8,0a1.39,1.39,0,1,1,0,2.76c-2.65,0-5.3,0-8,0a1.67,1.67,0,0,1-1.75-1Z"/><path d="M42.3,47.27a1.67,1.67,0,0,1,1.75-1c1.44,0,2.88,0,4.32,0a1.38,1.38,0,1,1,0,2.75c-1.43,0-2.85,0-4.27,0a1.68,1.68,0,0,1-1.8-1Z"/><path d="M67.07,49c-4.34,0-8.68,0-13,0a1.38,1.38,0,0,1-.43-2.71,2.76,2.76,0,0,1,.64,0q12.52,0,25,0a7.34,7.34,0,0,0,6.32-3.15,5.85,5.85,0,0,0-1.27-8,4.46,4.46,0,0,0-5.76.49,3.29,3.29,0,0,0,0,4.57,2.36,2.36,0,0,0,3.35.1,1.39,1.39,0,1,1,1.9,2,5.15,5.15,0,0,1-7.72-.76,6.15,6.15,0,0,1,2.28-9.19,7.36,7.36,0,0,1,10,3.33A8.8,8.8,0,0,1,85,47.44,10.27,10.27,0,0,1,79.5,49Z"/><path d="M62.48,51.78c1.52,0,3,0,4.56,0A9.89,9.89,0,0,1,76.3,59a8.52,8.52,0,0,1-4.46,9.69,7.11,7.11,0,0,1-9.43-3.54,5.88,5.88,0,0,1,3.39-7.76A4.93,4.93,0,0,1,71,58.55a1.39,1.39,0,0,1,.08,2,1.35,1.35,0,0,1-1.91.1,2.49,2.49,0,0,0-3-.43,3.29,3.29,0,0,0-1.41,3.06,3.92,3.92,0,0,0,3.3,3.19,4.84,4.84,0,0,0,5.42-3.66,6.07,6.07,0,0,0-3-7.12,7.8,7.8,0,0,0-4.07-1.1H57.7a1.37,1.37,0,0,1-.41-2.7,1.94,1.94,0,0,1,.54,0Z"/><path class="cls-1" d="M0,29.39a13.17,13.17,0,0,1,2.83-6.72A11.73,11.73,0,0,1,10,18.58c.56-.09.87-.23,1-.8A23.8,23.8,0,0,1,18.23,5.87L21.36,3.5A24.43,24.43,0,0,1,32,.05c8.84-.53,15.89,2.82,21.19,9.86a2.17,2.17,0,0,0,1.91,1,15.78,15.78,0,0,1,14.6,12.16,2.65,2.65,0,0,0,1,1.56c3.82,3.38,4.51,9.13,1.55,12.84a8.71,8.71,0,0,1-5.56,3.09c-.92.16-1.34-.07-1.18-1.06a3.06,3.06,0,0,0,0-.67C65.33,37.7,65.6,37,67,37a3.25,3.25,0,0,0,2-1,5.52,5.52,0,0,0-.1-8.19,10,10,0,0,1-2.78-4.89,11.29,11.29,0,0,0-8-7.92h0a.37.37,0,0,0-.47-.19c-4.52-1.51-10.53.48-13.08,4.36A8.91,8.91,0,0,1,49.77,25c.65,2.35.66,2.35-1.77,2.35a2.26,2.26,0,0,0-.45,0c-.69.13-.87-.22-1-.85a5.32,5.32,0,0,0-5-4.54,5.56,5.56,0,0,0-5.39,3.64c-.21.57.09,1.42-.52,1.68a5.14,5.14,0,0,1-1.89.07.4.4,0,0,0-.11,0c-1.15.26-1.18-.41-1.08-1.25a8.84,8.84,0,0,1,6.95-7.33c.49-.1,1-.07,1.36-.62a16,16,0,0,1,7-6.05,11.52,11.52,0,0,1,1.47-.49c.6-.12.56-.33.24-.72a18.66,18.66,0,0,0-8.5-6.06h0a.4.4,0,0,0-.48-.2,18.91,18.91,0,0,0-10.13-.94A20.2,20.2,0,0,0,13.94,20.37c-.16,1.1-.44,1.59-1.77,1.52a7.84,7.84,0,0,0-7.59,4.25,7.89,7.89,0,0,0,.1,8.39c1,2,2.79,2.66,4.91,2.66h44c1.7,0,1.7,0,1.79,1.64-.09,1.76-.09,1.76-1.89,1.76-14.4,0-28.81-.14-43.21.07C2.94,40.76.18,35.22,0,30.4,0,30.07,0,29.73,0,29.39Z"/><path class="cls-2" d="M58.69,38.85c.1-1.66.1-1.66,1.78-1.66a2.26,2.26,0,0,0,.45,0c1-.18,1.38.21,1.2,1.2a1.66,1.66,0,0,0,0,.44c-.09,1.77-.09,1.77-1.61,1.77C58.77,40.6,58.77,40.6,58.69,38.85Z"/>`,
        fog: `<path id="XMLID_4_" class="st0" d="M35.3,24.8c0,0,25,13.7,55.7,1.7s50.3-0.4,54.6,2.1"/><path id="XMLID_3_" class="st0" d="M35.3,38c0,0,25,13.7,55.7,1.7s50.3-0.4,54.6,2.1"/><path id="XMLID_2_" class="st0" d="M34.3,51.2c0,0,25,13.7,55.7,1.7s50.3-0.4,54.6,2.1"/><path id="XMLID_1_" class="st0" d="M35.3,11.6c0,0,25,13.7,55.7,1.7s50.3-0.4,54.6,2.1"/>`,
        rain: `<path d="M63.46,48.41a1.89,1.89,0,0,1,.11,2.64h0c-1.62,1.66-3.27,3.3-4.92,4.93a1.7,1.7,0,0,1-2.53.13,1.67,1.67,0,0,1,.09-2.47c1.66-1.7,3.35-3.38,5-5a1.53,1.53,0,0,1,2-.38Z"/><path d="M43.23,48.51A1.81,1.81,0,0,1,43.32,51h0q-2.49,2.55-5,5.05a1.69,1.69,0,1,1-2.41-2.37c1.68-1.72,3.39-3.41,5.1-5.1a1.5,1.5,0,0,1,1.91-.35A2,2,0,0,1,43.23,48.51Z"/><path d="M14.87,54.84a5.15,5.15,0,0,1,.63-1.13q2.52-2.6,5.1-5.11a1.67,1.67,0,0,1,2.47-.06A1.65,1.65,0,0,1,23,51c-1.66,1.7-3.35,3.37-5,5a1.64,1.64,0,0,1-2,.4A1.86,1.86,0,0,1,14.87,54.84Z"/><path d="M63.46,59.49a1.89,1.89,0,0,1,.11,2.64h0c-1.62,1.66-3.27,3.3-4.92,4.93a1.7,1.7,0,0,1-2.53.13,1.67,1.67,0,0,1,.09-2.47c1.66-1.7,3.35-3.38,5-5.05a1.53,1.53,0,0,1,2-.38Z"/><path d="M43.23,59.59a1.81,1.81,0,0,1,.09,2.46h0q-2.49,2.55-5,5a1.69,1.69,0,1,1-2.41-2.37c1.68-1.72,3.39-3.41,5.1-5.1a1.5,1.5,0,0,1,1.91-.35A2,2,0,0,1,43.23,59.59Z"/><path d="M14.87,65.92a5.15,5.15,0,0,1,.63-1.13q2.52-2.6,5.1-5.11A1.69,1.69,0,1,1,23,62.08c-1.66,1.7-3.35,3.37-5,5a1.64,1.64,0,0,1-2,.4A1.86,1.86,0,0,1,14.87,65.92Z"/><path class="cls-1" d="M0,31.1A14,14,0,0,1,3,24a12.39,12.39,0,0,1,7.57-4.33c.59-.1.92-.24,1.06-.85a25.25,25.25,0,0,1,7.66-12.6l3.31-2.5A25.59,25.59,0,0,1,33.88.06C43.24-.5,50.69,3,56.31,10.49a2.31,2.31,0,0,0,2,1A16.67,16.67,0,0,1,73.77,24.41a2.85,2.85,0,0,0,1,1.65c4,3.58,4.77,9.66,1.64,13.59a9.23,9.23,0,0,1-5.88,3.27c-1,.17-1.42-.07-1.25-1.12a3.41,3.41,0,0,0,0-.71c-.12-1.2.16-2,1.62-2A3.48,3.48,0,0,0,73,38a5.84,5.84,0,0,0-.11-8.66,10.52,10.52,0,0,1-2.94-5.18,12,12,0,0,0-8.47-8.38h0a.4.4,0,0,0-.5-.19c-4.78-1.6-11.14.51-13.84,4.62a9.38,9.38,0,0,1,5.56,6.21c.69,2.48.7,2.48-1.87,2.48a2.46,2.46,0,0,0-.47,0c-.74.14-.92-.24-1-.9A5.61,5.61,0,0,0,44,23.23a5.91,5.91,0,0,0-5.71,3.85c-.22.61.1,1.5-.54,1.78a5.53,5.53,0,0,1-2,.07h-.12c-1.21.27-1.25-.43-1.14-1.33a9.34,9.34,0,0,1,7.35-7.75c.52-.1,1.08-.07,1.44-.65a17,17,0,0,1,7.44-6.41,12.41,12.41,0,0,1,1.56-.52c.63-.12.59-.35.25-.76a19.89,19.89,0,0,0-9-6.41h0c-.1-.22-.29-.24-.5-.21a20.09,20.09,0,0,0-10.72-1,21.39,21.39,0,0,0-17.6,17.67c-.17,1.16-.46,1.67-1.87,1.6a8.28,8.28,0,0,0-8,4.5A8.33,8.33,0,0,0,5,36.54c1.07,2.15,3,2.81,5.2,2.81H56.71c1.81,0,1.81,0,1.91,1.74-.11,1.87-.11,1.87-2,1.87-15.24,0-30.48-.16-45.72.06C3.11,43.13.19,37.26,0,32.17,0,31.82,0,31.46,0,31.1Z"/><path class="cls-2" d="M62.11,41.1c.1-1.74.1-1.74,1.88-1.74a2.57,2.57,0,0,0,.48,0c1-.19,1.45.22,1.26,1.27a1.52,1.52,0,0,0,0,.47C65.67,43,65.67,43,64.06,43,62.19,43,62.19,43,62.11,41.1Z"/>`,
        snow: `<path d="M20.93,55.35,22.67,57l-1.2,1.1c-.61-.62-1.33-1.26-1.94-2a2.23,2.23,0,0,0-2.22-.91,6.23,6.23,0,0,1-.75,0c0,.66,0,1.28,0,1.9a.69.69,0,0,0,.24.39c.88.89,1.77,1.77,2.68,2.67l-1.15,1.08-1.63-1.7-.14.07V62.3H15V59.63l-.12-.05-1.64,1.78-1.16-1.22c.71-.71,1.41-1.48,2.19-2.16a1.87,1.87,0,0,0,.73-1.8,7.88,7.88,0,0,1,0-1c-.65,0-1.25,0-1.86,0a.75.75,0,0,0-.44.26c-.89.87-1.77,1.76-2.66,2.66L8.86,57l1.77-1.64-.06-.1H7.89V53.64h2.79L8.79,51.93,10,50.69c.87.87,1.74,1.73,2.59,2.6a1,1,0,0,0,.82.34c.49,0,1,0,1.56,0,0-.66,0-1.31,0-2,0-.12-.15-.24-.25-.35l-2.65-2.63,1.16-1.2L15,49.35V46.53h1.59v2.81l1.76-1.88,1.25,1.28c-.26.2-.53.4-.78.63s-.71.7-1.06,1.05c-1.28,1.28-1.28,1.28-1.14,3.2.63,0,1.27,0,1.9,0,.13,0,.27-.16.39-.27l2.56-2.55.11-.07,1,1.19L20.9,53.48l.09.13h2.67v1.58H21Z"/><path d="M46.2,55.35,48,57l-1.2,1.1c-.62-.62-1.34-1.26-2-2a2.2,2.2,0,0,0-2.21-.91,6.23,6.23,0,0,1-.75,0c0,.66,0,1.28,0,1.9a.77.77,0,0,0,.25.39c.88.89,1.77,1.77,2.68,2.67l-1.16,1.08L42,59.54l-.14.07V62.3H40.27V59.63l-.12-.05-1.64,1.78-1.16-1.22c.71-.71,1.41-1.48,2.19-2.16a1.87,1.87,0,0,0,.73-1.8,6.32,6.32,0,0,1,0-1c-.65,0-1.26,0-1.86,0a.75.75,0,0,0-.44.26c-.89.87-1.77,1.76-2.67,2.66L34.14,57l1.76-1.64-.06-.1H33.17V53.64H36l-1.89-1.71,1.22-1.24c.87.87,1.74,1.73,2.59,2.6a1,1,0,0,0,.82.34c.49,0,1,0,1.55,0,0-.66,0-1.31,0-2,0-.12-.16-.24-.26-.35l-2.64-2.63,1.16-1.2,1.74,1.87V46.53h1.59v2.81l1.77-1.88,1.25,1.28c-.26.2-.54.4-.79.63s-.7.7-1.05,1.05c-1.28,1.28-1.28,1.28-1.14,3.2.63,0,1.26,0,1.9,0,.13,0,.27-.16.38-.27l2.56-2.55.12-.07,1,1.19-1.69,1.57.09.13h2.66v1.58H46.27Z"/><path d="M73.47,55.35,75.22,57,74,58.09c-.61-.62-1.34-1.26-1.94-2a2.23,2.23,0,0,0-2.22-.91,6.23,6.23,0,0,1-.75,0c0,.66,0,1.28,0,1.9a.69.69,0,0,0,.24.39c.88.89,1.77,1.77,2.68,2.67L70.9,61.24l-1.63-1.7-.14.07V62.3H67.54V59.63l-.12-.05-1.64,1.78-1.16-1.22c.71-.71,1.41-1.48,2.19-2.16a1.87,1.87,0,0,0,.73-1.8,7.88,7.88,0,0,1,0-1c-.65,0-1.25,0-1.86,0a.75.75,0,0,0-.44.26c-.89.87-1.77,1.76-2.66,2.66L61.41,57l1.77-1.64-.06-.1H60.44V53.64h2.79l-1.89-1.71,1.22-1.24c.87.87,1.74,1.73,2.59,2.6a1,1,0,0,0,.82.34c.49,0,1,0,1.56,0,0-.66,0-1.31,0-2,0-.12-.15-.24-.25-.35l-2.65-2.63,1.16-1.2,1.75,1.87V46.53h1.59v2.81l1.76-1.88,1.25,1.28c-.26.2-.53.4-.78.63s-.71.7-1.06,1.05C69,51.7,69,51.7,69.14,53.62c.63,0,1.27,0,1.9,0,.13,0,.27-.16.39-.27L74,50.79l.12-.07,1,1.19-1.69,1.57.09.13h2.67v1.58H73.54Z"/><path d="M34.11,70.58l1.38,1.3-1,.87c-.49-.49-1.06-1-1.54-1.57a1.77,1.77,0,0,0-1.76-.72,3.86,3.86,0,0,1-.59,0c0,.52,0,1,0,1.5,0,.11.11.23.19.32L33,74.39l-.92.86L30.77,73.9l-.11,0v2.14H29.4V74l-.09,0L28,75.34l-.92-1c.56-.57,1.12-1.18,1.74-1.71a1.49,1.49,0,0,0,.57-1.43,6.61,6.61,0,0,1,0-.78c-.51,0-1,0-1.47,0a.65.65,0,0,0-.35.21l-2.11,2.11-.92-.92,1.4-1.31-.05-.08H23.78V69.22H26l-1.49-1.36,1-1c.7.69,1.39,1.36,2.06,2a.77.77,0,0,0,.65.28c.39,0,.78,0,1.23,0,0-.53,0-1,0-1.56,0-.09-.12-.19-.2-.27l-2.1-2.09.92-1,1.38,1.48V63.59h1.26v2.22L32,64.32l1,1c-.2.16-.42.32-.62.5s-.56.55-.83.83c-1,1-1,1-.91,2.54.5,0,1,0,1.51,0,.1,0,.21-.13.3-.22l2-2,.09,0,.83.94L34.09,69.1l.07.1h2.11v1.25H34.16Z"/><path d="M54.14,70.58l1.39,1.3-1,.87c-.49-.49-1.06-1-1.55-1.57a1.76,1.76,0,0,0-1.75-.72,4,4,0,0,1-.6,0c0,.52,0,1,0,1.5a.62.62,0,0,0,.2.32L53,74.39l-.91.86L50.81,73.9l-.11,0v2.14H49.44V74l-.09,0L48,75.34l-.92-1c.57-.57,1.12-1.18,1.74-1.71a1.5,1.5,0,0,0,.58-1.43,5,5,0,0,1,0-.78c-.51,0-1,0-1.47,0a.62.62,0,0,0-.35.21c-.71.7-1.4,1.4-2.11,2.11l-.92-.92L46,70.56l0-.08H43.81V69.22H46l-1.5-1.36,1-1c.69.69,1.38,1.36,2,2a.79.79,0,0,0,.65.28c.39,0,.79,0,1.24,0,0-.53,0-1,0-1.56,0-.09-.13-.19-.21-.27l-2.09-2.09.91-1,1.39,1.48V63.59h1.26v2.22l1.4-1.49,1,1c-.2.16-.43.32-.62.5s-.56.55-.84.83c-1,1-1,1-.9,2.54.49,0,1,0,1.5,0,.11,0,.22-.13.31-.22l2-2,.09,0,.82.94L54.12,69.1l.07.1h2.12v1.25H54.2Z"/><path class="cls-1" d="M0,31.1A14,14,0,0,1,3,24a12.39,12.39,0,0,1,7.57-4.33c.59-.1.92-.24,1.06-.85a25.25,25.25,0,0,1,7.66-12.6l3.31-2.5A25.59,25.59,0,0,1,33.88.06C43.24-.5,50.69,3,56.31,10.49a2.31,2.31,0,0,0,2,1A16.67,16.67,0,0,1,73.77,24.41a2.85,2.85,0,0,0,1,1.65c4,3.58,4.77,9.66,1.64,13.59a9.23,9.23,0,0,1-5.88,3.27c-1,.17-1.42-.07-1.25-1.12a3.41,3.41,0,0,0,0-.71c-.12-1.2.16-2,1.62-2A3.48,3.48,0,0,0,73,38a5.84,5.84,0,0,0-.11-8.66,10.52,10.52,0,0,1-2.94-5.18,12,12,0,0,0-8.47-8.38h0a.4.4,0,0,0-.5-.19c-4.78-1.6-11.14.51-13.84,4.62a9.38,9.38,0,0,1,5.56,6.21c.69,2.48.7,2.48-1.87,2.48a2.46,2.46,0,0,0-.47,0c-.74.14-.92-.24-1-.9A5.61,5.61,0,0,0,44,23.23a5.91,5.91,0,0,0-5.71,3.85c-.22.61.1,1.5-.54,1.78a5.53,5.53,0,0,1-2,.07h-.12c-1.21.27-1.25-.43-1.14-1.33a9.34,9.34,0,0,1,7.35-7.75c.52-.1,1.08-.07,1.44-.65a17,17,0,0,1,7.44-6.41,12.41,12.41,0,0,1,1.56-.52c.63-.12.59-.35.25-.76a19.89,19.89,0,0,0-9-6.41h0c-.1-.22-.29-.24-.5-.21a20.09,20.09,0,0,0-10.72-1,21.39,21.39,0,0,0-17.6,17.67c-.17,1.16-.46,1.67-1.87,1.6a8.28,8.28,0,0,0-8,4.5A8.33,8.33,0,0,0,5,36.54c1.07,2.15,3,2.81,5.2,2.81H56.71c1.81,0,1.81,0,1.91,1.74-.11,1.87-.11,1.87-2,1.87-15.24,0-30.48-.16-45.72.06C3.11,43.13.19,37.26,0,32.17,0,31.82,0,31.46,0,31.1Z"/><path class="cls-2" d="M62.11,41.1c.1-1.74.1-1.74,1.88-1.74a2.57,2.57,0,0,0,.48,0c1-.19,1.45.22,1.26,1.27a1.52,1.52,0,0,0,0,.47C65.67,43,65.67,43,64.06,43,62.19,43,62.19,43,62.11,41.1Z"/>`,
    }

    if (icons[icon]) {
        let PATH = icons[icon];
        const iconTemplate = `
            <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" stroke="#ffffff" viewBox="0 0 68.01 67.11">
                <g id="Layer_2" data-name="Layer 2">
                    <g id="Layer_1-2" data-name="Layer 1">${PATH}</g>
                </g>
            </svg>`;
        const parser = new DOMParser();
        const svgElement = parser.parseFromString(iconTemplate, "image/svg+xml").documentElement;
        svgElement.classList.add(iconClass);
        return svgElement
    } else {
        console.error("Icon not found in the icons object");
        return null;
    }
}
;// CONCATENATED MODULE: ./src/DOM/updateDayDOMElementInfo.js





function updateDayDOMElementInfo(day, index, temperatureScale, newDataRequest) {
    
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
        if (newDataRequest) {
            DOMDay.icon.textContent = "";
            DOMDay.icon.appendChild(assignIcons(day.icon, "weather_day_icon"));
        }
    }

    if (index == 0) {
        DOMDaysList['currentDay'].textContent = day.datetime;
        if (newDataRequest) {
            DOMDaysList['currentDayIcon'].textContent = "";
            DOMDaysList['currentDayIcon'].appendChild(assignIcons(day.icon, "current_weather_icon"));
        }
    }
}
;// CONCATENATED MODULE: ./src/Weather Data/weatherDaysHandler.js


function weatherDaysHandler(data, temperatureScale, newDataRequest) {

    // Extract only the first 7 days
    const days = data.weatherDays.slice(0, 7).map(({ datetime, tempmin, tempmax, icon }) => ({
        datetime,
        tempmin,
        tempmax,
        icon,
    }));

    days.forEach((day, index) => {
        updateDayDOMElementInfo(day, index, temperatureScale, newDataRequest);
    });
}
;// CONCATENATED MODULE: ./src/DOM/updateDOMElementInfo.js


function updateDOMElementInfo(DOMElement, item, data, temperatureScale) {
    for (const [elementKey, dataKey] of Object.entries(item)) {
        const [mainKey, subKey] = dataKey.split('.');
        let element = DOMElement[elementKey];
        if (subKey) {
                element.textContent = `${data[mainKey][subKey]}%`;
                addSymbolNeeded(element, elementKey, data, mainKey, subKey, temperatureScale);
        } else {
            DOMElement[elementKey].textContent = data[mainKey];
        }
    }
}

function addSymbolNeeded(element, value, data, mainKey, subKey, temperatureScale) {
    switch (value) {
       case 'currentWeather':
        element.textContent = changeTemperatureScale(temperatureScale, data[mainKey][subKey]);
        break;
       case 'feelsLike':
        element.textContent = changeTemperatureScale(temperatureScale, data[mainKey][subKey]);
        break;
       case 'humidity' || 0:
        element.textContent = `${data[mainKey][subKey]}%`;
        break;
    //    case 'chanceOfRain':
    //     element.textContent = `${data[mainKey][subKey]}%`;
    //     break;
       case 'windSpeed':
        element.textContent = `${data[mainKey][subKey]}km/h`;
        break;
       default:
        element.textContent = `${data[mainKey][subKey]}`;
    }
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
        weatherDaysHandler(weatherStoredData, temperatureScale, newDataRequest);
    } else {
        console.error(weatherData.error);
    }
}
;// CONCATENATED MODULE: ./src/DOM/addTempActiveClass.js
function addTempActiveClass(currentBtn, otherBtn) {
    currentBtn.classList.toggle("active_temp")
    otherBtn.classList.toggle("active_temp")
}
;// CONCATENATED MODULE: ./src/DOM/displayWeather.js





function displayWeather(temperatureScale, newDataRequest) {

    const weatherDOMElements = DOMElements();

    const weatherElements = getDOMElements(weatherDOMElements.weatherInfoElements);
    const weatherInputs = getDOMElements(weatherDOMElements.inputElements);
    const celsiusToggle = weatherInputs.celsiusBtn;
    const fahrenheitToggle = weatherInputs.fahrenheitBtn;
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

    celsiusToggle.addEventListener('click', () => {
        temperatureScale = 'Celsius';
        if (!celsiusToggle.classList.contains("active_temp")) {
            addTempActiveClass(celsiusToggle, fahrenheitToggle);
            requestData(userInput.value, weatherElements, temperatureScale, newDataRequest);
        }
    });

    fahrenheitToggle.addEventListener('click', () => {
        temperatureScale = 'Fahrenheit';
        if (!fahrenheitToggle.classList.contains("active_temp")) {
            addTempActiveClass(fahrenheitToggle, celsiusToggle);
            requestData(userInput.value, weatherElements, temperatureScale, newDataRequest);
        }
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./src/style.css
var style = __webpack_require__(543);
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
/******/ var __webpack_exports__ = (__webpack_exec__(779));
/******/ }
]);
//# sourceMappingURL=app.bundle.js.map