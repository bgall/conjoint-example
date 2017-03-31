// import seeded random number generator code
// https://github.com/davidbau/seedrandom/blob/released/seedrandom.min.js
!function(a,b){function c(c,j,k){var n=[];j=1==j?{entropy:!0}:j||{};var s=g(f(j.entropy?[c,i(a)]:null==c?h():c,3),n),t=new d(n),u=function(){for(var a=t.g(m),b=p,c=0;q>a;)a=(a+c)*l,b*=l,c=t.g(1);for(;a>=r;)a/=2,b/=2,c>>>=1;return(a+c)/b};return u.int32=function(){return 0|t.g(4)},u.quick=function(){return t.g(4)/4294967296},u["double"]=u,g(i(t.S),a),(j.pass||k||function(a,c,d,f){return f&&(f.S&&e(f,t),a.state=function(){return e(t,{})}),d?(b[o]=a,c):a})(u,s,"global"in j?j.global:this==b,j.state)}function d(a){var b,c=a.length,d=this,e=0,f=d.i=d.j=0,g=d.S=[];for(c||(a=[c++]);l>e;)g[e]=e++;for(e=0;l>e;e++)g[e]=g[f=s&f+a[e%c]+(b=g[e])],g[f]=b;(d.g=function(a){for(var b,c=0,e=d.i,f=d.j,g=d.S;a--;)b=g[e=s&e+1],c=c*l+g[s&(g[e]=g[f=s&f+b])+(g[f]=b)];return d.i=e,d.j=f,c})(l)}function e(a,b){return b.i=a.i,b.j=a.j,b.S=a.S.slice(),b}function f(a,b){var c,d=[],e=typeof a;if(b&&"object"==e)for(c in a)try{d.push(f(a[c],b-1))}catch(g){}return d.length?d:"string"==e?a:a+"\0"}function g(a,b){for(var c,d=a+"",e=0;e<d.length;)b[s&e]=s&(c^=19*b[s&e])+d.charCodeAt(e++);return i(b)}function h(){try{if(j)return i(j.randomBytes(l));var b=new Uint8Array(l);return(k.crypto||k.msCrypto).getRandomValues(b),i(b)}catch(c){var d=k.navigator,e=d&&d.plugins;return[+new Date,k,e,k.screen,i(a)]}}function i(a){return String.fromCharCode.apply(0,a)}var j,k=this,l=256,m=6,n=52,o="random",p=b.pow(l,m),q=b.pow(2,n),r=2*q,s=l-1;if(b["seed"+o]=c,g(b.random(),a),"object"==typeof module&&module.exports){module.exports=c;try{j=require("crypto")}catch(t){}}else"function"==typeof define&&define.amd&&define(function(){return c})}([],Math);

// seed random number generator from embedded data fields
// conjoint profile 1
Math.seedrandom('${e://Field/seed1}');
// conjoint profile 2
//Math.seedrandom('${e://Field/seed2}');
// conjoint profile 3
//Math.seedrandom('${e://Field/seed3}');

// Create Variables for Traits associated with each dimension.
var vjobhist = ["Accepted help, worked hard, and completed training", "Declined help and did not complete training"];
var vhealthist = ["Accepted help, fought hard, and quit smoking", "Declined help and did not stop smoking"];
var vemploy = ["Recently unemployed", "Employed"];
var vhealth = ["Recent lung disease diagnosis", "Healthy"];
var vfriends = ["Mostly hard-working people", "Mostly lazy people"];

// Use math.random to randomly select traits for each dimension for applicant A
traits_a = [ vjobhist[Math.floor(Math.random()*vjobhist.length)],
             vhealthhist[Math.floor(Math.random()*vhealthhist.length)],
             vemploy[Math.floor(Math.random()*vemploy.length)],
             vhealth[Math.floor(Math.random()*vhealth.length)],
             vfriends[Math.floor(Math.random()*vfriends.length)] ];

// Use math.random to randomly select traits for each dimension for applicant B
traits_b = [ vjobhist[Math.floor(Math.random()*vjobhist.length)],
             vhealthhist[Math.floor(Math.random()*vhealthhist.length)],
             vemploy[Math.floor(Math.random()*vemploy.length)],
             vhealth[Math.floor(Math.random()*vhealth.length)],
             vfriends[Math.floor(Math.random()*vfriends.length)] ];


// Create list of variables to use when setting attributes
a_list = ["a1","a2","a3","a4","a5"]; 
b_list = ["b1","b2","b3","b4","b5"]; 

// set html values in conjoint table
for(i=0;i<5;i++){
    document.getElementById(a_list[i]).innerHTML = traits_a[i];
    document.getElementById(b_list[i]).innerHTML = traits_b[i];
}

// store values as embedded data fields
Qualtrics.SurveyEngine.setEmbeddedData('traits1a', traits_a.join("|"));
Qualtrics.SurveyEngine.setEmbeddedData('traits1b', traits_b.join("|"));

//Qualtrics.SurveyEngine.setEmbeddedData('traits2a', traits_a.join("|"));
//Qualtrics.SurveyEngine.setEmbeddedData('traits2b', traits_b.join("|"));

//Qualtrics.SurveyEngine.setEmbeddedData('traits3a', traits_a.join("|"));
//Qualtrics.SurveyEngine.setEmbeddedData('traits3b', traits_b.join("|"));

//Qualtrics.SurveyEngine.setEmbeddedData('traits4a', traits_a.join("|"));
//Qualtrics.SurveyEngine.setEmbeddedData('traits4b', traits_b.join("|"));

//Qualtrics.SurveyEngine.setEmbeddedData('traits5a', traits_a.join("|"));
//Qualtrics.SurveyEngine.setEmbeddedData('traits5b', traits_b.join("|"));
