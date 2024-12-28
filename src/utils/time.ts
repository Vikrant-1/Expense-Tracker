import { format } from 'date-fns';
import { dd_MMMM, dd_MMMM_yyyy } from '../constants/dateTime';

// need format 12 Decmeber
export const getFormattedDate = (unixTime: number,timeFormat:string=dd_MMMM_yyyy) => {
  const formattedDate = format(unixTime * 1000, timeFormat || dd_MMMM_yyyy);
  return formattedDate;
};
