import React from 'react';
import Header from '../components/header.jsx';
import Table from '../components/table.jsx';
import Table_hr from '../components/table-hr.jsx';
import Table_admin from '../components/table-admin.jsx';

export default function Dashboard() {

    return (
        <>
            <Header />
            {/* <Table /> */}
            {/* <Table_hr /> */}
            <Table_admin />
        </>
    )
}
