// function checkuname(){
// 	var uname = document.getElementById("username").value;
// 	var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
// 	if(!filter.test(uname)){
// 		alert("Please enter valid user name")
// 	}
// }

// function checkpwd(){
// 	var pwd = document.getElementById("password").value;
// 	if(pwd==''){
// 		alert("please enter your password");
// 	}
// }

// function islogin()
// 	{
// 		var uname = document.getElementById("username").value;
// 		var pwd = document.getElementById("password").value;
//         //console.log(uname);
// 		//var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
//         var filter = /^([a-zA-Z0-9_\.\-])+$/;
		  
// 		if(uname =='')
// 		{
// 			alert("please enter user name.");
// 			return false;
// 		}
// 		else if(pwd=='')
// 		{
//         	alert("enter the password");
// 			return false;
// 		}
// 		else if(!filter.test(uname))
// 		{
// 			alert("Enter valid email id.");
// 			return false;
// 		}
// 		else if(pwd.length < 2 )
// 		{
// 			alert("Password require minimum 8 characters");
// 			return false;
// 		}
//      	else
// 	    {
// 			alert('Thank You for Login');
// 			return true;
// 		}
// 	}

// 	function valid(){
// 		if(islogin()==true) {
// 			//window.location.href= 'https://www.campuslife.co.in';
// 			alert('Thank You for Login');
// 		}
	
		
// }


const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const nameInput = document.getElementById('username');
  const emailInput = document.getElementById('password');

  if (nameInput.value === '') {
    nameInput.classList.add('error');
    // display error message for name field
  } else {
    nameInput.classList.remove('error');
  }

  if (!validateEmail(emailInput.value)) {
    emailInput.classList.add('error');
    // display error message for email field
  } else {
    emailInput.classList.remove('error');
  }

  if (nameInput.value !== '' && validateEmail(emailInput.value)) {
    form.submit();
  }
});

function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}
