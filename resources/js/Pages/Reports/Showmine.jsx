import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

export default function showmine({ auth, success, report, tasks, queryParams }) {
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            {`Project "${report.theme}"`}
          </h2>
          {/* <Link
            href={route("project.edit", project.id)}
            className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600"
          >
            Voir
          </Link> */}
        </div>
      }
    >
      <Head title={`Project "${report.theme}"`} />
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            
            <div className="p-6 text-gray-900 dark:text-gray-100">
              <div className="grid gap-1 grid-cols-2 mt-2">
                <div>
                  <div>
                    <label className="font-bold text-lg">ID du Rapport</label>
                    <p className="mt-1">{report.id}</p>
                  </div>
                  <div className="mt-4">
                    <label className="font-bold text-lg">Theme du Rappoort</label>
                    <p className="mt-1">{report.theme}</p>
                  </div>

                </div>
                <div className="mt-4">
                <label className="font-bold text-lg">Nom de l'entreprise</label>
                <p className="mt-1">{report.nom_entreprise}</p>
              </div>

              <div className="mt-4">
                <label className="font-bold text-lg">Nom du Maitre de Stage</label>
                <p className="mt-1">{report.nom_maitre_stage}</p>
              </div>
              <div className="mt-4">
                <label className="font-bold text-lg">Résumé </label>
                <p className="mt-1">{report.resume}</p>
              </div>
              <div className="mt-4">
                <label className="font-bold text-lg">Objectifs</label>
                <p className="mt-1">{report.objectifs}</p>
              </div>
              <div className="mt-4">
                <label className="font-bold text-lg">Méthodologie</label>
                <p className="mt-1">{report.methodologie}</p>
              </div>
              <div className="mt-4">
                <label className="font-bold text-lg">Résultats</label>
                <p className="mt-1">{report.resultats}</p>
              </div>
              <div className="mt-4">
                <label className="font-bold text-lg">Conclusions</label>
                <p className="mt-1">{report.conclusions}</p>
              </div>
                <div>
                  <div>
                    <label className="font-bold text-lg">Date de début</label>
                    <p className="mt-1">{report.date_soutenance}</p>
                  </div>
                  
                  
                </div>
              </div>
              <Link className = "text-blue-500 py-3 mt-3" href={route('reports.edit', report.id)}>Edit</Link>
    
            </div>
          </div>
        </div>
      </div>

      
    </AuthenticatedLayout>
  );
}


// import { useEffect, useState } from 'react';
// import GuestLayout from '@/Layouts/GuestLayout';
// import { Head, Link, useForm } from '@inertiajs/react';

// const ShowReport = ({ report }) => {
//     return (
//         <GuestLayout>
//             <Head title="Show Report" />

//             <div>
//                 <h1>Show Report</h1>
//             </div>

//             <div>
//                 <p>Theme: {report.theme}</p> <br />
//                 <p>Nom Entreprise: {report.nom_entreprise}</p><br />
//                 <p>Nom Maître de Stage: {report.nom_maitre_stage}</p><br />
//                 <p>Résumé: {report.resume}</p><br />
//                 <p>Objectifs: {report.objectifs}</p><br />
//                 <p>Méthodologie: {report.methodologie}</p><br />
//                 <p>Résultats: {report.resultats}</p><br />
//                 <p>Conclusions: {report.conclusions}</p><br />
//                 <p>Date Soutenance: {report.date_soutenance}</p><br />
//                 <Link href={route('reports.edit', report.id)}>Edit</Link>
//                 <br />
//                 <Link href={route('reports.delete', report.id)}>Delete Report</Link>
//             </div>
//         </GuestLayout>
//     );
// };

// export default ShowReport;