import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import TextInput from "@/Components/TextInput";
import SelectInput from "@/Components/SelectInput";
import Pagination from "@/Components/Pagination";
// import {
//     PROJECT_STATUS_CLASS_MAP,
//     PROJECT_STATUS_TEXT_MAP,
//   } from "@/constants.jsx";
  import { Head, Link, router } from "@inertiajs/react";
  import TableHeading from "@/Components/TableHeading";

export default function Index({auth, projects, queryParams = null, success}) {

//     queryParams = queryParams || {};
//   const searchFieldChanged = (name, value) => {
//     if (value) {
//       queryParams[name] = value;
//     } else {
//       delete queryParams[name];
//     }

//     router.get(route("project.index"), queryParams);
//   };

//   const onKeyPress = (name, e) => {
//     if (e.key !== "Enter") return;

//     searchFieldChanged(name, e.target.value);
//   };

//   const sortChanged = (name) => {
//     if (name === queryParams.sort_field) {
//       if (queryParams.sort_direction === "asc") {
//         queryParams.sort_direction = "desc";
//       } else {
//         queryParams.sort_direction = "asc";
//       }
//     } else {
//       queryParams.sort_field = name;
//       queryParams.sort_direction = "asc";
//     }
//     router.get(route("project.index"), queryParams);
//   };

//   const deleteProject = (project) => {
//     if (!window.confirm("Are you sure you want to delete the project?")) {
//       return;
//     }
//     router.delete(route("project.destroy", project.id));
//   };

    return (
        <AuthenticatedLayout
        user={auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Liste des Rapports</h2>}
        >
            <Head title="Projets" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 mb-7 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            
                        <div className="overflow-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
                    <tr className="text-nowrap">
                      <TableHeading
                        name="id"
                        // sort_field={queryParams.sort_field}
                        // sort_direction={queryParams.sort_direction}
                        // sortChanged={sortChanged}
                      >
                        ID
                      </TableHeading>
                      {/* <th className="px-3 py-3">Image</th> */}
                      <TableHeading
                        name="Titre"
                        // sort_field={queryParams.sort_field}
                        // sort_direction={queryParams.sort_direction}
                        // sortChanged={sortChanged}
                      >
                        Nom
                      </TableHeading>

                      <TableHeading
                        name="status"
                        // sort_field={queryParams.sort_field}
                        // sort_direction={queryParams.sort_direction}
                        // sortChanged={sortChanged}
                      >
                        Statut
                      </TableHeading>

                      <TableHeading
                        name="date_debut"
                        // sort_field={queryParams.sort_field}
                        // sort_direction={queryParams.sort_direction}
                        // sortChanged={sortChanged}
                      >
                        Date de Debut
                      </TableHeading>

                      <TableHeading
                        name="date_fin"
                        // sort_field={queryParams.sort_field}
                        // sort_direction={queryParams.sort_direction}
                        // sortChanged={sortChanged}
                      >
                        Date De FIn
                      </TableHeading>
                      {/* <th className="px-3 py-3">Crée par</th> */}
                      <th className="px-3 py-3 text-right">Actions</th>
                    </tr>
                  </thead>
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
                    <tr className="text-nowrap">
                      <th className="px-3 py-3"></th>
                      <th className="px-3 py-3"></th>
                      <th className="px-3 py-3">
                        <TextInput
                          className="w-full text-blue-600"
                        //   defaultValue={queryParams.name}
                          placeholder="Nom du projet"
                          onBlur={(e) =>
                            searchFieldChanged("titre", e.target.value)
                          }
                          onKeyPress={(e) => onKeyPress("titre", e)}
                        />
                      </th>
                      <th className="px-3 py-3">
                        <SelectInput
                          className="w-full"
                        //   defaultValue={queryParams.status}
                          onChange={(e) =>
                            searchFieldChanged("status", e.target.value)
                          }
                        >
                          <option value="">Selectionnez le Statut</option>
                          <option value="en_attente">En attente</option>
                          <option value="en_cours">En cours</option>
                          <option value="termine">Terminé</option>
                        </SelectInput>
                      </th>
                      <th className="px-3 py-3"></th>
                      <th className="px-3 py-3"></th>
                      <th className="px-3 py-3"></th>
                      <th className="px-3 py-3"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {projects.data.map((project) => (
                      <tr
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                        key={project.id}
                      >
                        <td className="px-3 py-2">{project.id}</td>
                        {/* <td className="px-3 py-2">
                          <img src={project.image_path} style={{ width: 60 }} />
                        </td> */}
                        <th className="px-3 py-2 text-blue-600  text-nowrap hover:underline">
                          <Link href={route("project.show", project.id)}>
                            {project.titre}
                          </Link>
                        </th>
                        <td className="px-3 py-2">
                          {/* <span
                            className={
                              "px-2 py-1 rounded text-white " +
                              PROJECT_STATUS_CLASS_MAP[project.status]
                            }
                          >
                            {PROJECT_STATUS_TEXT_MAP[project.status]}
                          </span> */}
                        </td>
                        <td className="px-3 py-2 text-nowrap">
                          {project.date_debut}
                        </td>
                        <td className="px-3 py-2 text-nowrap">
                          {project.date_fin}
                        </td>
                        {/* <td className="px-3 py-2">{project.createdBy.name}</td> */}
                        <td className="px-3 py-2 text-nowrap">
                          <Link
                            href={route("project.show", project.id)}
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-1"
                          >
                            Voir
                          </Link>
                          
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <Pagination links={projects.meta.links} />
                        </div>
                    </div>
                </div>
            </div>

        </AuthenticatedLayout>
    );

}