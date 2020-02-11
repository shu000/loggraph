const { DB } = require('./db');
const sanitize = require('mongo-sanitize');

const Templates = {
  getCustomers: async () => {
    try {
      const result = await DB.find({}, { customerName: 1 });

      return JSON.stringify({
        result: result.map(obj => {
          return obj.customerName
        })
      });
    } catch (error) {
      return returnError(error);
    }
  },
  getTemplate: async customerName => {
    try {
      const result = await DB.find({ customerName: sanitize(customerName) }, {});

      if (result.length === 0) {
        return JSON.stringify({ result: {} });
      }

      return JSON.stringify({
        result: result[0] // customerName is primaryKey
      });
    } catch (error) {
      return returnError(error);
    }
  },
  /**
   * Overwrite `styles` property in a record.
   * @param  {String}  customerName record.customeName
   * @param  {Array}   styles       Overwrite record.styles by this.
   * @return {Promise}              [description]
   */
  updateTemplate: async (customerName, styles) => {
    const sanitizedStyles = styles.map(obj => {
      Object.keys(obj).map(key => { obj[key] = sanitize(obj[key]) });
      return obj;
    });

    try {
      const result = await DB.update(
        { customerName: sanitize(customerName) },
        { styles: sanitizedStyles }
      );

      return JSON.stringify({
        result: result
      });
    } catch (error) {
      return returnError(error);
    }
  },
  /**
   * Delete a record
   * @param  {[type]}  customerName removing record's customerName
   * @return {Promise}              [description]
   */
  deleteCustomer: async customerName => {
    try {
      const result = await DB.delete(
        { customerName: sanitize(customerName) }
      );

      return JSON.stringify({
        result: result
      });
    } catch (error) {
      return returnError(error);
    }
  },
  /**
   * Add a record, like following
   *   {
   *     customerName: request.body,
   *     styles: []
   *   }
   * @param  {String}  customerName record.customerName
   * @param  {Array}   styles       Overwrite record.styles by this.
   * @return {Promise}              [description]
   */
  addCustomer: async (customerName) => {
    try {
      const result = await DB.insert({
        customerName: sanitize(customerName),
        styles: []
      });

      return JSON.stringify({
        result: result
      });
    } catch (error) {
      return returnError(error);
    }
  }
}

function returnError(error) {
  console.log(error.stack);
  return JSON.stringify({
    error: 'Failed to connect Database.',
    message: error.message
  });
}

module.exports.Templates = Templates;
