import { Helmet, HelmetData } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
// @mui
import { useTheme, Theme } from '@mui/material/styles';
import { Grid, Container, alpha, Typography } from '@mui/material';

// sections
import {
  AppTasks,
  AppNewsUpdate,
  AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
} from '@/sections/@dashboard/app';
import { CalendarMonth } from '@/components/calendar/CalendarMonth';
import { FormProvider, useForm } from 'react-hook-form';

// ----------------------------------------------------------------------

const helmetData = new HelmetData({});

export default function DashboardAppPage() {
  const theme = useTheme();
  const formConfig = useForm({
    defaultValues: {
      date: null,
    },
  });

  return (
    <>
      <Helmet helmetData={helmetData}>
        <title> Dashboard </title>
      </Helmet>

      <Container maxWidth="xl">
        <FormProvider {...formConfig}>
          <Typography
            variant="h4"
            sx={(theme: Theme) => ({
              mb: 5,
              ...(theme.palette.mode === 'light' && {
                color: 'white',
              }),
            })}
          >
            Hi, Welcome back
          </Typography>

          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={8}>
              <AppWebsiteVisits
                title="Website Visits"
                subheader="(+43%) than last year"
                sx={(theme: Theme) => ({
                  backgroundColor: alpha(
                    theme.palette.background.paper,
                    theme.palette.mode === 'dark' ? 0.1 : 0.8,
                  ),
                  backdropFilter: 'blur(135px)',
                })}
                chartLabels={[
                  '01/01/2003',
                  '02/01/2003',
                  '03/01/2003',
                  '04/01/2003',
                  '05/01/2003',
                  '06/01/2003',
                  '07/01/2003',
                  '08/01/2003',
                  '09/01/2003',
                  '10/01/2003',
                  '11/01/2003',
                ]}
                chartData={[
                  {
                    name: 'Team A',
                    type: 'column',
                    fill: 'solid',
                    data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                  },
                  {
                    name: 'Team B',
                    type: 'area',
                    fill: 'gradient',
                    data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                  },
                  {
                    name: 'Team C',
                    type: 'line',
                    fill: 'solid',
                    data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                  },
                ]}
              />
            </Grid>

            <Grid item xs={12} md={6} lg={4}>
              <CalendarMonth />
            </Grid>

            <Grid item xs={12} md={6} lg={8}>
              <AppNewsUpdate
                title="News Update"
                sx={(theme: Theme) => ({
                  backgroundColor: alpha(
                    theme.palette.background.paper,
                    theme.palette.mode === 'dark' ? 0.1 : 0.8,
                  ),
                  backdropFilter: 'blur(135px)',
                })}
                list={[...Array(5)].map((_, index) => ({
                  id: faker.string.uuid(),
                  title: faker.person.jobTitle(),
                  description: faker.person.jobTitle(),
                  image: `/assets/images/covers/cover_${index + 1}.jpg`,
                  postedAt: faker.date.recent(),
                }))}
              />
            </Grid>

            <Grid item xs={12} md={6} lg={4}>
              <AppCurrentVisits
                title="Current Visits"
                sx={(theme: Theme) => ({
                  backgroundColor: alpha(
                    theme.palette.background.paper,
                    theme.palette.mode === 'dark' ? 0.1 : 0.8,
                  ),
                  backdropFilter: 'blur(135px)',
                  height: '100%',
                })}
                chartData={[
                  { label: 'America', value: 4344 },
                  { label: 'Asia', value: 5435 },
                  { label: 'Europe', value: 1443 },
                  { label: 'Africa', value: 4443 },
                ]}
                chartColors={[
                  theme.palette.primary.main,
                  theme.palette.info.main,
                  theme.palette.warning.main,
                  theme.palette.error.main,
                ]}
              />
            </Grid>

            <Grid item xs={12} md={6} lg={8}>
              <AppTasks
                title="Tasks"
                sx={(theme: Theme) => ({
                  backgroundColor: alpha(
                    theme.palette.background.paper,
                    theme.palette.mode === 'dark' ? 0.1 : 0.8,
                  ),
                  backdropFilter: 'blur(135px)',
                  height: '100%',
                })}
                list={[
                  { id: '1', label: 'Create FireStone Logo' },
                  { id: '2', label: 'Add SCSS and JS files if required' },
                  { id: '3', label: 'Stakeholder Meeting' },
                  { id: '4', label: 'Scoping & Estimations' },
                  { id: '5', label: 'Sprint Showcase' },
                ]}
              />
            </Grid>

            <Grid item xs={12} md={6} lg={4}>
              <AppOrderTimeline
                title="Order Timeline"
                sx={(theme: Theme) => ({
                  backgroundColor: alpha(
                    theme.palette.background.paper,
                    theme.palette.mode === 'dark' ? 0.1 : 0.8,
                  ),
                  backdropFilter: 'blur(135px)',
                })}
                list={[...Array(3)].map((_, index) => ({
                  id: faker.string.uuid(),
                  title: [
                    '1983, orders, $4220',
                    '12 Invoices have been paid',
                    'Order #37745 from September',
                    'New order placed #XF-2356',
                    'New order placed #XF-2346',
                  ][index],
                  type: `order${index + 1}`,
                  time: faker.date.past(),
                }))}
              />
            </Grid>
          </Grid>
        </FormProvider>
      </Container>
    </>
  );
}
