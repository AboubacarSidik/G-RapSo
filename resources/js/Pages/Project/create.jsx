// ProjectForm.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import SelectInput from "@/Components/SelectInput";
import TextAreaInput from "@/Components/TextAreaInput";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";

// const ProjectForm = () => {
//     const [titre, setTitre] = useState('');
//     const [description, setDescription] = useState('');
//     const [dateDebut, setDateDebut] = useState(null);
//     const [dateFin, setDateFin] = useState(null);
//     const [selectedUsers, setSelectedUsers] = useState([]);
//     const [users, setUsers] = useState([]);



    // useEffect(() => {
    //     // Fetch users from the backend when component mounts
    //     const fetchUsers = async () => {
    //         try {
    //             const response = await axios.get('/api/users');
    //             setUsers(response.data); // Assuming the response is an array of user objects
    //         } catch (error) {
    //             console.error('Error fetching users:', error);
    //         }
    //     };

    //     fetchUsers();
    // }, []);

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const response = await axios.post('/api/projects', {
    //             titre,
    //             description,
    //             date_debut: dateDebut,
    //             date_fin: dateFin,
    //             selected_users: selectedUsers.map(user => user.id),
    //         });
    //         console.log(response.data);
    //         // Handle success, redirect or show success message
    //     } catch (error) {
    //         console.error('Error creating project:', error);
    //         // Handle error, show error message
    //     }
    // };

    export default function Create({ auth }) {
        const { data, setData, post, errors, reset } = useForm({
          titre: "",
          description: "",
          status: "",
          equipe: "",
          date_debut: "",
          date_fin: "",
        });

        useEffect(() => {
            return () => {
                reset('titre', 'description', 'status', 'equipe', 'date_debut', 'date_fin');
            };
        }, []);


    const onSubmit = (e) => {
        e.preventDefault();

        post(route('/prof/project.store'));
    };

    return (
        <AuthenticatedLayout
          user={auth.user}
          header={
            <div className="flex justify-between items-center">
              <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                Créer un nouveau projet
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

                        <InputError message={errors.titre} className="mt-2" /> 
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
    
                    <InputError message={errors.description} className="mt-2" />
                  </div>


                  <div className="mt-4">
                    <InputLabel htmlFor="equipe" value="Veuillez renseigner les participants au projet" />
    
                    <TextAreaInput
                      id="equipe"
                      name="equipe"
                      value={data.equipe}
                      className="mt-1 block w-full"
                      onChange={(e) => setData("equipe", e.target.value)}
                    />
    
                    <InputError message={errors.equipe} className="mt-2" />
                  </div>
                  

                  <div className="mt-4">
                <InputLabel htmlFor="status" value="Selectionnez le Statut du projet" />

                <SelectInput
                  name="status"
                  id="status"
                  className="mt-1 block w-full"
                  onChange={(e) => setData("status", e.target.value)}
                >
                  <option value="">Selectionnez le statut</option>
                  <option value="En attente">En attente</option>
                  <option value="En cours">En cours</option>
                  <option value="Terminé">Terminé</option>
                </SelectInput>

                <InputError message={errors.status} className="mt-2" />
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
