                                             

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
-> it manages packages in our app<br>
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
-> it is use before the version of dependencies<br>
-> if we want the modify if minor version changes then use (^)<br>
-> if we want to modify the major version the use          (~)<br>
-> don't use anything if we don't want to upgrade <br>

7) package-lock.json<br>
-> it locks the version of package that you use <br>
-> it is the proof that we are using specific versions. <br>
-> it lock the versions of denpendencies<br>
-> it should be out of gitignore.<br>
-> it mantain the hash of the version---> it maintain the integrity.<br>
 

8) node modules folder in our app<br>
-> whenever we install packages from npm its node module package comes<br>
-> it is like database of our nmp.<br>
-> it has all the sub packages / dependencies that out parcel will require<br>


Note👉👉: <br>
<p>
aapalyala app create/ run karayla kahi packages lagnaar aahet (like parcel) --> te nanter dependencies madhe mojle jatat. kadhi kadhi asa hote ki tya dependencies la pan dusrya dependencies ver nirbhar rahav lagte. ter tya sarva dependencies chi info aapalya package-lock.json madhe dili aste. aani tyachya related packages node modules store kele astat. package-lock.json madhe enough information dili aste ki te purna node module ch folder create karu shakte 
</p>



Note2👉👉<br>
: we should not add node modules to our gitignore because it is too heavy. <br> 

Note3👉👉<br>
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
 we wants react globally so that's what we are not using "(-D)" here.<br>


10) igniting our react app<br>
command:-> npx parcel index.html<br>
-> npx ---> it means execute using npm<br>
-> entery point --> index.html <br>

11) Functions of Parcel / How our react App works and how all things goes behind the seen<br>
-> when we ignite our react app there is lot mantyy things are working together to make our react app run!<br>
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
👉 caching while developing. --> it is an important concept while dveloping / building our react app. When we build our app using parcel for the first tie\me it take more time as compaired when we build it subsequent times. this is beacuse first time parcel have to go through all files which is time consuming. to prevent that parcel create its own folder to save the caching data. using that data parcel can build the next react app in less time. <br>👉this is the concept.
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
-> and then install the package using *npm install babel-plugin-transform-remove-console --save-dev / -D* command to install the package<br>
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
-> browsers can only understand javascript<br>
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
10) how to use react element inside component<br>
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
-> only difference is write words in camel casing type and write it how we write objects</br>

3) <h3>React Fragments</h3>
-> Inside components we can only have one parent element<br>
-> therefore we have to use unnecessary div to insure there will always be one parent element<br>
-> to avoid that react provides fragments<br>
-> we have to put our child elements inside it and now it will behave like one parent element<br>
-> syntax <React.Fragments></React.Fragments>   / <></><br>


4) <h3>Components Writting Journey</h3>
-> created a restaurant card components and simply use it multiple times in body<br>
-> then created the restaurant object which takes card details <br>
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

what should we put into config.js file and why do we need config file <br>

1) Config File /constants file <br>
-> we should put all the hardcoded things in congig.js file <br>
-> We should name export each and every element from confign<br>
-> This is because we might config file contains different static data<br> 
-> we might need specific data from there<br>
-> thats's why we need to export each element by their name<br>

2) What are hooks<br>
-> hooks are normal js functions<br>
-> they came with certain functionality <br>
-> they are use to create local state  variable<br>

3) How input works in react<br>
-> input works differently in HTML and React.<br>
-> In React there is one way data binding<br>
-> we cannot write directly inside input element in react <br>
-> one way is we can create a const variable in js and assign it as a value to input<br>
-> but still it will be static <br>
-> To make input working in react we have to do data binding through state variable<br>
-> ans state variable is created using useState()<br>



