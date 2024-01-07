import {
  Character, Bowerman, Swordsman, Magician, Daemon, Undead, Zombie,
} from '../character';

test('test Bowerman', () => {
  const bowerman = new Bowerman('Bowerman');
  expect(bowerman.attack).toBe(25);
  expect(bowerman.health).toBe(100);
});

test('test Swordsman', () => {
  const swordsman = new Swordsman('Swordsman');
  expect(swordsman.attack).toBe(40);
  expect(swordsman.defence).toBe(10);
});

test('test Magician', () => {
  const magician = new Magician('Magician');
  expect(magician.attack).toBe(10);
  expect(magician.defence).toBe(40);
});

test('test Daemon', () => {
  const daemon = new Daemon('Daemon');
  expect(daemon.defence).toBe(40);
  expect(daemon.level).toBe(1);
});

test('test Undead', () => {
  const undead = new Undead('Undead');
  expect(undead.attack).toBe(25);
  expect(undead.name).toBe('Undead');
});

test('test Zombie', () => {
  const zombie = new Zombie('Zombie');
  expect(zombie.type).toBe('Zombie');
  expect(zombie.health).toBe(100);
});

test('test "name" Error', () => {
  expect(() => new Magician('Reeeeeally Long Name')).toThrow(Error);
});

test('test "type" Error', () => {
  expect(() => new Character('Character', 'Unknow Type')).toThrow(Error);
});
