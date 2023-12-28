                                             

# Namaste react

lecture 2
1) what changes do we need to make our app productionn ready?
 - we have to optimize it 
 - remove console logs
 - servers
 - we need to minify our files
--> to use all these functionalities we need bundlers<br>

2) Job of bundlers
def:- bundler is a tool that takes all the separate pieces of code and assets that make up a web appication and combines them into a single , optimize package.<br>
 this package typically includes js files, stylesheet, images and other assets.
ex:- webpack (it is for production tready apps)
   - vite
   - parcel

-> bundlers like parcel, webpack  and vite are nothoing but packages with js code that helps us to bundle our code files and and assets that are required for production ready app.<br>

-> to install parcel (a package)  we need a pacakage manager --> npm (node package manager)

-> Ex:- npm (node package manager)-> default package manager for node.js and js  
        yarn - alternate package manager for js
        pip 
        conda


3) why we need npm ?<br>
-> it manages ppackages in our app<br>
-> our app didn't only run on react<br>
-> it requires a lot of packages to make it functioning.<br>
-> so we need to download lots of packages <br>
-> so npm helps us to download and manage those packages<br>

3.1) How to initilize npm<br>

-> npm init
-> npm init -y
-> npm install -D parcel

4) commands to install pacel package<br>
-> npm install -D parcel       --> -D show for dev dependency. we are not installing it for production instead we want parcel only on our machine.<br>
-> npm install --save-dev parcel     --> both are same things<br>

5) dependency <br>
-> it means the packages our project depend on.<br>
->there are different types of dependencies (1) dependencies (2) devdependencies<br>
-> dev-dependencies is limited to development side <br>
-> and dependencies are use globally like react.<br>

6) caret (^) and tilde (~) in package.json<br>
-> it is use befor the version of dependencies<br>
-> if we want the modify if minor version changes then use (^)<br>
-> if we want to modify the major version the use          (~)<br>
-> don't use anything if we don't want to upgrade <br>

7) package-lock.json<br>
-> it locks the version of package that yuo use <br>
-> it is the proof that we are using specific versions. <br>
-> it lock the versions of denpendencies<br>
-> it should be out of gitignore.<br>
-> it mantain the hash of the version---> it maintain the integrity.<br>
-> 

8) node modules folder in our app<br>
-> whenever we install packages from npm its node module package comes<br>
-> it is like database of our nmp.<br>
-> it has all the sub packages / dependencies that out parcel will require<br>


Note👉👉: <br>
<p>
aapalyala app create/ run karayla kahi packages lagnaar aahet (like parcel) --> te nanter dependencies madhe mojle jatat. kadhi kadhi asa hote ki tya dependencies la pan dusrya dependencies ver nirbhar rahav lagte. ter tya sarva dependencies chi info aapalya package-lock.jsom madhe dili aste. aani tyachya related packages node modules store kele astat. package-lock.jsom madhe enough information dili aste ki te purna node module ch folder create karu shakte 
</p>



Note2👉👉<br>
: we should not add node modules to our gitignore because it is too heavy. <br> 

Node3👉👉<br>
: the question arises here is then if we push our app to github or on server and you said ki we need not to push node module folders to it then <br>how can our app will work?<br>
--> the ans is our package-lock.json --> it is responsible to regenerate whole node package module on web itself. <br>
-> we need not to push node modules folders to git and further package-lock.json will create itself.<br>


9) Install react using npm<br>

-> look the seen is two ways we can install/attach react our project <br>
     -> by using cdn links 
             --> one for react 
             --> one for react-DOM
-> but usign cdn is slight time consuming way. <br>
-> instead that we can have all the react forlders and dependencies at our own server in form of node packages<br>
-> so better way is to install react packages at our machine usi<br>ng npm
-> npm will store react dependency in jackage.json<br>
   and and its information in package-lock.json and<br>
   its modules store in node modules package.<br>

npm commands:<br>
-> npm install react     -> download react packages<br>
-> npm install react-dom -> -"-  react-dom packages<br>

NOde👉👉:<br>
 we wants react globally so that's wht we are not using "(-D)" here.<br>


10) igniting our react app<br>
command:-> npx parcel index.html<br>
-> npx ---> it means execute using npm<br>
-> entery point --> index.html <br>

11) Functions of Parcel / How our react App works and how all things goes behind the seen<br>
-> when we ignite our react app tgere is lot mantyy things are working together to make our react app run!<br>
In background we have<br>
-> dev-dependencies<br>
-> dependencies<br>
-> node modules<br>
-> parcel and many more.<br>

all of then work together in cordination to run react app<br>

