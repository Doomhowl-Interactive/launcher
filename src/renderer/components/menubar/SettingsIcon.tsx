import { Settings24Filled } from '@fluentui/react-icons';

export function SettingsIcon(props: { settingsOpened: () => void }) {
    return <Settings24Filled onClick={props.settingsOpened} />;
}
