import Header from "./components/Header/Header";
import GlobalStylesAndFonts from "./fonts/fonts";
import Home from "./pages/Home/index";

function App() {
    return (
        <>
            <div className='app'>
                <GlobalStylesAndFonts />
                <Header />

                <Home />
            </div>
        </>
    );
}

export default App;
