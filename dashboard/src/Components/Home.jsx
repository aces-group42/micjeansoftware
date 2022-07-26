import image from '../assets/bg.svg'
import { useState } from 'react'
const Home = ()=>{

    const [name,setName]=useState("")
    const [category,setCategory]=useState("")
    const [price,setPrice]=useState(0)
    const [whatYouGet,setWhatYouGet]=useState("")
    const [loading,setLoading] = useState(false)


    const submitToDataBase = (event)=>{
        event.preventDefault()
        
        const dataToSend={
            name,
            price:Number(price).toFixed(2),
            category,
            whatYouGet
        }
        
        const sendToDB = async ()=>{
            try {
                setLoading(true)
                const result = await fetch("http://127.0.0.1:4500/upload",{
                    method:"POST",
                    headers:{"Content-Type":"application/json"},
                    body:JSON.stringify(dataToSend)
                })
                const response = await result.json()
                setLoading(false)
                console.log(response)
            } catch (error) {
                console.log(error.message)
            }
        }
        sendToDB()
    }

    return(
        <main className='w-4/5 mx-auto'>
            {/* header */}
            <p className='text-xl text-center font-bold text-gray-500 mt-5'>MICJEAN'S FOOD DASHBOARD</p>
            <div className='md:w-1/5 w-2/3 mx-auto mt-5'>
                <img className='' src={image} alt="demo" />
            </div>
            {/* input */}
            <form className='mt-5'>
                {/* Name */}
                <div className='flex flex-col space-y-3 mt-5'>
                    <label className='text-lg text-gray-700' htmlFor="name">Name</label>
                    <input onChange={(event)=>{
                        setName(event.target.value)
                    }} required  className='bg-gray-100 p-3 rounded-md shadow outline-none' placeholder='Food name..' type="text" id="name" />
                </div>
                {/* Category */}
                <div className='flex flex-col space-y-3 mt-8'>
                    <label className='text-lg text-gray-700' htmlFor="category">Category</label>
                    <input onChange={(event)=>{
                        setCategory(event.target.value)
                    }} required className='bg-gray-100 p-3 rounded-md shadow outline-none' placeholder='Enter food category...' type="text" id="category" />
                </div>
                {/* Price*/}
                <div className='flex flex-col space-y-3 mt-8'>
                    <label className='text-lg text-gray-700' htmlFor="price">Price</label>
                    <input onChange={(event)=>{
                        setPrice(event.target.value)
                    }}  required min={0} className='bg-gray-100 p-3 rounded-md shadow outline-none' placeholder='Enter price...' type="number" id="price" />
                </div>
                {/* What you get*/}
                <div className='flex flex-col space-y-3 mt-8'>
                    <label className='text-lg text-gray-700' htmlFor="whatYouGet">What you get</label>
                    <textarea onChange={(event)=>{
                        setWhatYouGet(event.target.value)
                    }} required className='bg-gray-100 p-3 rounded-md shadow outline-none' placeholder='Food items that you get' type="text" id="whatYouGet" />
                </div>
                {loading ? <button disabled className='bg-gray-500 my-10 rounded-md p-2 text-gray-200'>SENDING.....</button> :<button onClick={submitToDataBase} className='bg-green-500 p-2 my-10 rounded-md text-white'>SUBMIT TO DATABASE</button>}
                
            </form>
        </main>
    )
}

export default Home