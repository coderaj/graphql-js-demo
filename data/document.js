let documents = [
    {
      id: 1,
      name: "D1 document",
      projectId: 1,
      documentType: "Contract",
      contractId: 1
    },
    {
      id: 2,
      name: "New drawings",
      projectId: 1,
      documentType: "Image",
      contractId: 2
    },
    {
      id: 3,
      name: "Invoice ready for payments",
      projectId: 1,
      documentType: "File",
    }
  ];

  const getDocuments = () => {
    return documents;
  };

  module.exports = {
    getDocuments
  };