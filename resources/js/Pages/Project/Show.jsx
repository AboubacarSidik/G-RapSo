import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

export default function Show({ auth, success, project, tasks, queryParams }) {
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            {`Project "${project.titre}"`}
          </h2>
          <Link
            href={route("project.edit", project.id)}
            className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600"
          >
            Voir
          </Link>
        </div>
      }
    >
      <Head title={`Project "${project.titre}"`} />
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            
            <div className="p-6 text-gray-900 dark:text-gray-100">
              <div className="grid gap-1 grid-cols-2 mt-2">
                <div>
                  <div>
                    <label className="font-bold text-lg">Project ID</label>
                    <p className="mt-1">{project.id}</p>
                  </div>
                  <div className="mt-4">
                    <label className="font-bold text-lg">Project Name</label>
                    <p className="mt-1">{project.titre}</p>
                  </div>

                </div>
                <div>
                  <div>
                    <label className="font-bold text-lg">Data de début</label>
                    <p className="mt-1">{project.date_debut}</p>
                  </div>
                  <div className="mt-4">
                    <label className="font-bold text-lg">Date de fin</label>
                    <p className="mt-1">{project.date_fin}</p>
                  </div>
                  
                </div>
              </div>

              <div className="mt-4">
                <label className="font-bold text-lg">Description du Projet</label>
                <p className="mt-1">{project.description}</p>
              </div>

              <div className="mt-4">
                <label className="font-bold text-lg">Equipe du Projet</label>
                <p className="mt-1">{project.equipe}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </AuthenticatedLayout>
  );
}
