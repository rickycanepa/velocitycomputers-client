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

    console.log(computerId)
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
        case_fan: 0,
        cpu_cooler: 0,
        keyboard: 0,
        mouse: 0,
        ssd: 0
    })

    useEffect(() => {
        Promise.all([
          getCases(),
          getProcessors(),
          getMotherboards(),
          getRam(),
          getSsds(),
          getGpus(),
          getCpuCoolers(),
          getPowerSupplies(),
          getKeyboards(),
          getMice(),
          getCaseFans(),
          getComputerById(computerId)
        ]).then(([cases, processors, motherboards, ram, ssds, gpus, cpuCoolers, powerSupplies, keyboards, mice, caseFans, currentComputer]) => {
          setCurrentComputer({
            ...currentComputer,
            case: currentComputer.case.id,
            processor: currentComputer.processor.id,
            motherboard: currentComputer.motherboard.id,
            ram: currentComputer.ram.id,
            ssd: currentComputer.ssd.id,
            gpu: currentComputer.gpu.id,
            cpu_cooler: currentComputer.cpu_cooler.id,
            power_supply: currentComputer.power_supply.id,
            keyboard: currentComputer.keyboard.id,
            mouse: currentComputer.mouse.id,
            case_fan: currentComputer.case_fan
          });
          
          setKases(cases);
          setProcessors(processors);
          setMotherboards(motherboards);
          setRam(ram);
          setSsds(ssds);
          setGpus(gpus);
          setCpuCoolers(cpuCoolers);
          setPowerSupplies(powerSupplies);
          setKeyboards(keyboards);
          setMice(mice);
          setCaseFans(caseFans);
        });
      }, [computerId]);
      

    const [totalPrice, setTotalPrice] = useState(0)

    const changeComputerState = (event) => {
        const copy = { ...currentComputer }
        copy[event.target.name] = event.target.value
        let totalCost = 0
        setCurrentComputer(copy)

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
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" >
            <h2 className="computerForm__title">Create New PC</h2>
            <fieldset>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-bold mb-2">PC Title: </label>
                    <input type="text" name="name" required autoFocus className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={computer.name}
                        onChange={changeComputerState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="mb-4">
                    <label htmlFor="description" className="block text-gray-700 font-bold mb-2">Description: </label>
                    <input type="text" name="description" required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={computer.description}
                        onChange={changeComputerState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Power Supply: </label>
                <select
                        name="power_supply"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Processor: </label>
                <select
                        name="processor"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">GPU: </label>
                <select
                        name="gpu"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Motherboard: </label>
                <select
                        name="motherboard"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">RAM: </label>
                <select
                        name="ram"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Case: </label>
                <select
                        name="case"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">CPU Cooler: </label>
                <select
                        name="cpu_cooler"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Keyboard: </label>
                <select
                        name="keyboard"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Mouse: </label>
                <select
                        name="mouse"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">SSD: </label>
                <select
                        name="ssd"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                    const computer = {
                        name: currentComputer.name,
                        description: currentComputer.description,
                        customer: currentComputer.customer,
                        power_supply: currentComputer.power_supply,
                        processor: currentComputer.processor,
                        gpu: currentComputer.gpu,
                        motherboard: currentComputer.motherboard,
                        ram: currentComputer.ram,
                        case: currentComputer.case,
                        cpu_cooler: currentComputer.cpu_cooler,
                        keyboard: currentComputer.keyboard,
                        mouse: currentComputer.keyboard,
                        ssd: currentComputer.ssd
                    }

                    // Send POST request to your API
                    updateComputer(computer, computerId)
                        .then(() => navigate("/mycomputers"))
                }}
                className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Update</button>
                
        </form>
    )
    
    
    
}