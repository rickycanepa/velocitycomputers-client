import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getComputers, addComputer } from "../../managers/ComputerManager"
import { getCaseFans, getCases, getCpuCoolers, getGpus, getKeyboards, getMotherboards, getMice, getPowerSupplies, getProcessors, getRam, getSsds } from "../../managers/PartsManager" 
import * as React from 'react'


export const CreateComputer = () => {
    
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
        ssd: 0,
        price: 0
    })

    //get parts, and then set state

    useEffect(() => {
        Promise.all([
          getCaseFans(),
          getCases(),
          getCpuCoolers(),
          getGpus(),
          getKeyboards(),
          getMotherboards(),
          getMice(),
          getPowerSupplies(),
          getProcessors(),
          getRam(),
          getSsds()
        ]).then(([caseFans, kases, cpuCoolers, gpus, keyboards, motherboards, mice, powerSupplies, processors, ram, ssds]) => {
          setCaseFans(caseFans);
          setKases(kases); 
          setCpuCoolers(cpuCoolers);
          setGpus(gpus);
          setKeyboards(keyboards);
          setMotherboards(motherboards);
          setMice(mice);
          setPowerSupplies(powerSupplies);
          setProcessors(processors);
          setRam(ram);
          setSsds(ssds);
        });
      }, []);

      console.log(kases)
    
    const [totalPrice, setTotalPrice] = useState(0)
    
    const changeComputerState = (event) => {
        const copy = { ...computer }
        copy[event.target.name] = event.target.value
        // let totalCost = 0
        setComputer(copy)
        
        let newTotalPrice = 0
        if (copy.power_supply > 0) {
          newTotalPrice += parseFloat(powerSupplies[copy.power_supply - 1].price);
        }
        if (copy.case > 0) {
          newTotalPrice += parseFloat(kases[copy.case - 1].price)
        }
        if (copy.case_fan > 0) {
            newTotalPrice += parseFloat(caseFans[copy.case_fan - 1].price)
        }
        if (copy.cpu_cooler > 0) {
            newTotalPrice += parseFloat(cpuCoolers[copy.cpu_cooler - 1].price)
        }
        if (copy.gpu > 0) {
            newTotalPrice += parseFloat(gpus[copy.gpu - 1].price)
        }
        if (copy.keyboard > 0) {
            newTotalPrice += parseFloat(keyboards[copy.keyboard - 1].price)
        }
        if (copy.motherboard > 0) {
            newTotalPrice += parseFloat(motherboards[copy.motherboard - 1].price)
        }
        if (copy.mouse > 0) {
            newTotalPrice += parseFloat(mice[copy.mouse - 1].price)
        }
        if (copy.processor > 0) {
            newTotalPrice += parseFloat(processors[copy.processor - 1].price)
        }
        if (copy.ram > 0) {
            newTotalPrice += parseFloat(ram[copy.ram - 1].price)
        }
        if (copy.ssd > 0) {
            newTotalPrice += parseFloat(ssds[copy.ssd - 1].price)
        }
        setTotalPrice(newTotalPrice.toFixed(2))
      }
        
    

    return (
        <form className="computerForm">
            <h2 className="computerForm__title">Create New PC</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">PC Title: </label>
                    <input type="text" name="name" required autoFocus className="form-control"
                        value={computer.name}
                        onChange={changeComputerState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Description: </label>
                    <input type="text" name="description" required className="form-control"
                        value={computer.description}
                        onChange={changeComputerState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                <label className="label">Power Supply: </label>
                <select
                        name="power_supply"
                        className="form-control"
                        value={computer.power_supply}
                        onChange={(event) => {
                            const copy = { ...computer }
                            copy.power_supply = parseInt(event.target.value)
                            setComputer(copy)
                            changeComputerState(event)
                        }}>
                        <option value="0">Choose:</option>
                        {powerSupplies.map(powerSupply => ( 
                                    <option key={`power_supply--${powerSupply.id}`} value={powerSupply.id} name={powerSupply.title}>{powerSupply.title} ${powerSupply.price}</option>                         
                            ))}
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                <label className="label">Processor: </label>
                <select
                        name="processor"
                        className="form-control"
                        value={computer.processor}
                        onChange={(event) => {
                            const copy = { ...computer }
                            copy.processor = parseInt(event.target.value)
                            setComputer(copy)
                            changeComputerState(event)
                        }}>
                        <option value="0">Choose:</option>
                        {processors.map(processor => ( 
                                    <option key={`processor--${processor.id}`} value={processor.id} name={processor.title}>{processor.title} ${processor.price}</option>                         
                            ))}
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                <label className="label">GPU: </label>
                <select
                        name="gpu"
                        className="form-control"
                        value={computer.gpu}
                        onChange={(event) => {
                            const copy = { ...computer }
                            copy.gpu = parseInt(event.target.value)
                            setComputer(copy)
                            changeComputerState(event)
                        }}>
                        <option value="0">Choose:</option>
                        {gpus.map(gpu => ( 
                                    <option key={`gpu--${gpu.id}`} value={gpu.id} name={gpu.title}>{gpu.title} ${gpu.price}</option>                         
                            ))}
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                <label className="label">Motherboard: </label>
                <select
                        name="motherboard"
                        className="form-control"
                        value={computer.motherboard}
                        onChange={(event) => {
                            const copy = { ...computer }
                            copy.motherboard = parseInt(event.target.value)
                            setComputer(copy)
                            changeComputerState(event)
                        }}>
                        <option value="0">Choose:</option>
                        {motherboards.map(mobo => ( 
                                    <option key={`motherboard--${mobo.id}`} value={mobo.id} name={mobo.title}>{mobo.title} ${mobo.price}</option>                         
                            ))}
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                <label className="label">RAM: </label>
                <select
                        name="ram"
                        className="form-control"
                        value={computer.ram}
                        onChange={(event) => {
                            const copy = { ...computer }
                            copy.ram = parseInt(event.target.value)
                            setComputer(copy)
                            changeComputerState(event)
                        }}>
                        <option value="0">Choose:</option>
                        {ram.map(mem => ( 
                                    <option key={`ram--${mem.id}`} value={mem.id} name={mem.title}>{mem.title} ${mem.price}</option>                         
                            ))}
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                <label className="label">Case: </label>
                <select
                        name="case"
                        className="form-control"
                        value={computer.case}
                        onChange={(event) => {
                            const copy = { ...computer }
                            copy.case = parseInt(event.target.value)
                            setComputer(copy)
                            changeComputerState(event)
                        }}>
                        <option value="0">Choose:</option>
                        {kases.map(c => ( 
                                    <option key={`case--${c.id}`} value={c.id} name={c.title}>{c.title} ${c.price}</option>                         
                            ))}
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                <label className="label">CPU Cooler: </label>
                <select
                        name="cpu_cooler"
                        className="form-control"
                        value={computer.cpu_cooler}
                        onChange={(event) => {
                            const copy = { ...computer }
                            copy.cpu_cooler = parseInt(event.target.value)
                            setComputer(copy)
                            changeComputerState(event)
                        }}>
                        <option value="0">Choose:</option>
                        {cpuCoolers.map(cooler => ( 
                                    <option key={`cooler--${cooler.id}`} value={cooler.id} name={cooler.title}>{cooler.title} ${cooler.price}</option>                         
                            ))}
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                <label className="label">Keyboard: </label>
                <select
                        name="keyboard"
                        className="form-control"
                        value={computer.keyboard}
                        onChange={(event) => {
                            const copy = { ...computer }
                            copy.keyboard = parseInt(event.target.value)
                            setComputer(copy)
                            changeComputerState(event)
                        }}>
                        <option value="0">Choose:</option>
                        {keyboards.map(board => ( 
                                    <option key={`keyboard--${board.id}`} value={board.id} name={board.title}>{board.title} ${board.price}</option>                         
                            ))}
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                <label className="label">Mouse: </label>
                <select
                        name="mouse"
                        className="form-control"
                        value={computer.mouse}
                        onChange={(event) => {
                            const copy = { ...computer }
                            copy.mouse = parseInt(event.target.value)
                            setComputer(copy)
                            changeComputerState(event)
                        }}>
                        <option value="0">Choose:</option>
                        {mice.map(mouse => ( 
                                    <option key={`mouse--${mouse.id}`} value={mouse.id} name={mouse.title}>{mouse.title} ${mouse.price}</option>                         
                            ))}
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                <label className="label">SSD: </label>
                <select
                        name="ssd"
                        className="form-control"
                        value={computer.ssd}
                        onChange={(event) => {
                            const copy = { ...computer }
                            copy.ssd = parseInt(event.target.value)
                            setComputer(copy)
                            changeComputerState(event)
                        }}>
                        <option value="0">Choose:</option>
                        {ssds.map(ssd => ( 
                                    <option key={`ssd--${ssd.id}`} value={ssd.id} name={ssd.title}>{ssd.title} ${ssd.price}</option>                         
                            ))}
                    </select>
                </div>
            </fieldset>


            <button type="submit"
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()
                    const newComputer = {
                        name: computer.name,
                        description: computer.description,
                        power_supply: computer.power_supply,
                        processor: computer.processor,
                        gpu: computer.gpu,
                        motherboard: computer.motherboard,
                        ram: computer.ram,
                        case: computer.case,
                        cpu_cooler: computer.cpu_cooler,
                        keyboard: computer.keyboard,
                        mouse: computer.keyboard,
                        ssd: computer.ssd,
                    }

                    // Send POST request to your API
                    addComputer(newComputer)
                        .then(() => navigate("/computers"))
                }}
                className="btn btn-primary">Create</button>
                <p className="price">Total Price: ${totalPrice} </p>
        </form>
    )
}

