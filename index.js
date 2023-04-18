// Add your code here
function submitData(name, email){
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            name: name,
            email: email,
        })
    })
    .then(res => res.json())
    .then(object => document.querySelector("body").append(object.id))
    .catch(error => {
        let errorMessage = "Unauthorized Access"
        document.querySelector("body").textContent = errorMessage
    })
}