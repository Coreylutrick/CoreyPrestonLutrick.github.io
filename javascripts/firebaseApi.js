let fireBaseConfig = {};

const setConfig = (fbConfig) =>
{
  fireBaseConfig = fbConfig;
};

const getFirebaseConfig = () => {
  return fireBaseConfig;
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

const getAllBlogs = () =>
{
  const firebaseConfig = getFirebaseConfig();
  return new Promise((resolve, reject) =>
  {
    const allBlogsArr = [];
    $.ajax(
      {
        method: 'GET',
        url: `${firebaseConfig.databaseURL}/blogs/blogs.json`,
      })
      .done((allBlogsObject) =>
      {
        if (allBlogsObject !== null)
        {
          Object.keys(allBlogsObject).forEach((fbKey) =>
          {
            allBlogsObject[fbKey].id = fbKey;
            allBlogsArr.push(allBlogsObject[fbKey]);
          });
        }
        resolve(allBlogsArr);
      })
      .fail((err) =>
      {
        reject(err);
      });
  });
};

const getAllWorks = () =>
{
  const firebaseConfig = getFirebaseConfig();
  return new Promise((resolve, reject) =>
  {
    const allWorksArr = [];
    $.ajax(
      {
        method: 'GET',
        url: `${firebaseConfig.databaseURL}/work/works.json`,
      })
      .done((allWorksObject) =>
      {
        if (allWorksObject !== null)
        {
          Object.keys(allWorksObject).forEach((fbKey) =>
          {
            allWorksObject[fbKey].id = fbKey;
            allWorksArr.push(allWorksObject[fbKey]);
          });
        }
        resolve(allWorksArr);
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
  getAllBlogs,
  getAllWorks,
};
