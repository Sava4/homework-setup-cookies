const btn = document.getElementById('contbtn');
btn.addEventListener('click', btnhandler);


function btnhandler(e) {
    e.preventDefault();
    document.cookie = "experiment=novalue;max-age=300";
    if (document.cookie.split(';').filter(item => item.includes('new-user=true')).length) {
        document.cookie = "new-user=false;"
    } else if (document.cookie.split(';').filter((item) => item.trim().startsWith('new-user=')).length) {
        document.cookie = "new-user=false";
    } else {
        document.cookie = "new-user=true";
    }

    console.log(document.cookie);
}

