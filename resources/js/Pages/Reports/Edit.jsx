import { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

const EditReport = ({ report }) => {
    const { data, setData, put, processing, errors, reset } = useForm({
        theme: report.theme,
        nom_entreprise: report.nom_entreprise,
        nom_maitre_stage: report.nom_maitre_stage,
        resume: report.resume,
        objectifs: report.objectifs,
        methodologie: report.methodologie,
        resultats: report.resultats,
        conclusions: report.conclusions,
        date_soutenance: report.date_soutenance,
    });

    useEffect(() => {
        return () => {
            reset('theme', 'nom_entreprise', 'nom_maitre_stage', 'resume', 'objectifs', 'methodologie', 'resultats', 'conclusions', 'date_soutenance');
        };
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        put(route('reports.update', report.id));
    };

    return (
        <GuestLayout>
            <Head title="Edit Report" />

            <div>
                <h1>Edit Report</h1>
            </div>

            <form onSubmit={handleSubmit}>
                <div>
                    <InputLabel htmlFor="theme" value="Theme" />

                    <TextInput
                        id="theme"
                        name="theme"
                        value={data.theme}
                        className="mt-1 block w-full"
                        autoComplete="theme"
                        isFocused={true}
                        onChange={(e) => setData('theme', e.target.value)}
                        required
                    />

                    <InputError message={errors.theme} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="nom_entreprise" value="Nom Entreprise" />

                    <TextInput
                        id="nom_entreprise"
                        name="nom_entreprise"
                        value={data.nom_entreprise}
                        className="mt-1 block w-full"
                        autoComplete="nom_entreprise"
                        onChange={(e) => setData('nom_entreprise', e.target.value)}
                        required
                    />

                    <InputError message={errors.nom_entreprise} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="nom_maitre_stage" value="Nom Maître de Stage" />

                    <TextInput
                        id="nom_maitre_stage"
                        name="nom_maitre_stage"
                        value={data.nom_maitre_stage}
                        className="mt-1 block w-full"
                        autoComplete="nom_maitre_stage"
                        onChange={(e) => setData('nom_maitre_stage', e.target.value)}
                        required
                    />

                    <InputError message={errors.nom_maitre_stage} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="resume" value="Résumé" />

                    <TextInput
                        id="resume"
                        name="resume"
                        value={data.resume}
                        className="mt-1 block w-full"
                        autoComplete="resume"
                        onChange={(e) => setData('resume', e.target.value)}
                        required
                    />

                    <InputError message={errors.resume} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="objectifs" value="Objectifs" />

                    <TextInput
                        id="objectifs"
                        name="objectifs"
                        value={data.objectifs}
                        className="mt-1 block w-full"
                        autoComplete="objectifs"
                        onChange={(e) => setData('objectifs', e.target.value)}
                        required
                    />

                    <InputError message={errors.objectifs} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="methodologie" value="Méthodologie" />

                    <TextInput
                        id="methodologie"
                        name="methodologie"
                        value={data.methodologie}
                        className="mt-1 block w-full"
                        autoComplete="methodologie"
                        onChange={(e) => setData('methodologie', e.target.value)}
                        required
                    />

                    <InputError message={errors.methodologie} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="resultats" value="Résultats" />

                    <TextInput
                        id="resultats"
                        name="resultats"
                        value={data.resultats}
                        className="mt-1 block w-full"
                        autoComplete="resultats"
                        onChange={(e) => setData('resultats', e.target.value)}
                        required
                    />

                    <InputError message={errors.resultats} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="conclusions" value="Conclusions" />

                    <TextInput
                        id="conclusions"
                        name="conclusions"
                        value={data.conclusions}
                        className="mt-1 block w-full"
                        autoComplete="conclusions"
                        onChange={(e) => setData('conclusions', e.target.value)}
                        required
                    />

                    <InputError message={errors.conclusions} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="date_soutenance" value="Date Soutenance" />

                    <TextInput
                        id="date_soutenance"
                        name="date_soutenance"
                        type="date"
                        value={data.date_soutenance}
                        className="mt-1 block w-full"
                        onChange={(e) => setData('date_soutenance', e.target.value)}
                        required
                    />

                    <InputError message={errors.date_soutenance} className="mt-2" />
                </div>

                <PrimaryButton type="submit" disabled={processing}>
                    Update Report
                </PrimaryButton>
            </form>
        </GuestLayout>
    );
};

export default EditReport;
