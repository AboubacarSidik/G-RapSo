import { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextAreaInput from '@/Components/TextAreaInput';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

const EditProject = ({ project }) => {
    const { data, setData, put, processing, errors, reset } = useForm({
        titre: project.titre,
        description: project.description,
        date_debut: project.date_debut,
        date_fin: project.date_fin,
    });

    useEffect(() => {
        return () => {
            reset('theme', 'nom_entreprise', 'nom_maitre_stage', 'resume', 'objectifs', 'methodologie', 'resultats', 'conclusions', 'date_soutenance');
        };
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        put(route('/prof/project.edit', project.id));
    };

    return (
        <AuthenticatedLayout
          user={auth.user}
          header={
            <div className="flex justify-between items-center">
              <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                Modifier ce projet
              </h2>
            </div>
          }
        >
          <Head title="Projects" />
    
          <div className="py-12">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
              <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                <form
                  onSubmit={onSubmit}
                  className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg"
                >
                  <div>
                    <InputLabel
                      htmlFor="titre"
                      value="Titre du projet"
                    />
                    <TextInput
                        id="titre"
                        type="text"
                        name="titre"
                        value={data.titre}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData('titre', e.target.value)}
                    />
                  </div>
                  <div className="mt-4">
                    <InputLabel htmlFor="description" value="Description du Projet" />
    
                    <TextAreaInput
                      id="description"
                      name="description"
                      value={data.description}
                      className="mt-1 block w-full"
                      onChange={(e) => setData("description", e.target.value)}
                    />
    
                    <InputError message={errors.name} className="mt-2" />
                  </div>
                  <div className="mt-4">
                    <InputLabel
                      htmlFor="project_description"
                      value="Project Description"
                    />
    
                    <InputError message={errors.description} className="mt-2" />
                  </div>
                  <div className="mt-4">
                    <InputLabel
                      htmlFor="date_debut"
                      value="Date de Début"
                    />
    
                    <TextInput
                      id="date_debut"
                      type="date"
                      name="date_debut"
                      value={data.date_debut}
                      className="mt-1 block w-full"
                      onChange={(e) => setData("date_debut", e.target.value)}
                    />
                    <InputError message={errors.date_debut} className="mt-2" />
                  </div>

                  <div className="mt-4">
                    <InputLabel
                      htmlFor="date_debut"
                      value="Date de Fin"
                    />
    
                    <TextInput
                      id="date_fin"
                      type="date"
                      name="date_fin"
                      value={data.date_fin}
                      className="mt-1 block w-full"
                      onChange={(e) => setData("date_fin", e.target.value)}
                    />
                    <InputError message={errors.date_debut} className="mt-2" />
                  </div>
                  <div className="mt-4 text-right">
                    <Link
                      href={route("prof")}
                      className="bg-gray-100 py-1 px-3 text-gray-800 rounded shadow transition-all hover:bg-gray-200 mr-2"
                    >
                      Annuler
                    </Link>
                    <button type="submit" className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600">
                      Soumettre
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </AuthenticatedLayout>
      );


//     return (
//         <form onSubmit={submit} class="max-w-lg mx-auto">
//         <div class="mb-4">
//             <label for="titre" class="block text-sm font-medium text-gray-700">Titre:</label>
//             <input id="titre" type="text" value={titre} onChange={e => setTitre(e.target.value)} class="mt-1 p-2 block w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"/>
//         </div>
//         <div class="mb-4">
//             <label for="description" class="block text-sm font-medium text-gray-700">Description:</label>
//             <textarea id="description" value={description} onChange={e => setDescription(e.target.value)} class="mt-1 p-2 block w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"></textarea>
//         </div>
//         <div class="mb-4">
//             <label for="dateDebut" class="block text-sm font-medium text-gray-700">Date de début:</label>
//             <DatePicker id="dateDebut" selected={dateDebut} onChange={date => setDateDebut(date)} class="mt-1 p-2 block w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" />
//         </div>
//         <div class="mb-4">
//             <label for="dateFin" class="block text-sm font-medium text-gray-700">Date de fin:</label>
//             <DatePicker id="dateFin" selected={dateFin} onChange={date => setDateFin(date)} class="mt-1 p-2 block w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" />
//         </div>
//         <div class="mb-4">
//             <label for="users" class="block text-sm font-medium text-gray-700">Select Users:</label>
//             <select id="users" multiple value={selectedUsers} onChange={e => setSelectedUsers(Array.from(e.target.selectedOptions, option => ({ id: option.value, name: option.label })))} class="mt-1 p-2 block w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
//                 {users.map(user => (
//                     <option key={user.id} value={user.id}>{user.name}</option>
//                 ))}
//             </select>
//         </div>
//         <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Créer un Projet</button>
//     </form>
    
//     );
};