var lang = require('./lang'),
    fs = require('fs');

lang.Parser.ArrayNode = {
  val: function() {
    if(this.elements[2].textValue === '') return []

    var first = this.elements[2];
    var acc = [first.value.val()];

    first.elements[1].elements.forEach(function(node) {
      acc.push(node.value.val());
    });

    return acc;
  }
}

lang.Parser.ObjectNode = {
  val: function() {
    var acc = {};

    var first = this.elements[2].elements[0];
    if(first === undefined) return acc;

    acc[first.string.val()] = first.value.val();

    this.elements[2].elements[1].elements.forEach(function(node) {
      if(node.textValue === '') return;
      acc[node.string.val()] = node.value.val();
    });

    return acc;
  }
}

lang.Parser.StringNode = {
  val: function() {
    return this.elements[1].textValue;
  }
}

lang.Parser.NumberNode = {
  val: function() {
    return parseFloat(this.textValue, 10);
  }
}

lang.Parser.SpecialNode = {
  val: function() {
    if(this.textValue === 'true')  return true;
    if(this.textValue === 'false') return false;
    if(this.textValue === 'null')  return null;
  }
}

var JSON = module.exports = {
  parse: lang.parse,

  // stolen from https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/JSON
  stringify: function (vContent) {
    if (vContent instanceof Object) {
      var sOutput = "";
      if (vContent.constructor === Array) {
        for (var nId = 0; nId < vContent.length; sOutput += this.stringify(vContent[nId]) + ",", nId++);
        return "[" + sOutput.substr(0, sOutput.length - 1) + "]";
      }
      if (vContent.toString !== Object.prototype.toString) { return "\"" + vContent.toString().replace(/"/g, "\\$&") + "\""; }
      for (var sProp in vContent) { sOutput += "\"" + sProp.replace(/"/g, "\\$&") + "\":" + this.stringify(vContent[sProp]) + ","; }
      return "{" + sOutput.substr(0, sOutput.length - 1) + "}";
    }
    return typeof vContent === "string" ? "\"" + vContent.replace(/"/g, "\\$&") + "\"" : String(vContent);
  }
};