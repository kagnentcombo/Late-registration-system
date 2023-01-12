let a = 0;

let No = 2;

let b = 0;

let tableA = 33;
if(getParameterByName("box") !== null){
	a = parseInt(getParameterByName("box"))
	for(let i = 0 ; i<a ; i++){
		addAppend() 
		a--;
	}
}
function addAppend() {
	if (a+b == 10){
		alert("เพิ่มถอนสูงสุดได้ 10 รายวิชา");
		return false;
	}
	a++;
	document.getElementById('Append').innerHTML = a;
	document.getElementById("box").value = a;
	if(a==1) {
		document.getElementById('table').style.display = "block";
		document.getElementById('subject-num33').required = "true";
		document.getElementById('subject-n33').required = "true";
		document.getElementById('sec33').required = "true";
		document.getElementById('time33').required = "true";
		document.getElementById('w33').required = "true";
		document.getElementById('t-name33').required = "true";
		tableA++;

	}

	if(a>1) {

		let s1 = "subject-num"+tableA;
		let s2 = "subject-n"+tableA;
		let s3 = "sec"+tableA;
		let s4 = "time"+tableA;
		let s5 = "w"+tableA;
		let s6 = "t-name"+tableA;

		
		let parentTable = document.getElementById('table');
		let myTd,myInput;
  		let myTr = document.createElement('tr');
  		myTr.setAttribute('table','data');

  		for (let i=0; i<8;i++) {

  			if(i==0) {
  				myTd = document.createElement('td');
  				myInput = document.createElement('p');
  				myInput.innerHTML = a+'.';
  				myInput.style.textAlign = "center";
  				myTd.appendChild(myInput);
    			myTr.appendChild(myTd);
  			}else if(i==1){
    			myTd = document.createElement('td');
    			myInput = document.createElement('input');
    			myInput.setAttribute('type','text');
    			myInput.setAttribute("required","");
    			myInput.setAttribute("id", s1);
    			myInput.required = true;
    			myInput.style.width = "50px";
    			myInput.style.height = "26px";
    			myInput.style.margin = "-10px -16px -10px -16px";
    			myTd.appendChild(myInput);
    			myTr.appendChild(myTd);
    		}else if(i==2){
    			myTd = document.createElement('td');
    			myInput = document.createElement('input');
    			myInput.setAttribute('type','text');
    			myInput.setAttribute("required","");
    			myInput.setAttribute("id", s2);
    			myInput.required = true;
    			myInput.style.width = "115px";
    			myInput.style.height = "26px";
    			myInput.style.margin = "-10px -16px -10px -18px";
    			myTd.appendChild(myInput);
    			myTr.appendChild(myTd);
    		}else if(i==3){
    			myTd = document.createElement('td');
    			myInput = document.createElement('input');
    			myInput.setAttribute('type','text');
    			myInput.setAttribute("required","");
    			myInput.setAttribute("id", s3);
    			myInput.required = true;
    			myInput.style.width = "60px";
    			myInput.style.height = "26px";
    			myInput.style.margin = "-10px -14px -10px -12px";
    			myTd.appendChild(myInput);
    			myTr.appendChild(myTd);
    		}else if(i==4){
    			myTd = document.createElement('td');
    			myInput = document.createElement('input');
    			myInput.setAttribute('type','text');
    			myInput.setAttribute("required","");
    			myInput.setAttribute("id", s4);
    			myInput.required = true;
    			myInput.style.width = "108px";
    			myInput.style.height = "26px";
    			myInput.style.margin = "-10px -16px -10px -14px";
				myInput.placeholder = "อ. พฤ. 8:00-9:30";
    			myTd.appendChild(myInput);
    			myTr.appendChild(myTd);
    		}else if(i==5){
    			myTd = document.createElement('td');
    			myInput = document.createElement('input');
    			myInput.setAttribute('type','text');
    			myInput.setAttribute("required","");
    			myInput.setAttribute("id", s5);
    			myInput.required = true;
    			myInput.style.width = "56px";
    			myInput.style.height = "26px";
    			myInput.style.margin = "-10px -16px -10px -16px";
    			myTd.appendChild(myInput);
    			myTr.appendChild(myTd);
    		}else if(i==6){
    			myTd = document.createElement('td');
    			myInput = document.createElement('input');
    			myInput.setAttribute('type','text');
    			myInput.setAttribute("required","");
    			myInput.setAttribute("id", s6);
    			myInput.required = true;
    			myInput.style.width = "155px";
    			myInput.style.height = "26px";
    			myInput.style.margin = "-10px -12px -10px -12px";
    			myTd.appendChild(myInput);
    			myTr.appendChild(myTd);
    		}else if(i==7){
    			myTd = document.createElement('td');
    			myInput = document.createElement('input');
    			myInput.setAttribute('type','checkbox');
    			myInput.setAttribute("required","");
    			myInput.required = true;
    			myInput.style.width = "50px";
    			myInput.style.height = "24px";
    			myInput.setAttribute("disabled", true);
    			myTd.appendChild(myInput);
    			myTr.appendChild(myTd);
    		}
 		}
  		parentTable.appendChild(myTr);
  		tableA++;

	}
	document.getElementById('add_btn').onclick=addAppend;
	expand();
	
	
}

