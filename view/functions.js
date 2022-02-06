const { ADDRGETNETWORKPARAMS } = require("dns");

function getCategories(){
    document.getElementById("category").innerHTML = `<button id="snris">SNRIs</button>
    <button id="ssris">SSRIs</button>
    <button id="dris">DRIs</button>
    <a href="stimulants.html"><button id="stimulants">Stimulants</button></a>
    <button id="nonstimulants">Non-Stimulants</button>
    <button id="moodstabilizers">Mood-Stabilizers</button>`;
}

function addFilters(){
    document.getElementById("contentDiv").innerHTML= ` <form id="filter-form">
        <div class="criteria">
            <h2>Age</h2>
            <label class="container">
            <input type="checkbox" checked="checked">
            <span class="checkmark"></span>14-19
        </label></br>
        <label class="container">
            <input type="checkbox" checked="checked">
            <span class="checkmark"></span>20-39
        </label></br>
        <label class="container">
            <input type="checkbox" checked="checked">
            <span class="checkmark"></span>40-65
        </label></br>
        <label class="container">
            <input type="checkbox" checked="checked">
            <span class="checkmark"></span>65+
        </label>
        </div>

        <div class="criteria">
            <h2>Gender</h2>
            <label class="container">
            <input type="checkbox" checked="checked">
            <span class="checkmark"></span>Female
        </label></br>
        <label class="container">
            <input type="checkbox" checked="checked">
            <span class="checkmark"></span>Male
        </label></br>
        <label class="container">
            <input type="checkbox" checked="checked">
            <span class="checkmark"></span>Other
        </label></br>
        </div>

        <div class="criteria">
            <h2>Sort By</h2>
            <label class="container" >
            <input name="sort" type="radio">
            <span class="checkmark"></span>Most Credible
        </label></br>
        <label class="container">
            <input name="sort" type="radio" checked>
            <span class="checkmark"></span>Most Recent
        </label></br>
        </div>
        </br></br></br>
        <button onclick="applyFilter()" id="submit">Apply Filter</button>
    </form> `
}

// handles the behaviour after a user selects their medication
function readPosts(){
   
    let xReq = new XMLHttpRequest();     // create new XMLHttpRequest object
    // display posts on the drug after the response from the server come back
    xReq.onreadystatechange = showPosts;
    xReq.open('GET','/get-posts', true);        // asynch call so user can answer questions out of order/over again
    xReq.send();     //send request

}


// handles writing a post for a medication
function writePosts(){
    let document;
    let xReq = new XMLHttpRequest();     // create new XMLHttpRequest object
    // display posts on the drug after the response from the server come back
    xReq.onreadystatechange = function(){alert("Posting Successful!");};
    xReq.open('GET',`/write-posts?content=${text}`, true);        // asynch call so user can answer questions out of order/over again
    xReq.send();     //send request
}



// handles the behaviour after the request object
function addPosts(xReq, drugID){
    let contentDiv = document.getElementById('postsDiv'+drugID);
    // if the request is in state 4 and is ready,
    if(xReq.readyState == 4 && xReq.status == 200){
        // add the server's feedback to the div to display it to the user
        postsDiv.innerHTML = '<text>'+ xReq.responseText + '</text><br><br>';
    } else {
        console.log(xReq.readyState + xReq.status);
    }
}

// handles filtering the results
function applyFilter(){
    //let age = request.query.drugID;  // storing drugID that user selected
    //let 
    //let xReq = new XMLHttpRequest();     // create new XMLHttpRequest object
    // display posts on the drug after the response from the server come back
    //xReq.onreadystatechange = function(){showPosts(xReq, drugID)};
    //xReq.open('GET','/get-posts?drugID='+drugID, true);        // asynch call so user can answer questions out of order/over again
    //xReq.send();     //send request
}

// handles the behaviour after the request object
function showPosts(){
    let contentDiv = document.getElementById('contentDiv');
    // if the request is in state 4 and is ready,
    if(this.readyState == 4 && this.status == 200){
        // add the server's feedback to the div to display it to the user
        //let response = JSON.parse(this.responseText);
        //let respo = ""; 
        contentDiv.innerHTML = this.responseText;
        //alert(`${this.responseText}+hi`);
        console.log(this);
    } else {
        console.log(this.status);
    }
}
