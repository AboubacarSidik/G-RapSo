import React from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link } from '@inertiajs/react';

const Tracking = ({ upcoming, past }) => {
    // Obtenez la date d'aujourd'hui
    const today = new Date().toLocaleDateString('fr-FR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <GuestLayout>
            <Head title="Calendrier" />

            <div className="container mx-auto">
                <h1 className="text-3xl font-bold mb-8">Calendrier des soutenances</h1>

                {/* Zone pour afficher la date d'aujourd'hui */}
                <div className="mb-4">
                    <p className="font-semibold">Date d'aujourd'hui : {today}</p>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">
                        Soutenances à venir
                    </h2>
                    <ul>
                        {upcoming.map(report => (
                            <li key={report.id} className="mb-4">
                                <p>Date Soutenance: {report.date_soutenance}</p>
                                <p>Theme: {report.theme}</p>
                                <Link href={route('reports.show', report.id)} className="text-blue-500 hover:underline">View</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h2 className="text-2xl font-bold mb-4">Soutenances passées :</h2>
                    <ul>
                        {past.map(report => (
                            <li key={report.id} className="mb-4">
                                <p>Date Soutenance: {report.date_soutenance}</p>
                                <p>Theme: {report.theme}</p>
                                <Link href={route('reports.show', report.id)} className="text-blue-500 hover:underline">View</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </GuestLayout>
    );
}

export default Tracking;
