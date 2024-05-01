export class Enums {
    gender = [
        {
            name: 'Male',
            key: 'Male',
        },
        {
            name: 'Female',
            key: 'Female',
        },
    ];
    status = [
        {
            name: 'Active',
            key: '1',
        },
        {
            name: 'InActive',
            key: '0',
        },
    ];
    businessActivity = [
        {
            id: 'Main Office',
            name: 'Main Office',
        },
        {
            id: 'Branch Office',
            name: 'Branch Office',
        },
        {
            id: 'Admin Office Only',
            name: 'Admin Office Only',
        },
        {
            id: 'Warehouse',
            name: 'Warehouse',
        },
        {
            id: 'Others',
            name: 'Others',
        },
    ];


    typeOfPlace: any[] = [
        { name: 'Owned', key: true },
        { name: 'Rented', key: false },
    ];

    incentives: any[] = [
        { name: 'Yes', key: true },
        { name: 'No', key: false },
    ];

    micro_registered: any[] = [
        { name: 'Yes', key: true },
        { name: 'No', key: false },
    ];

    bsp_registered: any[] = [
        { name: 'Yes', key: true },
        { name: 'No', key: false },
    ];

    userTypes: any[] = [
        { typeLevel: 'Guest', key: 'Guest' },
        { typeLevel: 'User', key: 'User' },
        { typeLevel: 'Administrator', key: 'Administrator' },
    ];

    typeOfPermit: any[] = [
        { name: 'Business Permit', key: 'Business Permit' },
        { name: 'Working Permit', key: 'Working Permit' },
        { name: 'Retirement', key: 'Retirement' },
        // { name: 'Rented', key: 'Rented' },
        // { name: 'Owned', key: 'Owned' },
        // { name: 'Rented', key: 'Rented' },
        
    ]
    Affilations: any[] = [
        { name: '4Ps', key: '4Ps' },
        { name: 'IPs', key: 'IPs' },
        { name: 'OSCA', key: 'OSCA' },
        { name: 'PWD', key: 'PWD' },
        { name: 'Solo Parent', key: 'Solo Parent' },
        { name: 'Others', key: 'Others' },
    ]
    civil_staus: any[] = [
        { name: 'Single', key: 'Single' },
        { name: 'Married', key: 'Married' },
        { name: 'Widow/Widower', key: 'Widow/Widower' },
        { name: 'Legally Seperated', key: 'Legally Seperated' }
    ]
}
