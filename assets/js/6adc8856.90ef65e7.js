"use strict";(self.webpackChunkskushagra=self.webpackChunkskushagra||[]).push([[9634],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),u=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(a),d=n,m=p["".concat(l,".").concat(d)]||p[d]||h[d]||o;return a?r.createElement(m,i(i({ref:t},c),{},{components:a})):r.createElement(m,i({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:n,i[1]=s;for(var u=2;u<o;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6121:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=a(7462),n=(a(7294),a(3905));const o={sidebar_position:16},i="Dermsafe",s={unversionedId:"undergraduate/dermsafe",id:"undergraduate/dermsafe",title:"Dermsafe",description:"Fall 2020: HackUMass VIII Project, linked here.",source:"@site/docs/undergraduate/dermsafe.md",sourceDirName:"undergraduate",slug:"/undergraduate/dermsafe",permalink:"/docs/undergraduate/dermsafe",draft:!1,tags:[],version:"current",sidebarPosition:16,frontMatter:{sidebar_position:16},sidebar:"tutorialSidebar",previous:{title:"Hydrogen Battery Efficiency Viewer",permalink:"/docs/undergraduate/hydrogenBatteries"},next:{title:"Independent Code & Research",permalink:"/docs/category/independent-code--research"}},l={},u=[{value:'Overview: <a name="Overview"></a>',id:"overview-",level:3},{value:'Background: <a name="Background"></a>',id:"background-",level:3},{value:'How it Works <a name="how-it-works"></a>',id:"how-it-works-",level:3},{value:'How to Use <a name="usage"></a>',id:"how-to-use-",level:3},{value:"Load Images:",id:"load-images",level:4},{value:"References:",id:"references",level:4},{value:"Contact:",id:"contact",level:4},{value:"Pictures:",id:"pictures",level:4},{value:'Contribute: <a name="contribute"></a>',id:"contribute-",level:3},{value:'Future Improvements: <a name="future"></a>',id:"future-improvements-",level:3},{value:'Support: <a name="support"></a>',id:"support-",level:3},{value:'License: <a name="license"></a>',id:"license-",level:3}],c={toc:u},p="wrapper";function h(e){let{components:t,...a}=e;return(0,n.kt)(p,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"dermsafe"},"Dermsafe"),(0,n.kt)("p",null,"Fall 2020: HackUMass VIII Project, ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/suobset/hackUmass-VIII-proj-DermSafe"},"linked here"),"."),(0,n.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/4e5O1B0_a2k?si=0hi55TKalJENF5Jn",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,n.kt)("h3",{id:"overview-"},"Overview: ",(0,n.kt)("a",{name:"Overview"})),(0,n.kt)("p",null,"DermSafe is an Android application that helps people with various skin-related health diseases identify the same and act upon it as soon as possible. Users can either use their phone's camera to click pictures and/or upload photos of various different kinds of anomalies that occur on their skin on the app to know their cause. Users also get access to a wide variety of resources and contact information that would help them obtain the relevant treatment(s), as well as keep them well informed about their ailments and various preventive measures they can take.   "),(0,n.kt)("p",null,"As time was a major constraint for this event, this particular application only focuses on Skin Cancer for the time being. However, we plan to train the model with various other datasets so that it can detect various different skin diseases, as well as help the user obtain proper treatment and care for the same. "),(0,n.kt)("p",null,"The project is originally forked from ",(0,n.kt)("a",{href:"https://github.com/MRauf1/Skin-Cancer-Detector"},"this repository"),", where a basic Skin Cancer Detector had been initially created. Our team repaired the project, and used it as our own canvas, heavily modified it, as well as added various features of our own to compliment and extend upon the original application."),(0,n.kt)("h3",{id:"background-"},"Background: ",(0,n.kt)("a",{name:"Background"})),(0,n.kt)("p",null,"This Repo contains the project done by:"),(0,n.kt)("p",null,"Nikhil Jain (",(0,n.kt)("a",{parentName:"p",href:"https://github.com/jainnikhil1005"},"https://github.com/jainnikhil1005"),")"),(0,n.kt)("p",null,"Kushagra Srivastava (",(0,n.kt)("a",{parentName:"p",href:"https://github.com/suobset"},"https://github.com/suobset")," | ",(0,n.kt)("a",{parentName:"p",href:"mailto:ksrivastava@umass.edu"},"ksrivastava@umass.edu"),")"),(0,n.kt)("p",null,"Nhan Ton (",(0,n.kt)("a",{parentName:"p",href:"https://github.com/tonducnhan"},"https://github.com/tonducnhan"),")"),(0,n.kt)("p",null,"Rebecca Wang (",(0,n.kt)("a",{parentName:"p",href:"https://github.com/rebeccawang06"},"https://github.com/rebeccawang06"),")"),(0,n.kt)("p",null,"For the 8th HackUmass hackathon. "),(0,n.kt)("h3",{id:"how-it-works-"},"How it Works ",(0,n.kt)("a",{name:"how-it-works"})),(0,n.kt)("p",null,"DermSafe uses TensorFlow and Keras in order to compare the User's uploaded photos to it's own database, from which it gives feedback on the type of the skin disease that the user is currently suffering from. Currently, the model is trained on very high quality images of various different types of skin cancer, and can therefore give almost accurate feedback on the kind of skin cancer that the user may be suffering with. "),(0,n.kt)("p",null,"The model was trained on ~4,000 images from ISIC, PH2, and Complete MedNode online databases. The model has an accuracy of 87% as of now; however, since it was created using high quality images taken in various hospitals, daily use cases might differ. Please seek professional medical help if you have any queries."),(0,n.kt)("p",null,"The application uses a Convolutional Neural Network to classify skin cancer either as benign or malignant. The model has 5 Conv, 5 ReLU activation, 5 Max Pooling, Flatten, 3 Dense (last one with Sigmoid), and 2 Dropout layers. "),(0,n.kt)("h3",{id:"how-to-use-"},"How to Use ",(0,n.kt)("a",{name:"usage"})),(0,n.kt)("p",null,"Upon installing the appliction on your Android device, you will be greeted with a home screen:"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/k-u-sh/hackUmass-VIII-proj-DermSafe/blob/master/71JvslYorPL._AC_SL1500_.jpg",alt:"Alt text"})),(0,n.kt)("p",null,"-> Load image: Lets you select an image from your gallery to upload to the app to judge. This is the main part of the app: it compares the uploaded picture to it's own trained dataset and determines the type of Skin Cancer the person is suffering from."),(0,n.kt)("p",null,"-> References: Provides information from various trusted sources "),(0,n.kt)("p",null,"-> Contact: Users can leave their information in case they want to reach out to a medical professional for any concerns."),(0,n.kt)("p",null,"-> Pictures: Provides different pictures for users to judge how severe their case is. "),(0,n.kt)("h4",{id:"load-images"},"Load Images:"),(0,n.kt)("p",null,"Clicking Load Images will direct the user to this screen: "),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/k-u-sh/hackUmass-VIII-proj-DermSafe/blob/master/scrn2.jpg",alt:"Alt text"})),(0,n.kt)("p",null,"Where the users can choose their photos to be uploaded to the app; upon which the app will predict the type of Skin Cancer they have."),(0,n.kt)("p",null,"Users can also use their phone's camera to take a picture and upload it to the app from this screen. "),(0,n.kt)("p",null,"When the user uploads the picture, the app would show them the result like this (either no Skin Cancer, Benign Skin Cancer, or Malignant Skin Cancer): "),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/k-u-sh/hackUmass-VIII-proj-DermSafe/blob/master/scrn5.jpg",alt:"Alt text"})),(0,n.kt)("h4",{id:"references"},"References:"),(0,n.kt)("p",null,"Clicking References will allow users to browse various trusted sources and get more information on Skin Cancer."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/k-u-sh/hackUmass-VIII-proj-DermSafe/blob/master/scrn3.jpg",alt:"Alt text"})),(0,n.kt)("p",null,"We intend to update the sources regularly with up-to-date information always at hand. "),(0,n.kt)("h4",{id:"contact"},"Contact:"),(0,n.kt)("p",null,"Clicking Contact will lead the user to this page: "),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/k-u-sh/hackUmass-VIII-proj-DermSafe/blob/master/scrn4.jpg",alt:"Alt text"})),(0,n.kt)("p",null,"Users can fill out a form and be directly conncted with a Medical Professional to get help with their questions and queries. "),(0,n.kt)("h4",{id:"pictures"},"Pictures:"),(0,n.kt)("p",null,"Clicking on Pictures will lead users to a page where they can see various examples of different Skin Cancer patients, and determine the severity of their ailments."),(0,n.kt)("h3",{id:"contribute-"},"Contribute: ",(0,n.kt)("a",{name:"contribute"})),(0,n.kt)("p",null,"We intend to release this project under the standard open-source MIT License, and anyone wishing to contribute to this project can do so via these links:"),(0,n.kt)("p",null,"1.",(0,n.kt)("a",{parentName:"p",href:"https://github.com/k-u-sh/hackUmass-VIII-proj-DermSafe"},"Source Code: GitHub"),"\n2.",(0,n.kt)("a",{parentName:"p",href:"https://github.com/k-u-sh/hackUmass-VIII-proj-DermSafe/issues"},"Issue Tracker")),(0,n.kt)("h3",{id:"future-improvements-"},"Future Improvements: ",(0,n.kt)("a",{name:"future"})),(0,n.kt)("p",null,"We plan to incorporate various future improvements in this Android Application in the future, some of which include: "),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Google Maps Integration to direct Users to the nearest Hospital in case of requirement.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Emergency Contact Feature to notify the friends and family of the User in case of emergencies.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Incorporating a more fluid UI across the entire app, as well as porting it over to various other operating systems. ")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Including a User-Account setup through which users can save their data on the cloud. "))),(0,n.kt)("h3",{id:"support-"},"Support: ",(0,n.kt)("a",{name:"support"})),(0,n.kt)("p",null,"If you are having issues with the software or any part of the same, feel free to utilize the GitHub Issue-Tracker. Alternatively, you can also reach out to us through our respective emails listed under ",(0,n.kt)("a",{parentName:"p",href:"#Background"},"Section 2: Background")," of this document."),(0,n.kt)("h3",{id:"license-"},"License: ",(0,n.kt)("a",{name:"license"})),(0,n.kt)("p",null,"This project is licensed under the MIT License"))}h.isMDXComponent=!0}}]);