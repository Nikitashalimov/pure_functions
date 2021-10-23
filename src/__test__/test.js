const Unit = require('../index.js');

test('проверяем уровень здоровья война', () => {
	let warrior = new Unit('воин', '95');
	let healthLevel = warrior.status();
	expect(healthLevel).toBe('healthy');
});

test('проверяем уровень здоровья волшебника', () => {
	let wizard = new Unit('волшебник', '49');
	let healthLevel = wizard.status();
	expect(healthLevel).toBe('wounded');
});

test('проверяем уровень здоровья некроманта', () => {
	let necromancer = new Unit('некромант', '14');
	let healthLevel = necromancer.status();
	expect(healthLevel).toBe('critical');
});