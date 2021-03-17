# JSON flattener in JavaScript (ES6)

This simple project contains a function which takes a JSON object as input and outputs a flattened version 
of input, with keys as the path to every terminal value in the JSON structure

## Description of my solution 

To solve this problem I wrote first a version using a functional approach, using
`reduce()` and `forEach()` functions because I am used to a functional approach.

Then I realized, even though performance optimizations were not required,  a 
imperative approach using a for-loop would be faster, so I added this other implementation.


## How to run 
Since I have used JavaScript, this code can both run in back-end using Node.js or in your 
browser. I have provided both solutions, the first requires to have node installed, 
the second one is an online JSFiddle demo.

### Using Node.js
You must set the mandatory option `--func` or `--imp` to choose which implementation
you want to use

* `node flattener.js --imp path-to-your-file.json `

* `node flattener.js --func path-to-your-file.json `


### Directly in browser

The live version of the script you can try directly in your browser is [here](https://jsfiddle.net/TiberioG/7f3q14ua/) 


## How to test
Test are provided by Jest, you can run them with one of the following options

* `yarn run test`
* `npm run test`
* `jest`

I have used a large JSON to test my code, this file was taken from
https://github.com/json-iterator/test-data

## Time spent

My IDE time tracker reports in total 9h, including time spent for the web demo, and both implementations
