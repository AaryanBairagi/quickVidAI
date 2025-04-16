import React from 'react'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import Image from 'next/image'


const CustomLoading = ({loading}) => {
return (
    <AlertDialog open={loading}>
        <AlertDialogContent>
            <div className='bg-white flex flex-cols items-center justify-center'>
                <Image src='/loading.png' width={100} height={100} />
                <h2>Genearting your video... DO NOT REFRESH</h2>
            </div>
        </AlertDialogContent>
    </AlertDialog>

)
}

export default CustomLoading