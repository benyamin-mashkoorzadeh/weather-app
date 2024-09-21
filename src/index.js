import {createRoot} from "react-dom/client";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import App from "./App";
import {StrictMode} from "react";
import './App.css'


const root = createRoot(document.getElementById('root'))

root.render(
    <App basename="weather-app"/>
)

serviceWorkerRegistration.register()