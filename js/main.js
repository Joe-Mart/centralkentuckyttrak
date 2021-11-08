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

    // test for email no longer needed
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

function getData() {
    let allMsg = [];
    let first_name = document.forms.myForm.fname.value;
    let last_name = document.forms.myForm.lname.value;
    let email = document.forms.myForm.email.value;
    let comment = document.forms.myForm.comment.value;
    allMsg.push(first_name);
    allMsg.push(last_name);
    allMsg.push(email);
    allMsg.push(comment);
    let stringTemplate = `First Name: ${first_name} Last Name: ${last_name} Email: ${email} Comment: ${comment}`;
    return stringTemplate;
}

function preview () {
    let data = getData();
    let previewMsg = document.getElementById("previewMsg");

    previewMsg.innerHTML = `${data}`;
    /*document.forms.myForm.reset();*/
}

/* Menu button animation/navigation js 
const menuBtn = document.querySelector('menu-btn');
const nav = document.querySelector('navbar');
let menuOpen = false;
menuBtn.addEventListener('click',() => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
        nav.classList.remove('navbar');
        nav.classList.add('active');
    }
        else {
            menuBtn.classList.remove('open');
            menuOpen = false;
            nav.classList.remove('active');
            nav.classList.add('navbar');
        
    }
});*/
