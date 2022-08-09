const api = {
	url: "https://www.omdbapi.com",
	key: "36b67989",
};

export const authUsers = [
	{
		id: "1001",
		username: "admin",
		name: "Admin",
		pass: "1234",
	},
	{
		id: "1002",
		username: "david",
		name: "David Tipe",
		pass: "1234",
	},
	{
		id: "1003",
		username: "Marco",
		name: "Marco Tipe Rios",
		pass: "1234",
	},
	{
		id: "1004",
		username: "Ari",
		name: "Arantxa Tipe",
		pass: "1234",
	},
	{
		id: "1004",
		username: "Elizabeth",
		name: "Elizabeth Palomino",
		pass: "1234",
	},
];

const Config = {
	authUsers,
	api,
};

export default Config;
