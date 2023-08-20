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
import { ComboboxDemo } from '@/components/ui/combobox';
import { Input } from '@/components/ui/input';
import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/components/ui/command"
import { ScrollArea } from '@/components/ui/scroll-area';


const TestModal = ({ open, setOpen }) => {
    const [value, setValue] = useState("light")
    console.log(value);
    return (
        <Dialog open={open} onOpenChange={setOpen} className="h-[500px]">
            <DialogTrigger asChild>Open</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Are you sure absolutely sure?</DialogTitle>
                    <DialogDescription>
                        This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.
                    </DialogDescription>
                </DialogHeader>
                <div>
                    <Select onValueChange={setValue}>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Theme" />
                            {/* <input type="text" placeholder="Theme" /> */}
                            {/* <Input type="text" placeholder="Theme" /> */}
                        </SelectTrigger>
                        <SelectContent>
                            <Command>
                                <CommandInput placeholder="Type a command or search..." />
                                <CommandList>
                                    <CommandEmpty>No results found.</CommandEmpty>
                                    <CommandGroup heading="Suggestions">
                                        <ScrollArea className='h-32'>
                                            <CommandItem className="p-0">
                                                <SelectItem value="Light">Light</SelectItem>
                                            </CommandItem>
                                            <CommandItem className="p-0">
                                                <SelectItem value="Dark">Dark</SelectItem>
                                            </CommandItem>
                                            <CommandItem className="p-0">
                                                <SelectItem value="System">System</SelectItem>
                                            </CommandItem>
                                            <CommandItem className="p-0">
                                                <SelectItem value="Systemm">Systemm</SelectItem>
                                            </CommandItem>
                                            <CommandItem className="p-0">
                                                <SelectItem value="Sstem">Sstem</SelectItem>
                                            </CommandItem>
                                            <CommandItem className="p-0">
                                                <SelectItem value="Sytem">Sytem</SelectItem>
                                            </CommandItem>
                                            <CommandItem className="p-0">
                                                <SelectItem value="Sysem">Sysem</SelectItem>
                                            </CommandItem>
                                            <CommandItem className="p-0">
                                                <SelectItem value="Systm">Systm</SelectItem>
                                            </CommandItem>
                                            <CommandItem className="p-0">
                                                <SelectItem value="Syste">Syste</SelectItem>
                                            </CommandItem>
                                        </ScrollArea>
                                    </CommandGroup>
                                </CommandList>
                            </Command>
                        </SelectContent>
                    </Select>
                </div>
                <div>
                    <ComboboxDemo />
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default TestModal;