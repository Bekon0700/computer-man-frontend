import React from 'react'

const TableRow = ({ data, id, delBtn, editBtn }) => {
    const { review, name, serviceName, _id } = data
    return (
        <>
            <tr>
                <th>{id + 1}</th>
                <td>{serviceName}</td>
                <td>{name}</td>
                <td className='font-semibold text-lg'>{review}</td>
                <td className='flex items-center gap-3'>
                    {/* The button to open modal */}
                    <label htmlFor="my-modal-5" onClick={() => editBtn(_id)} className='px-3 py-1 bg-violet-400 text-white rounded-sm'>Edit</label>
                    <button onClick={() => delBtn(_id)} className='px-3 py-1 bg-red-800 text-white rounded-sm'>Delete</button>
                </td>
            </tr>
            
        </>
    )
}




export default TableRow