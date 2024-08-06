1. we will going to cover Jest. How do write test cases using Jest plus React testing library.
2. React testing library. new way of writing react test cases. before it people used to use enzyme. 
3. React testing library is build on top of Jest. It uses Jest behind the scene.
4. We will learn how to setup testing framework into our app.
5. Setting up testing is very complex
6. Why do we need test cases? generally when we develop a large scale application, there will be multiple developer working on that application. there will be 100s of components, put text in the input box and search, it will change a lot of components, CardList, Card etc. One dev made the CardList and another dev build Search component and it is possible change in Search component can break another dev's code.
7. we write test cases so that we can ensure the code we write is properly intact. If we are building new features are we breaking the existing one's in that process? that is why we always say writing unit test gives us confidence.
8. Test Driven Development. It means we write test cases even before we write our code, generally in the company they do not follow test driven development. why? is test driven development good? it is very good. the problem is when we do test driven development then the development process becomes very slow.
9. First I will write all the test cases for the function then I will write a function.
10. Generally in the company first they write the function then they write test cases, if it breaks they fix the function
11. Different types of testing, (a) Manual testing (not efficient, when human involved there is error involved) (b) Automation Testing (code testing our code) - Selenium is a tool, 
12. Selenium helps us to write entire workflow of test cases. it helps us to write entire end to end test cases.
13. What is end to end testing? we will test the whole flow. we will simulate an user. cyprus is also used for it. The whole flow is tested. this testing covers entire user journey. the QA team write these test cases. they use something called headless browser. it is like an actual browser but it does not shows anything in the screen.
14. the testing will happen on some server or some machine. E2E testing, replacing the manual testing with code. with headless browser we can write test cases faster, it does not have to do paint in the browser, but there will be virtual dom, diff algorithm and everything
15. Unit testing: this is the core job of the developers, it means you are testing small units. for example we are testing whether this card is properly loading or not. heading or image properly coming or not. kind of small component feature testing.
16. Integration testing: test integration between components, for e.g. I search something and after that my screen changes, and I see card list based on my search results. it is integration between components, we will be testing this.
17. Regression testing, smoke testing, performance testing, load testing, black box testing
18. As a developer we should do unit testing and integration testing.
19. React Testing Library is a part of Testing Library.
20. Jest is javascript testing framework.
21. npm i -D @testing-library/react
22. npm i -D jest
23. now we will configure jest, I will create a jest.config file
24. npx jest --init (npx because we just need to execute it once, because I want to create jest.config.js file once)
- use typescript -> no
- choose test environment (jsdom - browser-like)
- want to get coverage report (yes)
- which provider should be used to instrument code for coverage (babel)
- automatically clear mock calls, instances, contexts and result for every test like garbage collection (yes)
25. we have react testing library, jest and configure jest, now how can we run the test cases?
26. in package.json, we have "scripts" "test": "jest". we can do npm run jest
27. npm i -D jest-environment-jsdom
28. now I will create test. create a folder __tests__ inside component folder. whatever files I put inside the folder jest will consider them as test files. DanderScore
29. First they will do js testing then we will understand react testing better.
30. convention to write test files with .test.js or .spec.js extension. sum.test.js is the testing file for sum.js.
31. test(), 1st argument is string and 2nd argument is function, this function is the code that this test function will execute, there will be expect, this is assertion, we expect this test will call the sum function with 2 positive numbers, toBe is there, the result will be addition of 2 numbers. we also have to import the sum function in our test file.
32. now it is giving error, because we are trying to import in .test.js file, normal js file cannot have import statement, in order to fix it we need the help of babel. google search 'jest babel config'. we can use jest with babel, jest needs some babel packages.
33. npm i -D babel-jest @babel/core @babel/preset-env