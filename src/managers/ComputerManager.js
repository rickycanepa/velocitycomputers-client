const token = localStorage.getItem("velocity_token")

export const getComputers = () => {
    return fetch("http://localhost:8000/computers", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("velocity_token")}`
        }
    })
        .then(response => response.json())
}

export const getComputersByCustomer = (id) => {
    return fetch(`http://localhost:8000/computers?customer=${id}`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("velocity_token")}`
        }
    })
        .then(response => response.json())
}

export const getComputerById = (id) => {
    return fetch(`http://localhost:8000/computers/${id}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("velocity_token")}`
        }
    })
        .then(response => response.json())
}

export const updateComputer = (computer, id) => {
    return fetch(`http://localhost:8000/computers/${id}`, {
    method: "PUT",
    headers: {
        "Authorization": `Token ${localStorage.getItem("velocity_token")}`,
        "Content-Type": "application/json"
    },
    body: JSON.stringify(computer)
    })
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

export const deleteComputer = (id) => {
    return fetch(`http://localhost:8000/computers/${id}`, {
        method: "DELETE",
        headers: {
            "Authorization": `Token ${localStorage.getItem("velocity_token")}`,
        }
    })
};

export const unfavoriteComputer = computerId => {
    return fetch('http://localhost:8000/favorites/')
}

export const unfavorite = computerId => {
    // TODO: Write the DELETE fetch request to unfavorite a computer
    return fetch(`http://localhost:8000/computers/${computerId}/unfavorite`, {
        method: "DELETE",
        headers: {
            "Authorization": `Token ${localStorage.getItem("velocity_token")}`,
        }
    })
  }
  
  export const favorite = computerId => {
      // TODO: Write the POST fetch request to join and event
      return fetch(`http://localhost:8000/computers/${computerId}/favorite`, {
        method: "POST",
        headers:{
            "Authorization": `Token ${localStorage.getItem("velocity_token")}`,
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(computerId)
    })
        .then(res => res.json())
  }