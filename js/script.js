// ============================== All Document
let light              = document.querySelector(".sign_register i")
let body               = document.querySelector("body")
let logo               = document.querySelector(".nav_items img")
let sign_in            = document.querySelector(".sign_register .sign_in")
let register           = document.querySelector(".sign_register .register")
let header             = document.querySelector(".signarea_items h1")
let forgetPass         = document.querySelector(".input_area a")
let breakLine          = document.querySelector(".signarea_items h4")
let social             = document.querySelectorAll(".social_link a")
let noAccount          = document.querySelector(".create_account p")
let createAccount      = document.querySelector(".create_account a")

// ============================== Theme Click Event Part
let change = true

light.addEventListener("click", () => {

    if (change) {

        light           .style = "color: #000000"
        body            .style = "background: #ffffff"

        // for navbar
        logo            .style = "background-color: #000000"
        sign_in         .style = "color: #000000"
        register        .style = "background-color: #000000; color: #ffffff"

        // for main area
        header          .style = "color: #000000"
        forgetPass      .style = "color: #000000"
        
        // for social links
        breakLine       .style = "background-color: #ffffff; color: #000000"
        social.forEach(social => {
            social      .style = "outline: 2px solid #000000"
        });

        // for create account 
        noAccount       .style = "color: #000000"
        createAccount   .style = "color: #000000"

    } else {

        light           .style = "color: #ffffff"
        body            .style = "background: #1E1E1E"

        // for navbar
        logo            .style = "background-color: transparent"
        sign_in         .style = "color: #ffffff"
        register        .style = "background-color: #ffffff; color: #000000"

        // for main area
        header          .style = "color: #ffffff"
        forgetPass      .style = "color: #ffffff"

        // for social links
        breakLine       .style = "background-color: #1e1e1e; color: #ffffff"
        social.forEach(social => {
            social      .style = "outline: none"
        });

        // for create account 
        noAccount       .style = "color: #ffffff"
        createAccount   .style = "color: #ffffff"
    }
    change = !change
})

