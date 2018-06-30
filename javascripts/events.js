const myLinks = () =>
{
  $(document).click((e) =>
  {
    if (e.target.id === 'home')
    {
      $('.homePage').removeClass('hide');
      $('.blogPage').addClass('hide');
      $('.projectPage').addClass('hide');
      $('.workHistoryPage').addClass('hide');
      $('.contactInfoPage').addClass('hide');
    }
    else if (e.target.id === 'movie')
    {
      $('#myMovies').removeClass('hide');
      $('#search').addClass('hide');
      $('#authScreen').addClass('hide');
      getAllMoviesEvent();
    }
    else if (e.target.id === 'srch')
    {
      $('#search').removeClass('hide');
      $('#myMovies').addClass('hide');
      $('#authScreen').addClass('hide');
    }
  });
};