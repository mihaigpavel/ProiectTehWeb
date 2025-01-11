function autentificare() {
    const utilizator = document.getElementById("utilizator").value;
    const parola = document.getElementById("parola").value;
  
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'json/utilizatori.json', true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let utilizatori = JSON.parse(xhr.responseText);
            for (i=0; i<utilizatori.length ; i++){
                if(utilizatori[i].utilizator === utilizator  && utilizatori[i].parola === parola) 
                {
                  alert("autentificare cu succes");
                  localStorage.setItem("user", utilizator);
                  document.getElementById("formularLogin").reset();
                  window.location.replace("mesaje.html");
                  return;
                }

            }
            alert("utilizator sau parola incorecte");
        }
    };
    xhr.send();
}