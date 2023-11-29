import { useEffect } from "react";

export default function Flutes({ selectedLayers, flutes, setFlutes }: any) {
    const fluteOptions = [
        {
            value: 1.25,
            text: 'F flute F坑 - compression ratio 坑率 = 1.25'
        },
        {
            value: 1.28,
            text: 'E flute E坑 - compression ratio 坑率 = 1.28'
        },
        {
            value: 1.32,
            text: 'B flute B坑 - compression ratio 坑率 = 1.32'
        },
        {
            value: 1.36,
            text: 'C flute C坑- compression ratio 坑率 = 1.36'
        },
        {
            value: 1.50,
            text: 'A flute A坑 - compression ratio 坑率 = 1.50'
        }
    ]

    useEffect(() => {
        if (!selectedLayers) return;
        const tempFlutes = [];
        for (let index = 1; index <= Math.trunc(selectedLayers/2); index++) {
            tempFlutes.push({
                fluteNo: index,
                value: 0,
            })
        }
        setFlutes(tempFlutes);
    }, [selectedLayers])

    const handleSelectFlute = (fluteNo: number, value: number) => {
        const tempFlutes = flutes.map((flute: any) => {
            if (flute.fluteNo === fluteNo) return { fluteNo, value }
            return flute
        });
        setFlutes(tempFlutes);
    }

    return (
        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    {flutes.map((flute: any) => (
                        <div className="mt-2">
                            <h3 className="text-base font-semibold leading-6 text-gray-900">
                                Choose Flute{flutes.length > 1 ? ` ${flute.fluteNo}` : ''}:
                            </h3>
                            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 ">
                                {fluteOptions.map((option: any, i:any) => (
                                    <div key={i} className="flex items-center">
                                        <input id={`${flute.fluteNo}_${option.value}`} onChange={() => handleSelectFlute(flute.fluteNo, option.value)} checked={option.value === flute.value} type="radio" value={option.value} className="w-4 h-4 sm:w-8 sm:h-8 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-0" />
                                        <label htmlFor={`${flute.fluteNo}_${option.value}`} className="ms-2 text-sm font-medium text-gray-800">{option.text}</label>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
