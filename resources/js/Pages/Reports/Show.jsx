import { useEffect, useState } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';

const ShowReport = ({ report }) => {
    return (
        <GuestLayout>
            <Head title="Show Report" />

            <div>
                <h1>Show Report</h1>
            </div>

            <div>
                <p>Theme: {report.theme}</p> <br />
                <p>Nom Entreprise: {report.nom_entreprise}</p><br />
                <p>Nom Maître de Stage: {report.nom_maitre_stage}</p><br />
                <p>Résumé: {report.resume}</p><br />
                <p>Objectifs: {report.objectifs}</p><br />
                <p>Méthodologie: {report.methodologie}</p><br />
                <p>Résultats: {report.resultats}</p><br />
                <p>Conclusions: {report.conclusions}</p><br />
                <p>Date Soutenance: {report.date_soutenance}</p><br />
                <Link href={route('reports.edit', report.id)}>Edit</Link>
                <br />
                <Link href={route('reports.delete', report.id)}>Delete Report</Link>
            </div>
        </GuestLayout>
    );
};

export default ShowReport;
