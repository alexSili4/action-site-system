import { IUnusedUserCodesInitialState } from '@/types/unusedUserCodesStore.types';

const initialState: IUnusedUserCodesInitialState = {
  items: [
    {
      id: 12,
      code: 'NCTWRPKMZX6F',
      created_at: 1730818526,
      shop_number: 7,
      wheel_status: 0,
      status: 1,
      action_id: 1,
      verified_at: null,
      verified_status: 0,
    },
    {
      id: 13,
      code: 'D39NC3FSDHFT',
      created_at: 1730818722,
      shop_number: 6,
      wheel_status: 0,
      status: 0,
      action_id: 1,
      verified_at: null,
      verified_status: 0,
    },
    {
      id: 59,
      code: 'SNADDVC9VX2T',
      created_at: 1733762207,
      shop_number: 7,
      wheel_status: 0,
      status: 1,
      action_id: 1,
      verified_at: 1733762207,
      verified_status: 0,
    },
  ],
  isLoading: false,
  isLoaded: false,
  error: null,
};

export default initialState;
