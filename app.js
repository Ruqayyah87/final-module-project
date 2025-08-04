
  
  
  
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getDatabase,ref,push } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js";
  
  const firebaseConfig = {
    apiKey: "AIzaSyDNLrT6AoX3m2UIydrQkbgZw2KQbijEtAc",
    authDomain: "minimind-learning-place.firebaseapp.com",
    databaseURL: "https://minimind-learning-place-default-rtdb.firebaseio.com", 
    projectId: "minimind-learning-place",
    storageBucket: "minimind-learning-place.firebasestorage.app",
    messagingSenderId: "1038638227003",
    appId: "1:1038638227003:web:523dddea9f86cb2c73861e",
    measurementId: "G-C4XHELC724"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  // const analytics = getAnalytics(app);
  const db = getDatabase(app)
//    console.log(db);
  



window.submitForm = (event) => {
  event.preventDefault();

  const parentName = document.getElementById("parentName").value.trim();
  const childName = document.getElementById("childName").value.trim();
  const contact = document.getElementById("contactNum").value.trim();
  const grade = document.getElementById("studentClass").value;
  const email = document.getElementById("email").value.trim();
  const notes = document.getElementById("notes").value.trim();
  const male = document.getElementById("male")
  const female = document.getElementById("female")
const genError = document.getElementById("genError");
  const childError = document.getElementById("childError");
const numError = document.getElementById("numError");
const parentError = document.getElementById("parentError");

const classError = document.getElementById("classError");
  const errorMsg = document.getElementById("errorMsg");













  parentError.innerText = "";
  childError.innerText = "";
  numError.innerText = "";
  classError.innerText = "";
  genError.innerText = "";
  errorMsg.innerText = "";

  
  
  if (!parentName || !childName || !contact || !email || !notes ) {
    errorMsg.innerText = "Please fill all fields";
    return;
  }

  
  if (parentName.length < 6) {
    parentError.innerText = "This name is invalid";
    return;
  }

  if (childName.length < 6) {
    childError.innerText = "This name is invalid";
    return;
  }
  if (contact.length !== 11 || isNaN(contact) || !contact.startsWith("03")) {
  numError.innerText = "Contact number must start with 03 and be 11 digits long";
  return;
}

if(grade===""){
  classError.innerText="Please select class"
  return
}
if(!male.checked&&!female.checked){
genError.innerText="please select Gender"
return;
}


  
  console.log("Form passed validation ");



const gender = male.checked ? "Male" : "Female";


var obj ={



  
  childName,
  parentName,
  contact,
  grade,
  gender,
  email,
  notes
}




  


var formData= ref(db,"StudentsInfo/")
push(formData,obj)



.then(() => {
    console.log("Data saved to Firebase ");
    document.getElementById("enrollmentForm").reset();
    window.location.href = "formsubmit.html";
  })
  .catch((error) => {
  console.error("Firebase error", error);
  alert("Oops! Something went wrong. Please try again.");





})};
