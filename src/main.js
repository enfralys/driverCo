"use strict";
exports.__esModule = true;
// this import should be first in order to load some required settings (like globals and reflect-metadata)
var platform_1 = require("nativescript-angular/platform");
var element_registry_1 = require("nativescript-angular/element-registry");
var app_module_1 = require("./app/app.module");
platform_1.platformNativeScriptDynamic().bootstrapModule(app_module_1.AppModule);
element_registry_1.registerElement("Ripple", function () { return require("nativescript-ripple").Ripple; });
