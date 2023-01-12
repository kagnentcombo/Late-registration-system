//Nattapon Nimnu
//6309681838
function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
let id = getParameterByName("id");

function loadDoc(){
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function(){
        let json = xhttp.responseText;
        try{
            let student = JSON.parse(json);
            for(let i=0;i<student.length;i++){
            if(student[i].stdId===id){
            document.getElementById("date").innerHTML = student[i].date;
	        document.getElementById("name").innerHTML = student[i].stdName;
            document.getElementById("num").innerHTML = student[i].stdId;
            document.getElementById("class").innerHTML = student[i].stdYear;
            document.getElementById("fos").innerHTML = student[i].stdFiels;
            document.getElementById("address").innerHTML = student[i].addressNumber;
            document.getElementById("moo").innerHTML = student[i].moo;
            document.getElementById("tumbol").innerHTML = student[i].tumbol;
            document.getElementById("amphur").innerHTML = student[i].amphur;
            document.getElementById("province").innerHTML = student[i].province;
            document.getElementById("postalCode").innerHTML = student[i].postalCode;
            document.getElementById("mobilePhone").innerHTML = student[i].mobilePhone;
            document.getElementById("phone").innerHTML = student[i].phone;
            document.getElementById("advisor").innerHTML = student[i].advisor;
           
            
            break;
            }
        }
        }catch(err){
        alert("Not Found");
        }
    }
    xhttp.open("GET", "/getStudent");
    xhttp.send();

}

