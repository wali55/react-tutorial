Header
        - Logo
        - Nav Items
        - Cart
      Body
        - Search Bar
        - RestrauntList
          - RestrauntCard
            - Image
            - ResturantName
            - Rating
            - Cuisine Tag  
      Footer
       - Links
       - Copyrights

1. jsx can only have one parent
2. React.Fragment is a component that is provided by React. If we do not want extra div we can use it instead of div 
3. React.Fragment is like a empty tag
4. <React.Fragment></React.Fragment> and <></> are the same thing and we cannot pass any style or attribute over here
5. inline styling in React, style={{backgroundColor: 'red'}}
6. Config Driven UI, based on the condition/configuration UI will change, this config is send by backend
7. We should have one website which will work for Dhaka, Khulna, etc. and config may be different based on location
8. book?.name, optional chaining, use if the name does not exist in the data
9. virtual dom is not a concept of React. It is used in multiple places. We keep a representation of dom with us. This representation is called virtual dom.
10. why do we need virtual dom. we need virtual dom for reconciliation in React. Reconciliation is a process where React uses diff algorithm to diff one tree from other (actual dom from virtual dom). And decide what need to be changed in UI and what does not need to changed in the UI. The diff algorithm finds out what needs to be updated and just update that small portion. It does not rerenders the whole app.
11. whenever we have multiple children with same tag, one new child come React will not know the children order. As all of them are div React will not know what element came, so React will rerender all the children. As React does not know which child is changed. In this case if I use something known as key which is unique. So in this case React will only rerender the new item.
12. why React is fast?
13. React uses something called virtual dom. it is a representation of the actual dom.React uses something called reconciliation. It is a process where using diff algorithm React finds out the difference between the trees (the actual dom with the virtual dom). And when we fond out the what is changed the React will rerender only the part which is required.
14. why we do not use index as the key
15. We should also need to create a config file. What should we put in the config file.
I put all the hard coded things in my config file. Like a url. It is used in my 10-20 components. So, we will put this in config/constants file. so we can change this from one place.
16. React uses one way data binding. we have a variable in the value attribute, we need to modify this variable when we are writing in the input field. In angular and vue there is two way data binding. If I change value of the input the variable of value will automatically change. When we use 2 way data binding our app becomes unpredictable. we will not know where in my app this variable is getting modified.
17. In React Whenever I need a variable which will change then local variable is not used. I need to use React variable. It is like a state variable. 
Every component is React maintains a state. I can put some variable on that state. Every time we need a local variable we use state in it.
18. What is state?
19. Every time I need a variable that will change I will create that as a state variable using useState hook.
20. Hooks are nothing but like a normal functions. Written by fb dev and given to us. Different hooks have different functionalities.
21. useState hook is a function whose job is to create a state variable. useState hook/function returns an array, the first element is the state variable and 2nd element of that array is state setter function.
22. You cannot directly modify state variable. You should modify your state variable using state setter function.
e.target.value is whatever I am writing in the input box. whatever I am writing now is updated in my state variable, setState(e.target.value)
23. why do we need state variable? Suppose I have a normal variable. If I update the variable React will not know I have updated the variable. And React will not rerender the page. If I have a state variable and update it using state setter function then React will rerender and we can see changes in the UI.

