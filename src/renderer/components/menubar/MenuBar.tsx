import { AppContext } from '../App';
import { SettingsIcon } from './SettingsIcon';
import { useContext } from 'react';

export function MenuBar() {
    const app = useContext(AppContext);

    function handleSettingsOpened() {
        app?.settings.toggle();
        console.debug('SettingsForm toggled');
    }

    return (
        <div className='menubar'>
            <SettingsIcon settingsOpened={handleSettingsOpened} />
        </div>
    );
}