👉 HMR - hot module reload -> whenever we save our code file in vsc we can see the change in app as sson as we save code files. this is done with the help of HMR which is present in parcel.<br>
👉 File watcher Algorithm --> written in c++ --> is continuously watching/monitoring files and if any change happens it reflects it instantly.<br>
👉 Bundling --> done by parcel<br>
👉 cleaning our code  --> done by parcel
👉 dev and production build  
(these are the two types of building our app with parcel. dev build require less time as compaired to production builds. the seen is everything is dependent on files and minification of files done by parcel.)<br>
👉 super fast build algorithm<br>
👉 image optimzation. --> images / media take the larges time to reload. Parcel is so pwerful that it optimize images / media also.<br>
👉 caching while developing. --> it is an important concept while dveloping / building our react app. When we build our app using parcel for the first tieme it take more time as compaired when we build it subsequent times. this is beacuse first time parcel have to go through all files which is time consuming. to prevent that parcel create its own folder to save the caching data. using that data parcel can build the next react app in less time. <br>👉this is the concept.
👉compression:-><br>
👉Compatible with older version of browser<br>
👉HTTPS on dev<br>
👉port number<br>
👉consistent hashing algorithms<br>
👉zero configuration<br>


12) Transitive dependencies? what are they ?<br>
👉react app is so fast<br>
-> to make that app fast it requires numbers of dependencies
-> that dependencies may depend on another dependencies<br>
-> the the chain goes on <br>
-> this dependency chaining is called as transitive dependencies<br>


13) What is a browserslist<br>
👉 It is is the dependency in package.json <br>
-> it specifies the the version and the type of browser our code must work.<br>
-> if we are specifying specifying any specific version and browser name it wont' mean that it will only work in that browser and do not work in <br>other. it will work in other browsers but some function will not work.<br>

14) what is a polyfill<br>
👉 this concept is related to the code compatibility of older browsers<br>
-> some our app code won't work in older browsers.<br>
-> so to make our app run in older version of browsers we use babel created some code with similar functionality to the code which browser do not support<br>
-> the converted code is called ⭐Polyfill⭐<br>
-> babel do automatically for us<br>

15) What is Tree Shaking <br>
👉 it means ⭐Removing unwanted code⭐<br>
-> parcel removes the unwanted code that libraries bring with them and uses only the important one.<br>


16) what is npx<br>
👉 npx = execute the commmand without downloading the package;
-> npx = npm run<br<br>>
-> npx parcel index.html   -> command to run app<br>
-> npm run parcel index.html -> we can use it instead npx<br<br>>

😂Easy way to run out app<br>
-> we can directly run out script from package.json'<br>
-> we can add commands inside script that can use ulternative to npx command <br>
-> inside scripts:{ "start":"parcel index.html"<br>
"build": "parcel build Index.html"}<br>
-> now we can use command like ⭐npm run start / npm start and npm run build / npm build⭐<br>

17) How can we remove console logs from project<br>
-> parcel do not remove console logs by itself<br>
-> we have to add babel plugin and the configure it <br>
to remove console logs<br>
-> for that we have to go to *babel-plugin-transform-remove-console*<br>
-> and then isatall the package using *npm install babel-plugin-transform-remove-console --save-dev / -D* command to install the package<br>
-> we can see it inside node modules and package-lock.json<br>
-> next step is to configure that plugin by creating the .babelrc file and add the specification there from the website.<br>
-> .babelrc is configuration file for babel plugins<br>

=======================================================================================================

# <br>Lecture 3<br>
(core concepts of react #babel, #jsx, #many-more)

👉untill now we were using React.createElement("tag_name", {key}, "innerHTML").<br>
-> And the motive of react was to write html using js but in easy way.<br>
-> But always using React.createElement() for creating html tags was so ugly.<br>
-> this is even worst when we need to creted multiple tags inside a single tag.<br>
😍 So to tackle this facebook developer develop JSX<br>

1) what is JSX<br>
👉 JSX is HTML like Syntax use to create html element in js code.<br>
-> jsx is not HTML inside JS<br>
-> but it is HTML like syntax inside js<br>
-> there are slight differences in syntax
<br>
H.W<br>
-> how to create img tag inside html
-> 

2) Howdoes React.createElement() executed  ?<br>
👉 React.createElement() -> return a object<br>
-> that object is then rendered on virtual dom using ReactDOM.render(object, location);<br>
-> React.createElement() ==> object ==> render on HTML DOM ==> js engine creates execution context ==> renders on webpage<br>

