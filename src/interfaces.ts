export interface SettingsJSON {
    "profile": string | number;
    "protocol": string;
    "host": string;
    "port": number;
    "remotePath": string;
    "username": string;
    "password": string;
    "ignore": string;
    "connTimeout": number;
    "passvTimout": number;
    "keepalive": number;
    "keepaliveMaxCount": number;
}

export interface ftpSettingsJSON {
    "host": string;
    "port": number;
    "user": string;
    "password": string;
    "connTimeout": number;
    "passvTimout": number;
    "keepalive": number;
}