function removeAppend() {

	if(a <= 1) {
		a = 1;
		
		document.getElementById('subject-num33').value = "";
		document.getElementById('subject-n33').value = "";
		document.getElementById('sec33').value = "";
		document.getElementById('time33').value = "";
		document.getElementById('w33').value = "";
		document.getElementById('t-name33').value = "";
		document.getElementById('table').style.display = "none";
		tableA = 33;
	}else {
		
		document.getElementById("table").deleteRow(a);
		tableA--;

	}
	a--;
	document.getElementById('Append').innerHTML = a;
	expand();


}

let tableB = 4444;

function addPop() {
	if (a+b == 10){
		alert('เพิ่มถอนสูงสุดได้10รายวิชา');
		return false ;
	}

	b++;
	document.getElementById('Append2').innerHTML = b;


	if(b==1) {
		document.getElementById('table2').style.display = "block";
		document.getElementById('subject-num4444').required = "true";
		document.getElementById('subject-n4444').required = "true";
		document.getElementById('sec4444').required = "true";
		document.getElementById('time4444').required = "true";
		document.getElementById('w4444').required = "true";
		document.getElementById('t-name4444').required = "true";
		tableB++;
	}

	if(b>1) {

		let s1 = "subject-num-withdraw"+tableB;
		let s2 = "subject-n"+tableB;
		let s3 = "sec"+tableB;
		let s4 = "time"+tableB;
		let s5 = "w"+tableB;
		let s6 = "t-name"+tableB;
		
		let parentTable = document.getElementById('table2');
		let myTd,myInput;
  		let myTr = document.createElement('tr');
  		myTr.setAttribute('table2','data2');

  		for (let i=0; i<8;i++) {

  			if(i==0) {
  				myTd = document.createElement('td');
  				myInput = document.createElement('p');
  				myInput.innerHTML = b+'.';
  				myInput.style.textAlign = "center";

  				myTd.appendChild(myInput);
    			myTr.appendChild(myTd);
  			}else if(i==1){
    			myTd = document.createElement('td');
    			myInput = document.createElement('input');
    			myInput.setAttribute('type','text');
    			myInput.setAttribute("required","");
    			myInput.setAttribute("id",s1);
    			myInput.required = true;
    			myInput.style.width = "50px";
    			myInput.style.height = "26px";
    			myInput.style.margin = "-10px -16px -10px -16px";
    			myTd.appendChild(myInput);
    			myTr.appendChild(myTd);
    		}else if(i==2){
    			myTd = document.createElement('td');
    			myInput = document.createElement('input');
    			myInput.setAttribute('type','text');
    			myInput.setAttribute("required","");
    			myInput.setAttribute("id",s2);
    			myInput.required = true;
    			myInput.style.width = "115px";
    			myInput.style.height = "26px";
    			myInput.style.margin = "-10px -16px -10px -18px";
    			myTd.appendChild(myInput);
    			myTr.appendChild(myTd);
    		}else if(i==3){
    			myTd = document.createElement('td');
    			myInput = document.createElement('input');
    			myInput.setAttribute('type','text');
    			myInput.setAttribute("required","");
    			myInput.setAttribute("id",s3);
    			myInput.required = true;
    			myInput.style.width = "60px";
    			myInput.style.height = "26px";
    			myInput.style.margin = "-10px -14px -10px -12px";
    			myTd.appendChild(myInput);
    			myTr.appendChild(myTd);
    		}else if(i==4){
    			myTd = document.createElement('td');
    			myInput = document.createElement('input');
    			myInput.setAttribute('type','text');
    			myInput.setAttribute("required","");
    			myInput.setAttribute("id",s4);
    			myInput.required = true;
    			myInput.style.width = "108px";
    			myInput.style.height = "26px";
    			myInput.style.margin = "-10px -16px -10px -14px";
				myInput.placeholder = "อ. พฤ. 8:00-9:30";
    			myTd.appendChild(myInput);
    			myTr.appendChild(myTd);
    		}else if(i==5){
    			myTd = document.createElement('td');
    			myInput = document.createElement('input');
    			myInput.setAttribute('type','text');
    			myInput.setAttribute("required","");
    			myInput.setAttribute("id",s5);
    			myInput.required = true;
    			myInput.style.width = "56px";
    			myInput.style.height = "26px";
    			myInput.style.margin = "-10px -16px -10px -16px";
    			myTd.appendChild(myInput);
    			myTr.appendChild(myTd);
    		}else if(i==6){
    			myTd = document.createElement('td');
    			myInput = document.createElement('input');
    			myInput.setAttribute('type','text');
    			myInput.setAttribute("required","");
    			myInput.setAttribute("id",s6);
    			myInput.required = true;
    			myInput.style.width = "155px";
    			myInput.style.height = "26px";
    			myInput.style.margin = "-10px -12px -10px -12px";
    			myTd.appendChild(myInput);
    			myTr.appendChild(myTd);
    		}else if(i==7){
    			myTd = document.createElement('td');
    			myInput = document.createElement('input');
    			myInput.setAttribute('type','checkbox');
    			myInput.setAttribute("required","");
    			myInput.required = true;
    			myInput.style.width = "50px";
    			myInput.style.height = "24px";
    			myInput.setAttribute("disabled", true);
    			myTd.appendChild(myInput);
    			myTr.appendChild(myTd);
    		}
 		}
  		parentTable.appendChild(myTr);
  		tableB++;
	}
	document.getElementById('add_btn2').onclick=addPop;
	expand();

}

