import Bowerman from '../bowerman';

test('test Bowerman', () => {
  const bowerman = new Bowerman('Bowerman');
  const correct = {
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
    name: 'Bowerman',
    type: 'Bowman',
  };
  expect(bowerman).toEqual(correct);
});
