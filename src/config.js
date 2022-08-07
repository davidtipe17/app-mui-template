
export const api = {
    url: "https://www.omdbapi.com",
    key: "36b67989",
};

export const authUsers = [
    {
        id: "1001",
        username: "david",
        name: "Admin",
        pass: "1234",
    },
    {
        id: "1002",
        username: "arantxa",
        name: "Arantxa T . P",
        pass: "1234",
    },
    {
        id: "1003",
        username: "elizabethymarco",
        name: "esposos",
        pass: "1234",
    },
];

const Config = {
    authUsers,
    api,
};

export default Config;