4) what is useState()<br>
-> import as name import --> {}<br>
-> use to create local state variables<br>
-> useState() returns a array <br>
-> the 1st element of that array is variable name <br>
-> main thing is we cannot directly change the state of this variable<br>    --> using onChange(e.target.value)  ❌❌<br>
-> usestate provide us a function to change the state of local sgtate variable through it.<br>
-> whatever we write then will update in the local variable. <br>
-> i.e setLocalVariableName<br>
```javascript
   const [searchInput,setSearchInput] = useState("KFC");
   onChange =
   {(e)=>
      {
         // e.target.value;
         setSearchInput(e.target.value)

      }
   }

```
>![NOTE]
> we can also write e.target.value without setSearchInput but this is not the write way <br>
> now we can use searchInput as our local variable and we can use it anywhere in code <br>
> This is called 2-way data binding<br>
> 2-way because we are reading and writting the adata at the same time.
<br>
> we can change the local state variable using onChange() method<br>
> and in react onChange() we have to put arrow function and uit automatically get the event property. (e)<br>
> using that event property we can read whatever we are typing <br>
> if we are able to read we can update it using (setSearchText(e.target.value)<br>
)
### How to create vriable in JS and React <br>

```javascript
   const vstext = "hello"  // by default this variable is hello---> tjis is in javascript
   const [searchText,setSearchText] = useState("hello")  // here by default hello is assign to react variable 
```

5) why do we need state Variables<br>
-> if some other components change our local varibales <br>
-> react cannot track the normal local variables<br>
-> if there is any change in local variables react my not know it and that variable may not render on UI properly<br>
-> **If we want our variables is in sync with UI we need to use State variables**<br>


6) How to create a True / false toggle button using state variable<br>
-> create a state variable with default value false<br>
-> write a arrow function inside search button on Onclick event <br>
-> and update the setVariableName() <br>


```javascript
   const [displayBoolean, setDisplayBoolean]  = useState("false");
   <button className="search-btn" onClick={()=>{
              if(displayBoolean==="False")
              {
                setDisplayBoolean("True");
              }
              else
              {
                setDisplayBoolean("False");
              }
            }}>Search 
   </button>

```

7) Code / workflow of searching and element through Search bar<br>
-> Created the state variable for storing search text --> and use useState()<br>
-> onChanging state of search box set to state variable using setVariable_Name <br>
-> Create another state variable for restaurants <br>
-> create a filter function which will take searched data inform of statevariable and return related object <br>
-> finally set the data return by the filter function to render its elements<br>


<!-- ========================================================================================================================================================== -->


# Lecture 7

1) What is Config / config driven UI<br>
-> config is nothing but the JSON object<br>
-> like one we created inside our project<br>
-> like we store data inside it for using it globally <br>
-> similarly backend send configs for perticular sections like crowsels and normal UI <br>
_> so inshort whole UI can be manage by Config <br>
-> such UI are konwn as config driven UI<br>
-> Config is no thing but the JSON Object <br>

2) topics covered in this lecture<br>
-> useEffect() hook <br>
-> we use optional chaining <br>
-> we maintain 2 separate state variables for storing all restaurants and filter resataurants<br>
-> we use Shimmer UI<br>
-> using of useEffect() hook / why do we need this hook <br>
-> calling api and using async await and using it inside useEffect() hook <br>
-> we do conditional renderinng<br>
-> we learn molithic and micro services architechture<br>
-> we are building only one microservice and that is  UI <br>
-> 2 way t load / render our page <br>
 - loading page = load API -> then render page<br>
 - loading page = render first -> API call() after <-- this one is preffered and here when our useEffect() usecase emmerge <br>
 -> learn about CORS / their functionalities / they use to trick the brousers to make the API call from our local machine 

3) useEffect() hook
-> it is a hook 
-> it takes 2 arguments
-> 1st argument is a callback function --> mostly a callback function with API call
-> 2nd parameter is a dependency array 
-> if the array is empty useEffect() will call only once after the initial render
-> if we pass elements/object to array 
-> based on those objects of dependency useEffect() will be called.
-> suppose we have a state variable inside our dependency array -> useEffect will be called whenever there is state change in state variable  
-> sequesnce ==>  components will render -> useEffect will be called --> it will called again after change in state of state variable 

```javascript

//  when we do not pass any dependency array it will call once after every render  // here in this case useEffect() default behaviour will be called which is called after each render
  useEffect(()=>{});

// same case as dependency array is empty --> that means no dependency --> it will be called only once after initial render and not for other frequent renders
  useEffect(()=>{},[]);

// it will render after search text local state variable state changes
  useEffect(()=>{},[searchText]); 

  async function getRestaurants()
  {
    const data = await fetch("");
    const json = await data.json();

    setRestaurants(json?.data?.cards[2]?.data?.cards);
    setFilterRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }


```

