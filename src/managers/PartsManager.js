export const getCaseFans = () => {
    return fetch("http://localhost:8000/case_fans", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("velocity_token")}`
        }
    })
        .then(response => response.json())
}

export const getCases = () => {
    return fetch("http://localhost:8000/cases", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("velocity_token")}`
        }
    })
        .then(response => response.json())
}

export const getCpuCoolers = () => {
    return fetch("http://localhost:8000/cpu_coolers", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("velocity_token")}`
        }
    })
        .then(response => response.json())
}

export const getGpus = () => {
    return fetch("http://localhost:8000/gpus", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("velocity_token")}`
        }
    })
        .then(response => response.json())
}

export const getKeyboards = () => {
    return fetch("http://localhost:8000/keyboards", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("velocity_token")}`
        }
    })
        .then(response => response.json())
}

export const getMotherboards = () => {
    return fetch("http://localhost:8000/motherboards", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("velocity_token")}`
        }
    })
        .then(response => response.json())
}

export const getMice = () => {
    return fetch("http://localhost:8000/mice", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("velocity_token")}`
        }
    })
        .then(response => response.json())
}

export const getPowerSupplies = () => {
    return fetch("http://localhost:8000/power_supplies", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("velocity_token")}`
        }
    })
        .then(response => response.json())
}

export const getProcessors = () => {
    return fetch("http://localhost:8000/processors", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("velocity_token")}`
        }
    })
        .then(response => response.json())
}

export const getRam = () => {
    return fetch("http://localhost:8000/ram", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("velocity_token")}`
        }
    })
        .then(response => response.json())
}

export const getSsds = () => {
    return fetch("http://localhost:8000/ssds", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("velocity_token")}`
        }
    })
        .then(response => response.json())
}

