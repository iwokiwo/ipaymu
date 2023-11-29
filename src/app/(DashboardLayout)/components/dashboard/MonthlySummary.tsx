/**
 * @author I Wayan Bayu Nugroho
 * @email bayuiwo@gmail.com
 * @create date 2023-05-09 23:12:33
 * @modify date 2023-05-09 23:12:33
 */

import React from "react";
import dynamic from "next/dynamic";
import { useTheme } from '@mui/material/styles';
import { Stack, Typography, Avatar, Fab, Grid, Box } from '@mui/material';
import { IconArrowUpRight } from '@tabler/icons-react';
import { colors } from "@/asset";
import {isEmpty} from "lodash";

import IPY from '@/app/(DashboardLayout)/components/index'

interface IMonthlySummary {
    title: any,
    amount: string,
    percentage? : string
    trx?: string
    backgroundColor?: string
}

const MonthlySummary = (props: IMonthlySummary)  => {
  // chart color
  const theme = useTheme();
  const {title, percentage,amount, trx, backgroundColor} = props

  return (
    <IPY.DashboardCard
      title={title}
      action={
        // <Fab color="primary" size="medium" sx={{ color: '#ffffff' }}>
        //   <IconCurrencyDollar width={24} />
        // </Fab>
        // <>x</>
        <></>
      }
      backgroundColor={backgroundColor!}
      footer={
        <>
        
            <Grid container spacing={1}>
              <Grid item xs={8}>
                <Box
                  sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignContent: 'flex-start',
                    mb: 1,
                 
                    //bgcolor: theme.palette.primary.main,
                    // maxWidth: 380,
                    // height: 200,
                    borderRadius: 1,
                  }}
                >
                  {isEmpty(trx) ?
                    <>
                      <Box >
                        <IconArrowUpRight width={20} color={colors.success.primary} />
                      </Box>
                      <Box sx={{ml: 1}}>
                        <Typography color={colors.success.primary} variant="subtitle2" fontWeight="600">
                          {percentage}
                        </Typography>
                      </Box>
                      <Box sx={{ml: 1}}>
                        <Typography variant="subtitle2" color="textSecondary">
                          vs last month
                        </Typography>
                      </Box>
                    </>
                    :
                    <>
                      <Box sx={{ml: 1}}>
                        <Typography color={isEmpty(backgroundColor) ? colors.success.primary:"#ffff"} variant="subtitle2" fontWeight="600">
                          {trx}
                        </Typography>
                      </Box>
                    </>
                  }
                </Box>

              </Grid>
              {/*<Grid item xs={4}>*/}
              {/*  <Chart options={optionscolumnchart} series={seriescolumnchart} type="area" height="60px" />*/}
              {/*</Grid>*/}

            </Grid>
        


        </>
      }
    >
      <>
        <Typography variant="h3" fontWeight="700" mt="-20px" color={isEmpty(backgroundColor) ? "textSecondary":"#ffff"}>
          {amount}
        </Typography>
        {/* <Stack direction="row" spacing={1} my={1} alignItems="center">
          <Avatar sx={{ bgcolor: errorlight, width: 27, height: 27 }}>
            <IconArrowDownRight width={20} color="#FA896B" />
          </Avatar>
          <Typography variant="subtitle2" fontWeight="600">
            +9%
          </Typography>
          <Typography variant="subtitle2" color="textSecondary">
            last year
          </Typography>
        </Stack> */}
      </>
    </IPY.DashboardCard>
  );
};

export default MonthlySummary;
