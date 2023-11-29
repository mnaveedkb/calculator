
export default function InputFieldsCard({ label, price, onChangePrice, gsm, onChangeGsm }: any) {

    return (
        <div>
            <div className="flex flex-col gap-2 sm:gap-4 mb-4">
                <div className="flex flex-col sm:flex-row items-center">
                    <label className="text-sm font-medium text-gray-800 w-full sm:w-1/2">{label} 面紙 - buying price 紙價</label>
                    <input onChange={(e) => onChangePrice(e.target.value)} type="number" defaultValue={price || ''} className="w-full sm:w-1/2 border-2 border-gray-600 h-8 text-blue-600 bg-gray-10 focus:ring-blue-500 focus:ring-0" />
                </div>

                <div className="flex flex-col sm:flex-row items-center">
                    <label className="text-sm font-medium text-gray-800 w-full sm:w-1/2">{label} 面紙 - gsm 克重</label>
                    <input onChange={(e) => onChangeGsm(e.target.value)} type="number" defaultValue={gsm || ''} className="w-full sm:w-1/2 border-2 border-gray-600 h-8 text-blue-600 bg-gray-10 focus:ring-blue-500 focus:ring-0" />
                </div>
            </div>
        </div>
    )
}
