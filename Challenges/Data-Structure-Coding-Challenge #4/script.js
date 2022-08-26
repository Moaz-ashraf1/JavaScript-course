var defangIPaddr = function (address) {
  const defaningAdress = address.replaceAll(".", "[.]");
  return `"${defaningAdress}"`;
};

defangIPaddr("1.1.1.1");
