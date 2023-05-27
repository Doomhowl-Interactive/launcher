import { createContext, useState } from 'react';
import { SettingsForm } from './forms/SettingsForm';
import { DiagnosticsForm } from './forms/DiagnosticsForm';
import { Processor } from './Processor';
import { Package, PackageInfo } from '$renderer/Package';

interface WindowActions {
    open: () => void;
    close: () => void;
    toggle: () => void;
}

export interface AppContextInterface {
    settings: WindowActions;
    diagnostics: WindowActions;
    package?: PackageInfo;
}

export const AppContext = createContext<AppContextInterface | undefined>(
    undefined,
);

const App = () => {
    const [settingsOpened, setSettingsOpened] = useState<boolean>(false);
    const [diagnosticsOpened, setDiagnosticsOpened] = useState<boolean>(false);

    const [app] = useState<AppContextInterface>({
        settings: {
            open: () => setSettingsOpened(true),
            close: () => setSettingsOpened(false),
            toggle: () => setSettingsOpened(!settingsOpened),
        },
        diagnostics: {
            open: () => setDiagnosticsOpened(true),
            close: () => setDiagnosticsOpened(false),
            toggle: () => setDiagnosticsOpened(!diagnosticsOpened),
        },
    });

    return (
        <AppContext.Provider value={app}>
            <Processor package={Package} />
            {settingsOpened && <SettingsForm />}
            {diagnosticsOpened && <DiagnosticsForm />}
        </AppContext.Provider>
    );
};

export default App;
