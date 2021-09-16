// const name = document.querySelector("#name")
// const author = document.querySelector("#author")
// const description = document.querySelector("#description")
// const genre = document.querySelector("#genre")
// const ageLimit = document.querySelector("#age-limit")
// const book = document.querySelector("#book")
// const cover = document.querySelector("#cover")

const url = "https://nyansa-api.herokuapp.com/book"

// document.querySelector("#post-button").addEventListener("click", (e)=>{
//     e.preventDefault()
//     axios.post( url ,{
//     name:name.value,
//     description:description.value,
//     genre:genre.value,
//     ageRating: ageLimit.value,
//     author:author.value,
//     fileUrl: book.files[0],
//     coverImage: cover.files[0] 
// }).then(()=>{
//     alert("Book uploaded successfully")
//     title.value = ""
//     author.value = ""
//     description.value = ""
//     genre.value = ""
//     ageLimit.value = ""
// }).catch((error)=>{
//     console.log(error)
//     alert("Something went wrong")
// })
// })

        
        // const data = {
        //     name: form.elements["name"].value,
        //     description: form.elements["description"].value,
        //     author: form.elements["author"].value,
        //     genre: form.elements["genre"].value,
        //     ageRating: form.elements["ageRating"].value,
        //     description: form.elements["description"].value,
        //     fileUrl: form.elements["fileUrl"].value,
        //     coverImage: form.elements["coverImage"].value,
        // }

        // fetch(`${url}`, {
        //   method: 'POST',
        //   headers:{
        //     'Content-type': 'application/json'
        //   },
        //   body: JSON.stringify(data)
        // }).then(response => response.json())
        // .then(response => {
        //   if(response.message == "success"){
        //     location.reload()
        //     alert("House updated successfully")
        //   }
        // })


// const form = document.querySelector("#feedback_form")
    
// form.addEventListener("submit", (e)=>{
    // e.preventDefault()
    // console.log("Clicked")

    // const data = { 
    //     name: form.elements["name"].value,
    //     description: form.elements["description"].value,
    //     author: form.elements["author"].value,
    //     genre: form.elements["genre"].value,
    //     ageRating: form.elements["ageRating"].value,
    //     description: form.elements["description"].value,
    //     fileUrl: form.elements["fileUrl"].files[0],
    //     coverImage: form.elements["coverImage"].files[0],
    // }

    // fetch(`${url}`, {
    //   method: 'POST',
    //   headers:{
    //     'Content-type': 'application/json'
    //   },
    //   body: JSON.stringify(data)
    // }).then(response => response.json())
    // .then(response => {
    //   if(response.message == "success"){
    //     location.reload()
    //     alert("Book Added Successfully")
    //   }
    // })
    // .catch((error)=>{
    // console.log(error)
    // alert("Something went wrong")
    // })
   
// })
