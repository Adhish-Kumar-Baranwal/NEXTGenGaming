const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
});

function validation() {
  var returnVal = true;
  var fName = document.myForm.name.value;
  var email = document.myForm.email.value;
  var address = document.myForm.message.value;

  if (fName.trim() == '') {
    alert("First Name cannot be empty!");
    returnVal = false;
  } else if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    alert("Invalid email address format! Please use name@domain.com format.");
    returnVal = false;
  } else if (address.trim() == '') {
    alert("Message cannot be empty!");
    returnVal = false;
  }else if (returnVal == true) {
    alert("Message sent successfully");
    document.myForm.submit();
  }

  return returnVal;
}
