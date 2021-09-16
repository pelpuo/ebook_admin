const email = document.querySelector("#email") 
const password = document.querySelector("#password") 

const url="http://localhost:3000/login"

document.querySelector("#loginBtn").addEventListener("click", e =>{
  e.preventDefault()
  console.log("Clicked")

  const data = { 
      email:email.value,
      password:password.value
  }

//   console.log(data)

  fetch("http://localhost:3000/login", {
    method: 'POST',
    headers:{
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => {
    if(data.message == "success"){
      location.href = './index.html'
      alert("Login successful")
    }
  })
  .catch((error)=>{
  console.log(error)
  alert(`Error: ${error}`)
  })

//   axios({
//       method:"post",
//       url:url,
//       data:{
//         email:email.value,
//         password:password.value
//       }
//   })
//   .then(response => response.json())
//   .then(data => {
//     if(data.message == "success"){
//       location.href('index.html')
//       alert("Login successful")
//     }
//   })
//   .catch((error)=>{
//   console.log(error)
//   alert(`Error: ${error}`)
//   })

})