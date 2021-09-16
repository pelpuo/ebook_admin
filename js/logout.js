document.querySelector("#logout_btn").addEventListener("click", e =>{

    localStorage.removeItem("nyansaAuthToken")
})