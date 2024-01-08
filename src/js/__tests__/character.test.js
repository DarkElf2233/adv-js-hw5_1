import Character from '../character';

test('test "name" Error', () => {
  expect(() => new Character('Reeeeeally Long Name', 'Bowman')).toThrow('"name" does not meet the length');
});

test('test "type" Error', () => {
  expect(() => new Character('Character', 'Unknow Type')).toThrow('invalid "type"');
});
