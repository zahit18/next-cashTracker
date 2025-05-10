"use client"
import { useEffect, useState } from 'react'
import { useFormState } from 'react-dom'
import { PinInput, PinInputField } from '@chakra-ui/pin-input'
import { confirmAccount, ConfirmAccountState } from '@/actions/confirm-account-action'
import ErrorMessage from '../ui/ErrorMessage'
import SuccessMessage from '../ui/SuccessMessage'

const initialState: ConfirmAccountState = {
    errors: [],
    success: ''
}

export default function ConfirmAccountForm() {
    const [isComplete, setIsComplete] = useState(false)
    const [token, setToken] = useState("")
    const confirmAccountWithToken = confirmAccount.bind(null, token)
    const [state, dispatch] = useFormState(confirmAccountWithToken, initialState)

    console.log(state)

    useEffect(() => {
        if (isComplete) dispatch()

    }, [isComplete])

    const handleChange = (token: string) => {
        setToken(token)
    }

    const handleComplete = () => {
        setIsComplete(true)
    }
    return (
        <>
            {state.errors.map(error => <ErrorMessage>{error}</ErrorMessage>)}
            {state.success && <SuccessMessage>{state.success}</SuccessMessage>}

            <div className='flex justify-center gap-5 my-10'>


                <PinInput
                    value={token}
                    onChange={handleChange}
                    onComplete={handleComplete}
                >
                    <PinInputField className='h-10 w-10 border border-gray-400 shadow rounded-lg text-center placeholder-white' />

                    <PinInputField className='h-10 w-10 border border-gray-400 shadow rounded-lg text-center placeholder-white' />

                    <PinInputField className='h-10 w-10 border border-gray-400 shadow rounded-lg text-center placeholder-white' />

                    <PinInputField className='h-10 w-10 border border-gray-400 shadow rounded-lg text-center placeholder-white' />

                    <PinInputField className='h-10 w-10 border border-gray-400 shadow rounded-lg text-center placeholder-white' />

                    <PinInputField className='h-10 w-10 border border-gray-400 shadow rounded-lg text-center placeholder-white' />
                </PinInput>

            </div>
        </>
    )
}