function removePop() {
	if(b <= 1) {
		b = 1;
		tableB = 4444;
		document.getElementById('subject-num4444').value = "";
		document.getElementById('subject-n4444').value = "";
		document.getElementById('sec4444').value = "";
		document.getElementById('time4444').value = "";
		document.getElementById('w4444').value = "";
		document.getElementById('t-name4444').value = "";
		document.getElementById('table2').style.display = "none";
		
	}else {

		document.getElementById("table2").deleteRow(b);
		tableB--;

	}
	b--;
	document.getElementById('Append2').innerHTML = b;
	expand();

}

let ArrayOfFile = []; //File in JSON
let ArrayOfFile_name = [];
function getFiles(){
  let files = document.getElementById("myfile").files;
  
  let file = {};

  console.log(files); // see the FileList

  // manually create a new file obj for each File in the FileList
  for(var i = 0; i < files.length; i++){

    file = {
        'lastMod'    : files[i].lastModified,
        'lastModDate': files[i].lastModifiedDate,
        'name'       : files[i].name,
        'size'       : files[i].size,
        'type'       : files[i].type,
    } 

    //add the file obj to your array
    ArrayOfFile.push(file)
    ArrayOfFile_name.push(files[i].name)
   
  }
  
  
  //stringify array
  console.log(JSON.stringify(ArrayOfFile));
  console.log(ArrayOfFile_name);
}
function showFile(){
	//for the userstory 9
	console.log(ArrayOfFile_name);
	console.log(ArrayOfFile);
  //  document.getElementById('filename').innerHTML = ' '+ArrayOfFile_name+','; //name is mean id for showing 
  

}


