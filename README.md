# Scope of my Solution

1. The project is written in React with React Context instead of Redux as my store and Typescript because I believe the new React Context API, React Hooks and Typescript are the future.
2. The user is able to identify sudden peaks in his/her real-time continuous series data so as to focus on important changes.
3. A threshold of 10 is set by default. But this threshold can be changed to any positive number. When the moving z-score is above this threshold, a peak is detected(represented as 1) but if the moving z-score is below the threshold, we detect an abscence of a peak (representd as 0).
4. New time series data are generated every 3 seconds with values between 1 and 15 (as in my example)
5. Unit test is written for the function that handles the generation of the real-time continuous series data. These tests ensures that,
    1. The number of generated numbers is 50
    2. The numbers generated are in between 1 and 15 or in between a specified range.
6. Tailwind css was used for styling.
7. Apexchart was used as the chart library.

# Running the APP

> - Clone the repository using the command `git clone [repo url]`
> - run `git checkout feature-full-project-implementation` to checkout to the branch that has the full project implementation
> - run `npm install` to install the application dependencies
> - run `npm start` to start the application
> - run `npm test` to run all tests on the application


# Time it took to implement
Total Time Taken 3 hours 30 minutes
> - 30 munites to read and understand the project specification
> - 30 minutes to write down my pseudo code and decide how my interface should look like and what chart library to use
> - 1 hour 30 minutes to write the actual code
> - 1 hour to write unit tests and README documentation

# Improvements
1. Display the number of time series data that are above the set threshold
2. Use another color (maybe red) for signal chart
3. Add UI/Components tests with React Testing Library
