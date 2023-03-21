const token = localStorage.getItem("velocity_token")

export const getComputers = () => {
    return fetch("http://localhost:8000/computers", {
        headers:{
            "Authorization": `Token ${token}`
        }
    })
        .then(response => response.json())
}

export const addComputer = (computer) => {
    const newPost = {
        name: computer.name,
        description: computer.description,
        customer: computer.customer,
        power_supply: parseInt(computer.power_supply),
        processor: parseInt(computer.processor),
        gpu: parseInt(computer.gpu),
        motherboard: parseInt(computer.motherboard),
        ram: parseInt(computer.ram),
        case: parseInt(computer.case),
        cpu_cooler: parseInt(computer.cpu_cooler),
        keyboard: parseInt(computer.keyboard),
        mouse: parseInt(computer.mouse),
        ssd: parseInt(computer.ssd),
        price: computer.price
    }
    return fetch("http://localhost:8000/computers", {
        method: "POST",
        headers: {
            "Authorization" : `Token ${token}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newComputer)
    })
}