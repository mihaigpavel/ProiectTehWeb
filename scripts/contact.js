function trimiteFormularContact() {
    let gen_ = "";
    const genElements = document.getElementsByName("gen");
    for (i = 0; i < genElements.length; i++) {
        if (genElements[i].checked)
            gen_ = genElements[i].value
    }

    const contact = {
        nume: document.getElementById("nume").value,
        prenume: document.getElementById("prenume").value,
        dataNastere: document.getElementById("bdate").value,
        gen: gen_,
        nivelStudii: document.getElementById("studii").value,
        email: document.getElementById("email").value,
        mesaj: document.getElementById("mesaj").value
    };
    
    if (typeof localStorage.getItem("contacte") === "undefined" || localStorage.getItem("contacte") === null || localStorage.getItem("contacte") === "") {
        const c = [contact];
        let string = JSON.stringify(c);
        localStorage.setItem("contacte", string);
    }else{
        let retString = localStorage.getItem("contacte")
        let contacte = JSON.parse(retString);
        contacte.push(contact);
        let string = JSON.stringify(contacte);
        localStorage.setItem("contacte", string);
    }
    document.getElementById("formular").reset();

}