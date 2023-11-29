/**
 * @author I Wayan Bayu Nugroho
 * @email bayuiwo@gmail.com
 * @create date 2023-05-09 23:12:33
 * @modify date 2023-05-09 23:12:33
 */

import {
    IconAperture,
    IconChartHistogram,
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
        id: uniqueId(),
        title: 'Dashboard',
        icon: IconChartHistogram,
        href: '/',
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
                title: 'order.orderList',
                icon: IconLayoutDashboard,
                href: '/order-list',
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
        id: uniqueId(),
        title: 'Setting',
        icon: IconSettings,
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
];

export default MenuItemIpaymu;
