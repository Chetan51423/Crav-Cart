This repo is for learning react 

Namaste react:

lecture 2
1) what changes do we need to make our app productionn ready?
 - we have to optimize it 
 - remove console logs
 - servers
 - we need to minify our files
--> to use all these functionalities we need bundlers

2) Job of bundlers
def:- bundler is a tool that takes all the separate pieces of code and assets that make up a web appication and combines them into a single , optimize package.
 this package typically includes js files, stylesheet, images and other assets.
ex:- webpack (it is for production tready apps)
   - vite
   - parcel

-> bundlers like parcel, webpack  and vite are nothoing but packages with js code that helps us to bundle our code files and and assets that are required for production ready app.

-> to install parcel (a package)  we need a pacakage manager --> npm (node package manager)

-> Ex:- npm (node package manager)-> default package manager for node.js and js  
        yarn - alternate package manager for js
        pip 
        conda


3) why we need npm ?
-> it manages ppackages in our app
-> our app didn't only run on react
-> it requires a lot of packages to make it functioning.
-> so we need to download lots of packages 
-> so npm helps us to download and manage those packages

3.1) How to initilize npm

-> npm init
-> npm init -y
-> npm install -D parcel

4) commands to install pacel package
-> npm install -D parcel       --> -D show for dev dependency. we are not installing it for production instead we want parcel only on our machine.
-> npm install --save-dev parcel     --> both are same things

5) dependency 
-> it means the packages our project depend on.
->there are different types of dependencies (1) dependencies (2) devdependencies
-> dev-dependencies is limited to development side 
-> and dependencies are use globally like react.

6) caret (^) and tilde (~) in package.json
-> it is use befor the version of dependencies
-> if we want the modify if minor version changes then use (^)
-> if we want to modify the major version the use          (~)
-> don't use anything if we don't want to upgrade 

7) package-lock.json
-> it locks the version of package that yuo use 
-> it is the proof that we are using specific versions. 
-> it lock the versions of denpendencies
-> it should be out of gitignore.
-> it mantain the hash of the version---> it maintain the integrity.
-> 

8) node modules folder in our app
-> whenever we install packages from npm its node module package comes
-> it is like database of our nmp.
-> it has all the sub packages / dependencies that out parcel will require


Note👉👉: 
aapalyala app create/ run karayla kahi packages lagnaar aahet (like parcel) --> te nanter dependencies madhe mojle jatat. kadhi kadhi asa hote ki tya dependencies la pan dusrya dependencies ver nirbhar rahav lagte. ter tya sarva dependencies chi info aapalya package-lock.jsom madhe dili aste. aani tyachya related packages node modules store kele astat. package-lock.jsom madhe enough information dili aste ki te purna node module ch folder create karu shakte 


Note2👉👉
: we should not add node modules to our gitignore because it is too heavy.  

Node3👉👉
: the question arises here is then if we push our app to github or on server and you said ki we need not to push node module folders to it then how can our app will work?
--> the ans is our package-lock.json --> it is responsible to regenerate whole node package module on web itself. 
-> we need not to push node modules folders to git and further package-lock.json will create itself.


9) Install react using npm

-> look the seen is two ways we can install/attach react our project 
     -> by using cdn links 
             --> one for react 
             --> one for react-DOM
-> but usign cdn is slight time consuming way. 
-> instead that we can have all the react forlders and dependencies at our own server in form of node packages
-> so better way is to install react packages at our machine using npm
-> npm will store react dependency in jackage.json
   and and its information in package-lock.json and
   its modules store in node modules package.

npm commands:
-> npm install react     -> download react packages
-> npm install react-dom -> -"-  react-dom packages

NOde👉👉:
 we wants react globally so that's wht we are not using "(-D)" here.


10) igniting our react app
command:-> npx parcel index.html
-> npx ---> it means execute using npm
-> entery point --> index.html 

11) Functions of Parcel / How our react App works and how all things goes behind the seen
-> when we ignite our react app tgere is lot mantyy things are working together to make our react app run!
In background we have
-> dev-dependencies
-> dependencies
-> node modules
-> parcel and many more.

all of then work together in cordination to run react app

👉 HMR - hot module reload -> whenever we save our code file in vsc we can see the change in app as sson as we save code files. this is done with the help of HMR which is present in parcel.
👉 File watcher Algorithm --> written in c++ --> is continuously watching/monitoring files and if any change happens it reflects it instantly.
👉 Bundling --> done by parcel
👉 cleaning our code  --> done by parcel
👉 dev and production build  
(these are the two types of building our app with parcel. dev build require less time as compaired to production builds. the seen is everything is dependent on files and minification of files done by parcel.)
👉 super fast build algorithm
👉 image optimzation. --> images / media take the larges time to reload. Parcel is so pwerful that it optimize images / media also.
👉 caching while developing. --> it is an important concept while dveloping / building our react app. When we build our app using parcel for the first tieme it take more time as compaired when we build it subsequent times. this is beacuse first time parcel have to go through all files which is time consuming. to prevent that parcel create its own folder to save the caching data. using that data parcel can build the next react app in less time. 👉this is the concept.
👉compression:->
👉Compatible with older version of browser
👉HTTPS on dev
👉port number
👉consistent hashing algorithms
👉zero configuration


