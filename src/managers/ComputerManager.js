export const getComputers = () => {
    return fetch("http://localhost:8000/computers", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("velocity_token")}`
        }
    })
        .then(response => response.json())
}