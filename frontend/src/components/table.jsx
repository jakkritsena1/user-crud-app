import React, { useState, useEffect } from 'react';
import '../assets/css/table.css';
import { getData } from '../hooks/sale-api.js'

export default function Table() {
    const [rows, setRows] = useState([]);

    useEffect(() => {
        getData()
            .then(data => setRows(data))
            .catch(err => console.error('โหลดข้อมูลไม่สำเร็จ', err));
    }, []);

    return (
        <div >
            <table className="table-content">
                <thead>
                    <tr>
                        <th>checkbox</th>
                        <th>data1</th>
                        <th>data2</th>
                        <th>data3</th>
                        <th>data4</th>
                        <th>data5</th>
                    </tr>
                </thead>
                <tbody>
                    { rows.map((item, index) => (
                        <tr className='data' key={item.id || index}>
                            <td><input type='checkbox' /></td>
                            <td><input type='text' value={item.id} /></td>
                            <td><input type='text' value={item.name} /></td>
                            <td><input type='text' value={item.lastname}/></td>
                            <td><input type='text' value={item.address}/></td>
                            <td><input type='text' value={item.telephone}/></td>
                        </tr>
                    ))}
                    <tr className='button'>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td><button>create</button></td>
                        <td><button>update</button></td>
                        <td><button>delete</button></td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}