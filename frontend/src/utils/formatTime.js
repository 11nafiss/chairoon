import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime)

// ----------------------------------------------------------------------

export function fDate(date) {
  const format = dayjs(date).format('DD MMMM YYYY');
  return format;
}

export function fDateTime(date) {
  const format = dayjs(date).format('DD MMMM YYYY HH:mm');
  return format;
}

export function fTimestamp(date) {
  const format = dayjs(date).unix();
  return format;
}

export function fDateTimeSuffix(date) {
  const format = dayjs(date).format('DD MMMM YYYY hh:mm a');
  return format;
}

export function fToNow(date) {
  const format = dayjs(date).fromNow()
  return format;
}
