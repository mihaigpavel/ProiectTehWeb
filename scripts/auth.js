function bodyonload() {
    //sterg toti copii din span cu id ul auth
    const authEl = document.getElementById("auth");

    while (authEl.hasChildNodes()) {
        authEl.removeChild(authEl.firstChild);
    }

    if (typeof localStorage.getItem("user") === "undefined" || localStorage.getItem("user") === null || localStorage.getItem("user") === "") {
        //nu sunt logat
        // <a class="nedecorata" href="login.html">Autentificare</a> 
        const aEl = document.createElement("a");
        const text = document.createTextNode("Autentificare");
        aEl.appendChild(text);
        aEl.href = "login.html";
        aEl.className = "nedecorata";
        document.getElementById("auth").appendChild(aEl);
        ascunde("logat");
        afiseaza("nelogat");
    } else {
        //sunt logat
        //<a class="nedecorata" onclick="delogare()"> Delogare alex</a>
        const aEl_ = document.createElement("a");
        const text_ = document.createTextNode("Mesaje contact | ");
        aEl_.appendChild(text_);
        aEl_.className = "nedecorata";
        aEl_.href="mesaje.html";
        document.getElementById("auth").appendChild(aEl_);

        //
        const aEl = document.createElement("a");
        const text = document.createTextNode("Delogare " + localStorage.getItem("user"));
        aEl.appendChild(text);
        aEl.className = "nedecorata";
        aEl.addEventListener('click', function handleClick(event) {
            delogare();
        });
        document.getElementById("auth").appendChild(aEl);
        //
        afiseaza("logat");
        ascunde("nelogat");
    }
}

function delogare() {
    localStorage.removeItem("user");
    alert("Delogarea a avut loc cu succes")
    bodyonload();
}

function ascunde(idelement) {
    var x = document.getElementById(idelement);
    if (x) {
        x.style.display = "none";
    }
}

function afiseaza(idelement) {
    var x = document.getElementById(idelement);
    if (x) {
        x.style.display = "block";
    }
}


// daca am ceva in localstorage.user afisez buna buna user si buton delogheaza
//daca nu am ceva in localstarage afisez login fol document.createElement