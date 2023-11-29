/**
 * @author I Wayan Bayu Nugroho
 * @email bayuiwo@gmail.com
 * @create date 2023-05-09 23:12:33
 * @modify date 2023-05-09 23:12:33
 */
import dynamic from "next/dynamic";
import { useTheme } from '@mui/material/styles';
import {Grid, Stack, Typography, Avatar, IconButton} from '@mui/material';

import IPY from '@/app/(DashboardLayout)/components/index'

interface IDailySummary {
  title?: any,
  amount?: string,
  trx?: string
  backgroundColor?: string
  icon?: JSX.Element
}

const DailySummary = (props: IDailySummary) => {
  // chart color
  const theme = useTheme();
  const primary = theme.palette.primary.main;

  const {title, amount, trx, backgroundColor, icon} = props

  return (
    <IPY.DashboardCard title={title!} backgroundColor={backgroundColor!}>
      <Grid container spacing={1}>
        {/* column */}
        <Grid item xs={9}>
          <Typography variant="h4" fontWeight="700">
            {amount}
          </Typography>
          <Stack spacing={3} mt={2} direction="row">
            <Stack direction="row" spacing={1} alignItems="center">
              <Avatar
                sx={{ width: 9, height: 9, bgcolor: primary, svg: { display: 'none' } }}
              ></Avatar>
              <Typography variant="subtitle2" color="textSecondary">
                {trx}
              </Typography>
            </Stack>
          </Stack>
        </Grid>
        {/* column */}
        <Grid item xs={3}>
          <Stack spacing={1} alignItems="center" >
            {icon}
          </Stack>
        </Grid>
      </Grid>
    </IPY.DashboardCard>
  );
};

export default DailySummary;
