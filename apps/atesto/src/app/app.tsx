import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

// import Sidebar from '../components/Sidebar/Sidebar';
import ThemeContext from '../contexts/ThemeContext';
import ErrorPage from '../ErrorPage';
import useThemeMode from '../hooks/useThemeMode';
import { AddContracts } from '../screens/AddContracts';
import { AddInvoice } from '../screens/AddInvoice';
import { DataManagement } from '../screens/DataManagement';
import { Home } from '../screens/Home';
import { ManageInvoice } from '../screens/ManageInvoice/ManageInvoice';
import { NotesOrContracts } from '../screens/NotesOrContracts';
import { ThrowAttest } from '../screens/ThrowAttest';
import { ThrowCheck } from '../screens/ThrowCheck';
import { ThrowUpload } from '../screens/ThrowUpload/ThrowUpload';
import { UploadCsv } from '../screens/UploadCsv/UploadCsv';
import GlobalStyle from '../styles/global';
import { darkTheme, lightTheme } from '../styles/themes';

const App: React.FunctionComponent = () => {
  const { theme } = useThemeMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  // const isHome = useMatch('/');
  // const isManagement = useMatch('/data-management');

  return (
    <ThemeContext>
      <ThemeProvider theme={themeMode}>
        <GlobalStyle />
        {/* {!isHome && !isManagement && <Sidebar />} */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/consultation" element={<NotesOrContracts />} />
          <Route path="/data-management" element={<DataManagement />} />
          <Route path="/throw-attest" element={<ThrowAttest />} />
          <Route path="/throw-check" element={<ThrowCheck />} />
          <Route path="/throw-upload" element={<ThrowUpload />} />
          <Route path="/add-invoice" element={<AddInvoice />} />
          <Route path="/add-contracts" element={<AddContracts />} />
          <Route path="/manage-invoice" element={<ManageInvoice />} />
          <Route path="/upload-csv" element={<UploadCsv />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </ThemeProvider>
    </ThemeContext>
  );
};

export default App;