// function valid() {
//  var vaid = false;
//  var day = document.getElementById("Day").value;
// 	var prefix = document.stdinfo.prefix;
// 	var name = document.getElementById("stdName").value;
// 	var sid = document.getElementById("stdId").value;
// 	var year = document.getElementById("stdYear").value;
// 	var Field = document.getElementById("stdFiels").value;
//  var ad = document.getElementById("advisor").value;
// 	var houseNum = document.getElementById("addressNumber").value;
// 	var moo = document.getElementById("moo").value;
// 	var tumbol = document.getElementById("tumbol").value;
// 	var amphur = document.getElementById("amphur").value;
// 	var province = document.getElementById("province").value;
// 	var postCode = document.getElementById("postalCode").value;
// 	var phone = document.getElementById("mobilePhone").value;
// 	var homePhone = document.getElementById("phone").value;
// 	var reason = document.getElementById("cause").value;

//     if(!day){
// 		alert('โปรดกรอก "วันที่" ด้วย');
// 		event.preventDefault();
// 		return false;
// 	}

// 	for(var i=0;i<prefix.length;i++){
// 		if(prefix[i].checked){
// 			vaid = true;
// 			break;
// 		}
// 	}
// 	if (vaid == false){
// 		alert('โปรดเลือกคำนำหน้าด้วย');
// 		event.preventDefault();
// 		return false; 
// 	}

// 	if(name == ""){
// 		alert('โปรดกรอก "ชื่อ" ด้วย');
// 		event.preventDefault();
// 		return;
// 	}

// 	if(sid == ""){
// 		alert('โปรดกรอก "เลขทะเบียน" ด้วย');
// 		event.preventDefault();
// 		return false;
// 	}
// 	else if(isNaN(sid)){
// 		alert('เลขทะเบียนต้องเป็นตัวเลข');
// 		event.preventDefault();
// 		return false;
// 	}
// 	else if(sid.length != 10){
// 		alert('เลขทะเบียนต้องมี 10 หลัก')
// 		event.preventDefault();
// 		return false;
// 	}

// 	if(year == ""){
// 		alert('โปรดกรอก "ชั้นปี" ด้วย');
// 		event.preventDefault();
// 		return false;
// 	}	
// 	else if(year < 1 || year > 7){
// 		alert('ชั้นปีมีแค่ 1-7');
// 		event.preventDefault();
// 		return false;
// 	}
	
// 	if(Field == ""){
// 		alert('โปรดกรอก"สาขาวิชา"ด้วย');
// 		event.preventDefault();
// 		return false;
// 	}

//     if(ad == ""){
// 		alert('โปรดกรอก"อาจารย์ที่ปรึกษา"ด้วย');
// 		event.preventDefault();
// 		return false;
// 	}
// 	else{
// 		information["advisor"] = "" + ad;
// 	}

// 	if(houseNum == ""){
// 		alert('โปรดกรอก "บ้านเลขที่" ด้วย');
// 		event.preventDefault();
// 		return false;
// 	}
// 	else{
// 		information["addressNumber"] = "" + houseNum;
// 	}

// 	if(moo == ""){
// 		alert('โปรดกรอก "หมู่ที่" ด้วย');
// 		event.preventDefault();
// 		return false;
// 	}
// 	else{
// 		information["moo"] = "" + moo;
// 	}

// 	if(tumbol == ""){
// 		alert('โปรดกรอก "ตำบล" ด้วย');
// 		event.preventDefault();
// 		return false;
// 	}
// 	else{
// 		information["tumbol"] = "" + tumbol;
// 	}

// 	if(amphur == ""){
// 		alert('โปรดกรอก"อำเภอ"ด้วย');
// 		event.preventDefault();
// 		return false;
// 	}
// 	else{
// 		information["amphur"] = "" + amphur;
// 	}

