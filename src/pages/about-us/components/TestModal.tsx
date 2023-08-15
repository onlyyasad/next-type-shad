import { DialogHeader, DialogTrigger } from '@/components/ui/dialog';
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog'
import React, { useState } from 'react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const TestModal = ({open, setOpen}) => {
    const [value, setValue] = useState("light")
    console.log(value);
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>Open</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Are you sure absolutely sure?</DialogTitle>
                    <DialogDescription>
                        This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.
                    </DialogDescription>
                </DialogHeader>
                <Select onValueChange={setValue}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Theme" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="Light">Light</SelectItem>
                        <SelectItem value="Dark">Dark</SelectItem>
                        <SelectItem value="System">System</SelectItem>
                    </SelectContent>
                </Select>
            </DialogContent>
        </Dialog>
    );
};

export default TestModal;