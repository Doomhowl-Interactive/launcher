import { useContext } from 'react';
import { AppContext } from '../App';
import { GenericForm } from './GenericForm';

export function SettingsForm() {
    const app = useContext(AppContext);

    function openSideload() {
        console.debug('Sideload opened');
    }

    function openDiagnostics() {
        app?.diagnostics.open();
        console.debug('DiagnosticsForm opened');
    }

    return (
        <GenericForm
            className='settings-form'
            onClose={() => app!.settings.close()}
        >
            <button onClick={openSideload}>Sideload</button>
            <button onClick={openDiagnostics}>Diagnostics</button>
        </GenericForm>
    );
}