<!-- =============================================================================================================================================  -->

# lecture 8

Note👉:
> never create a component inside a compoenent it will create a render problem 
> never create a state variable [ useState()] inside if else and for loop
> never create a state variable outside your functional componenrt -> always create it inside the bofy of functional components
> we can create more than one useEffect();


1) React routers
-> just install using npm install react-router-dom
```javascript
 npm install react-router-dom   // install react router package from npm

```
-> react routers are use to create routes --> that means navigate to certain place/page
-> to use react router we have to first configutre then and then render it instead of main app layout
-> first named import "createBrowserrouter" --> this is a function that is used to create the configuration
 -> it takes array 
 -> the array has the list of route configuration and error messages

```javascript
 import { createBrowserRouter } from "react-router-dom"

 const appRouter = createBrowserRouter([
   {
      path:"/",
      element:<AppLayout>,
   },
   {
      path:"/About",
      element:<About />
   }
 ])
```
👉
> Now we need to render according to this configuration
> that's why we need to provide this confi. to render
> for that we use RouterProvider

-> second we have to named import the routerProvider
 -> it is basically component
 -> we use routerProvider to render instead of AppLayout component
```javascript
import {RouterProuder} from "react-router-dom"
root.render(<RouterProvider router={appRouter}/> )  // we have just provided the configuration created using createBrowserRouter to RouterProvider as props
```


2) Types of routing 
-> client side routing 
-> server side routing

3) how to empliment client side routing what are its uses
-> we use <link to="/target">Target</link> tag to route inside the page
-> when we want to route multiple child components we have to use <outlet/> tag 
  - for example wewant to render the about us component ot contact us component or cart component by keepin the header and footer component at place 
  - at this time we can use concept of nested routing 
  - here we can use the of children of configuration
  - outlet will help us to render the chilern element to the body
  - if there is any special rout like "/" or "/About" or "/COntact_Us" then outlet will only render this tag  

```javascript
const AppLayout = ()=>
{
   return ( 
      <Header/>
      <Outlet/>  // <--------this is outlet
      <Footer/>
   )
}

const appRouter = createBrowserRouter([
   {
      path:"/",
      element:<AppLayout/>,
      errorElement:<Error/>,
      children:[
         {
            path:"/",
            element:<Body/>
         },
         {
            path:"/about",
            element:<About/>
         }
         {
            path:"/Contact",
            element:<Contact/>
         }
      ]
   }
])
```

4) What we lernt in this lecture
> we can create multiple useEffect()
> we cannot write useState() inside if else
> we can import images from our machine -> using assets folder  -> it is export as defult export by default.
> how can we use our own shimmer instead of importing package from npm
> learnt about formik for form --> goto tutorial 
> implement routers using createBrowserRouter() --> takest an array of list of configuration/object of routes.   we can have children inside. we provide it in <outlet/>
> RouterProvider is the component use to render instead of  AppLayout
```javascript
root.render(<RouterProvider router ={appRouter}>)    //appRouter --> this is the variable which stores all the configuration of createBrowserRouter.
```
> we have done dynamic router using {useParas} from react "react-router-dom"
>note:-> always use optional chaining
> we learn to use link component  //  <link to=""></link>

<!-- ============================================================================================================ -->
 # Lecture 9 (finding a path)

 #### important things about useEffect()
 > it has two parameters
 > first parameter is a callback function 
 > send parameter is a dependency array
 >!NOTE
 > condition 1: useEffect( callback(), dependency array[]);
  - it will called everytime when  there is the change in elements of dependency array
> condition 2: useEffect( callback() , dempty dependency array[] )
  - in this case when dependency array is empty -> useEffect will be called only once after the initial render 
> condition 3; useEffect( callbacek())
  - in theis case when useEffect do not have any dependency array then useEffect wuill be called every time when component renders

2) Note : Never create a component inside a component 

3) never write a useState inside if else or inside a for loop

4) useState is a hook use to create a local variables inside your functional components.---> never create a useState outside of functional component 

5) it is completely fine to create multiple useEffect() according to their use;

6) keep your images in your asets folder.
-> its better to keep in CDN
-> images are optimize when they are stored at cdn

7) React-router-dom
-> install react-router-dom ---> npm inostall react-router-dom

