let contracts = [
    {
      id: 1,
      name: "B1 contract",
      projectId: 1
    },
    {
      id: 2,
      name: "B2 contract",
      projectId: 1
    },
    {
      id: 3,
      name: "B3 contract",
      projectId: 2
    }
  ];

  const getContracts = () => {
    return contracts;
  };

  module.exports = {
    getContracts
  };