12) Transitive dependencies? what are they ?
👉react app is so fast
-> to make that app fast it requires numbers of dependencies
-> that dependencies may depend on another dependencies
-> the the chain goes on 
-> this dependency chaining is called as transitive dependencies


13) What is a browserslist
👉 It is is the dependency in package.json 
-> it specifies the the version and the type of browser our code must work.
-> if we are specifying specifying any specific version and browser name it wont' mean that it will only work in that browser and do not work in other. it will work in other browsers but some function will not work.

14) what is a polyfill
👉 this concept is related to the code compatibility of older browsers
-> some our app code won't work in older browsers.
-> so to make our app run in older version of browsers we use babel created some code with similar functionality to the code which browser do not support
-> the converted code is called ⭐Polyfill⭐
-> babel do automatically for us

15) What is Tree Shaking 
👉 it means ⭐Removing unwanted code⭐
-> parcel removes the unwanted code that libraries bring with them and uses only the important one.


16) what is npx
👉 npx = execute the commmand without downloading the package;
-> npx = npm run
-> npx parcel index.html   -> command to run app
-> npm run parcel index.html -> we can use it instead npx

😂Easy way to run out app
-> we can directly run out script from package.json'
-> we can add commands inside script that can use ulternative to npx command 
-> inside scripts:{ "start":"parcel index.html"
"build": "parcel build Index.html"}
-> now we can use command like ⭐npm run start / npm start and npm run build / npm build⭐

17) How can we remove console logs from project
-> parcel do not remove console logs by itself
-> we have to add babel plugin and the configure it 
to remove console logs
-> for that we have to go to *babel-plugin-transform-remove-console*
-> and then isatall the package using *npm install babel-plugin-transform-remove-console --save-dev / -D* command to install the package
-> we can see it inside node modules and package-lock.json
-> next step is to configure that plugin by creating the .babelrc file and add the specification there from the website.
-> .babelrc is configuration file for babel plugins

=======================================================================================================

#Lecture 3
(core concepts of react #babel, #jsx, #many-more)

👉untill now we were using React.createElement("tag_name", {key}, "innerHTML").
-> And the motive of react was to write html using js but in easy way.
-> But always using React.createElement() for creating html tags was so ugly.
-> this is even worst when we need to creted multiple tags inside a single tag.
😍 So to tackle this facebook developer develop JSX

1) what is JSX
👉 JSX is HTML like Syntax use to create html element in js code.
-> jsx is not HTML inside JS
-> but it is HTML like syntax inside js
-> there are slight differences in syntax

H.W
-> how to create img tag inside html
-> 

2) Howdoes React.createElement() executed  ?
👉 React.createElement() -> return a object
-> that object is then rendered on virtual dom using ReactDOM.render(object, location);
-> React.createElement() ==> object ==> render on HTML DOM ==> js engine creates execution context ==> renders on webpage

3) How JSX works ?
👉 our browser do not understand JSX
-> browsers acn only understand javascript
-> babel is the one which helps to execute JSX
-> babel is compile for modern javascript
-> behind the seen babel converts the JSX code and executes it
-> babel uses React.createElement() to create new elements.
-> inshort execution of JSX works like this
⭐JSX ==> React.createElement() => object ==> HTML dom⭐ 

🏅🏆 JSX is so powerfull
-> it do js code sanitijation
-> means it only use the secure code comming in form of js
-> it made easy to write react elemet inside functioanl component
-> it also can write another funct. component to current functional component

4) Components in React
⭐Functional components
⭐Class base components

⭐Functional components 
-> They are normal function expression who have JSX inside them
-> there are many methods to execute them
-> functional components can be created using an arrow function and JSX written inside them
-> we have write JSX code inside * (); *
-> render method only renders the react element and JSX
-> if we wants to render our functional component which is nothing but the function expression having JSX inside we have ro write it in JSX syntax --> *<function_comp_name/>*

🔥how to write react element inside finctional component
-> use *{.....}*  to mention the react elemet

🔥how to write another functional component inside other functional component
-> use jsx syntax *<..../>* 


summary:
1) add script for running app without npx<br>
2) add script for build<br>
3) add browserlist and its description<br>
4) install plugin<br>
5) how to configure babelrc<br>
5) keys in react element / props<br>
6) JSX<br>
7) react element using jsx<br>
8) components <br>
9) its syntax / styles<br>
10) how to use react eelemnt inside component<br>
11) how to render component<br>


===========================================================================================================================================

# Lecture 5

1) <h3>Components<h3>  
-> there are 2 types<br>
-> functional and class base components<br>
-> first letter should be capital 
-> use <Component_name/><br>
-> we can have only one element inside the component<br>
-> to use multiple components use it inside React Fragments<br>
-> we can use any type of javascript inside component using {} brackets<br>
-> react can render only one root element so make one parent component<br>
-> we can create multiple child elements using component and use it inside the parent <br>

