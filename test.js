	t.true(hasFlag('-u', ['-f', '-u', '-b']));
	t.true(hasFlag('-u', ['-u', '--', '-f']));
	t.true(hasFlag('u', ['-f', '-u', '-b']));
	t.true(hasFlag('u', ['-u', '--', '-f']));
	t.false(hasFlag('f', ['-u', '--', '-f']));
});

test('handles empty argv', t => {
	t.false(hasFlag('foo', []));
});

test('detects flag at first position', t => {
	t.true(hasFlag('foo', ['--foo']));
});

test('ignores flags after --', t => {
	t.false(hasFlag('foo', ['--', '--foo']));
});

test('throws on non-string flag', t => {
	t.throws(() => hasFlag(), {instanceOf: TypeError});
});
	

