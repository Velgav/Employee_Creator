import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, Grid, Title } from '@mantine/core';
import EmployeeCard from '../../components/elements/EmployeeCard';
import { AppDispatch, RootState } from '../../store/store';

import './Home.page.scss';
import { useEffect } from 'react';
import { deleteEmployeeAsync, getEmployeesAsync } from '@/store/async';
import { EmployeeData } from '@/utils/schemas/EmployeeSchema';

function HomePage() {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const employees = useSelector((state: RootState) => state.employees.employees || []);

  useEffect(() => {
    dispatch(getEmployeesAsync());
  }, []);

  const handleDelete = (id: number) => {
    dispatch(deleteEmployeeAsync(id));
  };

  const handleEdit = (employee: EmployeeData) => {
    navigate(`/employee/${employee.id}/edit`);
  };

  const handleAddEmployee = () => {
    navigate('/employee/add');
  };

  console.log('all employees', employees)

  return (
    <>
      <div className="container">
        <div className="groupContainer">
          <Title className="groupTitle" order={2}>
            All Employees
          </Title>
          <Button
            className="groupButton"
            // leftIcon={<IconPlus size={16} />}
            color="blue"
            onClick={handleAddEmployee}
          >
            Add Employee
          </Button>
        </div>
        <div className="gridContainer">
          <Grid grow gutter={{ base: 5, xs: 'md', md: 'xl', xl: 50 }}>
            {employees.map((employee) => (
              <Grid.Col span={2} key={employee.id}>
                <EmployeeCard
                  avatar=''
                  employee={employee}
                  onEdit={() => handleEdit(employee)}
                  onDelete={() => handleDelete(employee.id)}
                />
              </Grid.Col>
            ))}
          </Grid>
        </div>
      </div>
    </>
  );
}

export default HomePage;
