/*jslint browser:true */
"use strict";

function validateForm() {
    var status = true;
    var x;

    //test for first name
    x = document.forms.myForm.fname.value;
    if (x===null || x==="") {
        status=false;
        document.getElementById('fname').className = "error"
    }

    // test for last name
    x = document.forms.myForm.lname.value;
    if (x===null || x==="") {
        status=false;
        document.getElementById('lname').className = "error"
    }

    // test for email
    x = document.forms.myForm.email.value;
    if (x===null || x==="") {
        status=false;
        document.getElementById('email').className = "error"
    }

    // test for comment
    x = document.forms.myForm.comment.value;
    if (x===null || x==="") {
        status=false;
        document.getElementById('comment').className = "error"
    }

    return status;
} // end of the form

//stores items in the localStorage

/*function store(){ 
var fname = document.getElementById('fname').value;
var lname = document.getElementById('lastname').value;
var email = document.getElementById('email').value;
var comment = document.getElementById('comment').value;

}

window.localStorage.setItem(fname,lname,email,comment);  

}*/