/**
 * @author I Wayan Bayu Nugroho
 * @email bayuiwo@gmail.com
 * @create date 2023-05-09 23:12:33
 * @modify date 2023-05-09 23:12:33
 */

import {
    IconChartHistogram,
    IconReportMoney,
    IconApi,
    IconLayoutDashboard, IconLogin, IconMoodHappy, IconTypography, IconUserPlus, IconChartDots2,
    IconChartBar,
    IconBox
} from '@tabler/icons-react';

import {useTranslation} from "react-i18next";

import { uniqueId } from 'lodash';
import { IconList } from '@tabler/icons-react';
import { IconUserCheck } from '@tabler/icons-react';
import { IconTags } from '@tabler/icons-react';
import { IconVolume } from '@tabler/icons-react';
import { IconUserStar } from '@tabler/icons-react';
import { IconHome2 } from '@tabler/icons-react';
import { IconSettings } from '@tabler/icons-react';



const MenuItemIpaymu = [
    {
        navlabel: true,
        subheader: "Home",
    },
    {
        id: uniqueId(),
        title: 'Dashboard',
        icon: IconChartHistogram,
        href: '/',
    },
    {
        navlabel: true,
        subheader: "Menu",
    },

    {
        id: uniqueId(),
        title: 'Transaksi',
        icon: IconList,
        type:"group",
        children: [
            {
                id: uniqueId(),
                title: 'Sample',
                icon: IconLayoutDashboard,
                href: '/sample-page',
            },

            {
                id: uniqueId(),
                title: 'Transaction',
                icon: IconChartHistogram,
                href: '/a',
            },
            {
                id: uniqueId(),
                title: 'Virtual Account',
                icon: IconChartHistogram,
                href: '/s',
            },
            {
                id: uniqueId(),
                title: 'Cash On Delivery',
                icon: IconChartHistogram,
                href: '/d',
            },
            {
                id: uniqueId(),
                title: 'Convenience Store',
                icon: IconChartHistogram,
                href: '/f',
            },
            {
                id: uniqueId(),
                title: 'Export Report',
                icon: IconChartHistogram,
                href: '/er',
            },
            {
                id: uniqueId(),
                title: 'Settlement Notification',
                icon: IconChartHistogram,
                href: '/sn',
            },
            {
                id: uniqueId(),
                title: 'Demo',
                icon: IconChartHistogram,
                href: '/dm',
            },
            {
                id: uniqueId(),
                title: 'Reconcile',
                icon: IconChartHistogram,
                href: '/r',
            },
            {
                id: uniqueId(),
                title: 'QRIST',
                icon: IconChartHistogram,
                href: '/QR',
            },

        ]
    },
    {
        id: uniqueId(),
        title: 'Member',
        icon: IconUserStar,
        type:"group",
        children: [
            {
                id: uniqueId(),
                title: 'Member',
                icon: IconLayoutDashboard,
                href: '/schedule',
            },

            {
                id: uniqueId(),
                title: 'Unconfirmed Member',
                icon: IconLayoutDashboard,
                href: '/order-list',
            },

            {
                id: uniqueId(),
                title: 'Verification Request',
                icon: IconLayoutDashboard,
                href: '/order-list',
            },

        ]
    },
    // {
    //     id: uniqueId(),
    //     title: 'Setting',
    //     icon: IconSettings,
    //     type:"group",
    //     children: [
    //         {
    //             id: uniqueId(),
    //             title: 'order.schedule',
    //             icon: IconLayoutDashboard,
    //             href: '/schedule',
    //         },
    //
    //         {
    //             id: uniqueId(),
    //             title: 'order.orderList',
    //             icon: IconLayoutDashboard,
    //             href: '/order-list',
    //         },
    //
    //     ]
    // },
    {
        id: uniqueId(),
        title: 'User',
        icon: IconUserCheck,
        type:"group",
        children: [
            {
                id: uniqueId(),
                title: 'order.schedule',
                icon: IconLayoutDashboard,
                href: '/schedule',
            },

            {
                id: uniqueId(),
                title: 'order.orderList',
                icon: IconLayoutDashboard,
                href: '/order-list',
            },

        ]
    },
    {
        navlabel: true,
        subheader: "Setting",
    },
    {
        id: uniqueId(),
        title: 'Custome Fee',
        icon: IconReportMoney,
        href: '/CF',
    },
    {
        id: uniqueId(),
        title: 'Api Access',
        icon: IconApi,
        href: '/AA',
    },
];

export default MenuItemIpaymu;
