(function() {
  var extend = function (destination, source) {
    if (!destination || !source) return destination;
    for (var key in source) {
      if (destination[key] !== source[key])
        destination[key] = source[key];
    }
    return destination;
  };
  
  var find = function (root, objectName) {
    var parts = objectName.split('.'),
        part;
    
    while (part = parts.shift()) {
      root = root[part];
      if (root === undefined)
        throw new Error('Cannot find object named ' + objectName);
    }
    return root;
  };
  
  var formatError = function (error) {
    var lines  = error.input.split(/\n/g),
        lineNo = 0,
        offset = 0;
    
    while (offset < error.offset + 1) {
      offset += lines[lineNo].length + 1;
      lineNo += 1;
    }
    var message = 'Line ' + lineNo + ': expected ' + error.expected + '\n',
        line    = lines[lineNo - 1];
    
    message += line + '\n';
    offset  -= line.length + 1;
    
    while (offset < error.offset) {
      message += ' ';
      offset  += 1;
    }
    return message + '^';
  };
  
  var Grammar = {
    __consume__value: function(input) {
      var address0 = null, index0 = this._offset;
      this._nodeCache["value"] = this._nodeCache["value"] || {};
      var cached = this._nodeCache["value"][index0];
      if (cached) {
        this._offset += cached.textValue.length;
        return cached;
      }
      var index1 = this._offset;
      address0 = this.__consume__string();
      if (address0) {
      } else {
        this._offset = index1;
        address0 = this.__consume__number();
        if (address0) {
        } else {
          this._offset = index1;
          address0 = this.__consume__object();
          if (address0) {
          } else {
            this._offset = index1;
            address0 = this.__consume__array();
            if (address0) {
            } else {
              this._offset = index1;
              address0 = this.__consume__special();
              if (address0) {
              } else {
                this._offset = index1;
              }
            }
          }
        }
      }
      return this._nodeCache["value"][index0] = address0;
    },
    __consume__array: function(input) {
      var address0 = null, index0 = this._offset;
      this._nodeCache["array"] = this._nodeCache["array"] || {};
      var cached = this._nodeCache["array"][index0];
      if (cached) {
        this._offset += cached.textValue.length;
        return cached;
      }
      var index1 = this._offset, elements0 = [], labelled0 = {}, text0 = "";
      var address1 = null;
      var slice0 = null;
      if (this._input.length > this._offset) {
        slice0 = this._input.substring(this._offset, this._offset + 1);
      } else {
        slice0 = null;
      }
      if (slice0 === "[") {
        var klass0 = this.constructor.SyntaxNode;
        var type0 = null;
        address1 = new klass0("[", this._offset, []);
        if (typeof type0 === "object") {
          extend(address1, type0);
        }
        this._offset += 1;
      } else {
        address1 = null;
        var slice1 = null;
        if (this._input.length > this._offset) {
          slice1 = this._input.substring(this._offset, this._offset + 1);
        } else {
          slice1 = null;
        }
        if (!this.error || this.error.offset <= this._offset) {
          this.error = this.constructor.lastError = {input: this._input, offset: this._offset, expected: "\"[\""};
        }
      }
      if (address1) {
        elements0.push(address1);
        text0 += address1.textValue;
        var address2 = null;
        address2 = this.__consume___();
        if (address2) {
          elements0.push(address2);
          text0 += address2.textValue;
          labelled0._ = address2;
          var address3 = null;
          var index2 = this._offset;
          var index3 = this._offset, elements1 = [], labelled1 = {}, text1 = "";
          var address4 = null;
          address4 = this.__consume__value();
          if (address4) {
            elements1.push(address4);
            text1 += address4.textValue;
            labelled1.value = address4;
            var address5 = null;
            var remaining0 = 0, index4 = this._offset, elements2 = [], text2 = "", address6 = true;
            while (address6) {
              var index5 = this._offset, elements3 = [], labelled2 = {}, text3 = "";
              var address7 = null;
              address7 = this.__consume___();
              if (address7) {
                elements3.push(address7);
                text3 += address7.textValue;
                labelled2._ = address7;
                var address8 = null;
                var slice2 = null;
                if (this._input.length > this._offset) {
                  slice2 = this._input.substring(this._offset, this._offset + 1);
                } else {
                  slice2 = null;
                }
                if (slice2 === ",") {
                  var klass1 = this.constructor.SyntaxNode;
                  var type1 = null;
                  address8 = new klass1(",", this._offset, []);
                  if (typeof type1 === "object") {
                    extend(address8, type1);
                  }
                  this._offset += 1;
                } else {
                  address8 = null;
                  var slice3 = null;
                  if (this._input.length > this._offset) {
                    slice3 = this._input.substring(this._offset, this._offset + 1);
                  } else {
                    slice3 = null;
                  }
                  if (!this.error || this.error.offset <= this._offset) {
                    this.error = this.constructor.lastError = {input: this._input, offset: this._offset, expected: "\",\""};
                  }
                }
                if (address8) {
                  elements3.push(address8);
                  text3 += address8.textValue;
                  var address9 = null;
                  address9 = this.__consume___();
                  if (address9) {
                    elements3.push(address9);
                    text3 += address9.textValue;
                    labelled2._ = address9;
                    var address10 = null;
                    address10 = this.__consume__value();
                    if (address10) {
                      elements3.push(address10);
                      text3 += address10.textValue;
                      labelled2.value = address10;
                    } else {
                      elements3 = null;
                      this._offset = index5;
                    }
                  } else {
                    elements3 = null;
                    this._offset = index5;
                  }
                } else {
                  elements3 = null;
                  this._offset = index5;
                }
              } else {
                elements3 = null;
                this._offset = index5;
              }
              if (elements3) {
                this._offset = index5;
                var klass2 = this.constructor.SyntaxNode;
                var type2 = null;
                address6 = new klass2(text3, this._offset, elements3, labelled2);
                if (typeof type2 === "object") {
                  extend(address6, type2);
                }
                this._offset += text3.length;
              } else {
                address6 = null;
              }
              if (address6) {
                elements2.push(address6);
                text2 += address6.textValue;
                remaining0 -= 1;
              }
            }
            if (remaining0 <= 0) {
              this._offset = index4;
              var klass3 = this.constructor.SyntaxNode;
              var type3 = null;
              address5 = new klass3(text2, this._offset, elements2);
              if (typeof type3 === "object") {
                extend(address5, type3);
              }
              this._offset += text2.length;
            } else {
              address5 = null;
            }
            if (address5) {
              elements1.push(address5);
              text1 += address5.textValue;
            } else {
              elements1 = null;
              this._offset = index3;
            }
          } else {
            elements1 = null;
            this._offset = index3;
          }
          if (elements1) {
            this._offset = index3;
            var klass4 = this.constructor.SyntaxNode;
            var type4 = null;
            address3 = new klass4(text1, this._offset, elements1, labelled1);
            if (typeof type4 === "object") {
              extend(address3, type4);
            }
            this._offset += text1.length;
          } else {
            address3 = null;
          }
          if (address3) {
          } else {
            this._offset = index2;
            var klass5 = this.constructor.SyntaxNode;
            var type5 = null;
            address3 = new klass5("", this._offset, []);
            if (typeof type5 === "object") {
              extend(address3, type5);
            }
            this._offset += 0;
          }
          if (address3) {
            elements0.push(address3);
            text0 += address3.textValue;
            var address11 = null;
            address11 = this.__consume___();
            if (address11) {
              elements0.push(address11);
              text0 += address11.textValue;
              labelled0._ = address11;
              var address12 = null;
              var slice4 = null;
              if (this._input.length > this._offset) {
                slice4 = this._input.substring(this._offset, this._offset + 1);
              } else {
                slice4 = null;
              }
              if (slice4 === "]") {
                var klass6 = this.constructor.SyntaxNode;
                var type6 = null;
                address12 = new klass6("]", this._offset, []);
                if (typeof type6 === "object") {
                  extend(address12, type6);
                }
                this._offset += 1;
              } else {
                address12 = null;
                var slice5 = null;
                if (this._input.length > this._offset) {
                  slice5 = this._input.substring(this._offset, this._offset + 1);
                } else {
                  slice5 = null;
                }
                if (!this.error || this.error.offset <= this._offset) {
                  this.error = this.constructor.lastError = {input: this._input, offset: this._offset, expected: "\"]\""};
                }
              }
              if (address12) {
                elements0.push(address12);
                text0 += address12.textValue;
              } else {
                elements0 = null;
                this._offset = index1;
              }
            } else {
              elements0 = null;
              this._offset = index1;
            }
          } else {
            elements0 = null;
            this._offset = index1;
          }
        } else {
          elements0 = null;
          this._offset = index1;
        }
      } else {
        elements0 = null;
        this._offset = index1;
      }
      if (elements0) {
        this._offset = index1;
        var klass7 = this.constructor.SyntaxNode;
        var type7 = find(this.constructor, "ArrayNode");
        address0 = new klass7(text0, this._offset, elements0, labelled0);
        if (typeof type7 === "object") {
          extend(address0, type7);
        }
        this._offset += text0.length;
      } else {
        address0 = null;
      }
      return this._nodeCache["array"][index0] = address0;
    },
    __consume__object: function(input) {
      var address0 = null, index0 = this._offset;
      this._nodeCache["object"] = this._nodeCache["object"] || {};
      var cached = this._nodeCache["object"][index0];
      if (cached) {
        this._offset += cached.textValue.length;
        return cached;
      }
      var index1 = this._offset, elements0 = [], labelled0 = {}, text0 = "";
      var address1 = null;
      var slice0 = null;
      if (this._input.length > this._offset) {
        slice0 = this._input.substring(this._offset, this._offset + 1);
      } else {
        slice0 = null;
      }
      if (slice0 === "{") {
        var klass0 = this.constructor.SyntaxNode;
        var type0 = null;
        address1 = new klass0("{", this._offset, []);
        if (typeof type0 === "object") {
          extend(address1, type0);
        }
        this._offset += 1;
      } else {
        address1 = null;
        var slice1 = null;
        if (this._input.length > this._offset) {
          slice1 = this._input.substring(this._offset, this._offset + 1);
        } else {
          slice1 = null;
        }
        if (!this.error || this.error.offset <= this._offset) {
          this.error = this.constructor.lastError = {input: this._input, offset: this._offset, expected: "\"{\""};
        }
      }
      if (address1) {
        elements0.push(address1);
        text0 += address1.textValue;
        var address2 = null;
        address2 = this.__consume___();
        if (address2) {
          elements0.push(address2);
          text0 += address2.textValue;
          labelled0._ = address2;
          var address3 = null;
          var index2 = this._offset;
          var index3 = this._offset, elements1 = [], labelled1 = {}, text1 = "";
          var address4 = null;
          var index4 = this._offset, elements2 = [], labelled2 = {}, text2 = "";
          var address5 = null;
          address5 = this.__consume__string();
          if (address5) {
            elements2.push(address5);
            text2 += address5.textValue;
            labelled2.string = address5;
            var address6 = null;
            address6 = this.__consume___();
            if (address6) {
              elements2.push(address6);
              text2 += address6.textValue;
              labelled2._ = address6;
              var address7 = null;
              var slice2 = null;
              if (this._input.length > this._offset) {
                slice2 = this._input.substring(this._offset, this._offset + 1);
              } else {
                slice2 = null;
              }
              if (slice2 === ":") {
                var klass1 = this.constructor.SyntaxNode;
                var type1 = null;
                address7 = new klass1(":", this._offset, []);
                if (typeof type1 === "object") {
                  extend(address7, type1);
                }
                this._offset += 1;
              } else {
                address7 = null;
                var slice3 = null;
                if (this._input.length > this._offset) {
                  slice3 = this._input.substring(this._offset, this._offset + 1);
                } else {
                  slice3 = null;
                }
                if (!this.error || this.error.offset <= this._offset) {
                  this.error = this.constructor.lastError = {input: this._input, offset: this._offset, expected: "\":\""};
                }
              }
              if (address7) {
                elements2.push(address7);
                text2 += address7.textValue;
                var address8 = null;
                address8 = this.__consume___();
                if (address8) {
                  elements2.push(address8);
                  text2 += address8.textValue;
                  labelled2._ = address8;
                  var address9 = null;
                  address9 = this.__consume__value();
                  if (address9) {
                    elements2.push(address9);
                    text2 += address9.textValue;
                    labelled2.value = address9;
                  } else {
                    elements2 = null;
                    this._offset = index4;
                  }
                } else {
                  elements2 = null;
                  this._offset = index4;
                }
              } else {
                elements2 = null;
                this._offset = index4;
              }
            } else {
              elements2 = null;
              this._offset = index4;
            }
          } else {
            elements2 = null;
            this._offset = index4;
          }
          if (elements2) {
            this._offset = index4;
            var klass2 = this.constructor.SyntaxNode;
            var type2 = null;
            address4 = new klass2(text2, this._offset, elements2, labelled2);
            if (typeof type2 === "object") {
              extend(address4, type2);
            }
            this._offset += text2.length;
          } else {
            address4 = null;
          }
          if (address4) {
            elements1.push(address4);
            text1 += address4.textValue;
            var address10 = null;
            var remaining0 = 0, index5 = this._offset, elements3 = [], text3 = "", address11 = true;
            while (address11) {
              var index6 = this._offset, elements4 = [], labelled3 = {}, text4 = "";
              var address12 = null;
              address12 = this.__consume___();
              if (address12) {
                elements4.push(address12);
                text4 += address12.textValue;
                labelled3._ = address12;
                var address13 = null;
                var slice4 = null;
                if (this._input.length > this._offset) {
                  slice4 = this._input.substring(this._offset, this._offset + 1);
                } else {
                  slice4 = null;
                }
                if (slice4 === ",") {
                  var klass3 = this.constructor.SyntaxNode;
                  var type3 = null;
                  address13 = new klass3(",", this._offset, []);
                  if (typeof type3 === "object") {
                    extend(address13, type3);
                  }
                  this._offset += 1;
                } else {
                  address13 = null;
                  var slice5 = null;
                  if (this._input.length > this._offset) {
                    slice5 = this._input.substring(this._offset, this._offset + 1);
                  } else {
                    slice5 = null;
                  }
                  if (!this.error || this.error.offset <= this._offset) {
                    this.error = this.constructor.lastError = {input: this._input, offset: this._offset, expected: "\",\""};
                  }
                }
                if (address13) {
                  elements4.push(address13);
                  text4 += address13.textValue;
                  var address14 = null;
                  address14 = this.__consume___();
                  if (address14) {
                    elements4.push(address14);
                    text4 += address14.textValue;
                    labelled3._ = address14;
                    var address15 = null;
                    address15 = this.__consume__string();
                    if (address15) {
                      elements4.push(address15);
                      text4 += address15.textValue;
                      labelled3.string = address15;
                      var address16 = null;
                      address16 = this.__consume___();
                      if (address16) {
                        elements4.push(address16);
                        text4 += address16.textValue;
                        labelled3._ = address16;
                        var address17 = null;
                        var slice6 = null;
                        if (this._input.length > this._offset) {
                          slice6 = this._input.substring(this._offset, this._offset + 1);
                        } else {
                          slice6 = null;
                        }
                        if (slice6 === ":") {
                          var klass4 = this.constructor.SyntaxNode;
                          var type4 = null;
                          address17 = new klass4(":", this._offset, []);
                          if (typeof type4 === "object") {
                            extend(address17, type4);
                          }
                          this._offset += 1;
                        } else {
                          address17 = null;
                          var slice7 = null;
                          if (this._input.length > this._offset) {
                            slice7 = this._input.substring(this._offset, this._offset + 1);
                          } else {
                            slice7 = null;
                          }
                          if (!this.error || this.error.offset <= this._offset) {
                            this.error = this.constructor.lastError = {input: this._input, offset: this._offset, expected: "\":\""};
                          }
                        }
                        if (address17) {
                          elements4.push(address17);
                          text4 += address17.textValue;
                          var address18 = null;
                          address18 = this.__consume___();
                          if (address18) {
                            elements4.push(address18);
                            text4 += address18.textValue;
                            labelled3._ = address18;
                            var address19 = null;
                            address19 = this.__consume__value();
                            if (address19) {
                              elements4.push(address19);
                              text4 += address19.textValue;
                              labelled3.value = address19;
                            } else {
                              elements4 = null;
                              this._offset = index6;
                            }
                          } else {
                            elements4 = null;
                            this._offset = index6;
                          }
                        } else {
                          elements4 = null;
                          this._offset = index6;
                        }
                      } else {
                        elements4 = null;
                        this._offset = index6;
                      }
                    } else {
                      elements4 = null;
                      this._offset = index6;
                    }
                  } else {
                    elements4 = null;
                    this._offset = index6;
                  }
                } else {
                  elements4 = null;
                  this._offset = index6;
                }
              } else {
                elements4 = null;
                this._offset = index6;
              }
              if (elements4) {
                this._offset = index6;
                var klass5 = this.constructor.SyntaxNode;
                var type5 = null;
                address11 = new klass5(text4, this._offset, elements4, labelled3);
                if (typeof type5 === "object") {
                  extend(address11, type5);
                }
                this._offset += text4.length;
              } else {
                address11 = null;
              }
              if (address11) {
                elements3.push(address11);
                text3 += address11.textValue;
                remaining0 -= 1;
              }
            }
            if (remaining0 <= 0) {
              this._offset = index5;
              var klass6 = this.constructor.SyntaxNode;
              var type6 = null;
              address10 = new klass6(text3, this._offset, elements3);
              if (typeof type6 === "object") {
                extend(address10, type6);
              }
              this._offset += text3.length;
            } else {
              address10 = null;
            }
            if (address10) {
              elements1.push(address10);
              text1 += address10.textValue;
            } else {
              elements1 = null;
              this._offset = index3;
            }
          } else {
            elements1 = null;
            this._offset = index3;
          }
          if (elements1) {
            this._offset = index3;
            var klass7 = this.constructor.SyntaxNode;
            var type7 = null;
            address3 = new klass7(text1, this._offset, elements1, labelled1);
            if (typeof type7 === "object") {
              extend(address3, type7);
            }
            this._offset += text1.length;
          } else {
            address3 = null;
          }
          if (address3) {
          } else {
            this._offset = index2;
            var klass8 = this.constructor.SyntaxNode;
            var type8 = null;
            address3 = new klass8("", this._offset, []);
            if (typeof type8 === "object") {
              extend(address3, type8);
            }
            this._offset += 0;
          }
          if (address3) {
            elements0.push(address3);
            text0 += address3.textValue;
            var address20 = null;
            address20 = this.__consume___();
            if (address20) {
              elements0.push(address20);
              text0 += address20.textValue;
              labelled0._ = address20;
              var address21 = null;
              var slice8 = null;
              if (this._input.length > this._offset) {
                slice8 = this._input.substring(this._offset, this._offset + 1);
              } else {
                slice8 = null;
              }
              if (slice8 === "}") {
                var klass9 = this.constructor.SyntaxNode;
                var type9 = null;
                address21 = new klass9("}", this._offset, []);
                if (typeof type9 === "object") {
                  extend(address21, type9);
                }
                this._offset += 1;
              } else {
                address21 = null;
                var slice9 = null;
                if (this._input.length > this._offset) {
                  slice9 = this._input.substring(this._offset, this._offset + 1);
                } else {
                  slice9 = null;
                }
                if (!this.error || this.error.offset <= this._offset) {
                  this.error = this.constructor.lastError = {input: this._input, offset: this._offset, expected: "\"}\""};
                }
              }
              if (address21) {
                elements0.push(address21);
                text0 += address21.textValue;
              } else {
                elements0 = null;
                this._offset = index1;
              }
            } else {
              elements0 = null;
              this._offset = index1;
            }
          } else {
            elements0 = null;
            this._offset = index1;
          }
        } else {
          elements0 = null;
          this._offset = index1;
        }
      } else {
        elements0 = null;
        this._offset = index1;
      }
      if (elements0) {
        this._offset = index1;
        var klass10 = this.constructor.SyntaxNode;
        var type10 = find(this.constructor, "ObjectNode");
        address0 = new klass10(text0, this._offset, elements0, labelled0);
        if (typeof type10 === "object") {
          extend(address0, type10);
        }
        this._offset += text0.length;
      } else {
        address0 = null;
      }
      return this._nodeCache["object"][index0] = address0;
    },
    __consume__string: function(input) {
      var address0 = null, index0 = this._offset;
      this._nodeCache["string"] = this._nodeCache["string"] || {};
      var cached = this._nodeCache["string"][index0];
      if (cached) {
        this._offset += cached.textValue.length;
        return cached;
      }
      var index1 = this._offset, elements0 = [], labelled0 = {}, text0 = "";
      var address1 = null;
      var slice0 = null;
      if (this._input.length > this._offset) {
        slice0 = this._input.substring(this._offset, this._offset + 1);
      } else {
        slice0 = null;
      }
      if (slice0 === "\"") {
        var klass0 = this.constructor.SyntaxNode;
        var type0 = null;
        address1 = new klass0("\"", this._offset, []);
        if (typeof type0 === "object") {
          extend(address1, type0);
        }
        this._offset += 1;
      } else {
        address1 = null;
        var slice1 = null;
        if (this._input.length > this._offset) {
          slice1 = this._input.substring(this._offset, this._offset + 1);
        } else {
          slice1 = null;
        }
        if (!this.error || this.error.offset <= this._offset) {
          this.error = this.constructor.lastError = {input: this._input, offset: this._offset, expected: "\"\\\"\""};
        }
      }
      if (address1) {
        elements0.push(address1);
        text0 += address1.textValue;
        var address2 = null;
        var remaining0 = 0, index2 = this._offset, elements1 = [], text1 = "", address3 = true;
        while (address3) {
          var index3 = this._offset;
          var slice2 = null;
          if (this._input.length > this._offset) {
            slice2 = this._input.substring(this._offset, this._offset + 1);
          } else {
            slice2 = null;
          }
          if (slice2 && /^[^"\\]/.test(slice2)) {
            var klass1 = this.constructor.SyntaxNode;
            var type1 = null;
            address3 = new klass1(slice2, this._offset, []);
            if (typeof type1 === "object") {
              extend(address3, type1);
            }
            this._offset += 1;
          } else {
            address3 = null;
            var slice3 = null;
            if (this._input.length > this._offset) {
              slice3 = this._input.substring(this._offset, this._offset + 1);
            } else {
              slice3 = null;
            }
            if (!this.error || this.error.offset <= this._offset) {
              this.error = this.constructor.lastError = {input: this._input, offset: this._offset, expected: "[^\"\\\\]"};
            }
          }
          if (address3) {
          } else {
            this._offset = index3;
            var index4 = this._offset, elements2 = [], labelled1 = {}, text2 = "";
            var address4 = null;
            var slice4 = null;
            if (this._input.length > this._offset) {
              slice4 = this._input.substring(this._offset, this._offset + 1);
            } else {
              slice4 = null;
            }
            if (slice4 === "\\") {
              var klass2 = this.constructor.SyntaxNode;
              var type2 = null;
              address4 = new klass2("\\", this._offset, []);
              if (typeof type2 === "object") {
                extend(address4, type2);
              }
              this._offset += 1;
            } else {
              address4 = null;
              var slice5 = null;
              if (this._input.length > this._offset) {
                slice5 = this._input.substring(this._offset, this._offset + 1);
              } else {
                slice5 = null;
              }
              if (!this.error || this.error.offset <= this._offset) {
                this.error = this.constructor.lastError = {input: this._input, offset: this._offset, expected: "\"\\\\\""};
              }
            }
            if (address4) {
              elements2.push(address4);
              text2 += address4.textValue;
              var address5 = null;
              var slice6 = null;
              if (this._input.length > this._offset) {
                slice6 = this._input.substring(this._offset, this._offset + 1);
              } else {
                slice6 = null;
              }
              if (slice6 && /^["bfnrt\\/]/.test(slice6)) {
                var klass3 = this.constructor.SyntaxNode;
                var type3 = null;
                address5 = new klass3(slice6, this._offset, []);
                if (typeof type3 === "object") {
                  extend(address5, type3);
                }
                this._offset += 1;
              } else {
                address5 = null;
                var slice7 = null;
                if (this._input.length > this._offset) {
                  slice7 = this._input.substring(this._offset, this._offset + 1);
                } else {
                  slice7 = null;
                }
                if (!this.error || this.error.offset <= this._offset) {
                  this.error = this.constructor.lastError = {input: this._input, offset: this._offset, expected: "[\"bfnrt\\\\/]"};
                }
              }
              if (address5) {
                elements2.push(address5);
                text2 += address5.textValue;
              } else {
                elements2 = null;
                this._offset = index4;
              }
            } else {
              elements2 = null;
              this._offset = index4;
            }
            if (elements2) {
              this._offset = index4;
              var klass4 = this.constructor.SyntaxNode;
              var type4 = null;
              address3 = new klass4(text2, this._offset, elements2, labelled1);
              if (typeof type4 === "object") {
                extend(address3, type4);
              }
              this._offset += text2.length;
            } else {
              address3 = null;
            }
            if (address3) {
            } else {
              this._offset = index3;
              address3 = this.__consume__hex();
              if (address3) {
              } else {
                this._offset = index3;
              }
            }
          }
          if (address3) {
            elements1.push(address3);
            text1 += address3.textValue;
            remaining0 -= 1;
          }
        }
        if (remaining0 <= 0) {
          this._offset = index2;
          var klass5 = this.constructor.SyntaxNode;
          var type5 = null;
          address2 = new klass5(text1, this._offset, elements1);
          if (typeof type5 === "object") {
            extend(address2, type5);
          }
          this._offset += text1.length;
        } else {
          address2 = null;
        }
        if (address2) {
          elements0.push(address2);
          text0 += address2.textValue;
          var address6 = null;
          var slice8 = null;
          if (this._input.length > this._offset) {
            slice8 = this._input.substring(this._offset, this._offset + 1);
          } else {
            slice8 = null;
          }
          if (slice8 === "\"") {
            var klass6 = this.constructor.SyntaxNode;
            var type6 = null;
            address6 = new klass6("\"", this._offset, []);
            if (typeof type6 === "object") {
              extend(address6, type6);
            }
            this._offset += 1;
          } else {
            address6 = null;
            var slice9 = null;
            if (this._input.length > this._offset) {
              slice9 = this._input.substring(this._offset, this._offset + 1);
            } else {
              slice9 = null;
            }
            if (!this.error || this.error.offset <= this._offset) {
              this.error = this.constructor.lastError = {input: this._input, offset: this._offset, expected: "\"\\\"\""};
            }
          }
          if (address6) {
            elements0.push(address6);
            text0 += address6.textValue;
          } else {
            elements0 = null;
            this._offset = index1;
          }
        } else {
          elements0 = null;
          this._offset = index1;
        }
      } else {
        elements0 = null;
        this._offset = index1;
      }
      if (elements0) {
        this._offset = index1;
        var klass7 = this.constructor.SyntaxNode;
        var type7 = find(this.constructor, "StringNode");
        address0 = new klass7(text0, this._offset, elements0, labelled0);
        if (typeof type7 === "object") {
          extend(address0, type7);
        }
        this._offset += text0.length;
      } else {
        address0 = null;
      }
      return this._nodeCache["string"][index0] = address0;
    },
    __consume__number: function(input) {
      var address0 = null, index0 = this._offset;
      this._nodeCache["number"] = this._nodeCache["number"] || {};
      var cached = this._nodeCache["number"][index0];
      if (cached) {
        this._offset += cached.textValue.length;
        return cached;
      }
      var index1 = this._offset, elements0 = [], labelled0 = {}, text0 = "";
      var address1 = null;
      var index2 = this._offset;
      var slice0 = null;
      if (this._input.length > this._offset) {
        slice0 = this._input.substring(this._offset, this._offset + 1);
      } else {
        slice0 = null;
      }
      if (slice0 === "-") {
        var klass0 = this.constructor.SyntaxNode;
        var type0 = null;
        address1 = new klass0("-", this._offset, []);
        if (typeof type0 === "object") {
          extend(address1, type0);
        }
        this._offset += 1;
      } else {
        address1 = null;
        var slice1 = null;
        if (this._input.length > this._offset) {
          slice1 = this._input.substring(this._offset, this._offset + 1);
        } else {
          slice1 = null;
        }
        if (!this.error || this.error.offset <= this._offset) {
          this.error = this.constructor.lastError = {input: this._input, offset: this._offset, expected: "\"-\""};
        }
      }
      if (address1) {
      } else {
        this._offset = index2;
        var klass1 = this.constructor.SyntaxNode;
        var type1 = null;
        address1 = new klass1("", this._offset, []);
        if (typeof type1 === "object") {
          extend(address1, type1);
        }
        this._offset += 0;
      }
      if (address1) {
        elements0.push(address1);
        text0 += address1.textValue;
        var address2 = null;
        var index3 = this._offset, elements1 = [], labelled1 = {}, text1 = "";
        var address3 = null;
        var index4 = this._offset;
        var slice2 = null;
        if (this._input.length > this._offset) {
          slice2 = this._input.substring(this._offset, this._offset + 1);
        } else {
          slice2 = null;
        }
        if (slice2 === "0") {
          var klass2 = this.constructor.SyntaxNode;
          var type2 = null;
          address3 = new klass2("0", this._offset, []);
          if (typeof type2 === "object") {
            extend(address3, type2);
          }
          this._offset += 1;
        } else {
          address3 = null;
          var slice3 = null;
          if (this._input.length > this._offset) {
            slice3 = this._input.substring(this._offset, this._offset + 1);
          } else {
            slice3 = null;
          }
          if (!this.error || this.error.offset <= this._offset) {
            this.error = this.constructor.lastError = {input: this._input, offset: this._offset, expected: "\"0\""};
          }
        }
        if (address3) {
        } else {
          this._offset = index4;
          var index5 = this._offset, elements2 = [], labelled2 = {}, text2 = "";
          var address4 = null;
          var slice4 = null;
          if (this._input.length > this._offset) {
            slice4 = this._input.substring(this._offset, this._offset + 1);
          } else {
            slice4 = null;
          }
          if (slice4 && /^[1-9]/.test(slice4)) {
            var klass3 = this.constructor.SyntaxNode;
            var type3 = null;
            address4 = new klass3(slice4, this._offset, []);
            if (typeof type3 === "object") {
              extend(address4, type3);
            }
            this._offset += 1;
          } else {
            address4 = null;
            var slice5 = null;
            if (this._input.length > this._offset) {
              slice5 = this._input.substring(this._offset, this._offset + 1);
            } else {
              slice5 = null;
            }
            if (!this.error || this.error.offset <= this._offset) {
              this.error = this.constructor.lastError = {input: this._input, offset: this._offset, expected: "[1-9]"};
            }
          }
          if (address4) {
            elements2.push(address4);
            text2 += address4.textValue;
            var address5 = null;
            var remaining0 = 0, index6 = this._offset, elements3 = [], text3 = "", address6 = true;
            while (address6) {
              var slice6 = null;
              if (this._input.length > this._offset) {
                slice6 = this._input.substring(this._offset, this._offset + 1);
              } else {
                slice6 = null;
              }
              if (slice6 && /^[0-9]/.test(slice6)) {
                var klass4 = this.constructor.SyntaxNode;
                var type4 = null;
                address6 = new klass4(slice6, this._offset, []);
                if (typeof type4 === "object") {
                  extend(address6, type4);
                }
                this._offset += 1;
              } else {
                address6 = null;
                var slice7 = null;
                if (this._input.length > this._offset) {
                  slice7 = this._input.substring(this._offset, this._offset + 1);
                } else {
                  slice7 = null;
                }
                if (!this.error || this.error.offset <= this._offset) {
                  this.error = this.constructor.lastError = {input: this._input, offset: this._offset, expected: "[0-9]"};
                }
              }
              if (address6) {
                elements3.push(address6);
                text3 += address6.textValue;
                remaining0 -= 1;
              }
            }
            if (remaining0 <= 0) {
              this._offset = index6;
              var klass5 = this.constructor.SyntaxNode;
              var type5 = null;
              address5 = new klass5(text3, this._offset, elements3);
              if (typeof type5 === "object") {
                extend(address5, type5);
              }
              this._offset += text3.length;
            } else {
              address5 = null;
            }
            if (address5) {
              elements2.push(address5);
              text2 += address5.textValue;
            } else {
              elements2 = null;
              this._offset = index5;
            }
          } else {
            elements2 = null;
            this._offset = index5;
          }
          if (elements2) {
            this._offset = index5;
            var klass6 = this.constructor.SyntaxNode;
            var type6 = null;
            address3 = new klass6(text2, this._offset, elements2, labelled2);
            if (typeof type6 === "object") {
              extend(address3, type6);
            }
            this._offset += text2.length;
          } else {
            address3 = null;
          }
          if (address3) {
          } else {
            this._offset = index4;
          }
        }
        if (address3) {
          elements1.push(address3);
          text1 += address3.textValue;
          var address7 = null;
          var index7 = this._offset;
          var index8 = this._offset, elements4 = [], labelled3 = {}, text4 = "";
          var address8 = null;
          var slice8 = null;
          if (this._input.length > this._offset) {
            slice8 = this._input.substring(this._offset, this._offset + 1);
          } else {
            slice8 = null;
          }
          if (slice8 === ".") {
            var klass7 = this.constructor.SyntaxNode;
            var type7 = null;
            address8 = new klass7(".", this._offset, []);
            if (typeof type7 === "object") {
              extend(address8, type7);
            }
            this._offset += 1;
          } else {
            address8 = null;
            var slice9 = null;
            if (this._input.length > this._offset) {
              slice9 = this._input.substring(this._offset, this._offset + 1);
            } else {
              slice9 = null;
            }
            if (!this.error || this.error.offset <= this._offset) {
              this.error = this.constructor.lastError = {input: this._input, offset: this._offset, expected: "\".\""};
            }
          }
          if (address8) {
            elements4.push(address8);
            text4 += address8.textValue;
            var address9 = null;
            var remaining1 = 1, index9 = this._offset, elements5 = [], text5 = "", address10 = true;
            while (address10) {
              var slice10 = null;
              if (this._input.length > this._offset) {
                slice10 = this._input.substring(this._offset, this._offset + 1);
              } else {
                slice10 = null;
              }
              if (slice10 && /^[0-9]/.test(slice10)) {
                var klass8 = this.constructor.SyntaxNode;
                var type8 = null;
                address10 = new klass8(slice10, this._offset, []);
                if (typeof type8 === "object") {
                  extend(address10, type8);
                }
                this._offset += 1;
              } else {
                address10 = null;
                var slice11 = null;
                if (this._input.length > this._offset) {
                  slice11 = this._input.substring(this._offset, this._offset + 1);
                } else {
                  slice11 = null;
                }
                if (!this.error || this.error.offset <= this._offset) {
                  this.error = this.constructor.lastError = {input: this._input, offset: this._offset, expected: "[0-9]"};
                }
              }
              if (address10) {
                elements5.push(address10);
                text5 += address10.textValue;
                remaining1 -= 1;
              }
            }
            if (remaining1 <= 0) {
              this._offset = index9;
              var klass9 = this.constructor.SyntaxNode;
              var type9 = null;
              address9 = new klass9(text5, this._offset, elements5);
              if (typeof type9 === "object") {
                extend(address9, type9);
              }
              this._offset += text5.length;
            } else {
              address9 = null;
            }
            if (address9) {
              elements4.push(address9);
              text4 += address9.textValue;
            } else {
              elements4 = null;
              this._offset = index8;
            }
          } else {
            elements4 = null;
            this._offset = index8;
          }
          if (elements4) {
            this._offset = index8;
            var klass10 = this.constructor.SyntaxNode;
            var type10 = null;
            address7 = new klass10(text4, this._offset, elements4, labelled3);
            if (typeof type10 === "object") {
              extend(address7, type10);
            }
            this._offset += text4.length;
          } else {
            address7 = null;
          }
          if (address7) {
          } else {
            this._offset = index7;
            var klass11 = this.constructor.SyntaxNode;
            var type11 = null;
            address7 = new klass11("", this._offset, []);
            if (typeof type11 === "object") {
              extend(address7, type11);
            }
            this._offset += 0;
          }
          if (address7) {
            elements1.push(address7);
            text1 += address7.textValue;
            var address11 = null;
            var index10 = this._offset;
            var index11 = this._offset, elements6 = [], labelled4 = {}, text6 = "";
            var address12 = null;
            var index12 = this._offset;
            var slice12 = null;
            if (this._input.length > this._offset) {
              slice12 = this._input.substring(this._offset, this._offset + 1);
            } else {
              slice12 = null;
            }
            if (slice12 === "e") {
              var klass12 = this.constructor.SyntaxNode;
              var type12 = null;
              address12 = new klass12("e", this._offset, []);
              if (typeof type12 === "object") {
                extend(address12, type12);
              }
              this._offset += 1;
            } else {
              address12 = null;
              var slice13 = null;
              if (this._input.length > this._offset) {
                slice13 = this._input.substring(this._offset, this._offset + 1);
              } else {
                slice13 = null;
              }
              if (!this.error || this.error.offset <= this._offset) {
                this.error = this.constructor.lastError = {input: this._input, offset: this._offset, expected: "\"e\""};
              }
            }
            if (address12) {
            } else {
              this._offset = index12;
              var slice14 = null;
              if (this._input.length > this._offset) {
                slice14 = this._input.substring(this._offset, this._offset + 1);
              } else {
                slice14 = null;
              }
              if (slice14 === "E") {
                var klass13 = this.constructor.SyntaxNode;
                var type13 = null;
                address12 = new klass13("E", this._offset, []);
                if (typeof type13 === "object") {
                  extend(address12, type13);
                }
                this._offset += 1;
              } else {
                address12 = null;
                var slice15 = null;
                if (this._input.length > this._offset) {
                  slice15 = this._input.substring(this._offset, this._offset + 1);
                } else {
                  slice15 = null;
                }
                if (!this.error || this.error.offset <= this._offset) {
                  this.error = this.constructor.lastError = {input: this._input, offset: this._offset, expected: "\"E\""};
                }
              }
              if (address12) {
              } else {
                this._offset = index12;
              }
            }
            if (address12) {
              elements6.push(address12);
              text6 += address12.textValue;
              var address13 = null;
              var index13 = this._offset;
              var index14 = this._offset;
              var slice16 = null;
              if (this._input.length > this._offset) {
                slice16 = this._input.substring(this._offset, this._offset + 1);
              } else {
                slice16 = null;
              }
              if (slice16 === "+") {
                var klass14 = this.constructor.SyntaxNode;
                var type14 = null;
                address13 = new klass14("+", this._offset, []);
                if (typeof type14 === "object") {
                  extend(address13, type14);
                }
                this._offset += 1;
              } else {
                address13 = null;
                var slice17 = null;
                if (this._input.length > this._offset) {
                  slice17 = this._input.substring(this._offset, this._offset + 1);
                } else {
                  slice17 = null;
                }
                if (!this.error || this.error.offset <= this._offset) {
                  this.error = this.constructor.lastError = {input: this._input, offset: this._offset, expected: "\"+\""};
                }
              }
              if (address13) {
              } else {
                this._offset = index14;
                var slice18 = null;
                if (this._input.length > this._offset) {
                  slice18 = this._input.substring(this._offset, this._offset + 1);
                } else {
                  slice18 = null;
                }
                if (slice18 === "-") {
                  var klass15 = this.constructor.SyntaxNode;
                  var type15 = null;
                  address13 = new klass15("-", this._offset, []);
                  if (typeof type15 === "object") {
                    extend(address13, type15);
                  }
                  this._offset += 1;
                } else {
                  address13 = null;
                  var slice19 = null;
                  if (this._input.length > this._offset) {
                    slice19 = this._input.substring(this._offset, this._offset + 1);
                  } else {
                    slice19 = null;
                  }
                  if (!this.error || this.error.offset <= this._offset) {
                    this.error = this.constructor.lastError = {input: this._input, offset: this._offset, expected: "\"-\""};
                  }
                }
                if (address13) {
                } else {
                  this._offset = index14;
                }
              }
              if (address13) {
              } else {
                this._offset = index13;
                var klass16 = this.constructor.SyntaxNode;
                var type16 = null;
                address13 = new klass16("", this._offset, []);
                if (typeof type16 === "object") {
                  extend(address13, type16);
                }
                this._offset += 0;
              }
              if (address13) {
                elements6.push(address13);
                text6 += address13.textValue;
                var address14 = null;
                var remaining2 = 1, index15 = this._offset, elements7 = [], text7 = "", address15 = true;
                while (address15) {
                  var slice20 = null;
                  if (this._input.length > this._offset) {
                    slice20 = this._input.substring(this._offset, this._offset + 1);
                  } else {
                    slice20 = null;
                  }
                  if (slice20 && /^[0-9]/.test(slice20)) {
                    var klass17 = this.constructor.SyntaxNode;
                    var type17 = null;
                    address15 = new klass17(slice20, this._offset, []);
                    if (typeof type17 === "object") {
                      extend(address15, type17);
                    }
                    this._offset += 1;
                  } else {
                    address15 = null;
                    var slice21 = null;
                    if (this._input.length > this._offset) {
                      slice21 = this._input.substring(this._offset, this._offset + 1);
                    } else {
                      slice21 = null;
                    }
                    if (!this.error || this.error.offset <= this._offset) {
                      this.error = this.constructor.lastError = {input: this._input, offset: this._offset, expected: "[0-9]"};
                    }
                  }
                  if (address15) {
                    elements7.push(address15);
                    text7 += address15.textValue;
                    remaining2 -= 1;
                  }
                }
                if (remaining2 <= 0) {
                  this._offset = index15;
                  var klass18 = this.constructor.SyntaxNode;
                  var type18 = null;
                  address14 = new klass18(text7, this._offset, elements7);
                  if (typeof type18 === "object") {
                    extend(address14, type18);
                  }
                  this._offset += text7.length;
                } else {
                  address14 = null;
                }
                if (address14) {
                  elements6.push(address14);
                  text6 += address14.textValue;
                } else {
                  elements6 = null;
                  this._offset = index11;
                }
              } else {
                elements6 = null;
                this._offset = index11;
              }
            } else {
              elements6 = null;
              this._offset = index11;
            }
            if (elements6) {
              this._offset = index11;
              var klass19 = this.constructor.SyntaxNode;
              var type19 = null;
              address11 = new klass19(text6, this._offset, elements6, labelled4);
              if (typeof type19 === "object") {
                extend(address11, type19);
              }
              this._offset += text6.length;
            } else {
              address11 = null;
            }
            if (address11) {
            } else {
              this._offset = index10;
              var klass20 = this.constructor.SyntaxNode;
              var type20 = null;
              address11 = new klass20("", this._offset, []);
              if (typeof type20 === "object") {
                extend(address11, type20);
              }
              this._offset += 0;
            }
            if (address11) {
              elements1.push(address11);
              text1 += address11.textValue;
            } else {
              elements1 = null;
              this._offset = index3;
            }
          } else {
            elements1 = null;
            this._offset = index3;
          }
        } else {
          elements1 = null;
          this._offset = index3;
        }
        if (elements1) {
          this._offset = index3;
          var klass21 = this.constructor.SyntaxNode;
          var type21 = null;
          address2 = new klass21(text1, this._offset, elements1, labelled1);
          if (typeof type21 === "object") {
            extend(address2, type21);
          }
          this._offset += text1.length;
        } else {
          address2 = null;
        }
        if (address2) {
          elements0.push(address2);
          text0 += address2.textValue;
        } else {
          elements0 = null;
          this._offset = index1;
        }
      } else {
        elements0 = null;
        this._offset = index1;
      }
      if (elements0) {
        this._offset = index1;
        var klass22 = this.constructor.SyntaxNode;
        var type22 = find(this.constructor, "NumberNode");
        address0 = new klass22(text0, this._offset, elements0, labelled0);
        if (typeof type22 === "object") {
          extend(address0, type22);
        }
        this._offset += text0.length;
      } else {
        address0 = null;
      }
      return this._nodeCache["number"][index0] = address0;
    },
    __consume__special: function(input) {
      var address0 = null, index0 = this._offset;
      this._nodeCache["special"] = this._nodeCache["special"] || {};
      var cached = this._nodeCache["special"][index0];
      if (cached) {
        this._offset += cached.textValue.length;
        return cached;
      }
      var index1 = this._offset;
      var slice0 = null;
      if (this._input.length > this._offset) {
        slice0 = this._input.substring(this._offset, this._offset + 4);
      } else {
        slice0 = null;
      }
      if (slice0 === "true") {
        var klass0 = this.constructor.SyntaxNode;
        var type0 = null;
        address0 = new klass0("true", this._offset, []);
        if (typeof type0 === "object") {
          extend(address0, type0);
        }
        this._offset += 4;
      } else {
        address0 = null;
        var slice1 = null;
        if (this._input.length > this._offset) {
          slice1 = this._input.substring(this._offset, this._offset + 1);
        } else {
          slice1 = null;
        }
        if (!this.error || this.error.offset <= this._offset) {
          this.error = this.constructor.lastError = {input: this._input, offset: this._offset, expected: "\"true\""};
        }
      }
      if (address0) {
      } else {
        this._offset = index1;
        var slice2 = null;
        if (this._input.length > this._offset) {
          slice2 = this._input.substring(this._offset, this._offset + 5);
        } else {
          slice2 = null;
        }
        if (slice2 === "false") {
          var klass1 = this.constructor.SyntaxNode;
          var type1 = null;
          address0 = new klass1("false", this._offset, []);
          if (typeof type1 === "object") {
            extend(address0, type1);
          }
          this._offset += 5;
        } else {
          address0 = null;
          var slice3 = null;
          if (this._input.length > this._offset) {
            slice3 = this._input.substring(this._offset, this._offset + 1);
          } else {
            slice3 = null;
          }
          if (!this.error || this.error.offset <= this._offset) {
            this.error = this.constructor.lastError = {input: this._input, offset: this._offset, expected: "\"false\""};
          }
        }
        if (address0) {
        } else {
          this._offset = index1;
          var slice4 = null;
          if (this._input.length > this._offset) {
            slice4 = this._input.substring(this._offset, this._offset + 18);
          } else {
            slice4 = null;
          }
          if (slice4 === "null <SpecialNode>") {
            var klass2 = this.constructor.SyntaxNode;
            var type2 = null;
            address0 = new klass2("null <SpecialNode>", this._offset, []);
            if (typeof type2 === "object") {
              extend(address0, type2);
            }
            this._offset += 18;
          } else {
            address0 = null;
            var slice5 = null;
            if (this._input.length > this._offset) {
              slice5 = this._input.substring(this._offset, this._offset + 1);
            } else {
              slice5 = null;
            }
            if (!this.error || this.error.offset <= this._offset) {
              this.error = this.constructor.lastError = {input: this._input, offset: this._offset, expected: "\"null <SpecialNode>\""};
            }
          }
          if (address0) {
          } else {
            this._offset = index1;
          }
        }
      }
      return this._nodeCache["special"][index0] = address0;
    },
    __consume__hex: function(input) {
      var address0 = null, index0 = this._offset;
      this._nodeCache["hex"] = this._nodeCache["hex"] || {};
      var cached = this._nodeCache["hex"][index0];
      if (cached) {
        this._offset += cached.textValue.length;
        return cached;
      }
      var index1 = this._offset, elements0 = [], labelled0 = {}, text0 = "";
      var address1 = null;
      var slice0 = null;
      if (this._input.length > this._offset) {
        slice0 = this._input.substring(this._offset, this._offset + 2);
      } else {
        slice0 = null;
      }
      if (slice0 === "\\u") {
        var klass0 = this.constructor.SyntaxNode;
        var type0 = null;
        address1 = new klass0("\\u", this._offset, []);
        if (typeof type0 === "object") {
          extend(address1, type0);
        }
        this._offset += 2;
      } else {
        address1 = null;
        var slice1 = null;
        if (this._input.length > this._offset) {
          slice1 = this._input.substring(this._offset, this._offset + 1);
        } else {
          slice1 = null;
        }
        if (!this.error || this.error.offset <= this._offset) {
          this.error = this.constructor.lastError = {input: this._input, offset: this._offset, expected: "\"\\\\u\""};
        }
      }
      if (address1) {
        elements0.push(address1);
        text0 += address1.textValue;
        var address2 = null;
        var slice2 = null;
        if (this._input.length > this._offset) {
          slice2 = this._input.substring(this._offset, this._offset + 1);
        } else {
          slice2 = null;
        }
        if (slice2 && /^[0-9a-fA-F]/.test(slice2)) {
          var klass1 = this.constructor.SyntaxNode;
          var type1 = null;
          address2 = new klass1(slice2, this._offset, []);
          if (typeof type1 === "object") {
            extend(address2, type1);
          }
          this._offset += 1;
        } else {
          address2 = null;
          var slice3 = null;
          if (this._input.length > this._offset) {
            slice3 = this._input.substring(this._offset, this._offset + 1);
          } else {
            slice3 = null;
          }
          if (!this.error || this.error.offset <= this._offset) {
            this.error = this.constructor.lastError = {input: this._input, offset: this._offset, expected: "[0-9a-fA-F]"};
          }
        }
        if (address2) {
          elements0.push(address2);
          text0 += address2.textValue;
          var address3 = null;
          var slice4 = null;
          if (this._input.length > this._offset) {
            slice4 = this._input.substring(this._offset, this._offset + 1);
          } else {
            slice4 = null;
          }
          if (slice4 && /^[0-9a-fA-F]/.test(slice4)) {
            var klass2 = this.constructor.SyntaxNode;
            var type2 = null;
            address3 = new klass2(slice4, this._offset, []);
            if (typeof type2 === "object") {
              extend(address3, type2);
            }
            this._offset += 1;
          } else {
            address3 = null;
            var slice5 = null;
            if (this._input.length > this._offset) {
              slice5 = this._input.substring(this._offset, this._offset + 1);
            } else {
              slice5 = null;
            }
            if (!this.error || this.error.offset <= this._offset) {
              this.error = this.constructor.lastError = {input: this._input, offset: this._offset, expected: "[0-9a-fA-F]"};
            }
          }
          if (address3) {
            elements0.push(address3);
            text0 += address3.textValue;
            var address4 = null;
            var slice6 = null;
            if (this._input.length > this._offset) {
              slice6 = this._input.substring(this._offset, this._offset + 1);
            } else {
              slice6 = null;
            }
            if (slice6 && /^[0-9a-fA-F]/.test(slice6)) {
              var klass3 = this.constructor.SyntaxNode;
              var type3 = null;
              address4 = new klass3(slice6, this._offset, []);
              if (typeof type3 === "object") {
                extend(address4, type3);
              }
              this._offset += 1;
            } else {
              address4 = null;
              var slice7 = null;
              if (this._input.length > this._offset) {
                slice7 = this._input.substring(this._offset, this._offset + 1);
              } else {
                slice7 = null;
              }
              if (!this.error || this.error.offset <= this._offset) {
                this.error = this.constructor.lastError = {input: this._input, offset: this._offset, expected: "[0-9a-fA-F]"};
              }
            }
            if (address4) {
              elements0.push(address4);
              text0 += address4.textValue;
              var address5 = null;
              var slice8 = null;
              if (this._input.length > this._offset) {
                slice8 = this._input.substring(this._offset, this._offset + 1);
              } else {
                slice8 = null;
              }
              if (slice8 && /^[0-9a-fA-F]/.test(slice8)) {
                var klass4 = this.constructor.SyntaxNode;
                var type4 = null;
                address5 = new klass4(slice8, this._offset, []);
                if (typeof type4 === "object") {
                  extend(address5, type4);
                }
                this._offset += 1;
              } else {
                address5 = null;
                var slice9 = null;
                if (this._input.length > this._offset) {
                  slice9 = this._input.substring(this._offset, this._offset + 1);
                } else {
                  slice9 = null;
                }
                if (!this.error || this.error.offset <= this._offset) {
                  this.error = this.constructor.lastError = {input: this._input, offset: this._offset, expected: "[0-9a-fA-F]"};
                }
              }
              if (address5) {
                elements0.push(address5);
                text0 += address5.textValue;
              } else {
                elements0 = null;
                this._offset = index1;
              }
            } else {
              elements0 = null;
              this._offset = index1;
            }
          } else {
            elements0 = null;
            this._offset = index1;
          }
        } else {
          elements0 = null;
          this._offset = index1;
        }
      } else {
        elements0 = null;
        this._offset = index1;
      }
      if (elements0) {
        this._offset = index1;
        var klass5 = this.constructor.SyntaxNode;
        var type5 = null;
        address0 = new klass5(text0, this._offset, elements0, labelled0);
        if (typeof type5 === "object") {
          extend(address0, type5);
        }
        this._offset += text0.length;
      } else {
        address0 = null;
      }
      return this._nodeCache["hex"][index0] = address0;
    },
    __consume___: function(input) {
      var address0 = null, index0 = this._offset;
      this._nodeCache["_"] = this._nodeCache["_"] || {};
      var cached = this._nodeCache["_"][index0];
      if (cached) {
        this._offset += cached.textValue.length;
        return cached;
      }
      var remaining0 = 0, index1 = this._offset, elements0 = [], text0 = "", address1 = true;
      while (address1) {
        var slice0 = null;
        if (this._input.length > this._offset) {
          slice0 = this._input.substring(this._offset, this._offset + 1);
        } else {
          slice0 = null;
        }
        if (slice0 && /^[ \n\t]/.test(slice0)) {
          var klass0 = this.constructor.SyntaxNode;
          var type0 = null;
          address1 = new klass0(slice0, this._offset, []);
          if (typeof type0 === "object") {
            extend(address1, type0);
          }
          this._offset += 1;
        } else {
          address1 = null;
          var slice1 = null;
          if (this._input.length > this._offset) {
            slice1 = this._input.substring(this._offset, this._offset + 1);
          } else {
            slice1 = null;
          }
          if (!this.error || this.error.offset <= this._offset) {
            this.error = this.constructor.lastError = {input: this._input, offset: this._offset, expected: "[ \\n\\t]"};
          }
        }
        if (address1) {
          elements0.push(address1);
          text0 += address1.textValue;
          remaining0 -= 1;
        }
      }
      if (remaining0 <= 0) {
        this._offset = index1;
        var klass1 = this.constructor.SyntaxNode;
        var type1 = null;
        address0 = new klass1(text0, this._offset, elements0);
        if (typeof type1 === "object") {
          extend(address0, type1);
        }
        this._offset += text0.length;
      } else {
        address0 = null;
      }
      return this._nodeCache["_"][index0] = address0;
    }
  };
  
  var Parser = function(input) {
    this._input = input;
    this._offset = 0;
    this._nodeCache = {};
  };
  
  Parser.prototype.parse = function() {
    var result = this.__consume__value();
    if (result && this._offset === this._input.length) {
      return result;
    }
    if (!(this.error)) {
      this.error = {input: this._input, offset: this._offset, expected: "<EOF>"};
    }
    var message = formatError(this.error);
    var error = new Error(message);
    throw error;
  };
  
  Parser.parse = function(input) {
    var parser = new Parser(input);
    return parser.parse();
  };
  
  extend(Parser.prototype, Grammar);
  
  var SyntaxNode = function(textValue, offset, elements, properties) {
    this.textValue = textValue;
    this.offset    = offset;
    this.elements  = elements || [];
    if (!properties) return;
    for (var key in properties) this[key] = properties[key];
  };
  
  SyntaxNode.prototype.forEach = function(block, context) {
    for (var i = 0, n = this.elements.length; i < n; i++) {
      block.call(context, this.elements[i], i);
    }
  };
  
  Parser.SyntaxNode = SyntaxNode;
  
  if (typeof require === "function" && typeof exports === "object") {
    exports.Grammar = Grammar;
    exports.Parser  = Parser;
    exports.parse   = Parser.parse;
    
  } else {
    var namespace = this;
    json = Grammar;
    jsonParser = Parser;
    jsonParser.formatError = formatError;
  }
})();

