# week-4-game

Hidden value number game with the goal of matching the target number by clicking the crystals to, first determine the value of each, then using that info to build the current number to match the target number.

Crystals are assigned values from an array that is built on start by a loop that generates a random number. That number is pushed to an array only if that number is not included in the array already.

the target number is built by multiplying each crystal value by a set number and summing those products. This insures that the target number is solvable by the player.

the lives are determined by summing together each of the factors used with the crystal values to build the target number.

the player clicks each crystal to determine their value while also building up the current number. if the player matches the current number to the target number without using all of her lives she wins. If she uses all her lives she losses. if the current number becomes larger that the target number she losses.