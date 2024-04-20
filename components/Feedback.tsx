'use client'
import { supabaseClient } from '@/utils/supabase/client'
import Image from 'next/image'
import React from 'react'
import FeedbackCard from './FeedbackCard'
import Modal from './Modal'
import StarRating from './StartRating'
import { FaTelegramPlane } from 'react-icons/fa'
import Alert from './Alert'

const Feedback = () => {

    const supabase = supabaseClient()
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [data, setData] = React.useState<any[] | null>(null);

    const [rate, setRate] = React.useState(0)
    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [feedback, setFeedback] = React.useState('')
    const [isSent, setIsSent] = React.useState(false)

    const openModal = () => {
        setIsModalOpen(true);
        setEmail('');
        setName('');
        setFeedback('')
        setRate(0)
        setIsSent(false)
    };

    const closeModal = () => {
        setIsModalOpen(false)
        setIsSent(false)
    };

    // Get rate value
    const handleRatingChange = (rating: number) => {
        console.log('Selected rating:', rating);
        // You can handle the rating change here
        setRate(rating)
    };
    // Get name
    const handleGetName = (e: any) => {
        setName(e.target.value)
    }
    // Get email
    const handleGetEmail = (e: any) => {
        setEmail(e.target.value)
    }
    //Get feedback
    const handleGetFeedback = (e: any) => {
        setFeedback(e.target.value)
    }

    const handleSend = () => {
        if (rate !== 0 && name !== '' && email !== '' && feedback !== '') {
            setIsModalOpen(false)
            setIsSent(true)
            console.log("Feedback sent.")
        } else {
            console.log("Please fill all in fields!")
        }
    }
    console.log("Your rate:", rate);
    console.log("Your name: ", name);
    console.log("You email: ", email);
    console.log("Feedback:", feedback)

    React.useEffect(() => {
        const fetchData = async () => {
            const { data, error } = await supabase.from('feedback').select('*').order('id', { ascending: false }).limit(3)
            setData(data)
        }
        fetchData()
    }, [])

    return (
        <div className='container-primary py-16'>
            <div className='row'>
                <div className="col-md-12 mb-8">
                    <div className='flex flex-col items-center'>
                        <span className='uppercase text-xs font-semibold md:text-sm text-sky-900'>
                            Comment
                        </span>
                        <h1 className='text-2xl md:text-3xl font-medium text-sky-600'>
                            Feedback
                        </h1>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className="col-md-12 mb-8">
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {data && data?.map((items) => (

                            <FeedbackCard data={items} key={items.id} />
                        ))}
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-12'>
                    <div className='flex justify-center items-center'>
                        <button
                            onClick={openModal}
                            className='px-4 py-2 bg-primary hover:bg-sky-400 hover:tracking-wider text-white rounded capitalize transition-all ease-in-out duration-200'
                        >Send us your feedback</button>
                    </div>
                </div>
            </div>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <h1 className='text-center font-medium text-xl md:text-2xl mb-5 border-b pb-3'>Your Feedback</h1>
                <div>

                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-3'>
                    <div className=''>
                        <h1 className='mb-2 '>1. Are you satisfied with our service?</h1>
                        <form action="" className='space-y-5 p-3 bg-sky-100/30 rounded-xl'>
                            <input type="radio" name="service" id="e" value='Excellent' className='mx-2' /> <label htmlFor="e">Excellent</label> <br />
                            <input type="radio" name="service" id="g" value='Good' className='mx-2' /> <label htmlFor="g">Good</label> <br />
                            <input type="radio" name="service" id="a" value='Average' className='mx-2' /> <label htmlFor="a">Average</label> <br />
                            <input type="radio" name="service" id="p" value='Poor' className='mx-2' /> <label htmlFor="p">Poor</label> <br />
                        </form>
                    </div>
                    <div>
                        <div>
                            <h1>
                                2. How would you rate our customer service?
                            </h1>
                            <StarRating totalStars={5} initialRating={0} onChange={handleRatingChange} />
                        </div>
                        <div>
                            <h1 className='mb-2'>3. What can we do to improve our service?</h1>
                            <textarea name="" id="" value={feedback} onChange={handleGetFeedback} cols={45} rows={5} className='border-2 border-gray-300 p-2 rounded text-gray-500 text-sm' />
                        </div>
                    </div>
                </div>
                <h1 className='text-xl text-center md:text-2xl py-3 font-medium border-b mb-6'>Your Info</h1>
                <div className='flex max-md:flex-col justify-between items-center gap-4 mb-3'>
                    <input
                        value={name}
                        onChange={handleGetName}
                        type="text"
                        className='border p-3 w-full text-gray-500 text-sm' placeholder='Name' />
                    <input
                        value={email}
                        onChange={handleGetEmail}
                        type="email"
                        className='border p-3 w-full text-gray-500 text-sm' placeholder='Email' />
                </div>
                <div className='flex items-center justify-center'>
                    <button
                        onClick={handleSend}
                        className='flex items-center gap-x-2 text-white bg-primary hover:bg-sky-400 hover:tracking-wider transition-all justify-center py-2 w-full rounded'
                    >
                        Send <FaTelegramPlane />
                    </button>
                </div>
            </Modal>
            <Alert action={isSent} />
        </div>
    )
}

export default Feedback