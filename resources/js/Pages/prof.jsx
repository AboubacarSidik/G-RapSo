import PrimaryButton from '@/Components/PrimaryButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
// import { Head } from '@inertiajs/react';
import { Head, Link, router } from "@inertiajs/react";


    

export default function Dashboard({ auth }) {

    return (
     
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Prof Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 mb-7 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">Bienvenue cher Professeur</div>
                    </div>
                    <div className = "flex flex-row justify-center items-center">
                        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg mx-5 py-6 flex-col w-60 flex justify-center items-center">
                            <p className="px-6 py-5 text-gray-900 dark:text-gray-100">Créer un nouveau projet</p>
                            <Link 
                                href={route("project.create")}
                                className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600"
                            >
                                    Créer
                            </Link> 
                            {/* <PrimaryButton className ="" >Créer</PrimaryButton> */}
                        </div>

                        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg mx-5 py-6 flex-col w-64 flex justify-center items-center">
                            <p className="px-6 py-5 text-gray-900 dark:text-gray-100">Soumettre un rapport</p>
                            <PrimaryButton className ="">Consulter</PrimaryButton>
                        </div>

                        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg mx-5 py-6 flex-col w-64 flex justify-center items-center">
                            <p className="px-6 py-5 text-gray-900 dark:text-gray-100">Calendrier des soutenances</p>
                            <PrimaryButton className ="" >Consulter</PrimaryButton>
                        </div>
                    </div>
                    
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
