export default function Result({ selectedLayers, inputsData, flutes }: any) {
    const getResult = () => {
        const paper_1 = ((inputsData.paper_1.gsm / 1000) * (inputsData.paper_1.price / 1000))
        const flute_1 = ((inputsData.flute_1.gsm / 1000) * (inputsData.flute_1.price / 1000) * (flutes.find((flute: any) => flute.fluteNo === 1)?.value || 0))

        const paper_2 = ((inputsData.paper_2.gsm / 1000) * (inputsData.paper_2.price / 1000))
        const flute_2 = ((inputsData.flute_2.gsm / 1000) * (inputsData.flute_2.price / 1000) * (flutes.find((flute: any) => flute.fluteNo === 1)?.value || 0))

        const paper_3 = ((inputsData.paper_3.gsm / 1000) * (inputsData.paper_3.price / 1000))
        const flute_3 = ((inputsData.flute_3.gsm / 1000) * (inputsData.flute_3.price / 1000) * (flutes.find((flute: any) => flute.fluteNo === 1)?.value || 0))

        const paper_4 = ((inputsData.paper_4.gsm / 1000) * (inputsData.paper_4.price / 1000))

        let total = paper_1 + flute_1
        if (selectedLayers >= 3) total = total + paper_2
        if (selectedLayers >= 5) total = total + flute_2 + paper_3
        if (selectedLayers >= 7) total = total + flute_3 + paper_4

        return total
    }
    return (
        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <div className="mt-2">
                        <h3 className="text-base font-semibold leading-6 text-gray-900">
                            Result: {getResult()}
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
