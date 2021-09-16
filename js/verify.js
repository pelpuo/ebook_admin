console.log("verifying...")

if(!localStorage.getItem("nyansaAuthToken")){
    location.href = "./login.html"
}else{
    console.log("verified")
}
