// Copyright (c) 2021 Ryan-Shaw-2 All rights reserved
//
// Created by: Ryan-Shaw-2
// Created on: May 2021
// This file contains the JS functions for index.html

"use strict"

function guessClicked () {
  // this function calculates the volume of a sphere

  // input
  const randomNumber = Math.floor(Math.random() * 6) + 1
  const userGuess = parseInt(document.getElementById("user-guess").value)

  // process
  if (userGuess == randomNumber) {
    // output
    document.getElementById("user-answer").innerHTML = "That is correct"
  }
  if (userGuess != randomNumber) {
    // output
    document.getElementById("user-answer").innerHTML = "Sorry, that is incorrect. The correct answer is " + randomNumber + "."
  }
}
