import moment from 'moment';

// getComputerMove :: (Moment a) -> Moment
export default function getComputerMove(a) {
  const b = a.date();
  if (31 === b) return moment({ date: 31, month: 11 });
  const c = a.month(),
    d = c + 20;
  if (d < b) {
    const e = b - 20,
    f = moment({ date: b, month: e });
    return f.isValid() ? f : moment({ date: b, month: e + 1 });
  }
  return moment(d === b ? { date: b, month: c + 1 } : { date: d, month: c });
}
