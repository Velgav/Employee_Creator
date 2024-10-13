import React from 'react';
import { IconEdit, IconTrash } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
import { ActionIcon, Avatar, Card, Divider, Grid, Group, Text } from '@mantine/core';

import './employeeCard.scss';
import { EmployeeData } from '@/utils/schemas/EmployeeSchema';

interface EmployeeCardProps {
  employee: EmployeeData
  avatar: string;
  onEdit: () => void;
  onDelete: (id: number) => void;
}

const EmployeeCard: React.FC<EmployeeCardProps> = ({
  avatar = '',
  employee,
  onDelete = () => { },
}) => {
  const navigate = useNavigate();

  const { id, firstName, lastName, position, contact, gender } = employee;
  const { emailAddress: email, mobileNumber, address } = contact || {};

  const handleEdit = () => {
    navigate(`employee/${id}/edit`,);
  };

  const handleDelete = () => {
    onDelete(id)
  };
  return (
    <Card padding="lg" radius="md" shadow="lg" withBorder className="card">
      <Group className="group">
        <ActionIcon color="blue" variant="light" onClick={handleEdit}>
          <IconEdit size={18} />
        </ActionIcon>
        <ActionIcon color="red" variant="light" onClick={handleDelete}>
          <IconTrash size={18} />
        </ActionIcon>
      </Group>

      <Group className="avatarGroup">
        <Avatar src={avatar} alt="Profile Picture" radius="xl" size="xl" className="avatar" />

        <Text size="lg" className="contactGridText">
          {`${firstName} ${lastName}`}
        </Text>
        <Text size="sm">{position}</Text>
      </Group>

      <Grid gutter="sx" className="contactGrid">
        <Grid.Col span={5}>
          <Text size="sm">Contact</Text>
        </Grid.Col>
        <Grid.Col span={5}>
          <Text size="sm">{mobileNumber}</Text>
        </Grid.Col>
        <Grid.Col span={12}>
          <Divider my="sm" />
        </Grid.Col>

        <Grid.Col span={5}>
          <Text size="sm">Email</Text>
        </Grid.Col>
        <Grid.Col span={5}>
          <Text size="sm">{email}</Text>
        </Grid.Col>
        <Grid.Col span={12}>
          <Divider my="sm" />
        </Grid.Col>

        <Grid.Col span={5}>
          <Text size="sm">Gender</Text>
        </Grid.Col>
        <Grid.Col span={5}>
          <Text size="sm">{gender}</Text>
        </Grid.Col>
        <Grid.Col span={12}>
          <Divider my="sm" />
        </Grid.Col>

        <Grid.Col span={5}>
          <Text size="sm">Address</Text>
        </Grid.Col>
        <Grid.Col span={5}>
          <Text size="sm">{address}</Text>
        </Grid.Col>
      </Grid>
    </Card>
  );
};

export default EmployeeCard;