3) How JSX works ?<br>
👉 our browser do not understand JSX<br>
-> browsers acn only understand javascript<br>
-> babel is the one which helps to execute JSX<br>
-> babel is compile for modern javascript<br>
-> behind the seen babel converts the JSX code and executes it<br>
-> babel uses React.createElement() to create new elements.<br>
-> inshort execution of JSX works like this<br>
⭐JSX ==> React.createElement() => object ==> HTML dom⭐<br> 

🏅🏆 JSX is so powerfull<br>
-> it do js code sanitijation<br>
-> means it only use the secure code comming in form of js<br>
-> it made easy to write react elemet inside functioanl component<br>
-> it also can write another funct. component to current functional component<br>

4) Components in React<br>
⭐Functional components<br>
⭐Class base components<br>

⭐Functional components <br>
-> They are normal function expression who have JSX inside them<br>
-> there are many methods to execute them<br>
-> functional components can be created using an arrow function and JSX written inside them<br>
-> we have write JSX code inside * (); *<br>
-> render method only renders the react element and JSX<br>
-> if we wants to render our functional component which is nothing but the function expression having JSX inside we have ro write it in JSX syntax <br>--> *<function_comp_name/>*<br>

🔥how to write react element inside finctional component<br>
-> use *{.....}*  to mention the react elemet<br>

🔥how to write another functional component inside other functional component<br>
-> use jsx syntax *<..../>* <br>


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

1) <h3>Components</h3>  
-> there are 2 types<br>
-> functional and class base components<br>
-> first letter should be capital 
-> use <Component_name/><br>
-> we can have only one element inside the component<br>
-> to use multiple components use it inside React Fragments<br>
-> we can use any type of javascript inside component using {} brackets<br>
-> react can render only one root element so make one parent component<br>
-> we can create multiple child elements using component and use it inside the parent <br>


2) <h3>Inline CSS</h3>
-> like in HTML who we use inline CSS we can use it here</br>
-> only difference is we have to use {} after style.  like style={{backgroundColor:"yellow",}}</br>
-> we have to write css properties like objects in JS</br>
-> properties name are also different while we use Inline css</br>
-> normal (background-color:black)    ---> in jsx/component/ react   (backgroundCOlour:"black")</br>
-> only difference is write words in camel casing type and write it who we write objects</br>

3) <h3>React Fragments</h3>
-> Inside components we can only have one parent element<br>
-> therefore we have to use unnecessary div to insure there will always be one parent element<br>
-> to avoid that react provides fragments<br>
-> we have to put our child elements inside it and now it will behave like one parent element<br>
-> syntax <React.Fragments></React.Fragments>   / <></><br>


4) <h3>Components Writting Journey</h3>
-> created a restaurant card components and simply use it multiple times in body<br>
-> then created the restaurand object which takes card details <br>
-> then instead of static typing the data of restaurant inside card i am using restaurant object data inside it <br>
-> the plan is to fetch lots of objects from api and then render them inside body by fetching each restaurant data.<br>

5) <h3>DIfferent ways of passing Props</h3><br>
-> we learnt 4 different way we can pass props<br>
-> inshort if we want to pass the data of any individual object we send it in form of props<br>
-> we can use any name like props as argument<br>
-> if we have multiple things to pass as props we can use {...} --> spread operator to do that<br>
-> 


<!-- ============================================================================================================= -->

# Lecture 6

what should we put into config.js file and why do we need config file 

1) Config File /constants file 
-> we should put all the hardcoded things in congig.js file 
-> We should name export each and every element from confign
-> This is because we might config file contains different static data 
-> we might need specific data from there
-> thats's why we need to export each element by their name

2) What are hooks
-> hooks are normal js functions
-> they came with certain functionality 
-> they are use to create local state  variable

3) How input works in react
-> input works differently in HTML and React.
-> In React there is one way data binding
-> we cannot write directly inside input element in react 
-> one way is we can create a const variable in js and assign it as a value to input
-> but still it will be static 
-> To make input working in react we have to do data binding through state variable
-> ans state variable is created using useState()



4) what is useState()
-> import as name import --> {}
-> use to create local state variables
-> useState() returns a array 
-> the 1st element of that array is variable name 
-> main thing is we cannot directly change the state of this variable    --> using onChange(e.target.value)  ❌❌
-> usestate provide us a function to change the state of local sgtate variable through it.
-> whatever we write then will update in the local variable. 
-> i.e setLocalVariableName
<code>const [searchInput,setSearchInput] = useState("KFC");
onChange ={(e)=>
            {
              // e.target.value;
              setSearchInput(e.target.value)

            }}
</code>


4) what is a state 
->


