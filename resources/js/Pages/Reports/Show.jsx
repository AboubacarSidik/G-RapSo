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
                <p>Theme: {report.theme}</p>
                <p>Nom Entreprise: {report.nom_entreprise}</p>
                <p>Nom Maître de Stage: {report.nom_maitre_stage}</p>
                <p>Résumé: {report.resume}</p>
                <p>Objectifs: {report.objectifs}</p>
                <p>Méthodologie: {report.methodologie}</p>
                <p>Résultats: {report.resultats}</p>
                <p>Conclusions: {report.conclusions}</p>
                <p>Date Soutenance: {report.date_soutenance}</p>
                <Link href={route('reports.edit', report.id)}>Edit</Link>
                <br />
                <Link href={route('reports.delete', report.id)}>Delete Report</Link>
            </div>
        </GuestLayout>
    );
};

export default ShowReport;