// 	if(province == ""){
// 		alert('โปรดกรอก"จังหวัด"ด้วย');
// 		event.preventDefault();
// 		return false;
// 	}
// 	else{
// 		information["province"] = "" + province;
// 	}

// 	if(postCode == ""){
// 		alert('โปรดกรอก"รหัสไปรษณีย์"ด้วย');
// 		event.preventDefault();
// 		return false;
// 	}
// 	else if(isNaN(postCode)){
// 		alert('รหัสไปรษณีย์ต้องเป็นตัวเลข');
// 		event.preventDefault();
// 		return false;
// 	}
// 	else if(postCode < 10000 || postCode > 99999){
// 		alert('รหัสไปรษณีย์ต้องมี 5 หลัก');
// 		event.preventDefault();
// 		return false;
// 	}

// 	if(phone == ""){
// 		alert('โปรดกรอก"โทรศัพท์มือถือ"ด้วย');
// 		event.preventDefault();
// 		return false;
// 	}
// 	else if(phone.length != 10){
// 		alert('โทรศัพท์มือถือต้องมี 10 หลัก');
// 		event.preventDefault();
// 		return false;
// 	}
// 	else if(isNaN(phone)){
// 		alert('โทรศัพท์มือถือต้องเป็นตัวเลข');
// 		event.preventDefault();
// 		return false;
// 	}
// 	else if(phone.charAt(0) != '0'){
// 		alert('โทรศัพท์มือถือต้องขึ้นต้นด้วย 0');
// 		event.preventDefault();
// 		return false;
// 	}
	
// 	if(homePhone.length == 0){
// 		information["phone"] = "-" ;
// 	}
// 	else if(homePhone.length != 10){
// 		alert('โทรศัพท์บ้านต้องมี 10 หลัก');
// 		event.preventDefault();
// 		return false;
// 	}
// 	else if(isNaN(homePhone)){
// 		alert('โทรศัพท์บ้านต้องเป็นตัวเลข');
// 		event.preventDefault();
// 		return false;
// 	}
// 	else if(homePhone.charAt(0) != '0' || homePhone.charAt(1) != '1'){
// 		alert('โทรศัพท์บ้านต้องขึ้นต้นด้วย 01');
// 		event.preventDefault();
// 		return false;
// 	}

// 	if(reason == ""){
// 		alert('โปรดกรอก "เหตุผลที่ขอ เพิ่ม/ถอน" ด้วย');
// 		event.preventDefault();
// 		return false;
// 	}

// }

let kk = 0;
function valid() {
	getFiles();
	
    if(checkInputs() == false) {        
            event.preventDefault();
            return false;
        }

    if(document.getElementById('male').checked) {
          kk++;
    }else if(document.getElementById('female1').checked) {
          kk++;
    }else if(document.getElementById('female2').checked) {
          kk++;
    }

    if(kk===0) {
        alert("กรุณาเลือกคำนำหน้า");
        return false;
    }

    let x = document.getElementById('stdId').value;
    let xs = x.toString();

    if(xs.length != 10) {
        alert("เลขนักศึกษาจำเป็นต้องมี 10 หลัก");
        event.preventDefault();
        return false;
    }
    let a = parseInt(document.getElementById("add").value);
    let b = parseInt(document.getElementById("drop").value);
    if(a+b==0) {
        alert("โปรดกรอกข้อมูลรายวิชาที่ต้องการเพิ่มถอน");
        event.preventDefault();
        
        return false;
    }
    let cus = document.getElementById('reason').value;
    cus = cus.trim();
    if(cus.length==0) {
        alert("โปรดกรอกเหตุผลที่ต้องการเพิ่มถอน");
        event.preventDefault();
        return false;
    }

    let pin = document.getElementById('postalCode').value;
    let postal = pin.toString();

    if(postal.length !== 5) {
        alert("รหัสไปรษณีต้องมี 5 หลัก");
        event.preventDefault();
        return false;
    }
    

    let Phone = document.getElementById("mobilePhone").value;
    let phone = Phone.toString();

    if(phone[0] !== '0') {
        alert("เบอร์โทรศัพท์มือถือต้องเริ่มต้นด้วยเลข 0");
        event.preventDefault();
        return false;

    }
    if(phone.length !== 10) {
        alert("เบอร์โทรศัพท์มือถือต้องมี 10 หลักเท่านั้น");
        event.preventDefault();
        return false;
    }
    if(isNaN(phone)){
        alert('โทรศัพท์มือถือต้องเป็นตัวเลข');
        event.preventDefault();
        return false;
    }
    
    let cordPhone = document.getElementById("phone").value;
    if(cordPhone.length != 0) {
        if(isNaN(postal)){
            alert('เบอร์โทรศัพท์บ้านต้องเป็นตัวเลข');
            event.preventDefault();
            return false;
        }
            let cord = cordPhone.toString();
        if(cord.substr(0,2) !== "01") {
            alert("เบอร์โทรศัพท์บ้านต้องเรื่มต้นด้วย 01");
            event.preventDefault();
            return false;

        }
        if(cord.length !== 10) {
            alert("เบอร์โทรศัพท์บ้านต้องมี 10 หลักเท่านั้น");
            event.preventDefault();
            return false;
        }
    }else{
		href='index2.html'
	}
		
	
    
}

