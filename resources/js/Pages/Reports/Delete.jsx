import { useState } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, usePage } from '@inertiajs/react';

const DeleteReport = ({ report }) => {
    const { route } = usePage();
    const [loading, setLoading] = useState(false);

    const handleDelete = () => {
        setLoading(true);

        fetch(route('reports.destroy', report.id), {
            method: 'DELETE',
        }).catch(() => {
            setLoading(false);
        });
    };

    return (
        <GuestLayout>
            <Head title="Delete Report" />

            <div>
                <h1>Delete Report</h1>
            </div>

            <div>
                <p>Are you sure you want to delete the report with the theme: {report.theme}?</p>
                <button onClick={handleDelete} disabled={loading}>Delete</button>
                <Link href={route('reports.index')}>Cancel</Link>
            </div>
        </GuestLayout>
    );
};

export default DeleteReport;
