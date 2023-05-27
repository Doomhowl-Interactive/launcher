import { createContext, useState } from 'react';
import { MenuBar } from './menubar/MenuBar';
import { SettingsForm } from './forms/SettingsForm';
import { DiagnosticsForm } from './forms/DiagnosticsForm';

interface WindowActions {
    open: () => void;
    close: () => void;
    toggle: () => void;
}

export interface AppContextInterface {
    settings: WindowActions;
    diagnostics: WindowActions;
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
            <div>
                <MenuBar />
                <h1>Downloading...</h1>
                {settingsOpened && <SettingsForm />}
                {diagnosticsOpened && <DiagnosticsForm />}
            </div>
        </AppContext.Provider>
    );
};

export default App;