function send() {
		var c1 = document.getElementById("add").value;
		var c2 = document.getElementById("drop").value;
		console.log(c1,c2);
		var obj = new Object();
		obj.date = document.getElementById("day").value;
		obj.stdName = document.getElementById("stdName").value;
		obj.stdId = document.getElementById("stdId").value;
		obj.stdYear = document.getElementById("stdYear").value;
		obj.stdFiels = document.getElementById("stdFiels").value;
		obj.addressNumber = document.getElementById("addressNumber").value;
		obj.moo = document.getElementById("moo").value;
		obj.tumbol = document.getElementById("tumbol").value;
		obj.amphur = document.getElementById("amphur").value;
		obj.province = document.getElementById("province").value;
		obj.postalCode = document.getElementById("postalCode").value;
		obj.mobilePhone = document.getElementById("mobilePhone").value;
		obj.phone = document.getElementById("phone").value;
		obj.advisor = document.getElementById("advisor").value;
		
		for (let i = 1; i <= c1; i++) {
			var objadd = new Object();
			objadd.scode = document.getElementById("scode" + i).value;
			objadd.nsub = document.getElementById("nsub" + i).value;
			objadd.sec = document.getElementById("sec" + i).value;
			objadd.date = document.getElementById("date" + i).value;
			objadd.cd = document.getElementById("cd" + i).value;
			objadd.tn = document.getElementById("tn" + i).value;
			eval("obj.addSubjectList" + i + " = objadd");
		}
		for (let i = 1; i <= c2; i++) {
			var objdel = new Object();
			objdel.scode = document.getElementById("scode" + i).value;
			objdel.nsub = document.getElementById("nsub" + i).value;
			objdel.sec = document.getElementById("sec" + i).value;
			objdel.date = document.getElementById("date" + i).value;
			objdel.cd = document.getElementById("cd" + i).value;
			objdel.tn = document.getElementById("tn" + i).value;
			eval("obj.dropSubjectList" + i + " = objdel");
		}
		alert("ส่งข้อมูลเรียบร้อยแล้ว");
		var jsonString = JSON.stringify(obj);
		const xhttp = new XMLHttpRequest();
		xhttp.onload = function () {
			let msg = this.responseText;
			alert(msg);
		};
		xhttp.open("POST", "/saveInfo");
		xhttp.send(jsonString);
		console.log(JSON.parse(jsonString));
		return false;
	
}

