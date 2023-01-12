check = '0';
function login()
{

   const username =document.getElementById("username").value;
   const password =document.getElementById("password").value; 

   

   var mylist =JSON.parse(list);

  	   if(!username)
   	{
    		alert("Please write down your username");
    		
   	}
   	if(!password)
   	{
    	  alert("Please write down your password");
    		
   	}

   		
   	
   for(list in mylist)
		{

			let stdUsername = mylist[list].username;
			let stdPassword = mylist[list].password;
			

			if(stdUsername == username &&stdPassword== password)
			{
				check = '1';
				console.log(username+" has login to the server.");
				window.location.href = 'index.html';
			}
			
		}

		if(check !== '1')
			{
				alert("Incorrect Username and Password");
				location.reload();
			}



}
