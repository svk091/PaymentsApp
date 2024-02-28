export default function Button({label, onClick}) {
    return (
        <div className="flex justify-center">
          {/* <button onClick={onClick} className="border-black border-2 p-1 text-white bg-black w-full shadow-md hover:text-black hover:bg-white text-base font-medium rounded-2xl">{label}</button> */}
          <button type="button" onClick={onClick} className="py-2.5 px-5 w-full me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">{label}</button>

        </div>
    )
}