
var inputTask = document.getElementById("text")
let addTask = document.getElementById("add-task")
let list = document.querySelector("ul")
let ele = document.querySelector("li")
let setitem = document.getElementById("list-item")
let checkboxele = document.getElementById("check")

 const displayTasks = (userInput) => {
      if(userInput === '')
      alert('Please enter a task!')
      else{
        let li = document.createElement("li")
        li.innerHTML = userInput;
        setitem.appendChild(li)
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span).classList.add("change")
      }
       inputTask.value = ''
      tasksSave();

 }
     setitem.addEventListener("click", function(e){
       
          if(e.target.tagName === "LI")
          e.target.classList.toggle("checked")
          else{
            e.target.parentElement.remove()
          }
          
           
         
     })

 addTask.onclick = () => {
    displayTasks(inputTask.value);
 }

  const tasksSave = () => {
    localStorage.setItem("data",setitem.innerHTML)
  }

   function getTasks(){
    setitem.innerHTML = localStorage.getItem("data")
   }
   getTasks();

   
 
  



















//  const data =  document.querySelector(".text");
//  const listItem = document.querySelector(".list-item")

//  var k = 1;
//   document.querySelector("button").addEventListener("click", function(){
     
//     if(data.value == "")
//     alert("Some thing has to write");

//     else{

//       let i = document.createElement("li")
    
//       i.innerHTML = data.value;
     
//       listItem.appendChild(i);
//       let span = document.createElement("span")
//       span.innerHTML = "\u00d7"
//       i.append(span)
    
//     }
//     data.value = ""
    
//   });
    
//     //   function hello(){

//     //   document.querySelector("span").addEventListener("click",function(e){
//     //      if(e.target == x)
//     //      localStorage.removeItem(listItem.parentElement.innerHTML)
//     //      //localStorage.removeItem(e.innerHTML)
//     //  });
      
     
    
     
     
 

//  function saveData(){
 
// //  localStorage.setItem("data", listItem.innerHTML)
 
//  }
   


 


//      listItem.innerHTML = localStorage.getItem("data")


//    //  localStorage.clear();