Episode 8:
1. config driven UI, every big company is using config driven UI for building their web application.
2. In React whenever something that will be change in the UI, we uses a state variable to handle that.
3. Assignment to normal variable can change the value but we need sync the UI with our data. so state variable and state setter function is used instead. React needs to know if this variable changes it has to update the UI. In case of normal variable React cannot do that. In case of state variable React is able to do that.
4. DOM manipulation is an expensive process. Because React only changes small part of the DOM that needs to be updated that is why React is very fast.
5. React keep tracks of the state variable.
6. After updating the DOM will it rerender the whole component? Yes. It rerenders the component. The updated component and it's children components will be rerendered.
7. Monolithic architecture: api, frontend, notification, sms, all are in one project. If we need to change a button we need to deploy the whole project again. Monolithic architecture has it's own advantages.
8. Microservice architecture: one or several projects for api, maybe several project for backend, etc, Ubar has 100s or services or project, under one domain name but each project running on different ports. They can call each other using these different urls.
9. API call using js, fetch, js function, we can get it from window object, browser api, we can call fetch(), and pass api and it calls the api, where should I make api call, if we call api inside component it will call the api in every key press. then what is the solution, we need to build a feature like as the page loads, call the api and fill the data,
10. There are 2 ways to load the page and call the api, first, Load the page -> call the api(300ms) -> render the page (200ms), after 500ms user will see the page, second way, load the page -> render the page (100ms) -> also same the call the api (300ms) and rerender the page with updated data(200ms). second way is better for better user experience. To do this react give us the super powerful hook which is useEffect hook.
11. useEffect is a function whose 1st argument is a callback function, it means the callback function will not be called immediately, but whenever useEffect wants to call it. React will make the call back function is called at a specific time. Normally after every rerender the callback function inside the useEffect will be called. If we don't want that, we can pass a empty dependency array as the second argument of the useEffect. We can put state variables inside the dependency array, if the state variable mentioned inside the dependency array changes then the callback function will be called. That means my useEffect is dependent on to this state variable.
12. When a component rerenders? Either my state changes or my prop changes.
13. Component will be initially rendered, then useEffect will be called. useEffect having empty dependency array
14. Our browser is blocking us, telling us we cannot make api request from out localhost to Sweggi, we need to install chrome plugin "cors chrome" search and install
15. When I refresh the page the code directly will go to render and render the component with initial data, api call is not done yet, then api call is made and we successfully got data from api, after getting data the component wants to rerender again because restaurants state variable is updated, then rerender will happen with new restaurant data we got from api, 

16. Before api call when my component initially render I should show a loader. Industry people load the basic skeleton before making an api call. Good user experience. Before they use just a loader and suddenly all the data come at once, this is a bad user experience. Human brain does not like lots of fluctuation in UI, shimmer UI resembles the pages actual UI
17. Conditional rendering, either load shimmer UI or render actual UI after api call.
18. How can I avoid rendering a component. if (!allRestaurants) {return null}. This is known as early return. If I do not have allRestaurants then do not render component.
19. We can write js expression inside {}, inside jsx
20. Writing if else condition is statement, we cannot do it inside {}, we have to use ternary operator.
21. Why React application is fast. For Bundler(minification, img optimization, hot reload replacement, file watcher, tree shaking), React(virtual dom, reconciliation, diff algorithm) , babel(compile/transpile jsx into React element which is object, later it will create html dom element)
22. Diff algorithm is written in React library not in the React DOM. React Native also uses diff algorithm.

Episode 9
1. useEffect is a hook that React gave use which is called after the component is rendered. 2 things we have to pass inside useEffect, callback function and dependency array.
2. Never create a component inside another component. If my outer components state changes and it renders my inner component will be created lots of time. 
3. Never write useState inside if else block, for loop. Because it creates inconsistency.
4. Never create useState outside of your functional component.
5. You can create multiple useEffect inside a component.
6. Why CDN is a great place for storing images. 100% up time, cache images, faster, optimizes things. Images are already optimized when we put it to CDN. couldinary store images.
7. If I go to /about, then I want to go to the About page. For that I need to write routing configuration. {createBrowserRouter} a function from react-router-dom. createBrowserRouter([]), inside this we have to write the configuration, what will happen if I go to /about path, then load About component, {path: '/', element: <Home/>}
8. After creating route we have to provide it, "RouterProvider" is a component. I will render this component with this configuration <RouterProvider router={appRouter} />. Whatever root will render it will render according to the appRouter configuration.
9. react-router-dom gives us "useRouteError" hook. when we call it gives us object having status and statusText,
10. react-router-dom is very powerful. it does not let any routing error go to console. It catches all routing error. Now we are reading errors and showing them to users.
11. SPA - Single Page Application, this type of application when I click to go to a different page, it does not reload, it does not make a network request.
12. There are 2 types of routing, client side routing and server side routing, client side routing: click on about and go to about page without refreshing, and making api call, because all of our component are already on out code.
13. react-router-dom gives us something known as "Link". Instead of href we give "to". react-router-dom is keeping a track of all the Link. As browser knows only the anchor tag, at the end of the day Link is converted to anchor tag.
14. When I go to /about, I want to render <About /> between <Header /> and <Footer />. In the route configuration there is a property called children. I have to make children of <AppLayout />. You can create children of your route. Now the About is the child of AppLayout, 
15. react-router-dom gives us the "Outlet" component. Outlet will be filled by the children configuration. <Header /> and <Footer /> will be in the all the pages. The changing part will come with the help of <Outlet />.All the children will go to the Outlet according to the route.
16. Dynamic Routing: /restaurant/:id
17. react-router-dom gives us useParams, to read parameters from url, routing parameters. useParams() gives return us {id: 123}
18. Object.values, my whole obj into arr of values, 
19. Initial render our page is empty obj but still we are trying to read a lot of things from it. We can give the default value as null and if (!restaurant) then return <Shimmer />.
20. Now we are mapping on Link so the key should be on the mapping component.
21. Module structure: reusable, readable, testable, maintainable, moduler, 

