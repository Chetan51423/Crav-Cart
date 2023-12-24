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

