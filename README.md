○ How to build your program.

// Clone this repo.

○ How to install dependencies.

// To run locally: Install Node.js and NPM then:
// $ npm install request && node FoodTruckFinder.js

○ How to run your program, with example commands on how to  run it if necessary.

// Be sure to navigate to the correct folder:
// $ cd FoodTrucks

// Produce first ten results CLI:
// $ node main.js

// Produce next ten results CLI:
// $ node next.js


○ A one- or two-paragraph write-up describing, at a high level, what you would do differently if you were asked to build this as a full-scale web application. In your write-up, please focus on the technical differences between the command-line program and the web application, rather than on the product differences.

The first implementation change would be a store or database of some kind. Utilizing React/Redux, placing the request data object and managing state changes will increase reliability, scalability, and predictability. Another implementation change would revolve around a faster user experience. This could be accomplished in several ways. One such suggestion would be to group and sort the data in a more efficient manner depending on which filter parameters that were being executed. Another implementation change would be creating and intuitive U/I & U/X. This would be accomplished with input fields for filtering parameters and buttons for displaying next or previous results. Also hardcoded values would not be present as they are with the next option currently.

Another change would be how updates and changes were executed. Having a stable deployable codebase would require testing, deployment environments (development, staging, production, etc.), and various other checks/balances. Utilizing a continuous integration and delivery platform such as CircleCI will help improve this process. Having access rights and a some sort of authorization method is also critical. This prevents outside changes to occur outside of the creators control. While these are just a few suggestions to the implementation of a full scale web application there are many more that should be taken in consideration/executed.
