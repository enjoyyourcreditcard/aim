// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
export const categories = [
    {
        id: 1,
        name: `CPE`
    },
    {
        id: 2,
        name: `MATERIAL`
    }
];

export const segments = [
    {
        id: 1,
        category_id: 1,
        name: `ONT ZTE`
    },
    {
        id: 2,
        category_id: 1,
        name: `STB LINUX`
    },
    {
        id: 3,
        category_id: 2,
        name: `INLINE CLOSURE - 48 CORE`
    }
];

export const brands = [
    {
        id: 1,
        name: `ZTE`
    },
    {
        id: 2,
        name: `SKYWORTH`
    },
    {
        id: 3,
        name: `GRANDWAY`
    }
];

export const parts = [
    {
        id: 1,
        segment_id: 1,
        brand_id: 1,
        name: `ONT 2 ANTENNA SINGLE BAND`,
        uom: `SET`,
        is_serial_number: true
    },
    {
        id: 2,
        segment_id: 2,
        brand_id: 2,
        name: `STB LINUX`,
        uom: `SET`,
        is_serial_number: true
    },
    {
        id: 3,
        segment_id: 3,
        brand_id: 3,
        name: `INLINE CLOSURE - 48 CORE`,
        uom: `SET`,
        is_serial_number: false
    }
];