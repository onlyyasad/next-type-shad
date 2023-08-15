import { Button } from '@/components/ui/button';
import React, { useState } from 'react';
import TestModal from './components/TestModal';


const AboutUs = () => {
    const [open, setOpen] = useState(false)

    const handleOpenModal = () =>{
        setOpen(true)
    }
    return (
        <div className='py-20 text-center'>
            <h1>This is about us page</h1>
            <Button onClick={handleOpenModal}>Open Modal</Button>
            <TestModal open={open} setOpen={setOpen}/>
        </div>
    );
};



export default AboutUs;