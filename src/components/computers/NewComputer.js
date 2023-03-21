import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getComputers, addComputer } from "../../managers/ComputerManager"
import { getCaseFans, getCases, getCpuCoolers, getGpus, getKeyboards, getMotherboards, getMice, getPowerSupplies, getProcessors, getRam, getSsds } from "../../managers/PartsManager" 
import * as React from 'react'


export const CreateComputer = () => {
    
    const navigate = useNavigate()
    const [caseFans, setCaseFans] = useState([])
    const [cases, setCases] = useState([])
    const [cpuCoolers, setCpuCoolers] = useState([])
    const [gpus, setGpus] = useState([])
    const [keyboards, setKeyboads] = useState([])
    const [motherboards, setMotherboards] = useState([])
    const [mice, setMice] = useState([])
    const [powerSupplies, setPowerSupplies] = useState([])
    const [processors, setProcessors] = useState([])
    const [ram, setRam] = useState([])
    const [ssd, setSsd] = useState([])

    //Initialize and set state for computers

    const [computer, setComputer] = useState({
        name: "",
        description: "",
        power_supply: 0,
        processor: 0,
        gpu: 0,
        motherboard: 0,
        ram: 0,
        case: 0,
        cpu_cooler: 0,
        keyboard: 0,
        mouse: 0,
        ssd: 0
    })

    useEffect(() => {
        //get case fans, and then set state
        getCaseFans().then(res => )
    })


}