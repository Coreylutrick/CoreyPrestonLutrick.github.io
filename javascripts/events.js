const firebase = require('./firebaseApi');
const dom = require('./dom');

const navHome = () =>
{
  $(document).on('click','#home', (e) =>
  {
    $('.homePage').removeClass('hide');
    $('.aboutMeBox').removeClass('hide');
    $('.blogPage').addClass('hide');
    $('.projectPage').addClass('hide');
    $('.workHistoryPage').addClass('hide');
    $('.contactInfoPage').addClass('hide');
  });
};

const navHome2 = () =>
{
  $(document).on('click','#home2', (e) =>
  {
    $('.homePage').removeClass('hide');
    $('.aboutMeBox').removeClass('hide');
    $('.parallax-container').removeClass('hide');
    $('.blogPage').addClass('hide');
    $('.projectPage').addClass('hide');
    $('.workHistoryPage').addClass('hide');
    $('.contactInfoPage').addClass('hide');
  });
};

const navProjects = () =>
{
  $(document).on('click','#projects', (e) =>
  {
    $('.projectPage').removeClass('hide');
    $('.parallax-container').removeClass('hide');
    $('.blogPage').addClass('hide');
    $('.homePage').addClass('hide');
    $('.workHistoryPage').addClass('hide');
    $('.contactInfoPage').addClass('hide');
    $('.aboutMeBox').addClass('hide');
    getAllProjectsEvent();
  });
};

const navBlogs = () =>
{
  $(document).on('click','#blogs', (e) =>
  {
    $('.blogPage').removeClass('hide');
    $('.parallax-container').removeClass('hide');
    $('.projectPage').addClass('hide');
    $('.homePage').addClass('hide');
    $('.workHistoryPage').addClass('hide');
    $('.contactInfoPage').addClass('hide');
    $('.aboutMeBox').addClass('hide');
    getAllBlogsEvent();
  });
};

const navHistory = () =>
{
  $(document).on('click','#history', (e) =>
  {
    $('.workHistoryPage').removeClass('hide');
    $('.parallax-container').removeClass('hide');
    $('.projectPage').addClass('hide');
    $('.homePage').addClass('hide');
    $('.blogPage').addClass('hide');
    $('.contactInfoPage').addClass('hide');
    $('.aboutMeBox').addClass('hide');
    getAllWorksEvent();
  });
};

const navContact = () =>
{
  $(document).on('click','#contact', (e) =>
  {
    $('.contactInfoPage').removeClass('hide');
    $('.parallax-container').removeClass('hide');
    $('.projectPage').addClass('hide');
    $('.homePage').addClass('hide');
    $('.blogPage').addClass('hide');
    $('.workHistoryPage').addClass('hide');
    $('.aboutMeBox').addClass('hide');
  });
};

const getAllProjectsEvent = () =>
{
  firebase.getAllProjects()
    .then((projectsArr) =>
    {
      dom.domStringBuilder(projectsArr);
    })
    .catch((err) =>
    {
      console.error('damn',err);
    });
};

const getAllBlogsEvent = () =>
{
  firebase.getAllBlogs()
    .then((blogsArr) =>
    {
      dom.domStringBuilder2(blogsArr);
    })
    .catch((err) =>
    {
      console.error('damn',err);
    });
};

const getAllWorksEvent = () =>
{
  firebase.getAllWorks()
    .then((worksArr) =>
    {
      dom.domStringBuilder3(worksArr);
    })
    .catch((err) =>
    {
      console.error('damn',err);
    });
};

const para = () =>
{
  $(document).ready (function () {
    $('.parallax').parallax();
  });
};

const initializer = () =>
{
  navHome();
  navProjects();
  navBlogs();
  navHistory();
  navContact();
  navHome2();
  para();
};

module.exports =
{
  initializer,
};
