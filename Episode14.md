1. Today we will learn how we can manage our data very efficiently into our web application.
2. UI layer: the view we see on the screen. powered by jsx
3. data layer: props, state, context
4. data layer and ui layer work in sync, everything happens over a browser.
5. Better ways, efficient ways, complex ways to handle data into our application, 
6. For small application, how I kept my data, how I am updating my data is not very important 
7. For big production ready app handling data is very crucial, for that a lot of companies use a library called redux
8. why do we need redux, we need redux to manage our data layer of the application
9. why do we use context, it is a central place to store data, any component of our app can easily access that data, to avoid prop drilling, any component in my app can also modify the context, we can use context to store logged in user data, light/dark theme, when we click on the moon icon in the header it updates the theme context, and every component reading from that context changes the background color, cart context, wishlist context
10. Instead of creating different context we can create redux store, there were major issues with redux, 
11. When my application becomes very big then instead of my context we can use redux which gives us handling, managing and modifying our data, redux has a lot more things to offer, alternative to redux: ngrx, mobx, etc.
12. when we install a library to manage our application there are cons as well, major problem with redux, complex to setup, huge learning curve, need to learn a lot of things, very tough to learn redux, lots of code we had to do copy/paste, so officials comes with redux toolkit, it is a new way of doing redux
13. Difference between redux and redux toolkit, Redux Toolkit package is intended to be the standard way of writing redux logic. Issues with redux: (a) configuring the store was too complicated (b) have to add lot of packages to get redux to do useful things (c) redux requires too much boilerplate code
14. We will build the cart flow, add item to cart
15. What is redux store? Redux store at the end of the day is big object.
16. What component can access the redux store? All the components can access redux store.
17. When we create state variable what is the scope of it? It is restricted to the component. In case of props we can pass down the data. Redux store is a separate entity, separate from the components, 
18. we cannot have multiple Redux Store in a app. In app we will have a single Redux Store for holding everything. Auth info, cart info, user info etc. everything that we want to access from anywhere in our app we will put it inside one single Redux Store. 
19. We will create logical separation into our store. We will create slices of our store. It can have a user slice, auth slice, cart slice, theme slice etc. A slice is a portion of our store. 
20. Our component cannot directly modify the store. If I click the button to add product I cannot modify the cart component directly. I will have to dispatch an action. What action I need to dispatch. Let's give it's name addItem. what will action do? It will call a function. This function will modify our cart.
21. we cannot directly modify our cart. when we click add item it will dispatch an action. the action will call a function (this function is known as reducer). The function will modify our cart (slice of our store).
22. why we cannot directly modify our store? when we have a big project we need to keep track of everything, we cannot let random component to make change our store. this is a better way of handling data. data is the source of truth so we will not let any component randomly modify our data.
23. If you click on the add button it will dispatch an action which calls the reducer function that will modify the slice of our redux store.
24. We have seen how to override store, not how can we read from the store. There is something know as Selector. If you want to read the slice you have to call the Selector, the Selector will give the info, with that you can update the UI. the name is Selector because I am selecting the portion of the store. we use Selector to read data. Selector is at the end of the hook and hook is at the end of the day function, 
25. when we use Selector it is known as subscribing to the store. means whenever my store modifies my cart will automatically modify.
26. npm i @reduxjs/toolkit
27. npm i react-redux
28. why 2 libraries? what is the job of redux? manage the state of the app. manage the store. @redux/toolkit does that. react-redux library is the bridge between them.
29. create store.js file. we import configureStore, what store contains? slices. configureStore will receive an object
30. our store is separate and app is separate. how do we provide store to our application? I will provide my application to my whole app. we will import a Provider component. wrap the whole application with the Provider component. store prop will receive our store. store={store}. passing our store to the react application.
31. create slices in separate files. import createSlice, it receives an object, we need to specify some things when creating a slice, first name of the slice, and initialState. how do I modify my cart slice? using a reducer function. when are these reducers called? when we dispatch an action, here we need to specify what action will call what reducer function. add item is the action and the anonymous function is the reducer function and when we dispatch addItem action then this reducer function will be called,
32. reducers is object containing the mapping of action and the corresponding reducer function
33. how can I modify my slice with the reducer function, this reducer function takes 2 things, one is state another thing is action payload, action payload is the place where I will get the item which I have to add to my cart, state here is the initialState, how can I update the state? I can say state.items.push(action.payload), when in the onclick I am dispatching the action it will come here in the payload, when clicking we will pass some data that data we will receive in the action.payload, 
34. The state here is always the previous state, now state is the initialState then after we use and change the state this state will be the current state, 
35. Do not return anything from the reducer function,  
36. export default cartSlice.reducer; all the reducers are combined and one reducer is made.
37. also need to named export actions. export const {addItem, removeItem, clearCart} = cartSlice.actions;
38. cartSlice created is like a big object, 
39. we have to put the cartSlice we have created inside the store
40. Things we have done: create store using configureStore(), Provider to provide our store to the app, create Slice, createSlice() receives an obj name, initialState, reducers have actions and reducer function mapping, export cartSlicer.reducer, give it to the store, reducer: {cart: cartSlice}, export const {addItem, removeItem, clearCart} = cartSlice.actions; named export actions.
41. useSelector() will receive callback function, that function receives the store, useSelector((store) => store.cart.items) like that we have subscribe store to the cart.
42. dispatch will come from useDispatch(), dispatch(addItem("Mango"))
43. useSelector() takes a function and function takes store, this is the place you will tell what you are subscribing to, what slice your component is subscribing to.
44. I should never subscribe my component to the whole store. It will cause major performance issue. Every time store changes my component will rerender. we have to subscribe to specific portion of the store, the portion the component is using.
45. Read about RTK query, async thunk, middleware
46. Redux dev tools, extremely important, see how the action is getting dispatched, how data is updated, in the redux dev tools we can see initially items was empty the we dispatched an action addItem, now item array has one item
47. If I want to see the diff between 2 states then we can see by clicking in the diff, it shows one item is added
48. It will be very helpful, when my application grows there will be so many slices, so many actions, so many dispatches, This extension will track each and every thing we did, add items, clear cart then add item again etc, I can also debug, I can skip an action (if it is not working) and play the other action 
49. It even wrote test cases for me, for my reducers, we cannot use this test cases directly, we need to modify it, 