1) create configuration for routing
-> name inport the "createBrouserRouter" from 'react-router-dom'
-> create the confuguration using this function.
-> const appRouter = createBrowserRouter([{},{},{},{}])   --> {} <-- inside this we have configuration


remaining things arfe already written in lecture 8 👉







<!-- ============================================================================================================ -->
# Lecture 10 (Class base components)

1) React lifecycle --> an inportant concept for class based conponents  
> React lifecycle:->  mounting ----> updating ---> unmounting
2) 2 phase in react -> render phase and commit phase
3) useSatet() -> in functional       this.setSate() --> in class based comp.
4) useEffect() -> in functional      componentDidMount() -> in class based comp.
5) if we do not have props / states then there will be no update in lifecycle --> only mounting and unmounting
6) componentWillUnmount is use to clear the mounting of component


<!-- ============================================================================================================== -->

# Lecture 11  (optimizing our app)

1) lazy loading

2) code splitting 

3) building our own hooks 

4) when / how / why  should we build hooks
> reusability
> readability
> separation of consern

5) Create utils folder to save utility functions 
> make our code more modular  
> this makes our code for testable 
> readable 
> makes code maintainable 
> easy to debug 

6) what ever the extra code instead of components we can write then as hooks--> this is the time to create our custom hooks
> whenever we see the messy code we can wrap up it outside of component
> this done using hooks
> hook are js arrow function returning the values.

7) we have created new feature called isOnline/isOffline using custom hook
> create useOnline hook 
> then export deafault it to make use of its working.
```javascript
const useOnline = ()=>{
   const[isOnline, setIsOnline]=useState(true);
   useEffect(()=>{
      window.addEventListener("online",()=>{ setIsOnline(true);});
      window.addEventListener("offline",()=>{ setIsOnline(false);});
      return isOnline;
   },[]);
   
}

export default useOnline;
```

>![Note] 🔥 
> whenever we use addevent listener we need to remove it else it will be called for every time new render occures
> in above code we have use addeventlistener 
> once we have set the values of "isOnline" variable we must remove the event listener
> below is the code to remove the event listeners once we set "isOnline"
> create hook for authentication / etc,
```javascript
const useOnline = ()=>{
   const[isOnline, setIsOnline]=useState(true);
   useEffect(()=>{

      const handleOnline = ()=>{ setIsOnline(true);}
      const handleOffline = ()=>{ setIsOnline(true);}

      window.addEventListener("online",handleOnline);
      window.addEventListener("offline",handleOffline);
      
      return ()=>{
         window.removeEventListener("online", handleOnline);
         window.removeEventListener("offline", handleOffline);
      }
   },[]);
   
   return isOnline;
}

export default useOnline;
```

8) Dynamic Bundeling Concept

>![Note]
> we use parcel as a bundler which bundle all the code into one js file.
> That js file contain all the js code we have written in our project
> when our app is huge is became inefficient to load that js file --> it contains all the code 
> at that time we use the concept called dynamic loading / code splitting / chunking / lazy loading / on demand loading / dynamic import 
> there what happen is instead of normal importing the components we just import them dynamically 
> so that the specific component will only loads when we use it in actual app

-> dynamic bundelling can be called as
 - CHunking
 - Code splitting
 - Dynamic Bundling
 - lazy loading
 - On demand Loading 
 - Dynamic import 

```javascript 
const Instamart = lazy(() => import("./components/Instamart"));
```
-> react provide function called lazy() which is named import from react which provide the capbility to do dynamic loading.
-> upon on demand loading -> react load that secific components/file dynamically first.
-> for the first time it gives error because it takes time to load that daynamic content.
-> second time you visit that perticular component/file it will load properly

>[!Note]
> to make this process smooth 
> react provide a component called <Suspense></Suspense>
```javascript
import {lazy, Suspense } from 'react' 

<Suspense>Instmart</Suspense>
```
> suspense tage will understand that we have dynamically loaded some content.
> it provide one prop called "fallback"
> "fallback" is use for showing shimmer like components untill content in suspense loads properly.
> we should not lazy load inside components else we have to lazy load at top after all the imports done.

```javascript
<Suspense  fallback={<Shimmer/>}>Instmart</Suspense>
```


# Lecture 12

