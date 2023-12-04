'use client';
import { Typography } from '@mui/material';
import IPY from '../components';
import  {NotifStore } from "@/store/notif/notifStore";


const SamplePage = () => {
  const {setNotif} = NotifStore();

  return (
    <IPY.PageContainer title="Sample Page" description="this is Sample page">
      <IPY.DashboardCard title="Sample Page">
        <>
          <Typography>This is a sample page</Typography>
          <IPY.Button size="large" text="submit" variant="contained" onClick={()=> setNotif(true,"success","Transaksi disimpan")}/>

        </>
      </IPY.DashboardCard>
      <IPY.Notif />
    </IPY.PageContainer>
  );
};

export default SamplePage;

