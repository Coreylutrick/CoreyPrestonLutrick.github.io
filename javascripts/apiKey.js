const init = require('./events');
const firebaseApi = require('./firebaseApi');

const apiKeys = () =>
{
  return new Promise((resolve, reject) =>
  {
    $.ajax('./db/apiKeys.json')
      .done((data) =>
      {
        resolve(data);
      })
      .fail((err) =>
      {
        reject(err);
      });
  });
};

const retrieveKeys = () =>
{
  apiKeys()
    .then((result) =>
    {
      firebaseApi.setConfig(result.firebase);
      firebase.initializeApp(result.firebase);
      init.initializer();
    }).catch((err) =>
    {
      console.error('No keys', err);
    });
};

module.exports =
{
  retrieveKeys,
};
