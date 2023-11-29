/**
 * @author I Wayan Bayu Nugroho
 * @email bayuiwo@gmail.com
 * @create date 2023-05-09 23:12:33
 * @modify date 2023-05-09 23:12:33
 */

'use client'
import {
    Grid,
    Box,
    Typography,
    Stack,
    BottomNavigation,
    BottomNavigationAction,
    Autocomplete, TextField, Button
} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import PieChartIcon from '@mui/icons-material/PieChart';

import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
// components
import SalesOverview from '@/app/(DashboardLayout)/components/dashboard/SalesOverview';
import YearlyBreakup from '@/app/(DashboardLayout)/components/dashboard/YearlyBreakup';
import RecentTransactions from '@/app/(DashboardLayout)/components/dashboard/RecentTransactions';
import ProductPerformance from '@/app/(DashboardLayout)/components/dashboard/ProductPerformance';
import Blog from '@/app/(DashboardLayout)/components/dashboard/Blog';
import MonthlyEarnings from '@/app/(DashboardLayout)/components/dashboard/MonthlyEarnings';
import IPY from './components';
import React from 'react';
import {useStyles} from "@/app/(DashboardLayout)/components/dashboard/dasboard.styles";
import Header from "@/app/(DashboardLayout)/layout/header/Header";


import { colors } from "@/asset";
import {useTranslation} from "react-i18next";


const Dashboard = () => {
    const matches = useMediaQuery('(min-width:600px)');
    const classes = useStyles()
    const { t } = useTranslation()

  const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    ]
    return (
        <PageContainer title="Dashboard" description="this is Dashboard">
            <Box sx={{ flexGrow: 1 }}>
              <Box sx={{pt : 2, pb: 2}}>
                <Box sx={{mb: 2}}>
                <IPY.Header
                  title={t('dashboard.dashboard')}
                />
                </Box>
                <Grid item xs={12} lg={12}>
                  <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12}}>
                    <Grid item xs={4}>
                      <IPY.DailySummary
                        title={t('dashboard.transactionToday')}
                        amount="Rp. 1.000.000.000"
                        trx={`1.000 ${t('dashboard.transaction')}`}
                        icon={<SignalCellularAltIcon sx={{ fontSize: 70 }}/>} />
                    </Grid>
                    <Grid item xs={4}>
                      <IPY.DailySummary
                        title={t('dashboard.gtvToday')}
                        amount="Rp. 1.000.000.000"
                        trx={`1.000 ${t('dashboard.transaction')}`}
                        icon={<ShoppingCartIcon  sx={{ fontSize: 70 }}/>} />
                    </Grid>
                    <Grid item xs={4}>
                      <IPY.DailySummary
                        title={t('dashboard.topChannelPayment')}
                        amount="Split Payment"
                        trx={`1.000 ${t('dashboard.transaction')}`}
                        icon={<PieChartIcon  sx={{ fontSize: 70 }}  /> } />
                    </Grid>

                  </Grid>

                </Grid>
              </Box>

              <Box sx={{pt : 2, pb: 2}}>
                 <IPY.Header
                     title={t('dashboard.statisticsTransactionByStatus')}
                 >

                   <Autocomplete
                     disablePortal
                     id="combo-box-demo"
                     options={top100Films}
                     sx={{ width: 300 }}
                     renderInput={(params) => <TextField {...params} label="Type" />}
                   />
                   <IPY.Button
                       variant="outlined"
                       className={classes.button!}
                       text={<Typography>Custome Date</Typography>}
                       onClick={() => {alert("tes")}}
                   />
                 </IPY.Header>
              </Box>
                <Grid item xs={12} lg={12}>
                    <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        <Grid item xs={4} sm={4} md={3} >
                            <IPY.MonthlySummary title={t('dashboard.transactionSuccess')} amount="Rp 10.000" trx={`1.000 ${t('dashboard.transaction')}`} backgroundColor={colors.success.primary} />
                        </Grid>
                        <Grid item xs={4} sm={4} md={3} >
                            <IPY.MonthlySummary title={t('dashboard.transactionPanding')} amount="Rp 60.000" trx={`1.000 ${t('dashboard.transaction')}`} backgroundColor={colors.secondary.main}/>
                        </Grid>
                        <Grid item xs={4} sm={4} md={3} >
                            <IPY.MonthlySummary title={t('dashboard.transactionFailed')} amount="Rp 90.000" trx={`1.000 ${t('dashboard.transaction')}`} backgroundColor={colors.error.primary}/>
                        </Grid>
                        <Grid item xs={4} sm={4} md={3} >
                            <IPY.MonthlySummary title={t('dashboard.transactionUnsettled')} amount="Rp 20.000" trx={`1.000 ${t('dashboard.transaction')}`} backgroundColor={colors.info.primary}/>
                        </Grid>
                    </Grid>

                </Grid>
                {/*<Box sx={{pt : 2, pb: 2}}>*/}
                {/*<URBS.Header title="Static Overview" />*/}
                {/*</Box>*/}
                {/*<Grid item xs={12} lg={12}>*/}
                {/*    <SalesOverview />*/}
                {/*</Grid>*/}
                {/*<Box sx={{pt : 2, pb: 2}}>*/}
                {/*<URBS.Header title="Top Sales" />*/}
                {/*</Box>*/}
                {/*<Grid item xs={12} lg={4}>*/}
                {/* <Grid container spacing={3}>*/}
                {/*  <Grid item xs={12}>*/}
                {/*     <YearlyBreakup />*/}
                {/*    </Grid>*/}
                {/*    <Grid item xs={12}>*/}
                {/*      <MonthlyEarnings />*/}
                {/*    </Grid>*/}
                {/*  </Grid>*/}
                {/*</Grid>*/}
                {/*<Grid item xs={12} lg={12}>*/}
                {/*    <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>*/}

                {/*        <Grid item xs={12} sm={5} md={6}>*/}
                {/*            <ProductPerformance />*/}
                {/*        </Grid>*/}
                {/*        <Grid item xs={12} sm={5} md={6}>*/}
                {/*            <ProductPerformance />*/}
                {/*        </Grid>*/}
                {/*        <Grid item xs={12} sm={5} md={6}>*/}
                {/*            <ProductPerformance />*/}
                {/*        </Grid>*/}
                {/*        <Grid item xs={12} sm={5} md={6}>*/}
                {/*            <ProductPerformance />*/}
                {/*        </Grid>*/}

                {/*    </Grid>*/}
                {/*</Grid>*/}

                {/*<Grid item xs={12} lg={8}>*/}
                {/*<ProductPerformance />*/}
                {/*</Grid>*/}
                {/*<Grid item xs={12}>*/}
                {/*<Blog />*/}
                {/*</Grid>*/}

            </Box>
        </PageContainer>
    )
}

export default Dashboard;