1) Different methods to write css
-> Normal CSS
-> inline css
-> using SCSS / SASS
-> Using component Libraries
 - Material UI
 - Ant UI
 - Base UI
 - Chakra UI
 - Styled COmponents  
-> using Frameworks
2) pros
-> development process becames fast
3) cons
-> it increase the bundle size
-> forced UI

>![Note]
> While going for interviews whe should know about the pros and cons of using different css methods we can use to style our ptoject.

4) TailWind CSS
-> it will remove the default css
-> It will override css
-> It provide classes to add style in our html
> import the script of tailwind from official website
> init tailwind and post css
> we will get the dev-dependencies of tailwind and postcss
>we will get the tailwind.config.js
 - we have to configuration of tailwindcss
 - in content:["./src/**/*.{html,js}",]

 ### features that tailwind CSS provides us 
 
 > CSS on the go (css in the same file)
 > Reusability
 > less bundle size
 > Flexible UI (customizable / where other UI libraries do not provide )

 > [!NOTE]
 > we can use cdn links at our HTML
 > it will work with aything (html/frameworks/etc)
 > when we add tailwind css to aover project it will remove the default css
 > 

```javascript
//how to install taildwind css and postcss pa ckage 
npm install -D tailwindcss postcss

//initialize tailwindcss
npx tailwind init
```

#### when we do tailwind init

> once we do tailwind init we get the configuration file  (tailwind.config.js)
> after that we need to configure out postcss with a postcss.rc file like once we have done to configure babel using babel.rc
> the postcss congiguration is to let know our bundlers that we are using tailwind css classes so compile those classes.
> while our bundelers is building a development or production build so do compile our tailwind files.........for this thing we need postcss.rc file 


5) what is postcss
-> while using tailwind css we need to work with classes
-> postcss is the package which will tell bable that those are the classes of tailwindcss compile them to normal css.
-> like bablerc files we have to create the .postcssrc file
-> we have to store some configuration here 

6) Code inside our css will only have 3 line that tailwind provides us.

7) entire process at once

> install tailwind and postcss as devdependencies
> next do tailwind init
> then configure tailwind.config.js --> tell tailwind what files to scan
> next configure .postcss.rc file
> then put 3 classes provided by tailwind in out main css file (     @tailwind base
      @tailwind componets,
      @tailwind utilities
)

Note:-> to make our process smooth nad the process of remembering tailwind css classes whe have to add one extension called ("Tailwind css IntelliSense")

<!-- =================================================================================================================================================== -->

# Lectire 13

Note:-> we will be discussing about data layer and UI layer in this chapter.


1) What is Props drilling
-> props drilling means passing props from parent to child 
->it goes in a chaning and increase if e have larger application 

>![DIsadvanteage of props drilling]
> it makes out code messy // if props drilling make the chain of let's say more than 5 then we might end up with passing props to childs even they didn't need it.
> If we made change in one of the prop ...then it will made all the child components of parent to render again to which we have pass our props.

2) How can we pass props to our parent
-> there are very less cases to pass props from child component to parent comp.
-> we can do it using custom hooks

3) What is lifting the state up
-> instead of child mange their own state --> let parent handle the state of its childs --> this is called as lifting the state up
-> we pass the state to child through props from parent and handle their state.

4) we learn react dev tools
-> it help developer by showing
the component view of react code
-> inshort it shows virtual dom which is easier to understand and debug 

5) profiler in react dev tools 
-> it will record all the timing it take for perticular element to load.
-> it gives flamegraph --> that gives detail about the timings
-> rank! -> it will rank the elements according to the time it take to load them.

6) How we use the any perticular state variables anywhere inside our react app without props drilling
-> This problem can be solved by storing the state variable in central space that react provides 
-> that central space is called as react "context"
-> there are similar other tools like react context 
 - mobex
 - flux
 - redus store
-> react provide their own tool called react context to store all the state variable globally

>![Note]
> We will never store the data inside local storage.
> it is very costly to update  the data when it is store at local storage. 
> if we wants our data to visible everywhere and every component get its acces then we can store this state variables to react central space called --> "react context"



# Lecture 14

Some concepts in Redux toolkit / react-redux
   - store
   - slice
   - action
   - dispatch
   - reducer (function)
   - selector  (when we have to read from cart )


