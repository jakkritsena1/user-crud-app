import React, { useState, useEffect } from 'react';
import '../assets/css/table.css';
import { getData, pushData } from '../hooks/sale-api.js'

export default function Table() {
    const [rows, setRows] = useState([]);
    const changeData = (index, field, value) => {
        const newRows = [...rows];
        newRows[index][field] = value;
        setRows(newRows);
    };
    const updateRow = async (index) => {
        const row = rows[index];
        const res = await pushData(row.id, row.name, row.lastname, row.address, row.telephone);
    };
    useEffect(() => {
        getData()
            .then(data => setRows(data))
            .catch(err => console.error('โหลดข้อมูลไม่สำเร็จ', err));
    }, []);

    return (
        <>
            <div>
                <form onSubmit={updateRow}>
                    <table className="table-content">
                        <thead>
                            <tr>
                                <th>data1</th>
                                <th>data2</th>
                                <th>data3</th>
                                <th>data4</th>
                                <th>data5</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((item, index) => (
                                <tr className='data' key={item.id || index}>
                                    <td><input type='text' value={item.id} /></td>
                                    <td><input type='text' placeholder='name' name='name' value={item.name} onChange={e => changeData(index, 'name', e.target.value)} required /></td>
                                    <td><input type='text' placeholder='lastname' name='lastname' value={item.lastname} onChange={e => changeData(index, 'lastname', e.target.value)} required /></td>
                                    <td><input type='text' placeholder='address' name='address' value={item.address} onChange={e => changeData(index, 'address', e.target.value)} required /></td>
                                    <td><input type='text' placeholder='telephone' name='telephone' value={item.telephone} onChange={e => changeData(index, 'telephone', e.target.value)} required /></td>
                                    <td className='btn-submit'><button type='submit' onClick={(updateRow(index))}>submit</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </form>
            </div>
        </>
    )
}