function przeslij()
{
    let imie = document.getElementById("imie").value;
    let nazwisko = document.getElementById("nazwisko").value;
    let email = document.getElementById("email").value;
    let zgloszenie = document.getElementById("zgloszenie").value;
    let regulamin = document.getElementById("regulamin").value;
    let wynik = document.getElementById("wynik").value;
    
    if (!regulamin)
    {
        wynik.innerHTML = "<p color='red'>Musisz zapoznać się z regulaminem</p>";
    }
    else
    {

    }
}