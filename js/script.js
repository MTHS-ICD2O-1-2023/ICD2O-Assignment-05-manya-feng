// Copyright (c) 2024 Manya All rights reserved
//
// Created by: Manya
// Created on: May 2024
// This file contains the JS functions for index.html
"use strict"

function myButtonClicked() {
  // Input
  let inputNumber = parseInt(document.getElementById("inputNumber").value)
  
  // Process
  let numberator = 4
  let denominator = 1
  let counter = 0
  let result = 4

  while (counter < inputNumber - 1) {
    denominator += 2
    numberator = numberator * -1
    result = result + (numberator / denominator)
    counter += 1
  }

  // Output
  document.getElementById("answer").innerHTML = "The answer is = " + result.toFixed(3)
}