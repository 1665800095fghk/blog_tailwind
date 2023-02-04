/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var __defProp = Object.defineProperty
var __getOwnPropDesc = Object.getOwnPropertyDescriptor
var __getOwnPropNames = Object.getOwnPropertyNames
var __getProtoOf = Object.getPrototypeOf
var __hasOwnProp = Object.prototype.hasOwnProperty
var __reflectGet = Reflect.get
var __export = (target, all) => {
  for (var name in all) __defProp(target, name, { get: all[name], enumerable: true })
}
var __copyProps = (to, from, except, desc) => {
  if ((from && typeof from === 'object') || typeof from === 'function') {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, {
          get: () => from[key],
          enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable,
        })
  }
  return to
}
var __toCommonJS = (mod) => __copyProps(__defProp({}, '__esModule', { value: true }), mod)
var __superGet = (cls, obj, key) => __reflectGet(__getProtoOf(cls), key, obj)
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value))
      } catch (e) {
        reject(e)
      }
    }
    var rejected = (value) => {
      try {
        step(generator.throw(value))
      } catch (e) {
        reject(e)
      }
    }
    var step = (x) =>
      x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected)
    step((generator = generator.apply(__this, __arguments)).next())
  })
}

// main.ts
var main_exports = {}
__export(main_exports, {
  default: () => MarkdownSuffixPlugin,
})
module.exports = __toCommonJS(main_exports)
var import_obsidian = require('obsidian')
var MarkdownSuffixPlugin = class extends import_obsidian.Plugin {
  onload() {
    return __async(this, null, function* () {
      __superGet(MarkdownSuffixPlugin.prototype, this, 'onload').call(this)
      this.registerExtensions(['mdx', 'svx'], 'markdown')
    })
  }
}