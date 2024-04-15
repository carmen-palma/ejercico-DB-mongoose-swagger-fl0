const components = {
    schemas: {
      Error: {
        type: 'object',
        properties: {
          message: {
            type: 'string',
            description: 'Mensaje de error',
          },
        },
      },
    },
  };
  
  module.exports = components;