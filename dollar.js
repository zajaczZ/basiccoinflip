var fej = 1;
var iras = 2;
let w=0
let l=0

const max = 2
let x

function mer()
{

    x = Math.floor(Math.random() * max + 1);
   

    if(x==1)
    {
        alert("Fej! Jó volt a tippje.")
        w++
        win.innerHTML=w
        if(w==10)
    {
        alert("Ön nyert")
    }
    }
    else
    {
        alert("Írás! Sajnos rossz volt a tippje.")
        l++
        lose.innerHTML=l
         
    if(l==10)
    {
        alert("ön vesztett")
    }
    }
}
let y
function mer2()
{
    y = fejiras = Math.floor(Math.random() * max + 1);
    if(y==1)
    {
        alert("Fej! Sajnos rossz volt a tippje")
        l++
        lose.innerHTML=l
         
    if(l==10)
    {
        alert("ön vesztett")
    }

    }
    else
    {
        alert("Írás! Jó volt a tippje!")
        w++
        win.innerHTML=w
        if(w==10)
    {
        alert("Ön nyert")
    }
    }
}
function hova()
{
    Document.location.reload()
   
}


