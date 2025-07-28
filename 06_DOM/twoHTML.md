/*
document.getElementById('title')
<h1 id=​"title" , class=​"heading">​Hello Everyone from Omkar Champion!​</h1>​
document.getElementById('title').id
'title'
document.getElementById('title').class
undefined
document.getElementById('title').className
'heading'
document.getElementById('title').getAttribute('id')
'title'
document.getElementById('title').getAttribute('class')
'heading'
document.getElementById('title').setAttribute('class','test & heading')
undefined
document.getElementById('title').getAttribute('class')
'test & heading'
    const title= document.getElementById('title')
undefined
title
<h1 id=​"title" , class=​"test & heading">​Hello Everyone from Omkar Champion!​</h1>​

2.
title
<h1 id=​"title" , class=​"heading">​Hello Everyone from Omkar Champion!​</h1>​
title.style.backgroundColor="orange"
'orange'
title.style.padding="15px"
'15px'
title.style.borderRadius="15px"
'15px'utility_all2-DkBmze0M.js:1 setBlockPagesList []

3.
title
<h1 id=​"title" , class=​"heading">​…​</h1>​"Hello Everyone from Omkar Champion! "<span style=​"display:​ none;​">​SPAN Text​</span>​</h1>​
title.innerHTML
'Hello Everyone from Omkar Champion!\n            <span style="display: none;">SPAN Text</span>\n        '
title.textContent
'Hello Everyone from Omkar Champion!\n            SPAN Text\n        '
title.innerText
'Hello Everyone from Omkar Champion!'

4.document.getElementsByClassName('heading')
HTMLCollection [h1#title.heading, title: h1#title.heading]

5.
utility_all2-DkBmze0M.js:1 setBlockPagesList []
document.querySelector('h2')
<h2>​Lorem ipsum dolor sit 1st h2amet consectetur adipisicing.​</h2>​
document.querySelector('#title')
<h1 id=​"title" , class=​"heading">​…​</h1>​
document.querySelector('.heading')
<h1 id=​"title" , class=​"heading">​…​</h1>​
document.querySelector('input')
<input type=​"password" name ,id fdprocessedid=​"vj0ku">​

6.
const myUL= document.querySelector('ul')
undefined
myUL
<ul>​…​</ul>​
const List1= myUL.querySelector('li')
undefined
List1
<li class=​"item-class" style=​"background-color:​ orange;​ color:​ purple;​ padding:​ 15px;​ border-radius:​ 15px;​">​…​</li>​
List1.innerText
'oneList'
List1.innerText="Master List"
'Master List'

7.
utility_all2-DkBmze0M.js:1 setBlockPagesList []
let tempList = document.querySelectorAll('li')
undefined
tempList
NodeList(4) [li.item-class, li.item-class, li.item-class, li.item-class]
tempList[0].style.backgroundColor="orange"
'orange'
let myH1=  document.querySelector('h1')
undefined
myH1
<h1 id=​"title" , class=​"heading">​…​</h1>​
let myH1=  document.querySelectorALL('h1')
VM5327:1 Uncaught TypeError: document.querySelectorALL is not a function
    at <anonymous>:1:21
(anonymous) @ VM5327:1
let myH1=  document.querySelectorAll('h1')
undefined
myH1
NodeList [h1#title.heading]
myH1.style.backgroundColor="purple"
VM5425:1 Uncaught TypeError: Cannot set properties of undefined (setting 'backgroundColor')
    at <anonymous>:1:27
(anonymous) @ VM5425:1
myH1[0].style.backgroundColor="purple"
'purple'
myH1[1].style.backgroundColor="purple"
VM5438:1 Uncaught TypeError: Cannot read properties of undefined (reading 'style')
    at <anonymous>:1:9
(anonymous) @ VM5438:1
myH1[1].style.backgroundColor="red"
VM5450:1 Uncaught TypeError: Cannot read properties of undefined (reading 'style')
    at <anonymous>:1:9
(anonymous) @ VM5450:1
myH1[0].style.backgroundColor="red"
'red'

8.
utility_all2-DkBmze0M.js:1 setBlockPagesList []
let tempLiList = document.querySelectorAll('li')
undefined
tempLiList
NodeList(4) [li.item-class, li.item-class, li.item-class, li.item-class]
tempLiList.forEach( (liIterator)=> {
    console.log(liIterator)
})
VM5762:2 <li class=​"item-class">​…​</li>​
VM5762:2 <li class=​"item-class">​…​</li>​
VM5762:2 <li class=​"item-class">​…​</li>​
VM5762:2 <li class=​"item-class">​…​</li>​
undefined
tempLiList.forEach( (liIterator)=> {
    console.log(liIterator);
})
VM5781:2 <li class=​"item-class">​…​</li>​
VM5781:2 <li class=​"item-class">​…​</li>​
VM5781:2 <li class=​"item-class">​…​</li>​
VM5781:2 <li class=​"item-class">​…​</li>​
undefined
tempLiList.forEach( (liIterator)=> {
    console.log(liIterator);
    liIterator.style.backgroundColor="green";
})
VM5860:2 <li class=​"item-class">​…​</li>​
VM5860:2 <li class=​"item-class">​…​</li>​
VM5860:2 <li class=​"item-class">​…​</li>​
VM5860:2 <li class=​"item-class">​…​</li>​
undefined
tempLiList.forEach( (liIterator)=> {
    console.log(liIterator);
    liIterator.style.backgroundColor="green";
})
VM5876:2 <li class=​"item-class" style=​"background-color:​ green;​">​…​</li>​
VM5876:2 <li class=​"item-class" style=​"background-color:​ green;​">​…​</li>​
VM5876:2 <li class=​"item-class" style=​"background-color:​ green;​">​…​</li>​
VM5876:2 <li class=​"item-class" style=​"background-color:​ green;​">​…​</li>​
undefined
tempLiList.forEach( (liIterator)=> {
    console.log(liIterator);
    liIterator.style.backgroundColor="green";
    liIterator.style.color="orange";
    liIterator.style.padding="15px";
    liIterator.style.borderRadius="20px"
})
VM5996:2 <li class=​"item-class" style=​"background-color:​ green;​">​…​</li>​
VM5996:2 <li class=​"item-class" style=​"background-color:​ green;​">​…​</li>​
VM5996:2 <li class=​"item-class" style=​"background-color:​ green;​">​…​</li>​
VM5996:2 <li class=​"item-class" style=​"background-color:​ green;​">​…​</li>​
undefined

9.
utility_all2-DkBmze0M.js:1 setBlockPagesList []
let myClass= document.getElementsByClassName("item-class")
undefined
myClass
HTMLCollection(4) [li.item-class, li.item-class, li.item-class, li.item-class]0: li.item-class1: li.item-class2: li.item-class3: li.item-classlength: 4[[Prototype]]: HTMLCollectionitem: ƒ item()length: (...)namedItem: ƒ namedItem()constructor: ƒ HTMLCollection()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.toStringTag): "HTMLCollection"get length: ƒ length()[[Prototype]]: Object
myC
VM6206:1 Uncaught ReferenceError: myC is not defined
    at <anonymous>:1:1
(anonymous) @ VM6206:1
myClass.forEach( (item)=> {
    console.log(item);
})
VM6299:1 Uncaught TypeError: myClass.forEach is not a function
    at <anonymous>:1:9
(anonymous) @ VM6299:1
let myConvertedHTMLToArray =Array.from("myClass")
undefined
myConvertedHTMLToArray
(7) ['m', 'y', 'C', 'l', 'a', 's', 's']0: "m"1: "y"2: "C"3: "l"4: "a"5: "s"6: "s"length: 7[[Prototype]]: Array(0)
let myConvertedHTMLToArray =Array.from(myClass)
undefined
myConvertedHTMLToArray
(4) [li.item-class, li.item-class, li.item-class, li.item-class]0: li.item-class1: li.item-class2: li.item-class3: li.item-classlength: 4[[Prototype]]: Array(0)at: ƒ at()concat: ƒ concat()constructor: ƒ Array()copyWithin: ƒ copyWithin()entries: ƒ entries()every: ƒ every()fill: ƒ fill()filter: ƒ filter()find: ƒ find()findIndex: ƒ findIndex()findLast: ƒ findLast()findLastIndex: ƒ findLastIndex()flat: ƒ flat()flatMap: ƒ flatMap()forEach: ƒ forEach()includes: ƒ includes()indexOf: ƒ indexOf()join: ƒ join()keys: ƒ keys()lastIndexOf: ƒ lastIndexOf()length: 0map: ƒ map()pop: ƒ pop()push: ƒ push()reduce: ƒ reduce()reduceRight: ƒ reduceRight()reverse: ƒ reverse()shift: ƒ shift()slice: ƒ slice()some: ƒ some()sort: ƒ sort()splice: ƒ splice()toLocaleString: ƒ toLocaleString()toReversed: ƒ toReversed()toSorted: ƒ toSorted()toSpliced: ƒ toSpliced()toString: ƒ toString()unshift: ƒ unshift()values: ƒ values()with: ƒ with()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.unscopables): {at: true, copyWithin: true, entries: true, fill: true, find: true, …}[[Prototype]]: Object
myConvertedHTMLToArray.forEach( (item) => {
    console.log(item):
})
VM6631:2 Uncaught SyntaxError: Unexpected token ':'
myConvertedHTMLToArray.forEach( (item) => {
    console.log(item);
})
VM6635:2 <li class=​"item-class">​…​</li>​
VM6635:2 <li class=​"item-class">​…​</li>​
VM6635:2 <li class=​"item-class">​…​</li>​
VM6635:2 <li class=​"item-class">​…​</li>​
undefined


10.document.querySelectorAll(".mw-heading.mw-heading2")

utility_all2-DkBmze0M.js:1 setBlockPagesList []
document.querySelectorAll(".mw-heading.mw-heading2")
NodeList(13) [div.mw-heading.mw-heading2, div.mw-heading.mw-heading2, div.mw-heading.mw-heading2, div.mw-heading.mw-heading2, div.mw-heading.mw-heading2, div.mw-heading.mw-heading2, div.mw-heading.mw-heading2, div.mw-heading.mw-heading2, div.mw-heading.mw-heading2, div.mw-heading.mw-heading2, div.mw-heading.mw-heading2, div.mw-heading.mw-heading2, div.mw-heading.mw-heading2]
let allHead2=document.querySelectorAll(".mw-heading.mw-heading2")
undefined
allHead2
NodeList(13) [div.mw-heading.mw-heading2, div.mw-heading.mw-heading2, div.mw-heading.mw-heading2, div.mw-heading.mw-heading2, div.mw-heading.mw-heading2, div.mw-heading.mw-heading2, div.mw-heading.mw-heading2, div.mw-heading.mw-heading2, div.mw-heading.mw-heading2, div.mw-heading.mw-heading2, div.mw-heading.mw-heading2, div.mw-heading.mw-heading2, div.mw-heading.mw-heading2]
allHead2[0].innerText
'History'
allHead2[1].innerText
'Trademark'
allHead2[1].style.backgroundColor="Red"
'Red'
allHead2[0].style.backgroundColor="Red"
'Red'
allHead2.forEach( (item) => {
    console.log(item);
    item.style.backgroundColor="Red";
    item.style.Color= "Orange";
})
VM3064:2 <div class=​"mw-heading mw-heading2" style=​"background-color:​ red;​">​…​</div>​
VM3064:2 <div class=​"mw-heading mw-heading2" style=​"background-color:​ red;​">​…​</div>​
VM3064:2 <div class=​"mw-heading mw-heading2" style=​"background-color:​ red;​">​…​</div>​
VM3064:2 <div class=​"mw-heading mw-heading2" style=​"background-color:​ red;​">​…​</div>​
VM3064:2 <div class=​"mw-heading mw-heading2" style=​"background-color:​ red;​">​…​</div>​
VM3064:2 <div class=​"mw-heading mw-heading2" style=​"background-color:​ red;​">​…​</div>​
VM3064:2 <div class=​"mw-heading mw-heading2" style=​"background-color:​ red;​">​…​</div>​
VM3064:2 <div class=​"mw-heading mw-heading2" style=​"background-color:​ red;​">​…​</div>​
VM3064:2 <div class=​"mw-heading mw-heading2" style=​"background-color:​ red;​">​…​</div>​
VM3064:2 <div class=​"mw-heading mw-heading2" style=​"background-color:​ red;​">​…​</div>​
VM3064:2 <div class=​"mw-heading mw-heading2" style=​"background-color:​ red;​">​…​</div>​
VM3064:2 <div class=​"mw-heading mw-heading2" style=​"background-color:​ red;​">​…​</div>​
VM3064:2 <div class=​"mw-heading mw-heading2" style=​"background-color:​ red;​">​…​</div>​
undefined
allHead2.forEach( (item) => {
    console.log(item);
    item.style.backgroundColor="Red";
    item.style.Color= "Orange";
    item.style.padding="15px";

})
VM3137:2 <div class=​"mw-heading mw-heading2" style=​"background-color:​ red;​ padding:​ 15px;​">​…​</div>​
VM3137:2 <div class=​"mw-heading mw-heading2" style=​"background-color:​ red;​ padding:​ 15px;​">​…​</div>​
VM3137:2 <div class=​"mw-heading mw-heading2" style=​"background-color:​ red;​ padding:​ 15px;​">​…​</div>​
VM3137:2 <div class=​"mw-heading mw-heading2" style=​"background-color:​ red;​ padding:​ 15px;​">​…​</div>​
VM3137:2 <div class=​"mw-heading mw-heading2" style=​"background-color:​ red;​ padding:​ 15px;​">​…​</div>​
VM3137:2 <div class=​"mw-heading mw-heading2" style=​"background-color:​ red;​ padding:​ 15px;​">​…​</div>​
VM3137:2 <div class=​"mw-heading mw-heading2" style=​"background-color:​ red;​ padding:​ 15px;​">​…​</div>​
VM3137:2 <div class=​"mw-heading mw-heading2" style=​"background-color:​ red;​ padding:​ 15px;​">​…​</div>​
VM3137:2 <div class=​"mw-heading mw-heading2" style=​"background-color:​ red;​ padding:​ 15px;​">​…​</div>​
VM3137:2 <div class=​"mw-heading mw-heading2" style=​"background-color:​ red;​ padding:​ 15px;​">​…​</div>​
VM3137:2 <div class=​"mw-heading mw-heading2" style=​"background-color:​ red;​ padding:​ 15px;​">​…​</div>​
VM3137:2 <div class=​"mw-heading mw-heading2" style=​"background-color:​ red;​ padding:​ 15px;​">​…​</div>​
VM3137:2 <div class=​"mw-heading mw-heading2" style=​"background-color:​ red;​ padding:​ 15px;​">​…​</div>​
undefined
allHead2[0].innerText
'History'
allHead2[0].innerText="Omkar Aghav"
'Omkar Aghav'
allHead2[0].style.backgroundColor="Purple"
'Purple'
allHead2[0].style.color="Orange"
'Orange'
allHead2.forEach( (item) => {
    console.log(item);
    item.style.backgroundColor="Red";
    item.style.color= "Orange";
    item.style.padding="15px";

})
VM3311:2 <div class=​"mw-heading mw-heading2" style=​"background-color:​ purple;​ padding:​ 15px;​ color:​ orange;​">​Omkar Aghav​</div>​
VM3311:2 <div class=​"mw-heading mw-heading2" style=​"background-color:​ red;​ padding:​ 15px;​">​…​</div>​
VM3311:2 <div class=​"mw-heading mw-heading2" style=​"background-color:​ red;​ padding:​ 15px;​ color:​ orange;​">​…​</div>​
VM3311:2 <div class=​"mw-heading mw-heading2" style=​"background-color:​ red;​ padding:​ 15px;​ color:​ orange;​">​…​</div>​
VM3311:2 <div class=​"mw-heading mw-heading2" style=​"background-color:​ red;​ padding:​ 15px;​ color:​ orange;​">​…​</div>​
VM3311:2 <div class=​"mw-heading mw-heading2" style=​"background-color:​ red;​ padding:​ 15px;​ color:​ orange;​">​…​</div>​
VM3311:2 <div class=​"mw-heading mw-heading2" style=​"background-color:​ red;​ padding:​ 15px;​ color:​ orange;​">​…​</div>​
VM3311:2 <div class=​"mw-heading mw-heading2" style=​"background-color:​ red;​ padding:​ 15px;​ color:​ orange;​">​…​</div>​
VM3311:2 <div class=​"mw-heading mw-heading2" style=​"background-color:​ red;​ padding:​ 15px;​ color:​ orange;​">​…​</div>​
VM3311:2 <div class=​"mw-heading mw-heading2" style=​"background-color:​ red;​ padding:​ 15px;​ color:​ orange;​">​…​</div>​
VM3311:2 <div class=​"mw-heading mw-heading2" style=​"background-color:​ red;​ padding:​ 15px;​ color:​ orange;​">​…​</div>​
VM3311:2 <div class=​"mw-heading mw-heading2" style=​"background-color:​ red;​ padding:​ 15px;​ color:​ orange;​">​…​</div>​
VM3311:2 <div class=​"mw-heading mw-heading2" style=​"background-color:​ red;​ padding:​ 15px;​ color:​ orange;​">​…​</div>​
undefined
allHead2[0].style.backgroundColor="Purple"
'Purple'
allHead2.forEach( (item) => {
    console.log(item);
    item.style.backgroundColor="Red";
    item.style.color= "Orange";
    item.style.padding="15px";

})
VM3344:2 <div class=​"mw-heading mw-heading2" style=​"background-color:​ red;​ padding:​ 15px;​ color:​ orange;​">​Omkar Aghav​</div>​
VM3344:2 <div class=​"mw-heading mw-heading2" style=​"background-color:​ red;​ padding:​ 15px;​ color:​ orange;​">​…​</div>​
VM3344:2 <div class=​"mw-heading mw-heading2" style=​"background-color:​ red;​ padding:​ 15px;​ color:​ orange;​">​…​</div>​
VM3344:2 <div class=​"mw-heading mw-heading2" style=​"background-color:​ red;​ padding:​ 15px;​ color:​ orange;​">​…​</div>​
VM3344:2 <div class=​"mw-heading mw-heading2" style=​"background-color:​ red;​ padding:​ 15px;​ color:​ orange;​">​…​</div>​
VM3344:2 <div class=​"mw-heading mw-heading2" style=​"background-color:​ red;​ padding:​ 15px;​ color:​ orange;​">​…​</div>​
VM3344:2 <div class=​"mw-heading mw-heading2" style=​"background-color:​ red;​ padding:​ 15px;​ color:​ orange;​">​…​</div>​
VM3344:2 <div class=​"mw-heading mw-heading2" style=​"background-color:​ red;​ padding:​ 15px;​ color:​ orange;​">​…​</div>​
VM3344:2 <div class=​"mw-heading mw-heading2" style=​"background-color:​ red;​ padding:​ 15px;​ color:​ orange;​">​…​</div>​
VM3344:2 <div class=​"mw-heading mw-heading2" style=​"background-color:​ red;​ padding:​ 15px;​ color:​ orange;​">​…​</div>​
VM3344:2 <div class=​"mw-heading mw-heading2" style=​"background-color:​ red;​ padding:​ 15px;​ color:​ orange;​">​…​</div>​
VM3344:2 <div class=​"mw-heading mw-heading2" style=​"background-color:​ red;​ padding:​ 15px;​ color:​ orange;​">​…​</div>​
VM3344:2 <div class=​"mw-heading mw-heading2" style=​"background-color:​ red;​ padding:​ 15px;​ color:​ orange;​">​…​</div>​
undefined


utility_all2-DkBmze0M.js:1 setBlockPagesList []
document.querySelectorAll(".mw-heading.mw-heading2")
NodeList(13) [div.mw-heading.mw-heading2, div.mw-heading.mw-heading2, div.mw-heading.mw-heading2, div.mw-heading.mw-heading2, div.mw-heading.mw-heading2, div.mw-heading.mw-heading2, div.mw-heading.mw-heading2, div.mw-heading.mw-heading2, div.mw-heading.mw-heading2, div.mw-heading.mw-heading2, div.mw-heading.mw-heading2, div.mw-heading.mw-heading2, div.mw-heading.mw-heading2]
let allHead2=document.querySelectorAll(".mw-heading.mw-heading2")
undefined
allHead2
NodeList(13) [div.mw-heading.mw-heading2, div.mw-heading.mw-heading2, div.mw-heading.mw-heading2, div.mw-heading.mw-heading2, div.mw-heading.mw-heading2, div.mw-heading.mw-heading2, div.mw-heading.mw-heading2, div.mw-heading.mw-heading2, div.mw-heading.mw-heading2, div.mw-heading.mw-heading2, div.mw-heading.mw-heading2, div.mw-heading.mw-heading2, div.mw-heading.mw-heading2]
allHead2[0].innerText
'History'
allHead2[1].innerText
'Trademark'
allHead2[1].style.backgroundColor="Red"
'Red'
allHead2[0].style.backgroundColor="Red"
'Red'
allHead2.forEach( (item) => {
    console.log(item);
    item.style.backgroundColor="Red";
    item.style.Color= "Orange";
})
VM3064:2 <div class=​"mw-heading mw-heading2" style=​"background-color:​ red;​">​…​</div>​
VM3064:2 <div class=​"mw-heading mw-heading2" style=​"background-color:​ red;​">​…​</div>​
VM3064:2 <div class=​"mw-heading mw-heading2" style=​"background-color:​ red;​">​…​</div>​
VM3064:2 <div class=​"mw-heading mw-heading2" style=​"background-color:​ red;​">​…​</div>​
VM3064:2 <div class=​"mw-heading mw-heading2" style=​"background-color:​ red;​">​…​</div>​
VM3064:2 <div class=​"mw-heading mw-heading2" style=​"background-color:​ red;​">​…​</div>​
VM3064:2 <div class=​"mw-heading mw-heading2" style=​"background-color:​ red;​">​…​</div>​
VM3064:2 <div class=​"mw-heading mw-heading2" style=​"background-color:​ red;​">​…​</div>​
VM3064:2 <div class=​"mw-heading mw-heading2" style=​"background-color:​ red;​">​…​</div>​
VM3064:2 <div class=​"mw-heading mw-heading2" style=​"background-color:​ red;​">​…​</div>​
VM3064:2 <div class=​"mw-heading mw-heading2" style=​"background-color:​ red;​">​…​</div>​
VM3064:2 <div class=​"mw-heading mw-heading2" style=​"background-color:​ red;​">​…​</div>​
VM3064:2 <div class=​"mw-heading mw-heading2" style=​"background-color:​ red;​">​…​</div>​
undefined
allHead2.forEach( (item) => {
    console.log(item);
    item.style.backgroundColor="Red";
    item.style.Color= "Orange";
    item.style.padding="15px";

})
VM3137:2 <div class=​"mw-heading mw-heading2" style=​"background-color:​ red;​ padding:​ 15px;​">​…​</div>​
VM3137:2 <div class=​"mw-heading mw-heading2" style=​"background-color:​ red;​ padding:​ 15px;​">​…​</div>​
VM3137:2 <div class=​"mw-heading mw-heading2" style=​"background-color:​ red;​ padding:​ 15px;​">​…​</div>​
VM3137:2 <div class=​"mw-heading mw-heading2" style=​"background-color:​ red;​ padding:​ 15px;​">​…​</div>​
VM3137:2 <div class=​"mw-heading mw-heading2" style=​"background-color:​ red;​ padding:​ 15px;​">​…​</div>​
VM3137:2 <div class=​"mw-heading mw-heading2" style=​"background-color:​ red;​ padding:​ 15px;​">​…​</div>​
VM3137:2 <div class=​"mw-heading mw-heading2" style=​"background-color:​ red;​ padding:​ 15px;​">​…​</div>​
VM3137:2 <div class=​"mw-heading mw-heading2" style=​"background-color:​ red;​ padding:​ 15px;​">​…​</div>​
VM3137:2 <div class=​"mw-heading mw-heading2" style=​"background-color:​ red;​ padding:​ 15px;​">​…​</div>​
VM3137:2 <div class=​"mw-heading mw-heading2" style=​"background-color:​ red;​ padding:​ 15px;​">​…​</div>​
VM3137:2 <div class=​"mw-heading mw-heading2" style=​"background-color:​ red;​ padding:​ 15px;​">​…​</div>​
VM3137:2 <div class=​"mw-heading mw-heading2" style=​"background-color:​ red;​ padding:​ 15px;​">​…​</div>​
VM3137:2 <div class=​"mw-heading mw-heading2" style=​"background-color:​ red;​ padding:​ 15px;​">​…​</div>​
undefined
allHead2[0].innerText
'History'
allHead2[0].innerText="Omkar Aghav"
'Omkar Aghav'
allHead2[0].style.backgroundColor="Purple"
'Purple'
allHead2[0].style.color="Orange"
'Orange'
allHead2.forEach( (item) => {
    console.log(item);
    item.style.backgroundColor="Red";
    item.style.color= "Orange";
    item.style.padding="15px";

})
VM3311:2 <div class=​"mw-heading mw-heading2" style=​"background-color:​ purple;​ padding:​ 15px;​ color:​ orange;​">​Omkar Aghav​</div>​
VM3311:2 <div class=​"mw-heading mw-heading2" style=​"background-color:​ red;​ padding:​ 15px;​">​…​</div>​
VM3311:2 <div class=​"mw-heading mw-heading2" style=​"background-color:​ red;​ padding:​ 15px;​ color:​ orange;​">​…​</div>​
VM3311:2 <div class=​"mw-heading mw-heading2" style=​"background-color:​ red;​ padding:​ 15px;​ color:​ orange;​">​…​</div>​
VM3311:2 <div class=​"mw-heading mw-heading2" style=​"background-color:​ red;​ padding:​ 15px;​ color:​ orange;​">​…​</div>​
VM3311:2 <div class=​"mw-heading mw-heading2" style=​"background-color:​ red;​ padding:​ 15px;​ color:​ orange;​">​…​</div>​
VM3311:2 <div class=​"mw-heading mw-heading2" style=​"background-color:​ red;​ padding:​ 15px;​ color:​ orange;​">​…​</div>​
VM3311:2 <div class=​"mw-heading mw-heading2" style=​"background-color:​ red;​ padding:​ 15px;​ color:​ orange;​">​…​</div>​
VM3311:2 <div class=​"mw-heading mw-heading2" style=​"background-color:​ red;​ padding:​ 15px;​ color:​ orange;​">​…​</div>​
VM3311:2 <div class=​"mw-heading mw-heading2" style=​"background-color:​ red;​ padding:​ 15px;​ color:​ orange;​">​…​</div>​
VM3311:2 <div class=​"mw-heading mw-heading2" style=​"background-color:​ red;​ padding:​ 15px;​ color:​ orange;​">​…​</div>​
VM3311:2 <div class=​"mw-heading mw-heading2" style=​"background-color:​ red;​ padding:​ 15px;​ color:​ orange;​">​…​</div>​
VM3311:2 <div class=​"mw-heading mw-heading2" style=​"background-color:​ red;​ padding:​ 15px;​ color:​ orange;​">​…​</div>​
undefined
allHead2[0].style.backgroundColor="Purple"
'Purple'
allHead2.forEach( (item) => {
    console.log(item);
    item.style.backgroundColor="Red";
    item.style.color= "Orange";
    item.style.padding="15px";

})
VM3344:2 <div class=​"mw-heading mw-heading2" style=​"background-color:​ red;​ padding:​ 15px;​ color:​ orange;​">​Omkar Aghav​</div>​
VM3344:2 <div class=​"mw-heading mw-heading2" style=​"background-color:​ red;​ padding:​ 15px;​ color:​ orange;​">​…​</div>​
VM3344:2 <div class=​"mw-heading mw-heading2" style=​"background-color:​ red;​ padding:​ 15px;​ color:​ orange;​">​…​</div>​
VM3344:2 <div class=​"mw-heading mw-heading2" style=​"background-color:​ red;​ padding:​ 15px;​ color:​ orange;​">​…​</div>​
VM3344:2 <div class=​"mw-heading mw-heading2" style=​"background-color:​ red;​ padding:​ 15px;​ color:​ orange;​">​…​</div>​
VM3344:2 <div class=​"mw-heading mw-heading2" style=​"background-color:​ red;​ padding:​ 15px;​ color:​ orange;​">​…​</div>​
VM3344:2 <div class=​"mw-heading mw-heading2" style=​"background-color:​ red;​ padding:​ 15px;​ color:​ orange;​">​…​</div>​
VM3344:2 <div class=​"mw-heading mw-heading2" style=​"background-color:​ red;​ padding:​ 15px;​ color:​ orange;​">​…​</div>​
VM3344:2 <div class=​"mw-heading mw-heading2" style=​"background-color:​ red;​ padding:​ 15px;​ color:​ orange;​">​…​</div>​
VM3344:2 <div class=​"mw-heading mw-heading2" style=​"background-color:​ red;​ padding:​ 15px;​ color:​ orange;​">​…​</div>​
VM3344:2 <div class=​"mw-heading mw-heading2" style=​"background-color:​ red;​ padding:​ 15px;​ color:​ orange;​">​…​</div>​
VM3344:2 <div class=​"mw-heading mw-heading2" style=​"background-color:​ red;​ padding:​ 15px;​ color:​ orange;​">​…​</div>​
VM3344:2 <div class=​"mw-heading mw-heading2" style=​"background-color:​ red;​ padding:​ 15px;​ color:​ orange;​">​…​</div>​
undefined

*/