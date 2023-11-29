'use client'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import Flutes from './flutes'
import InputFields from './inputFields'
import Layers from './layers'
import Result from './result'

export default function Calculator() {
    const [step, setStep] = useState(1)
    const [selectedLayers, setSelectedLayers] = useState(0)
    const [flutes, setFlutes] = useState([])
    const [inputsData, setInputsData] = useState<any>({})
    const [errors, setErrors] = useState<any>([])

    const reset = () => {
        setSelectedLayers(0);
        setStep(1);
        setFlutes([]);
        setErrors([]);
    }

    const validateStep1 = () => {
        const tempErrors: any = [];
        if (!selectedLayers) {
            tempErrors.push('Please select layers')
        }
        if (!flutes.every((flute: any) => flute.value)) {
            tempErrors.push('Please select flute')
        }
        setErrors(tempErrors);
        return !tempErrors.length
    }

    const validateStep2 = () => {
        console.log({ inputsData })
        const isValid = Object.keys(inputsData).slice(0, selectedLayers).every((key: any) => inputsData[key].price && inputsData[key].gsm);
        if (!isValid) setErrors(['please enter prices and gsm for all layers']);
        console.log({ isValid, keys: Object.keys(inputsData).slice(0, selectedLayers) })
        return isValid;
    }

    const handleContinue = () => {
        setErrors([]);
        if (step === 3) reset();
        else if (step === 1 && !validateStep1()) return
        else if (step === 2 && !validateStep2()) return
        else setStep((prev => prev + 1));
    }

    const handleBack = () => {
        if (step <= 1) return;
        setErrors([]);
        setStep((prev => prev - 1));
    }

    return (
        <Transition.Root show={true} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={handleBack}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-100 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full justify-center p-4 text-center items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-3 sm:mx-3 sm:w-full sm:max-w-screen">
                                {step === 1 &&
                                    <>
                                        <Layers
                                            selectedLayers={selectedLayers}
                                            setSelectedLayers={setSelectedLayers}
                                        />
                                        <Flutes
                                            flutes={flutes}
                                            setFlutes={setFlutes}
                                            selectedLayers={selectedLayers}
                                        />
                                    </>
                                }
                                {step === 2 &&
                                    <InputFields
                                        selectedLayers={selectedLayers}
                                        setInputsData={setInputsData}
                                    />
                                }
                                {step === 3 &&
                                    <Result
                                        selectedLayers={selectedLayers}
                                        inputsData={inputsData}
                                        flutes={flutes}
                                    />
                                }


                                {/* Buttons */}
                                <div className='px-4 sm:px-6'>
                                    {errors.map((error: any) => <p className='text-red-500'> {error}</p>)}
                                </div>
                                <div className="bg-gray-50 px-4 py-3 sm:flex flex justify-end gap-2 sm:px-6">
                                    {step === 2 && <button
                                        type="button"
                                        className="inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:w-auto"
                                        onClick={handleBack}
                                    >
                                        Back
                                    </button>}
                                    <button
                                        type="button"
                                        className={`inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto`}
                                        onClick={handleContinue}
                                    >
                                        {step === 1 ? 'Continue' : step === 2 ? 'Calculate' : 'Reset'}
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
