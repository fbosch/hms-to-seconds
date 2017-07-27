import test from 'ava'
import hmsToSeconds from '.'

test('title', t => {
  const err = t.throws(() => {
    hmsToSeconds(123)
  }, TypeError)
  t.is(err.message, 'Expected a string, got number')
  t.is(hmsToSeconds('14:30:20'), 52220)
  t.is(hmsToSeconds('00:12:32'), 752)
  t.is(hmsToSeconds('12:32'), 752)
  t.is(hmsToSeconds('00:00:32'), 32)
  t.is(hmsToSeconds('00:32'), 32)
  t.is(hmsToSeconds('32'), 32)
})
