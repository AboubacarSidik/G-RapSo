import PrimaryButton from '@/Components/PrimaryButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Etudiant Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 mb-7 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">Bienvenue cher Etudiant</div>
                    </div>
                    <div className = "flex flex-row justify-center items-center">
                        
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg mx-5 py-6 flex-col w-64 flex justify-center items-center">
                            <p className="px-6 py-5 text-gray-900 dark:text-gray-100">Soumettre un rapport</p>

                            <Link 
                                href={route("reports.create")}
                                className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600"
                            >
                                    Soumettre
                            </Link> 
                            {/* <PrimaryButton className =""><Link href={route('reports.create')}>Soumettre</Link></PrimaryButton> */}
                        </div>

                        {/* <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg mx-5 py-6 flex-col w-64 flex justify-center items-center">
                            <p className="px-6 py-5 text-gray-900 dark:text-gray-100">Répertoire des rapports</p>
                            <PrimaryButton className =""><Link href={route('reports.index')}>Consulter</Link></PrimaryButton>
                        </div> */}

                        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg mx-5 py-6 flex-col w-64 flex justify-center items-center">
                            <p className="px-6 py-5 text-gray-900 dark:text-gray-100">Calendrier des soutenances</p>
                            <Link 
                                href={route("tracking.index")}
                                className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600"
                            >
                                    Consulter
                            </Link> 
                            {/* <PrimaryButton className =""><Link href={route('tracking.index')}>Consulter</Link></PrimaryButton> */}
                        </div>

                        {/* <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg mx-5 py-6 flex-col w-64 flex justify-center items-center">
                            <p className="px-6 py-5 text-gray-900 dark:text-gray-100">Mes rapports</p>
                            <Link 
                                href={route("reports.myreport")}
                                className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600"
                            >
                                    Consulter
                            </Link> 
                            {/* <PrimaryButton className =""><Link href={route('tracking.index')}>Consulter</Link></PrimaryButton> */}
                        {/* </div> */} 
                    </div>
                    
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
