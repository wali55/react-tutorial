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