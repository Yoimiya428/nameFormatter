const nameInverter = function(name) {
  if (name === undefined) {
    throw 'Error';
  }
  const name = name.trim()

  if (name.length === 0 || (name.length === 1 && name[0].endsWith('.'))) {
    return '';
  }

  if (name.length === 2 && name[0].endsWith('.')) {
    return `${name[0]} ${name[1]}`;
  }

  if (name.length === 3 && name[0].endsWith('.')) {
    return `${name[0]} ${name[2]}, ${name[1]}`;
  }

  if (name.length === 2) {
    return `${name[1]}, ${name[0]}`;
  }


  
  return name[0];
};

module.exports = nameInverter;
