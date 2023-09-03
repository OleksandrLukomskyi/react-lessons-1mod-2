import { formatDistanceStrict } from 'date-fns';

export const formatEventDurations = (start, end) => {
  return formatDistanceStrict(Date.parse(start), Date.parse(end));
};
