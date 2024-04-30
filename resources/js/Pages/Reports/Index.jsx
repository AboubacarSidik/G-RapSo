import { useEffect, useState } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link } from '@inertiajs/react';

const IndexReport = ({ reports }) => {
    return (
        <GuestLayout>
            <Head title="Report List" />

            <div>
                <h1>Report List</h1>
            </div>

            <div>
                {reports.map((report) => (
                    <div key={report.id}>
                        <p>Theme: {report.theme}</p>
                        <p>Date Soutenance: {report.date_soutenance}</p>
                        <Link href={route('reports.show', report.id)}>View</Link>
                    </div>
                ))}
            </div>
        </GuestLayout>
    );
};

export default IndexReport;
