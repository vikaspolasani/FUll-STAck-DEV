function myfun()
{
    var full,username,pass;
    full=document.getElementById("txtFullname").nodeValue;
    username=document.getElementById("txtUsername").value;
    pass=document.getElementById("txtpassword").value;
    var u=/^[A-Z]{1}[a-zA-Z]{4,7}$/;
    var p=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if(u.test(username) && p.test(pass))
    {
        window.alert('Valid');
    }
    else{
        window.alert('Invalid');
    }
}