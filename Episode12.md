1. Learn Tailwind CSS
2. Why do we need CSS framework, write optimized code and it saves time.
3. Overall how you can style your React component?
4. There are various ways you can write CSS.
5. Normal CSS.
6. Writing SCSS & SASS: They make the CSS writing experience good.
7. Advantages of SCSS over normal CSS: nesting, mixing, reusability, variables, it gives us superpower, it is the modern way of writing CSS. At the end of the day SCSS is converted/compiled to CSS. 
8. style={{backgroundColor: 'lightgreen'}}, passing js object inside curly braces, inline style in jsx. Why it is not a good way of writing CSS, reusability, repetition, difficult to maintain, if we need to change some styling then difficult to find, it is a heavy job for our browser (inline CSS), try to avoid it, 
9. Material UI: common things we need, button, list, card, navbar, fully loaded component library, pros of using a design library, easy to use, reuseable, saves a lot of time, gives us automatic theming, gives us consistent UI, in system design interviews you have to discuss what you will use to style the component, cons: it makes our bundle size heavy, loose a lot of control how my design looks,
10. When we are using a particular framework or library it restrict us someway, 
11. Material UI, Base UI, Chakra, Ant Design component libraries or UI libraries.(pros & cons) and also Normal CSS, SCSS & SASS, inline CSS.
12. Styled Components (pros & cons), passing CSS as props, using CSS inside your js 
13. Tailwind CSS framework(pros & cons), pros: do not have to toggle between CSS file and jsx file, Write CSS on the go, Reusability(comes with lots of pre build classes), less bundle size(minimal CSS that it offers to us), Flexible UI (lots of customized options not rigid like component libraries(MUI)) lot of control over our customization, 
14. How can we configure Tailwind CSS for our project? One way is to use cdn links, 
15. When you use Tailwind CSS, it removes a lot of default behaviors, like h1 is not look like normal paragraph, removes basic CSS, that our normal tag use to offer us, 
16. Every style I put in through Tailwind CSS will be using "className" 
17. do not use CDN, use npm package for tailwind css installation
18. post css is a tool for transforming css with js, we need to tell parcel we are using tailwind classes when needs to be compiled so that browser can understand them
19. Content: what files are tailwind css will be used in, js, ts, jsx, tsx
20. The theme section is where you define your projects color palette, fonts, breakpoints, border radius, type scale etc.
30. Extending Tailwind CSS with reusable third party plugins. Plugins lets you register new styles for tailwind to inject into user's stylesheet using js instead of css