function checkInputs() {

	if(document.getElementById('day').value.length == 0) {
		alert("กรุณากรอกวัน");
		event.preventDefault();
		return false;
	}

	if(document.getElementById('stdName').value.length == 0) {
		alert("กรุณากรอกชื่อ");
		return false;
	}
	if(document.getElementById('stdId').value.length == 0) {
        alert("กรุณากรอกเลขทะเบียนนักศึกษา");
		return false;
	}
    if(document.getElementById('stdYear').value.length == 0) {
        alert("กรุณากรอกชั้นปี");
		return false;
	}
	if(document.getElementById('stdYear') < 1 || document.getElementById('stdYear') > 7){
		alert('ชั้นปีมีแค่ 1-7');
		return;
    }
	if(document.getElementById('stdFiels').value.length == 0) {
		alert("กรุณากรอกสาขา");
		return false;
	}
	if(document.getElementById('addressNumber').value.length == 0) {
		alert("กรุณากรอกบ้านเลขที่");
		return false;
	}
	if(document.getElementById('tumbol').value.length == 0) {
		alert("กรุณากรอกตำบล");
		return false;
	}
	if(document.getElementById('amphur').value.length == 0) {
		alert("กรุณากรอกอำเภอ");
		return false;
	}
	if(document.getElementById('province').value.length == 0) {
		alert("กรุณากรอกจังหวัด");
		return false;
	}
	if(document.getElementById('postalCode').value.length == 0) {
		alert("กรุณากรอกรหัสไปรษณีย์");
		return false;
	}
	if(document.getElementById('mobilePhone').value.length == 0) {
		alert("กรุณากรอกเบอร์โทรศัพท์มือถือ");
		return false;
	}
	if(document.getElementById('advisor').value.length == 0) {
		alert("กรุณากรอกชื่ออาจารย์ที่ปรึกษา");
		return false;
	}
	if(document.getElementById('moo').value.length == 0) {
		alert("กรุณากรอกหมุ่");
		return false;
	}

	if(a>0) {
	for(let i =33;i<tableA; ++i) {

		let s1 = "subject-num"+i;
		let s2 = "subject-n"+i;
		let s3 = "sec"+i;
		let s4 = "time"+i;
		let s5 = "w"+i;
		let s6 = "t-name"+i;

		if(document.getElementById(s1).value == "") {
            alert("กรุณากรอกข้อมูลรายวิชาที่เพิ่ม");
			return false;
		}

		if(document.getElementById(s2).value == "") {
            alert("กรุณากรอกข้อมูลรายวิชาที่เพิ่ม");
			return false;
		}

		if(document.getElementById(s3).value == "") {
            alert("กรุณากรอกข้อมูลรายวิชาที่เพิ่ม");
			return false;
		}

		if(document.getElementById(s4).value == "") {
            alert("กรุณากรอกข้อมูลรายวิชาที่เพิ่ม");
			return false;
		}

		if(document.getElementById(s5).value == "") {
            alert("กรุณากรอกข้อมูลรายวิชาที่เพิ่ม");
			return false;
		}

		if(document.getElementById(s6).value == "") {
            alert("กรุณากรอกข้อมูลรายวิชาที่เพิ่ม");
			return false;
		}
	}	

	}

	if(b>0) {
	for(let i =4444;i<tableB; ++i) {

		let s1 = "subject-num"+i;
		let s2 = "subject-n"+i;
		let s3 = "sec"+i;
		let s4 = "time"+i;
		let s5 = "w"+i;
		let s6 = "t-name"+i;

		if(document.getElementById(s1).value == "") {
            alert("กรุณากรอกข้อมูลรายวิชาที่ถอน");
			return false;
		}

		if(document.getElementById(s2).value == "") {
            alert("กรุณากรอกข้อมูลรายวิชาที่ถอน");
			return false;
		}

		if(document.getElementById(s3).value == "") {
            alert("กรุณากรอกข้อมูลรายวิชาที่ถอน");
			return false;
		}

		if(document.getElementById(s4).value == "") {
            alert("กรุณากรอกข้อมูลรายวิชาที่ถอน");
			return false;
		}

		if(document.getElementById(s5).value == "") {
            alert("กรุณากรอกข้อมูลรายวิชาที่ถอน");
			return false;
		}

		if(document.getElementById(s6).value == "") {
            alert("กรุณากรอกข้อมูลรายวิชาที่ถอน");
			return false;
		}
	}	

    }
	return true;
}

