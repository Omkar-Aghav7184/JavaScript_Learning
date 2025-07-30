console.log("Let's Learn most important concept in JS:- Events");

//Topics to need to study in events in Interview-perpective, project/coding point of view
// 🌟 Topics to Study for Interviews & Projects:
// - event.type: Type of event (e.g., 'click')
// - event.timeStamp: Time the event was created
// - event.defaultPrevented(): Whether preventDefault() was called
// - event.target / toElement / srcElement / currentTarget
// - event.clientX / clientY (relative to viewport)
// - event.screenX / screenY (relative to screen)
// - event.altKey / ctrlKey / shiftKey / keyCode (keyboard/mouse info)

// 📚 Historical Alternatives Before addEventListener():
// - attachEvent() – old IE method
// - jQuery: .on('click', handler)



/******Event Propagation****** */
//Event Propagation have two types: 1.Event Bubbling 2.Event Capturing

// 📌 Event Propagation has Two Phases:
// 1️⃣ Event Bubbling (default): from target up to ancestor (bottom → top)
// 2️⃣ Event Capturing: from root down to target (top → bottom)

        // Scenario-1
        // false ==> Event-bubbling ===> (inside-->outside)-->(bottom to top). By default false hi hey!

        // document.querySelector("#images").addEventListener('click', function(event){
        //     console.log("Clicked Inside Image UL!");
        // },false);

        // document.querySelector("#owl").addEventListener('click', function(event){
        //     console.log("Owl is clicked!");
        //     //to stop propagation whether it is event bubbling or event capturing.
        //     event.stopPropagation();
        // },false);

        /*Outputs:
        Owl is clicked!
        Clicked Inside Image UL!*/

        
        //Scenario-2
        //true ==> Event-Capturing --(outside => inside) ==>(top to bottom) . 
        // document.querySelector("#images").addEventListener('click', function(event) {
        //     // console.log(event);
        //     console.log("Clicked Inside Image UL!");
        //     event.stopPropagation();
        // },true);

        // document.querySelector("#owl").addEventListener('click', function(event){
        //     // console.log(event);
        //     console.log("Owl is clicked!");
        // },true);

        // outputs:
        // Clicked Inside Image UL!
        // Owl is clicked!
        

        //Scenario-3
        // owl → Capturing phase (true)
        //images → Bubbling phase (false)
        //Click goes from top → down (capturing) and bottom → up (bubbling)
        //Since owl is clicked and it's in capturing, its listener runs first
        //Then images UL listener runs during bubbling
        //Because #owl (capture phase) runs before #images (bubble phase).
        // false ==> Event-bubbling ===> (inside-->outside)-->(bottom to top). By default false hi hey!
        document.querySelector("#images").addEventListener('click', function(event){
            console.log("Clicked Inside Image UL!");
        },false);

        document.querySelector("#owl").addEventListener('click', function(event){
            console.log("Owl is clicked!");
        },true);

       /*Outputs:
        Owl is clicked!
        Clicked Inside Image UL!*/