we will have store
 - in store we have slice / logical separation for each section
 - we can have as multiple slice 
 - a slice is a small portion of your store
 - we can have only one store 
 - it is the central space which holds the state of diff variables
 - our component cannot directly modify the store
 - for that we have to dispatch an action
 - that action will call a function
 - that function will modify our cart
 - the function is known as reducer
 - we use selector (hook) to read from redux store

 Note:-> if we hit any button in UI -> it dispatch an action -> that calls a reducer function -> which modifies/update the slice of redux store -> we use selector to read from store


 > subscribe to the store
  - when we are reading from the store using hook called selector  --> this terminology is called as subscribing ( xyz component is subscribing to store)


#### time to install redux toolkit library 

> command : 
> npm install @reduxjs/toolkit  --> main core library
> npm install react-redux

### process

> create store 
> provider it to the application
> create the slice you want to add in store of any name 
> write the name / inital state / reducers to that slice 
> now export the reducer and the action from that slice
> then its time to a create an add button to subscribe to our slice
> subscribe to the slice to 
> this will dispatch an action 
> and the reducer function will modify the cart

```javascript

   import {configureStore} from "@reduxjs/toolkit"
   import cartSlice from "./cartSlice";  // by default cartSlice was exporting reducer by default --> so here we also get the reducer

   const store = configureStore({
      cart: cartSlice,
   });

   export default store;

```

> create cart slice

```javascript
   import {createSlice} from "@reduxjs/toolkit"
   const cartSlice = createSlice({
      name:'cart',

      initialState:{ items:[]},

      reducers:{
         addItem:(state, action)=>{ state.items.push(action.payload)},
         deleteItem:(state, action)=>{ state.items.pop()},
         clearCart:(state)=>{ state.items = []}  
      }
   })

   export const { addItem, deleteItem, clarCart} = cartSlice.actions;
   export default cartSlice.reducer;

```

> now subscribe the store using useSlector

```javascript

 // in header.js
   import {useSelector} from "react-redux"
   const cartItems = useSelector(store.cart.items);
```

> dispatch an action
  - create a button 
  - onclicking that button will invoke the callback function
  - that call back function will invoke another function dispatch()
  - we will use dispatch from { useDispatch() } hook
  - that useDispatch hook will be imported from react-redux
  - dipatch function will dispatch an action 
  that action will be imported from cartSlice as named import 
  - the dispatch function will perform the the action (adding/deleting/ clearing cart) and return the result / current state of store

```javascript

   import { useDispatch } from "react-redux"
   import { addItem } from "./utils/cartSlice"


   const dispatch = useDispatch();
   const handleAddItem = ()=>{
      dispatch(addItem("Item_Name_to_add"))
   }
   <button onclic(()=> handleAddItem())  >Add</button>
```
  

> who to connect the store to our app 
   - we can connect the sore to whole app or any partion of app
   - we can provide the store to whole app using " {provider}"
   - we can import {Provider} from " react-redux "
   - basically we have to write the whole code inside the <Provider>.........code........</Provider> 
   - if we wants to provide store to whole app then write the main component inside the <Provider></Provider> or any portion of code to which we wants to provide the store

```javascript
   
   import {Provider} from "react-redux"
   import store from "../utils/store"

   <Provider store = {store}> .....main comp code ....</Provider>

```





# Lecture 15  React Testing library

### we are going to setup testing framework from  scratch

1) why do we need test cases
-> to make our code intact
-> if more than one developer woking on react application 
-> to ensure that their code would not break the working of other components
-> test help us to ensure this
-> testing increase the maintainability of our code

### test drven development

-> we generally write test cases before writting code project
-> it is best practice
-> when you apt test driven development will make the development 
-> although it make the development process cleaner but time consuming

### Types of Testing

-> Manual Testing
-> Automated Testing
  -> code testing code
  -> selenium - tool to do automated testing
-> End to end testinf
  -> it covers entire user journey
-> Headless browser
  -> we can execute the test cases faster
  -> the browser will not have have UI
-> Unit testing
  -> small component unit testing
  -> mojor job of developter
-> Integration testing
  -> here we check the integration between the components
-> Regression testing 
-> performance testing
-> smoke Testing

>[!Note] 
> enzyme - old way for testing library
> Headless browsers
> Unit testing
> Integration testing
> Automated Testing
> Testing is similatr to development 
> like development we need to give time to learn testing / mindset


