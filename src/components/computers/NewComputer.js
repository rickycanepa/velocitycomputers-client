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
    const [keyboards, setKeyboards] = useState([])
    const [motherboards, setMotherboards] = useState([])
    const [mice, setMice] = useState([])
    const [powerSupplies, setPowerSupplies] = useState([])
    const [processors, setProcessors] = useState([])
    const [ram, setRam] = useState([])
    const [ssds, setSsds] = useState([])

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
        getCaseFans().then(res => setCaseFans(res))
    }, [])
    
    useEffect(() => {
        //get cases, and then set state
        getCases().then(res => setCases(res))
    }, [])

    useEffect(() => {
        //get cpu coolers, and then set state
        getCpuCoolers().then(res => setCpuCoolers(res))
    }, [])

    useEffect(() => {
        //get gpus, and then set state
        getGpus().then(res => setGpus(res))
    }, [])

    useEffect(() => {
        //get keyboards, and then set state
        getKeyboards().then(res => setKeyboards(res))
    }, [])

    useEffect(() => {
        //get motherboards, and then set state
        getMotherboards().then(res => setMotherboards(res))
    }, [])

    useEffect(() => {
        //get mice, and then set state
        getMice().then(res => setMice(res))
    }, [])

    useEffect(() => {
        //get power supplies, and then set state
        getPowerSupplies().then(res => setPowerSupplies(res))
    }, [])

    useEffect(() => {
        //get processors, and then set state
        getProcessors().then(res => setProcessors(res))
    }, [])

    useEffect(() => {
        //get RAM, and then set state
        getRam().then(res => setRam(res))
    }, [])

    useEffect(() => {
        //get SSDs, and then set state
        getSsds().then(res => setSsds(res))
    }, [])

    const onChange = (event) => {
        const copy = { ...computer }
        copy[event.target.name] = event.target.value
        setComputer(copy)
    }

}