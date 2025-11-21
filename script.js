function przeslij()
{
    let imie = document.getElementById("imie").value
    let nazwisko = document.getElementById("nazwisko").value
    let email = document.getElementById("email").value
    let zgloszenie = document.getElementById("zgloszenie").value
    let regulamin = document.getElementById("regulamin")
    let wynik = document.getElementById("wynik")
    
    if (regulamin.checked)
    {
        wynik.innerHTML = imie+" "+nazwisko+"Treść Twojej sprawy: "+zgloszenie+"."
        wynik.style.color = "navy"
    }
    else
    {
        wynik.innerHTML = "Musisz zapoznać się z regulaminem"
        wynik.style.color = "Red"
    }
}