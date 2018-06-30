let fireBaseConfig = {};

const setConfig = (fbConfig) =>
{
  fireBaseConfig = fbConfig;
};

const getFirebaseConfig = () => {
  return fireBaseConfig;
};

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
      setConfig(result.firebase);
      firebase.initializeApp(result.firebase);
    }).catch((err) =>
    {
      console.error('No keys', err);
    });
};

const getAllProjects = () =>
{
  const firebaseConfig = getFirebaseConfig();
  return new Promise((resolve, reject) =>
  {
    const allProjectsArr = [];
    $.ajax(
      {
        method: 'GET',
        url: `${firebaseConfig.databaseURL}/projects.json`,
      })
      .done((allProjectsObject) =>
      {
        if (allProjectsObject !== null)
        {
          Object.keys(allProjectsObject).forEach((fbKey) =>
          {
            allProjectsObject[fbKey].id = fbKey;
            allProjectsArr.push(allProjectsObject[fbKey]);
          });
        }
        resolve(allProjectsArr);
      })
      .fail((err) =>
      {
        reject(err);
      });
  });
};

module.exports =
{
  getAllProjects,
  getFirebaseConfig,
  setConfig,
  retrieveKeys,
};
