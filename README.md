Canopy-JSON
===========
A simple json parser

Purpose
-------
This project is intended to demonstrate how to use the Canopy PEG parser to create a language parser.  JSON was chosen as it is extremely simple, and useful.

Usage
-----
```
var JSON = require('canopy-json');
JSON.parse(...);
JSON.stringify(...);
```

Modifications
-------------
Any modifications to the `lang.peg` file should be recompiled using `canopy lang.peg`.

