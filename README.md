
in this Repository i am going to create Netflix clone using ReactJS framwork.
and using scss and bootstrap for designing. 



------------------Project log-----------------

 
[commit 1]--
created this project body using "create-react-app" added index.html, index.js, index.css, app.js and app.scss file which creates basic react structure.

==================================================================

[commit 2]--
created directory named "components" in src folder and created different components-Header, HomeBanner, Login, List, Card, Banner
 
Header-: to handle Navbar of the app
HomeBanner-: to Handle appearance of Banner at home page/ main page
Login-: to handel User login/signup feature
List-: to handel list of shows(movies, series).
Banner-: handeling children banner which will appear after clicking on a items from list respectively.
Card-:

==================================================================

[commit 3]--
- created firebaseConfig component inside components directory. added data which provided at firebase project creation time.

- in "Login" component created emailOnChangeHandler, passwordOnChangeHandler(inline),  and onSignInClickHandler functions. using React state for dynamicaly handeling values of email and password. 

emailOnChangeHandler-: this function handels the value adding in Input html element so when user type any character of email so it would visible inside box.

passwordOnChangeHandler-: it also has same functionality as email handler but it reflects result in password element.

onSignInClickHandler-: it handels signin button click event. where it contains a promise to authenticate user that its legitimate or not.

 
==================================================================

[commit-4]--

--ERROR HANDLING--
- added feature to show error message inside form boundary instead showing on browser window.
if user do not put correct credentials error will be shown inside form.
 

==================================================================


[commit 5]--

--REUSING COMPONENT--
- in previous code i used Login component to take user input for authentication purpose. now if i have create a signup/register form i can create another component to handle this task. but i can see most of the form elements which i have used in Login comp i have to use same for this too with some changes.
so instead maknig new component and doing that much code again i will use previous Login component and change required portion dynamically.




