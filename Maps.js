function getAdmins(map) {
	let admins = [];

	for ([key, value] of map) {
		if (value === 'ADMIN') {
			admins.push(key);
		}
	}

	return admins;
};

const userRoles = new Map();

userRoles.set('Stephany', 'SUDO');
userRoles.set('Luiz', 'ADMIN');
userRoles.set('Elvira', 'ADMIN');
userRoles.set('Carolina', 'USER');
userRoles.set('Debora', 'USER');
userRoles.set('Guilherme', 'USER');
userRoles.set('Luiza', 'ADMIN');

console.log(getAdmins(userRoles));