function expand() {

	let bar = document.getElementById('bar');
	console.log(a+b);
	if(a+b==1) {
		bar.style.height = "230%";
	}
	
	if(a+b==2) {
		bar.style.height = "240%";
	}

	if(a+b==3) {
		bar.style.height = "260%";
	}
	if(a+b==4) {
		bar.style.height = "280%";
	}
	if(a+b==5) {
		bar.style.height = "295%";
	}
	if(a+b==6) {
		bar.style.height = "305%";
	}
	if(a+b==7) {
		bar.style.height = "310%";
	}
	if(a+b==8) {
		bar.style.height = "325%";
	}
	if(a+b==9) {
		bar.style.height = "335%";
	}
	if(a+b==10) {
		bar.style.height = "350%";
	}
}

function getParameterByName(name, url = window.location.href) {
	name = name.replace(/[[]]/g, '\$&');
	var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
		results = regex.exec(url);
	if (!results) return null;
	if (!results[2]) return '';
	return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

	var day = getParameterByName("day");
	var male = getParameterByName("male");
	var female = getParameterByName("female");
	var females = getParameterByName("females");
	var stdName = getParameterByName("stdName");
	var stdId = getParameterByName("stdId");
	var stdYear = getParameterByName("stdYear");
	var stdFiels = getParameterByName("stdFiels");
	var addressNumber = getParameterByName("addressNumber");
	var moo = getParameterByName("moo");
	var tumbol = getParameterByName("tumbol");
	var amphur = getParameterByName("amphur");
	var province = getParameterByName("province");
	var postalCode = getParameterByName("postalCode");
	var mobilePhone = getParameterByName("mobilePhone");
	var advisor = getParameterByName("advisor");
	var reason = getParameterByName("reason");
	var file = getParameterByName("myfile");
	var file2 = getParameterByName("myfile");


	document.getElementById("day").value = day;
	document.getElementById("male").checked = male;
	document.getElementById("female").checked = female;
	document.getElementById("females").checked = females;
	document.getElementById("stdName").value = stdName;
	document.getElementById("stdId").value = stdId;
	document.getElementById("stdYear").value = stdYear;
	document.getElementById("stdFiels").value = stdFiels;
	document.getElementById("addressNumber").value = addressNumber;
	document.getElementById("moo").value = moo;
	document.getElementById("tumbol").value = tumbol;
	document.getElementById("amphur").value = amphur;
	document.getElementById("province").value = province;
	document.getElementById("postalCode").value = postalCode;
	document.getElementById("mobilePhone").value = mobilePhone;
	document.getElementById("advisor").value = advisor;
	document.getElementById("reason").value = reason;

	

	

	var add = getParameterByName("add")
	var drop = getParameterByName("drop")
	document.getElementById("add").value = add
	document.getElementById("drop").value = drop

	for(let i=1 ; i<=10 ;i++){
		var scode = getParameterByName("scode"+i)
		document.getElementById("scode"+i).value = scode
		var nsub = getParameterByName("nsub"+i)
		document.getElementById("nsub"+i).value = nsub
		var sec = getParameterByName("sec"+i)
		document.getElementById("sec"+i).value = sec
		var date = getParameterByName("date"+i)
		document.getElementById("date"+i).value = date
		var cd = getParameterByName("cd"+i)
		document.getElementById("cd"+i).value =cd
		var tn = getParameterByName("tn"+i)
		document.getElementById("tn"+i).value = tn
		var adddrop = getParameterByName("adddrop"+i)
		document.getElementById("adddrop"+i).value = adddrop
		var pm = getParameterByName("pm"+i)
		document.getElementById("pm"+i).checked = pm
	}

let str = window.location.href;
var search = str.replace(/^[^?]+\?/, '');
var pattern = /(^|&)myfile=([^&]*)/g;
var q = [], match;
while ((match = pattern.exec(search))) {
     q.push(match[2]);
}
console.log(q);
document.querySelector('.filelist').innerHTML = q;


