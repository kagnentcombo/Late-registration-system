//Nattapon Nimnu
//6309681838
function search(){
	let searchName = document.getElementById("searchName").value;
	let searchNum = parseInt(document.getElementById("searchNum").value);
	let targetUrl = window.location.pathname;
    let query = '';
    if(searchName){
        query += '&stdName=' + searchName;
    }
    if(searchNum){
        query += '&stdId=' + searchNum;
    }
    if(query){
        query = query.replace("&","?");
        window.location.href = targetUrl+query;
    }else{
        window.location.href = targetUrl+query;
    }

}

function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

var name = String(getParameterByName("stdName"));
var num = String(getParameterByName("stdId"));



function loadDoc(){
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      let json = this.responseText;
        try{
            let student =  JSON.parse(json);
            let keepUl = document.getElementById("studentList");
            if(name != "null" && num != "null"){
                for(let i=0;i<student.length;i++){
                    if(student[i].stdName.includes(name)&&student[i].stdId.includes(num)){
                        let li = document.createElement("li");
                        let keepLink = student[i].stdName.link("/info?id="+ student[i].stdId);
                        li.innerHTML = keepLink;
                        keepUl.appendChild(li);
                    }
                }
            }else if(name != "null" || num != "null"){
                for(let i=0;i<student.length;i++){
                    if(student[i].stdName.includes(name)||student[i].stdId.includes(num)){
                        let li = document.createElement("li");
                        let keepLink = student[i].stdName.link("/info?id="+ student[i].stdId);
                        li.innerHTML = keepLink;
                        keepUl.appendChild(li);
                    }
            }
        }else{
            for(let i=0;i<student.length;i++){
                    let li = document.createElement("li");
                    let keepLink = student[i].stdName.link("/info?id="+ student[i].stdId);
                    li.innerHTML = keepLink;
                    keepUl.appendChild(li);
                }
            }
        }catch(err){
            alert(err);
        }
    }
    xhttp.open("GET", "/getStudent");
    xhttp.send();
	
	
}
