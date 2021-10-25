const Unit = require('../index');

test('проверяем уровень здоровья война', () => {
  const warrior = new Unit('воин', '95');
  const healthLevel = warrior.status();
  expect(healthLevel).toBe('healthy');
});

test('проверяем уровень здоровья волшебника', () => {
  const wizard = new Unit('волшебник', '49');
  const healthLevel = wizard.status();
  expect(healthLevel).toBe('wounded');
});

test('проверяем уровень здоровья некроманта', () => {
  const necromancer = new Unit('некромант', '14');
  const healthLevel = necromancer.status();
  expect(healthLevel).toBe('critical');
});
