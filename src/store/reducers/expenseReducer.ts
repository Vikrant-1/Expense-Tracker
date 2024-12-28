import {createSlice} from '@reduxjs/toolkit';
import {ExpenseInterface} from '../../types/expenseTypes';

const exps = [
  {
    id: '58125424-f5a0-46b1-9517-81dba3957699',
    name: 'User-centric modular concept',
    amount: 184.7,
    currencyCode: 'JPY',
    description: 'Quality speak again result. Our side crime.',
    categoryId: 'Travel',
    expenseDate: 1734176611,
    createdBy: {
      id: 'e92322c6-5eb9-49cb-9620-9331f065aeb0',
      createdAt: 1733907970,
    },
    updatedBy: {
      id: 'dfda3f23-6078-41e3-bcc5-07fd2ea8ab07',
      updatedAt: 1733919675,
    },
  },
  {
    id: 'fceacca3-a161-4b6d-8331-85515b84b69a',
    name: 'Diverse systemic architecture',
    amount: 254.41,
    currencyCode: 'INR',
    description: 'Ahead amount radio well teach rise.',
    categoryId: 'Transportation',
    expenseDate: 1733159499,
    createdBy: {
      id: '1e322317-2847-4942-9f84-8efca50d7572',
      createdAt: 1733127081,
    },
    updatedBy: {
      id: '1ed109a4-c8e4-459b-870d-73b69e28a981',
      updatedAt: 1733498646,
    },
  },
  {
    id: '2ea709e6-6ae0-4d5b-9e77-71ff26b4af12',
    name: 'Optional asymmetric solution',
    amount: 169.09,
    currencyCode: 'JPY',
    description: 'Whom grow focus fish. Defense environmental keep.',
    categoryId: 'Shopping',
    expenseDate: 1734275321,
    createdBy: {
      id: 'b45e0468-bb81-4131-8ee5-319ba343002c',
      createdAt: 1734256977,
    },
    updatedBy: {
      id: '6f48d4ee-1f0e-43d9-a1bf-234b2bd92367',
      updatedAt: 1734543623,
    },
  },
  {
    id: '8fb10c84-db27-4ff2-8ccd-70432dccd2b4',
    name: 'Ergonomic interactive software',
    amount: 146.29,
    currencyCode: 'JPY',
    description: 'Whole gun really voice.',
    categoryId: 'Health & Fitness',
    expenseDate: 1733154495,
    createdBy: {
      id: '27beb527-a90b-4215-97b3-ddba178066c5',
      createdAt: 1732682471,
    },
    updatedBy: {
      id: '07a56e06-14db-4b4c-8d9e-586128472475',
      updatedAt: 1733090422,
    },
  },
  {
    id: '66e05912-1a8f-4fa5-9bbf-36c46cc8f888',
    name: 'Synergized hybrid help-desk',
    amount: 114.06,
    currencyCode: 'EUR',
    description: 'Prepare national young our father.',
    categoryId: 'Food & Dining',
    expenseDate: 1733674088,
    createdBy: {
      id: 'c123b63b-5960-47c0-a614-1b314f56c69d',
      createdAt: 1733407108,
    },
  },
  {
    id: '83e38058-6fca-4b36-9478-31e1e737f9e9',
    name: 'User-centric upward-trending Graphical User Interface',
    amount: 100.62,
    currencyCode: 'EUR',
    description: 'Line threat executive plan.',
    categoryId: 'Office Supplies',
    expenseDate: 1735121809,
    createdBy: {
      id: '1d93cd78-8f80-4c13-bf23-34e35bb6ddaf',
      createdAt: 1735032539,
    },
  },
  {
    id: '562ffdf3-8d4d-48bb-8917-21e88ce5adf3',
    name: 'Robust encompassing adapter',
    amount: 78.67,
    currencyCode: 'USD',
    description: 'Part name right court together.',
    categoryId: 'Entertainment',
    expenseDate: 1734026028,
    createdBy: {
      id: '64eb6be2-6ddb-4c2c-87ee-22529656db45',
      createdAt: 1733799724,
    },
  },
  {
    id: 'c644a066-5fa9-4e17-8830-fef59817065d',
    name: 'Centralized heuristic portal',
    amount: 63.17,
    currencyCode: 'EUR',
    description: 'Probably tough spend.',
    categoryId: 'Office Supplies',
    expenseDate: 1733199315,
    createdBy: {
      id: '5b4b68cc-99e9-4a70-97da-298b1b0e7286',
      createdAt: 1732836885,
    },
  },
  {
    id: 'ebe9823c-18a1-4146-b491-c298cc0ec2a6',
    name: 'Balanced radical algorithm',
    amount: 391.41,
    currencyCode: 'USD',
    description: 'Difficult ever travel movie.',
    categoryId: 'Food & Dining',
    expenseDate: 1734179032,
    createdBy: {
      id: 'b6d72e2a-8fb6-4bc7-81f8-e7725bb5cdf6',
      createdAt: 1733801848,
    },
    updatedBy: {
      id: 'b5f64f2b-e287-49ac-9d3e-ab7b4743bf7c',
      updatedAt: 1734092626,
    },
  },
  {
    id: '3e4291de-42fb-4afc-98b1-f05d41354cb4',
    name: 'Synchronized logistical access',
    amount: 217.7,
    currencyCode: 'GBP',
    description: 'Buy improve apply wait.',
    categoryId: 'Office Supplies',
    expenseDate: 1733744663,
    createdBy: {
      id: 'b7826f9d-e79a-4ce8-8577-c76a32313d78',
      createdAt: 1733351020,
    },
    updatedBy: {
      id: '83ce1c69-df99-4d8b-936b-64c91941c235',
      updatedAt: 1733716405,
    },
  },
  {
    id: '2675f8ac-584c-459d-a50a-0976d98cc28d',
    name: 'Down-sized heuristic support',
    amount: 107.97,
    currencyCode: 'USD',
    description: 'North prepare marriage top back century support.',
    categoryId: 'Utilities',
    expenseDate: 1735177920,
    createdBy: {
      id: 'def11aa6-6f7a-4095-b983-57fdc7e0234f',
      createdAt: 1734987659,
    },
  },
  {
    id: '8041a29e-3dbe-47cb-8463-8c0dd5336b27',
    name: 'Future-proofed bi-directional open system',
    amount: 333.35,
    currencyCode: 'INR',
    description: 'Process say hold find. Include ok shake.',
    categoryId: 'Travel',
    expenseDate: 1734507409,
    createdBy: {
      id: '5fd1b7d3-8afb-424b-bb65-ba6c97c7fb06',
      createdAt: 1734143518,
    },
  },
  {
    id: 'e7e70e0c-4fee-4be8-96df-352f4a9ac82f',
    name: 'Virtual methodical budgetary management',
    amount: 168.54,
    currencyCode: 'GBP',
    description: 'National data same force word card knowledge.',
    categoryId: 'Shopping',
    expenseDate: 1734090599,
    createdBy: {
      id: 'cc235635-6add-4629-a43e-102fd16e9239',
      createdAt: 1733596592,
    },
  },
  {
    id: '0f2ae21e-65e6-47e3-97b7-9f516282f116',
    name: 'Fully-configurable dynamic architecture',
    amount: 85.22,
    currencyCode: 'EUR',
    description: 'Us especially half human.',
    categoryId: 'Travel',
    expenseDate: 1732889551,
    createdBy: {
      id: 'b2fec627-a44a-4a28-8bbe-b79b9db679c1',
      createdAt: 1732407971,
    },
    updatedBy: {
      id: 'ee04cf1b-2896-42ed-a43d-e9ac617d0c45',
      updatedAt: 1732502018,
    },
  },
  {
    id: '988bcab5-7007-4cc1-be9d-6b5fe68c08f5',
    name: 'Assimilated impactful moratorium',
    amount: 275.63,
    currencyCode: 'GBP',
    description: 'Carry member trip day firm analysis new.',
    categoryId: 'Shopping',
    expenseDate: 1733735165,
    createdBy: {
      id: 'b7bf9a62-ef62-452f-affd-36cfbcb1c9be',
      createdAt: 1733328220,
    },
  },
  {
    id: 'bc6433c4-fd58-4232-bfe1-2c4fddcb7b4a',
    name: 'Secured human-resource framework',
    amount: 53.55,
    currencyCode: 'GBP',
    description: 'Value example seem series by account.',
    categoryId: 'Shopping',
    expenseDate: 1732904868,
    createdBy: {
      id: 'fd2ee1be-a3bf-47a3-a48b-1f3835566650',
      createdAt: 1732319867,
    },
  },
  {
    id: '0272a9fc-7a92-421f-b055-fc2cf5c82c6b',
    name: 'Pre-emptive logistical artificial intelligence',
    amount: 255.9,
    currencyCode: 'JPY',
    description: 'Task theory sometimes me. Budget today gas short.',
    categoryId: 'Transportation',
    expenseDate: 1734325448,
    createdBy: {
      id: 'dc495068-0785-4474-a479-12f75895ade4',
      createdAt: 1734287856,
    },
    updatedBy: {
      id: 'ebbc70b2-bd03-4a50-a2cf-dd244dd4bba9',
      updatedAt: 1734477664,
    },
  },
  {
    id: '686f7007-ea5b-4194-8040-ef54a4aa6723',
    name: 'Re-engineered demand-driven archive',
    amount: 479.49,
    currencyCode: 'EUR',
    description: 'Others lawyer before local.',
    categoryId: 'Shopping',
    expenseDate: 1733880727,
    createdBy: {
      id: '83021ddb-bcf9-4233-b2a8-263c1cb147ae',
      createdAt: 1733796341,
    },
  },
  {
    id: '676a5de1-459b-4a5a-8700-f0ab7f507560',
    name: 'Persevering multimedia groupware',
    amount: 466.78,
    currencyCode: 'JPY',
    description: 'Minute research explain top field western.',
    categoryId: 'Office Supplies',
    expenseDate: 1733359624,
    createdBy: {
      id: '9f51b0c8-e115-4daf-877e-4b13ab06dc6f',
      createdAt: 1733349859,
    },
    updatedBy: {
      id: '219510e3-1569-439d-8b62-1dfcf9ce1057',
      updatedAt: 1733385673,
    },
  },
  {
    id: '210ba4a1-10b3-4470-8125-faa93ae104a3',
    name: 'Profit-focused human-resource open system',
    amount: 25.5,
    currencyCode: 'GBP',
    description: 'Play physical responsibility field standard.',
    categoryId: 'Entertainment',
    expenseDate: 1732933140,
    createdBy: {
      id: '289e8d50-052c-4147-ba72-57619d3300aa',
      createdAt: 1732379813,
    },
    updatedBy: {
      id: 'a4dde42a-69b8-4c8f-9482-67a8d6194a0e',
      updatedAt: 1732627940,
    },
  },
];

interface ExpenseStateProps {
  expenses: ExpenseInterface[];
}

const initialState: ExpenseStateProps = {
  expenses: exps,
};

const expenseSlice = createSlice({
  name: 'expense',
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {},
});

export default expenseSlice.reducer;
