import AutoIncrementFactory from 'mongoose-sequence';

const setAutoIncrementId = (schema, mongoose, name, inc_field) => {
  const AutoIncrement = AutoIncrementFactory(mongoose);
  const option = { id: `${name}${inc_field}`, inc_field};
  schema.plugin(AutoIncrement, option);
};

export {setAutoIncrementId};