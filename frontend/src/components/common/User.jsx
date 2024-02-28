export default function User({label}) {
    return (
        <div className="flex mt-10">
            <div className="bg-gray-900 w-8 h-8 text-white rounded-full flex justify-center items-center">{label.charAt(0).toUpperCase()}</div>
            <h1 className="text-xl font-bold ml-2">{label}</h1>
        </div>
    )
}