1. JSX (is Transpiled to JS before it reaches JS Engine )by PARCEL using package called Babel
2. React.createElement ==> React Element(object) ==> HTML Element(onRender)
3. Functional Component is Just Normal JavaScript function that returns some piece of JSX.
4. npm start = npm run start
5. npm run build for creating prod build

6. Default Import/Export
   export default component;
   import component form "path";

7. Named Import/Export
   export const component;
   import {component} from "path";

8. There are 2 types of routing -

   Client side routing - JavaScript update the UI dynamically without reloading the page.

   Server side routing - Each request reload the new page from the server.

9. # Redux
   Install @reactjs/toolkit and react-redux
   Build your store
   Connect our store to our app
   Slice (cartSlice)
   Dispatch (action)
   Selector

10. # Types of testing (As Developer)
    - Unit testing - Testing components in isolation.
    - Integration testing - Testing components integration of components.
    - End to End testing - e2e Testing -> How the user will flow across the application.
11. # Setting up tesing in our app
    - Install React testing library
    - Install Jest
    - Install Babel dependencies
    - Configure Babel
    - Configure Parcel config file to disable default babel transpilation
    - Jest - npx jest --init
    - Install Jsdom library
    - Install  @babel/preset-react - to make jsx work in test cases
    - Include @babel/preset-react inside my babel config
    - npm i -D @testing-library/jest-dom
    