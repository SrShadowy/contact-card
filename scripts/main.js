// ANIMATION OF COPY! CREATE LIKE DISCORD
let clipboard, hit;
let texts_copy = ["copied to clipboard!", " Yeah Copy... ", " Double copy! ", " TRIPLO COPY! ", " MEGA COPY! ", 
                 " SUPER COPY! ", " EXTREME COPY!!! ", " EXTREME COPY 2!!! ", " ABSOLUTE COPY!!! ", "GODLIKE COPY!!"];
let count_copy = 0, id_time_count;
let id_time_out_hidden;


function zero_count()
{
    count_copy = 0;
    hit.innerText = texts_copy[count_copy];
    window.clearInterval(id_time_count);
    id_time_count = undefined;
}

function how_hit(e)
{
    if(count_copy > 5)
    {
        hit.style.backgroundColor = "red";

        if(count_copy > 7) hit.style.animation = "SHAKE 100ms ease infinite";
    }
    else
    {
        hit.style.backgroundColor = "rgba(0, 168, 36, 0.596)";
        hit.style.animation = "none";
    }

    hit.style.display = "block";

    id_time_out_hidden = setTimeout(hidden_hit, 1500);

    count_copy += (count_copy > 8)? 0  : 1;
   
    if(id_time_count != undefined)
        window.clearInterval(id_time_count);
    
    id_time_count = setInterval(zero_count, (3000) ); // 3s
}

function hidden_hit(e)
{
    hit.innerText = texts_copy[count_copy];
    hit.style.display = "none";
    window.clearInterval(id_time_out_hidden);
    id_time_out_hidden = undefined;
}


function copy_to_clipboard()
{
    navigator.clipboard.writeText( clipboard.innerText || clipboard.textContent);
    hit.innerText = "copied to clipboard!";

    how_hit();
}

function init()
{
    protifolio = document.getElementById("portifolio");

    let click_check = function() 
    {
        if( id_time_out_hidden == undefined) copy_to_clipboard();
    }

    clipboard = document.getElementById("copy");
    hit = document.getElementById("hit");
    clipboard.addEventListener('click', click_check);
}

window.onload= init();
