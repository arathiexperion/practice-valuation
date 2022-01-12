function checkName(name) {
    nameObj = document.getElementById('name');
    nameObj.classList.remove("is-invalid");
    value = nameObj.value;
    nameObj.setAttribute("title", "")
    console.log(value);
    if (value == "") {
      console.log("Name is a mandatory field");
    }
    let pattern = /[^a-z A-Z]/g;
    let result = value.match(pattern);
    console.log(result);
    if (result){
      nameObj.classList.add("is-invalid");
      nameObj.setAttribute("title", "Name Should Have Alphabets Only");
    } 
  }

  function checkPassword(pwd)
  {
      nameobj1=document.getElementById('pwd');
      value1=nameObj.value;
      c= value1.length;
      if(c < 6){
          console.log("password must be more than 6 characters");
      }
  }