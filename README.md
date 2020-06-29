# Slot Machine

Basic slot machine app, written on React with TypeScipt

## How to run

 * In order to run the app:
  1. Node.js is required
  1. Clone the repository
  1. Run 'npm install' in the local folder
  1. Await node to install packages
  1. Run 'npm start' in the local folder to start the app

## App options
 * **at the beginning** you will have **100 funds** and **stake of 10**
 * for each spin the engine is withdrawing selected stake from your funds
 * when your funds are not enough for the next spin - *the spin button will be disabled*
 * you can deposit more funds from the top options

## Win Pool
 * There is 4 types of active cards:
  1. Apple - **45% probability** to appear
  1. Banana - **35% probability** to appear
  1. Pineapple - **15% probability** to appear
  1. Wildcard - **5% probability** to appear

#### To win a spin there should be same card types matched on the rows (multiple row matches are enabled)

 * There is three possible win combinations:
  1. All any type cards equal
  1. Two any type cards equal + one wildcard
  1. One any type card + two wildcards

 * Each card type holds different coefficient when matched:
  * Apple - 0.4
  * Banana - 0.6
  * Pineapple - 0.8
  * Wildcard - 0

 * Examples:
  * Apple, Apple, Apple - 0.4, 0.4, 0.4 = 1.2 coefficient
  * Apple, Wildcard, Apple - 0.4, 0, 0.4 = 0.8 coefficient
  * Apple, Wildcard, Wildcard - 0.4, 0, 0 = 0.4 coefficient