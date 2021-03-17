# JSON flattener in JavaScript (ES6)

This simple project contains a function which takes a JSON object as input and outputs a flattened version 
of input, with keys as the path to every terminal value in the JSON structure

## Description of my solution 

To solve this problem I wrote first a version using a functional approach, using
`reduce()` and `forEach()` functions because I am used to a functional approach.

Then I realized, even though performance optimizations were not required, that a 
procedural approach using a for-loop would be better, so I added another implementation.


## How to run 
Since I have used JS this code can both run in back-end using node.js or in your 
browser. I have provided both solutions, the first requires to have node installed 
the second one is an online JSFiddle demo.

### Using Node.js
You must set the mandatory option `--func` or `--proc` to choose which implementation
you want to use

* `node flattener.js --proc path-to-your-file.json `

* `node flattener.js --func path-to-your-file.json `


### Directly in browser

The live version of the script you can try directly in your browser is [here](https://jsfiddle.net/TiberioG/7f3q14ua/) 
