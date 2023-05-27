import { useContext, useMemo } from 'react';
import { AppContext } from '../App';
import { GenericForm } from './GenericForm';

function getDiagnostics() {
    const diag = sessionStorage.getItem('diagnostics');
    if (diag === null) {
        return { error: 'Could not determine diagnostics' };
    }
    return JSON.parse(diag);
}

export function DiagnosticsForm() {
    const app = useContext(AppContext);
    const diagn = useMemo(() => getDiagnostics(), []);

    return (
        <GenericForm
            className='diagnostics-form'
            onClose={() => app?.diagnostics.close()}
        >
            <h2>Diagnostics</h2>
            <table>
                <tbody>
                    {Object.entries(diagn).map(([key, value]) => (
                        <tr>
                            <td>{key}</td>
                            <td>{value as string}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </GenericForm>
    );
}
