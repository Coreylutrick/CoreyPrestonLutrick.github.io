const navHome = () =>
{
  $(document).on('click','#home', (e) =>
  {
    $('.homePage').removeClass('hide');
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
    $('.blogPage').addClass('hide');
    $('.homePage').addClass('hide');
    $('.workHistoryPage').addClass('hide');
    $('.contactInfoPage').addClass('hide');
  });
};

const navBlogs = () =>
{
  $(document).on('click','#blogs', (e) =>
  {
    $('.blogPage').removeClass('hide');
    $('.projectPage').addClass('hide');
    $('.homePage').addClass('hide');
    $('.workHistoryPage').addClass('hide');
    $('.contactInfoPage').addClass('hide');
  });
};

const navHistory = () =>
{
  $(document).on('click','#history', (e) =>
  {
    $('.workHistoryPage').removeClass('hide');
    $('.projectPage').addClass('hide');
    $('.homePage').addClass('hide');
    $('.blogPage').addClass('hide');
    $('.contactInfoPage').addClass('hide');
  });
};

const navContact = () =>
{
  $(document).on('click','#contact', (e) =>
  {
    $('.contactInfoPage').removeClass('hide');
    $('.projectPage').addClass('hide');
    $('.homePage').addClass('hide');
    $('.blogPage').addClass('hide');
    $('.workHistoryPage').addClass('hide');
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
};

module.exports =
{
  initializer,
};
