import { useState, useEffect } from "react"
import { useNavigate, useParams } from 'react-router-dom'
import { getComputerById, updateComputer } from "../../managers/ComputerManager"
import { getCaseFans, getCases, getCpuCoolers, getGpus, getKeyboards, getMotherboards, getMice, getPowerSupplies, getProcessors, getRam, getSsds } from "../../managers/PartsManager"

export const UpdateComputer = () => {
    const navigate = useNavigate()
    const [caseFans, setCaseFans] = useState([])
    const [kases, setKases] = useState([])
    const [cpuCoolers, setCpuCoolers] = useState([])
    const [gpus, setGpus] = useState([])
    const [keyboards, setKeyboards] = useState([])
    const [motherboards, setMotherboards] = useState([])
    const [mice, setMice] = useState([])
    const [powerSupplies, setPowerSupplies] = useState([])
    const [processors, setProcessors] = useState([])
    const [ram, setRam] = useState([])
    const [ssds, setSsds] = useState([])
    const { computerId } = useParams()

    const [currentComputer, setCurrentComputer] = useState({
        name: "",
        description: "",
        customer: 0,
        power_supply: 0,
        processor: 0,
        gpu: 0,
        motherboard: 0,
        ram: 0,
        case: 0,
        cpu_cooler: 0,
        keyboard: 0,
        mouse: 0,
        ssd: 0,
    })

    useEffect(() => {
        // TODO: Get the power supplies, then set the state
        getPowerSupplies().then(res => setPowerSupplies(res))
        getComputerById(computerId).then((res) => {
            res.powerSupplyId = res.power_supply.id
            setCurrentComputer(res)
        })
    }, [computerId])
}