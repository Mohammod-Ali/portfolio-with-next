'use client';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";

import { FaPhoneAlt , FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";

const info = [
    {
        icon: <FaPhoneAlt></FaPhoneAlt>,
        title: 'Phone',
        description: "+8801933900625"     
    },
    {
        icon: <FaEnvelope></FaEnvelope>,
        title: 'Email',
        description: "mohammodali651@gmail.com"     
    },
    {
        icon: <FaMapMarkedAlt></FaMapMarkedAlt>,
        title: 'Address',
        description: "Bangladesh"     
    },
]

const Contact = () => {
    return (
        <div>
            Contact
        </div>
    );
};

export default Contact;