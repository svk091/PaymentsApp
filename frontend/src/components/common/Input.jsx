export default function Input({label,type, value, placeholder, onChange}) {
    return (
        <div className="my-3">
            <h1 className="font-medium">{label}</h1>
            <input  className="mt-1 p-1 text-base tracking-wide bg-gray-100 border-neutral-400 w-full rounded-md shadow-md hover:bg-red border-2" type={type} value={value} placeholder={placeholder} onChange={onChange} />
        </div>
    )
}