Episode 10:
1. React initially started with the class based component.There is no concept of hooks back then.
2. children of children, /about/profile, parent /about, children will be just "profile", if I write /profile instead, then React assumes I want to say localhost:1234/profile, which is wrong, / means from the root, children will always be injected to <Outlet> according to routes.
3. syntax: class then component name (Profile) then I have to tell react this is not a normal js class this is a component, so we write extends React.Component.
4. The most important part of class based component is your render method, we cannot create a class based component without render method, render method returns some jsx, whatever we return from render function will be injected to the dom. We use the class based component the same way as the functional component.
5. using extends keyword We are inheriting property from React.Component class.
6. Passing props in class based component is the same, we receive props in class based component using {this.props}, when we pass props to a class based component, React attach the props to the "this" keyword of the class of class based component. props is an object.
7. React knows whenever there is a state change or prop change I need to rerender the component. when we say rendering that means we are calling render function and returning some jsx.
8. setter function is not mandatory to write.
9. How can we create state inside class based component. class has "constructor" method, 
10. In class based component constructor method will receive props and inside of that method we will call super with that props. why do we use super, what is a constructor, constructor is a place that is used for initialization, when class component is rendered, the constructor method is called, the best place to place my state is inside the constructor method, 
11. Now how can we create state in class based component, React has something, this.state, is an object which has property of state variable and value as the default value, 
12. How can I use my state variable, if my state variable is count then, we can use it like this {this.state.count}
13. If we need to create 2 state variables then we will create them in the same this.state obj, React uses all the states in a whole big object
14. how can we use setter function to update the state, this.setState({count: 1}), we cannot mutate state directly. this.state.count = 1, this is not how we update, react will not rerender if we do that,
15. What will run first render() or constructor(),
16. React Life Cycle, every class has a life cycle, First a constructor is called then the component is rendered, 
17. Where I can make api call in class based component, componentDidMount() React has this method, this method will be called after the component render, 
18. when a class based component loaded on the page it has some life cycle methods it calls, life cycle methods: constructor()1st, componentDidMount()3rd, render()2nd, componentDidMount() this is the best place to make api call, 
19. why component did mount is the best place to make an api call? because, because after component renders componentDidMount() is called, 
20. parent constructor, parent render, 1st child constructor, 1st child render, 2nd child constructor, 2nd child render, 1st child component did mount,  2nd child component did mount, parent component did mount.
21. when parent render it will trigger the life cycle of its child,  
22. when React is rendering things up it does it in 2 phase, 1st is rendering, 2nd phase is committing, 1st render phase, 2nd commit phase
23. React first finishes the render phase, render phase include constructor() and render()
24. Commit phase is where React is actually making changes in your dom, componentDidMount() is called after the dom is updated
25. when there are 2 children React try to batch up the render phase, after render phase of 1st child if react sees there are more child react tries to do the render phase of them before running the commit phase of the first child
26. render phase is first or commit phase is first, render phase is first, because commit phase it tough,
27. After the the children's render phase is done then react will update the dom, 
28. we can make componentDidMount() async, but in the useEffect callback function I cannot make it async why? different way how hooks are build
29. Parent constructor, parent render, child constructor, child render, parent component did mount, api call log from child, child component did mount, child render
30. Parent component did mount is called before making api call of the child, because child component did mount is async function and it take some time to load the data, it will delay the child component did mount
31. Rerender cycle known as updating
32. child constructor, child render, update dom, child component did mount, api call, setState, child render, dom update, componentDidUpdate, 
33. componentDidMount() will be called after first render, componentDidUpdate() will be called every after next render
34. component mount/load and component unmount/unload also componentWillUnmount(). When I go to another page my Profile component will be destroyed (removed from the dom) just before that componentWillUnmount() will be called.   
35. Component did update(prevProps, prevState). if I want every time count changes do something then, componentDidUpdate(prevProps, prevState) {if(this.state.count !== prevState.count) {//code}}
36. componentWillUnmount() when it will be called? When we leave a page. we have single page. we are just changing the component. we need to clear a lot of things when we are changing the page. Suppose we have a setInterval() in componentDidMount() in one page, if we move to a different page it will still be running. If we back to the same page it loads and call the setInterval() again, now we have 2 setInterval() running, when I am changing my page it is not reloading the page it is only changing the component, every time I load the about page it will create a new setInterval(), all the setInterval() will remain, damage my app performance if I do not clean it in componentWillUnmount(), this is shared throughout the class, wite this.timer = setInterval(), and in componentWillUnmount() write clearInterval(this.timer).
37. If I write setInterval() inside the useEffect() and go to the another page, setInterval() will not stop. we have to clean up things here.
38. in useEffect() callback function return a function, it will be called when unmounting the component, 
39. why do we write super props and constructor props.
40. we can do async componentDidMount() but we cannot do useEffect(async()=>{}), why?


Episode 11
1. Custom Hook: why should we build our own hook? when should we build our own hook? how should we build our own hook?
2. Reusability, readability, separation of concerns (maintainability), module, testable. why do we write function? we can wrap up a small piece of logic inside a function.  
3. In the onClick button we call filterData() function, here we do not need to know what logic filterData() is using (binary search/linear search) to filter the data. I just need the output here. we need to abstract the logic, it makes our code much more readable, if I need to use this code to filter data somewhere else I can just reuse it.
4. We need a common place where we can keep our utility function and import from there.
5. utils folder. Means utility, some people name it common/helper/shared. we created a file inside name helper.js. we cut the filterData() function there and export it from there. we can now use this function to any file.
6. This is more testable, I can write a separate test case for this filterData() helper function, and if something does not work
7. Our code is more maintainable because it is easier to debug. We know our filter logic is the the helper.js file. Easy to find and fix it. Hooks are also used for the same reason.
8. our code is modular means we have broken down our code into meaningful pieces. every component has smaller responsibility.
9. RestaurantMenu component doing 2 things, fetching data and displaying data, can we extract some logic from this component, 
10. First getting the resId from the url, 2nd making api call to get the particular restaurant data, 3rd displaying the particular restaurant details data, let's build a hook, with the help of that we can get the restaurant details, when ever creating a custom hook akshay likes to create a new file for that, name of the custom hook must start with the "use" keyword, React will know that it is a hook
11. useRestaurant will fetch the data for us and send me, when we call useRestaurant we will pass resId, useRestaurant() will receive the resId, with that resId make api call and fetch data and return the data which will be put into restaurant variable. 
12. useRestaurant() will get data from api, as the resId change the data will also change, I will create a state for this custom hook, create and maintain state variable for this fetching data logic. we will fetch data inside useEffect, so we are using useState and useEffect inside the custom hook. 
13. useRestaurant(), in the RestaurantMenu page when we call useRestaurant(resId) passing resId, then we go the the useRestaurant() page create restaurant state, calling api inside useEffect, getting the data then setting the state and here will be also reconciliation process like in the component. 
14. As useRestaurant() hook is called by RestaurantMenu component, so when update happens of the state in useRestaurant() then RestaurantMenu component will rerender
15. Sometime we have a broken internet and we are playing a video or browsing the internet, then it will show "Looks like you are in offline" and also if I am not connected with internet my green dot becomes gray dot. we can give a rich experience if we can build that.
16. Feature: when user is offline and tries to click on the restaurant card I will restrict the user clicking any of these and show message "check your internet connection"
17. How will I get to know whether I am online or offline? there is js thing called window event online.
18. useOnline(), whenever I am online or offline the status and UI should update accordingly. for this we need state variable.
19. How many times I have to set my event listener, just once, when my page loads.
20. now we can understand how useParams() gives us the url, and useParams() also must use state, as every time my param changes my component is reloaded
21. we are using useOnline() custom hook instead of normal function because in custom hook we can have state, useState and useEffect hook, inside normal function we cannot do that
22. How to fake I am in offline, Network, dropdown "offline". Now we have build a system to tell whether I am online or not.
23. This is not a senior dev code, because I am not cleaning the cache, I am not removing my event listener, whenever I am going to the offline then coming to the online a new event listener is created? no because we are using empty dependency array in useEffect, so useEffect will be called only once no matter how many times we go the online or offline, but it is always a good idea to clear out event listener when we go out of our component,
24. Now we know how if online we can show the green dot and offline red dot, using the useOnline() custom hook we just have created.
25. we can make useLoggedIn() custom hook, whenever we are building a feature we should think can I build a hook for it. home work create a custom hook to use local storage.
26. parcel, webpack, vite, these are bundlers, bundle our code, how many files bundler produce after bundling, this one file have all the code, all the component, hooks, whatever we write now, all of them are bundled, minified, optimized, in production bundle the size of this index file will be even smaller
27. If the bundler took 100s of component's code and put it up in one index file what will happen, our app will be very slow, the size of that file will be enormous, it does not make sense to put all of our component into one file, if I make a large scale production ready application we cannot make just one bundle, then what should we do, we should do chunking 
28. Chunking/Code Splitting/Dynamic Bundling/Lazy Loading/On Demand Loading/Dynamic Import: all of them are same concepts.
29. Is bundling good or bad? It is good until a limit, you cannot bundle everything into one file, you have to bundle logical bundle
30. It is just one line of code it will not make any difference. wrong. just a few lines of code can optimize your code to next level.
31. How make my trip split the bundle? you do not want to break the experience of the user and you do not also give them huge bundle size, keep your bundle size small and still logical
32. Make my trip website, 80% people come to this website to book a flight, how many of them want to book train ticket, very low, 100+ component for flight, 100+ component for bus, 100+ component for train, and other all of them will be loaded in the browsers, 
33. so, in your large scale application you build different chunks, you build different bundles based on the use cases. It is upon the developers wisdom. This will help you in your system design interviews.
34. when I will build make my trip I will use code splitting for all them, when am doing bundling, using parcel, bundle does not include random code, logical bundling
35. It does not make sense to build all the components of HomeStays along with my flight, whenever my homepage loads it should just load component for my flight, if I click on the train then only, when I click on the bus the bus bundle will load, this is called "On Demand Loading", 
36. Make My Trip is an image heavy site, I will keep all the images on the CDN, I will compress those images, I will cache the images, 
37. PayTm, each icon is a different bundle, Recharge is different bundle, movie ticket is a different bundle, UPI is a different bundle, 
38. Swiggy has something called InstaMart also, InstaMart should be a different bundle, Offers can be new bundle, cart can be a new bundle, Assume InstaMart is has 100s of components. Instamart code is also inside the index.js, lets do chunking, where we will do the chunking, where is the import for Instamart, we will do chunking there, there we have to lazy load it, there we have to do dynamic import, lazy() this is for lazy loading, come from react library as a named import, it receives a callback function, the callback function returns import() function, this import() function receives the path. It is a lazy import, now in index bundle we do not have the Instamart code, When we click on the Instamart link it will load the Instamart bundle, this is on demand loading, this is on demand import, this is known as code splitting, this is known as bundle chunking,    
39. when I go to from flight to train it does not reload the search bar because it is already loaded only the data below reload.
40. When I go to Instamart why it is giving error? because here react is trying to load data that is not even there. so react will suspend the operation
on demand loading -> Upon render -> suspend the loading, the Instamart bundle took 27ms to load but react tried to load it before that
41. Import {Suspense} from "react"; wrap Instamart inside Suspense, <Suspense><Instamart></Instamart></Suspense>. Then takes care of it AutoMagically, when I write Suspense then React takes care of these components in a different fashion, then React know these components will be Lazy loaded so it waits, to this Promise to resolve, Suspense component takes a prop which is known as fallback={<Shimmer />}. Shimmer will be shown until the Instamart is available. why large scale apps are fast.
42. Never import your component dynamically inside another component. Lazy load in the top along with other imports.
43. when you are building large scale application sometimes you need to create hooks to offload your logic and make your component file clean. 


