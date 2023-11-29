import { useEffect, useState } from "react";
import InputFieldsCard from "./inputFieldsCard";


const initialInputs = {
    paper_1: {
        price: 0,
        gsm: 0,
    },
    flute_1: {
        price: 0,
        gsm: 0,
    },
    paper_2: {
        price: 0,
        gsm: 0,
    },
    flute_2: {
        price: 0,
        gsm: 0,
    },
    paper_3: {
        price: 0,
        gsm: 0,
    },
    flute_3: {
        price: 0,
        gsm: 0,
    },
    paper_4: {
        price: 0,
        gsm: 0,
    }
}

export default function InputFields({ selectedLayers, setInputsData }: any) {
    const [inputs, setInputs] = useState<any>(initialInputs)

    const handleChangePrice = (layer: any, price: any) => {
        setInputs({
            ...inputs,
            [layer]: {
                ...inputs[layer],
                price: Number(price)
            }
        })
    }
    const handleChangeGsm = (layer: any, gsm: any) => {
        setInputs({
            ...inputs,
            [layer]: {
                ...inputs[layer],
                gsm: Number(gsm)
            }
        })
    }

    useEffect(() => {
        setInputsData(inputs)
    }, [inputs])

    return (
        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <div className="mt-2">
                        <h3 className="text-base font-semibold leading-6 text-gray-900 mb-3">
                            Enter Values for all inputs:
                        </h3>

                        {/*1. Paper 1*/}
                        {selectedLayers >= 1 &&
                            <InputFieldsCard
                                label={'Top Paper'}
                                price={inputs.paper_1.price}
                                onChangePrice={(value: any) => handleChangePrice('paper_1', value)}
                                gsm={inputs.paper_1.gsm}
                                onChangeGsm={(value: any) => handleChangeGsm('paper_1', value)}
                            />
                        }

                        {/*2. Flute 1*/}
                        {selectedLayers >= 2 &&
                            <InputFieldsCard
                                label={`Flute${selectedLayers > 3 ? ' 1' : ''}`}
                                price={inputs.flute_1.price}
                                onChangePrice={(value: any) => handleChangePrice('flute_1', value)}
                                gsm={inputs.flute_1.gsm}
                                onChangeGsm={(value: any) => handleChangeGsm('flute_1', value)}
                            />
                        }

                        {/*3. Paper 2*/}
                        {selectedLayers >= 3 &&
                            <InputFieldsCard
                                label={selectedLayers < 5 ? 'Bottom Paper' : 'Middle Paper'}
                                price={inputs.paper_2.price}
                                onChangePrice={(value: any) => handleChangePrice('paper_2', value)}
                                gsm={inputs.paper_2.gsm}
                                onChangeGsm={(value: any) => handleChangeGsm('paper_2', value)}
                            />
                        }

                        {/*4. Flute 2*/}
                        {selectedLayers >= 4 &&
                            <InputFieldsCard
                                label={'Flute 2'}
                                price={inputs.flute_2.price}
                                onChangePrice={(value: any) => handleChangePrice('flute_2', value)}
                                gsm={inputs.flute_2.gsm}
                                onChangeGsm={(value: any) => handleChangeGsm('flute_2', value)}
                            />
                        }

                        {/*5. Paper 3*/}
                        {selectedLayers >= 5 &&
                            <InputFieldsCard
                                label={selectedLayers < 7 ? 'Bottom Paper' : 'Middle Paper 2'}
                                price={inputs.paper_3.price}
                                onChangePrice={(value: any) => handleChangePrice('paper_3', value)}
                                gsm={inputs.paper_3.gsm}
                                onChangeGsm={(value: any) => handleChangeGsm('paper_3', value)}
                            />
                        }

                        {/*6. Flute 3*/}
                        {selectedLayers >= 6 &&
                            <InputFieldsCard
                                label={'Flute 3'}
                                price={inputs.flute_3.price}
                                onChangePrice={(value: any) => handleChangePrice('flute_3', value)}
                                gsm={inputs.flute_3.gsm}
                                onChangeGsm={(value: any) => handleChangeGsm('flute_3', value)}
                            />
                        }

                        {/*7. Paper 4*/}
                        {selectedLayers >= 7 &&
                            <InputFieldsCard
                                label={'Bottom Paper'}
                                price={inputs.paper_4.price}
                                onChangePrice={(value: any) => handleChangePrice('paper_4', value)}
                                gsm={inputs.paper_4.gsm}
                                onChangeGsm={(value: any) => handleChangeGsm('paper_4', value)}
                            />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
