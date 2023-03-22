const token = localStorage.getItem("velocity_token")

export const getComputers = () => {
    return fetch("http://localhost:8000/computers", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("velocity_token")}`
        }
    })
        .then(response => response.json())
}

export const addComputer = (computer) => {
    return fetch("http://localhost:8000/computers", { 
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("velocity_token")}`
        },
        body: JSON.stringify(computer)
    })
        .then(res => res.json())
}

export const unfavoriteComputer = computerId => {
    return fetch('http://localhost:8000/favorites/')
}