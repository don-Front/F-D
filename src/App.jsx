import { ToastProvider } from '@/components/ui/Toast';

import { I18nProvider } from '@/i18n/I18nProvider';
import MainLayout from '@/layouts/MainLayout';
import Home from '@/pages/Home';

function App() {
  return (
    <I18nProvider>
      <ToastProvider>
        <MainLayout>
          <Home />
        </MainLayout>
      </ToastProvider>
    </I18nProvider>
  );
}

export default App;
