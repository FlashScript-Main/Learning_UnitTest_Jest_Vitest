// Root 👉🏻 "src" Folder 👉🏻 App.tsx

import Query from "./components/query/Query"
import { ThemeProvider } from "./context/ThemeProvider"

const App = () => {

    return (
        <ThemeProvider>
            <Query />
        </ThemeProvider>
    )

}

export default App