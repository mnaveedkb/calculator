export default function Layers({ selectedLayers, setSelectedLayers }: any) {
    const layersOptions = [
        {
            value: 2,
            text: '2 Layers  見坑'
        },
        {
            value: 3,
            text: '3 Layers 單坑'
        },
        {
            value: 5,
            text: '5 Layers 雙坑'
        },
        {
            value: 7,
            text: '7 Layers 三坑'
        }
    ]

    return (
        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <div className="mt-2">
                        <h3 className="text-base font-semibold leading-6 text-gray-900">
                            Choose Layers:
                        </h3>
                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                            {layersOptions.map((layer: any) => (
                                <div key={layer.value} className="flex items-center">
                                    <input id={layer.value.toString()} onChange={() => setSelectedLayers(layer.value)} checked={layer.value === selectedLayers} type="radio" value={layer.value} name="disabled-radio" className="w-4 h-4 sm:w-8 sm:h-8 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-0" />
                                    <label htmlFor={layer.value.toString()} className="ms-2 text-sm font-medium text-gray-800">{layer.text}</label>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
