import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import HomePage from './pages/Homepage/Home.page';
import EmployeeFormPage from './pages/EmployeeForm/EmployeeForm.page';
import { NavBar } from './components/NavBar/Nav';

function Layout() {
  return (
    <>
      <NavBar />
      <main className='main-content'>
        <Outlet />
      </main>
    </>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/employee/add',
        element: <EmployeeFormPage />,
      },
      {
        path: '/employee/:id/edit',
        element: <EmployeeFormPage />,
      }
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}