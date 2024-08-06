import { CheckCheckIcon, CheckCircle } from "lucide-react";

interface FormSuccessProps { 
    message? : string;
};

export const FormSuccess = ({
    message,
}: FormSuccessProps) => {
    if (!message) return null;


    return (
        <div className="bg-destructive/15 p-3 rounded flex items-center gap-x-2 text-sm text-destructive bg-green-200 rounded">
            <CheckCircle className="h-4 w-4"/>
            <p>{message}</p>    
        </div>
    );
};