### Zest  (delightful javascript testing framework)

-> It is framework for testing
-> react testing library uses jest-framework behind the scene


### Let's get started with React Testing library 

1) install react testing library
```javascript
   npm install --save-dev @testing-library/react
```

2) install jest
>[!NOTE]
> please install lettest version of jest
```javascript
   npm install --save-dev zest
```

3) configure zest

-> create a zest.config file
-> or we can initilize zest using

>[!NOTE]
> we have to configure the jest by creating the jest.configure file
> there are two ways to do it
> 1st is to create it manually
> 2nd is to using terminal command --> npx jest --init
> we use npx instead of npm because we just have to initialize it only once

```javascript
   jest --init

   // step 2 is to npm run test
   npm run test 
   // got one error for jest-environment-jsdom package error
   npm i -D  jest-environment-jsdom

```
4) Install jest-environment-json as above 

```javascript
   npm i -D  jest-environment-jsdom
```

5) Create test folder -- create first test 

-> whenever we run the test these jest will look for this __test__ foder
-> this folder is also called as dunder (__ = dunder  )
-> create the first test file inside it with name  " file_name.test.js "

```javascript 
import { sum } from "../Sum"
test("Check sum of 2 positive numbers", ()=>{
   expect(sum().toBe(5))
})
```
>[!ERROR] 1
> while running this code I got the error called " jest encountered an unexped token"
> this is due to we have imported the js file except any folder
> to correct we have to configure babel by add some configuration so that jest will support the file import 
> we will get the jest-babel congin on "jest-babel" page
> after installing this plugin in .babelrc file the error will be no more
> then simply run "npm run test"

```javascript
// npm install below

npm install --save-dev babel-jest @babel/core @babel/preset-env

// babel.config.js file will contain the below configuration

module.exports = {
  presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
};
```

6) gitignore my coverage report 

-> once we run our test jest will ren the specified file (sum.test.js)
-> jest will also scan other files 
-> so we will have all files to save the changes because of coverage file
-> we can gitignore the covergae file to avoid this

7) start Unit testing

-> write test cases for header
-> write test case for body
-> once we write the test case for header and render header inside the expect().toBe()
we will get the error as

>[!ERROR] 2 
> jsx is not enabled yet
> Support for the experimental syntax 'jsx' isn't currently enabled
-> we can solve this error using another babel congiguration called 
>[!Note]
```javascript
   "presets":[["@babel/preset-react",{"runtime":"automatic"}]]
```


>[!NOTE]  
> while testing we have some concepts in mind 
> we are not running our test on browser
> we are running it on jsdom  -> it do not requires browser
> it do not have root like the browser usually has
> react testing library provides us a function called "render()"
> this render function will create the small container/similar to browser which helps us to render the  components

>[!ERROR] 3
> now it gives error for the png image that is used as logo 
> jest will only knows js code it didn't understand other that js
> we will configure jest configuration of moduleNameMapper to below 
> it basicall tells jest that when ever you meet files as below then use specific .js file which we just made to trick jest 
> that jes file ony contains string (dummy string)

```javscript
moduleNameMapper: { "\\.(jpg|png|svg)$":"../mocks/dummyLogo.js"},
```


>[!ERROR] 4
> this error is says that we need to wrap our head component which we are rendering during test it need to wrap inside <provider></provider>
> this occures because we are not rendering our application in browser
> we are just rendering it for testing
> we will wrap the header component inside procvide 
> we will also pass the store as props

>[!ERROR] 5
> now we get the error in <link> 
> as we are only running in restricted environment not on browser so we have to provide it what we have provided for routing 
> like { CreateBrowserRouter, RputerProvider}
> we have to fix it with importing something called as 

 ```javascript
 import { StaticRouter } from "react-router-dom/server"
 ``` 


 ### FInally we are able to passes the test case

 [!NOTE]
 > we got 4 errors untill now
 > error 1: jest encountered an unexped token
 > error 2: Support for the experimental syntax 'jsx' isn't currently enabled
 > error 3: now it gives error for the png image that is used as logo
 > error 4: this error is says that we need to wrap our head component which we are rendering during test it need to wrap inside <provider></provider>
 > error 5: now we get the error in <link> 