import React, { useState, useEffect } from 'react';
import '../assets/css/table.css';
import { getData, pushData, postData, deleteData } from '../hooks/hr-api.js'

export default function Table() {
    const [rows, setRows] = useState([]);
    const [newRow, setNewRow] = useState({
        name: '',
        lastname: '',
        address: '',
        telephone: ''
    });
    const fetchData = () => {
        getData()
            .then(data => setRows(data))
            .catch(err => console.error('โหลดข้อมูลไม่สำเร็จ', err));
    }
    useEffect(() => {
        fetchData();
    }, []);
    const changeData = (index, field, value) => {
        const newRows = [...rows];
        newRows[index][field] = value;
        setRows(newRows);
    };
    const addRow = (e) => {
        e.preventDefault();
        setRows([...rows, newRow]);
    }
    const Push = async (e) => {
        e.preventDefault();
        if (newRow.name.trim() && newRow.lastname.trim() && newRow.address.trim() && newRow.telephone.trim()) {
            try {
                setNewRow({ name: '', lastname: '', address: '', telephone: '' });
                const res = await postData(newRow.name, newRow.lastname, newRow.address, newRow.telephone);
                console.log('push success', res.status)
                fetchData();
            } catch (err) {
                console.error('push fail: ', err);
            }
        } else { console.log('invalid data') }
        };
        const Update = async (e, index) => {
            e.preventDefault();
            try {
                const row = rows[index];
                const res = await pushData(row.id, row.name, row.lastname, row.address, row.telephone);
                console.log('update success', res.status)
                fetchData();
            } catch (err) {
                console.error('update fail:', err);
            }
        };
        const Delete = async (e, index) => {
            e.preventDefault();
            try {
                const row = rows[index];
                const res = await deleteData(row.id);
                console.log('delete success', res.status)
                fetchData();
            } catch (err) {
                console.error('delete fail', err)
            }
        }

        return (
            <>
                <div>
                    <table className="table-content">
                        <thead>
                            <tr>
                                <th>data1</th>
                                <th>data2</th>
                                <th>data3</th>
                                <th>data4</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((item, index) => (
                                <tr className='data' key={item.id}>
                                    <td><input type='text' placeholder='name' name='name' value={item.name} onChange={e => changeData(index, 'name', e.target.value)} required /></td>
                                    <td><input type='text' placeholder='lastname' name='lastname' value={item.lastname} onChange={e => changeData(index, 'lastname', e.target.value)} required /></td>
                                    <td><input type='text' placeholder='address' name='address' value={item.address} onChange={e => changeData(index, 'address', e.target.value)} required /></td>
                                    <td><input type='text' placeholder='telephone' name='telephone' value={item.telephone} onChange={e => changeData(index, 'telephone', e.target.value)} required /></td>
                                    <td className='btn-submit'><button type='button' onClick={(e) => Update(e, index)}>EDIT</button></td>
                                    <td className='btn-submit'><button type='button' onClick={(e) => Push(e)}>PUSH</button></td>
                                    <td className='btn-submit'><button type='button' onClick={(e) => Delete(e, index)}>DELETE</button></td>
                                </tr>
                            ))}
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td className='btn-addRow'><button type='submit' onClick={(e) => addRow(e)}>add rows</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </>
        )
    }
