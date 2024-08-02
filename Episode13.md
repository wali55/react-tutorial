### Data is the new oil (context API)
1. Handling data is the most important for an application
2. UI layer of the app: everything you see on the browser
3. Any frontend app have 2 layer: UI layer and data layer.
4. UI layer is written in React by JSX.
5. 2 virtual dom, current and previous virtual dom, the difference is calculated by the diff algorithm then the that part is updated in the real dom. The process is called the reconciliation process.
6. what does data layer consists of: props and states. how your UI is rendered with the data. Suppose we have a card, we want to show some data inside it, the data is held somewhere (states and props), 
7. do we only manage data layer using only states and props, there are more things to it
8. difference between states and props: states: components memory, state variable holds this state, and can change it with setting function, after changing in this way component rerender and we can see update in the UI
props: we can pass data (any data type), function from parent to child component. Props are like local states of our parent
9. Props Drilling: It refers to the process of passing down props through multiple layers of components.
10. UI layer and Data layer will be difficult to maintain when my app grows very large. we can use React Developer Tools to maintain it.
11. Inspect > React Dev Tools > Components & Profilers
12. Clicks on the Component, shows the whole hierarchy of tree, like mini virtual dom, it helps you debug your app a lot, this tool will help you to debug the data layer, if I click the RestaurantCard then I can see the props it is receiving, this is the data layer
13. If I am working on a large scale application I will not know what component has what props, what states, I will not have any idea from where this data is coming in, React Dev Tools will help us in this case
14. If in my card the data is coming from api, one data is missing then I will not this is not the problem of my code this is the problem of the api
15. If two people working on the same app, I wrote this code for passing in props, other person does not have any idea of it, other person come here he can see the props this component receiving and the states this component have.
16. What if I need to pass data from child to parent? one way is we can build our custom hooks, we can use them any component we want to, but it is not a good way in this case, data management will decide whether our app is good, scalable, reusable, structure your data well
17. Is props drilling is a good way to pass the props? No, it makes your code cluttered, some of the components on the way do not even use this props, 2-3 level down is acceptable but not more than that, we can use context API or Redux to solve this problem, another cons of props drilling: if I change the props then all the components that are using this prop will rerender, 
18. Can I make a reusable component section? Instead of rendering all the section components we can render Section.
19. Want to build a feature of show and hide the description. We can use state. Where should I have my state? We have build our own accordion component.
20. New feature: If I click on the first accordion then click on the 2nd accordion then 2nd one should open and first one should collapse. Do section components share state or not? They do not share state. 3 sections have different states and different props. If I click on the 2nd section we want to change the state of the sibling. We cannot change the state of another sibling from a component.
21. Instead of each and every component maintains its own state, we will put the state into their parent and parent will decide the state of its children. This concept is known as lifting the state up.
22. If I want to show only one and hide all others. If I want click a button on the child and change its parent state what should I do? when I click on the one section it makes it true and makes the other sections false. We just need to track what we have to show. Just keep the info about what section is visible not the whole object, I can keep key or indexes, at a time only section can be visible, If my visible section is about how can I make it visible and others not visible, we studied lifting the state, prop drilling, why managing data is so important, 
23. React Dev Tools Profiler: this records the whole section, records the whole user's journey, start recording, do something, after that stop the recording, we will get a flameGraph it shows us what happened, it shows us how much time each component took to load, with the help of these things I can make my app performant, shimmer was rendered after 3.5s for 11.1ms, body was loaded then link tag was loaded on the top. You can see how much time each component takes optimize accordingly, 
24. I can rank my component in the profiler, this is just tracking the metrics, after that we need to optimize out app, "FlameGraph" and "Ranked"
25. When you need same data across all your app, you have to store it in a central space, React gives us the access of this central space which is known as context, some companies use redux store to handle this type of thing, it is like a shared state for whole app, any component can use that data, MobX, Redux these are state management libraries.
26. Why use context? because I want some data to be accessible from any where in my app. If I want my user info to be accessible from any component in my app I will create a context for it, 
27. I can make a global variable that is accessible to all my component but React is not tracking it
28. Assume context as some big object or big piece of data. I will create separate files for each context.
29. import createContext from react, it is function, it takes in some data which you need all across your application, it takes the default value of my context, 
30. Now if I want to use the user name in the header how can I use it?
31. What are the context I can create? cart, random location info, footer, rating, 
32. When I am using the context I need to specify which context I want to use? inside useContext() pass the context that we created, destructure object
33. context is not tied to a component, state and props are tied to components, 
34. It is so much easier than drilling the props, why do we need props, we can do everything inside the context, It is like a data store.
35. How do I use context inside class component? Class component does not have a hook. In class based component we use context like component <UserContext.Consumer>{(value)=> console.log(value)}</UserContext.Consumer>. this value is the value that is returned by our context.
36. if I do not want dummy data for context, I want have context the updated data after calling the api, 
37. You can modify your UserContext using a provider, we also have <UserContext.Provider></UserContext.Provider>. There is a value prop. We will pass a value to this UserContext.Provider. This will change the dummy data. This is how you override the default value.
38. where should I use this Provider, why did I wrap everything inside the Provider, I want to warp every component with this Provider so that I can use this context to all the components
39. I can modify my context for small portion of my app if I want. I can pass different data in the different portion of my app.
40. Let's create an input box to modify our context, 
41. Profiler is recording each and every update, it has 56 events in FlameGraph, 56 times reconciliation process happened
42. React router dom, navigation all of them uses context behind the scene
43. We can use displayName, in the context so that we can see this in the React dev tools