import SidebarLeft from "./components/SidebarLeft";
import SidebarRight from "./components/SidebarRight";
import AppRouter from  "./components/AppRouter";
import './assets/css/style.css';

function App() {
  return (
      <>
          <div className="container">
              <SidebarLeft/>
              <div>
                  <AppRouter/>
              </div>
              <SidebarRight/>
          </div>
      </>
  );
}

export default App;
