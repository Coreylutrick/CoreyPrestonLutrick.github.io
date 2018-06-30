const domStringBuilder = (projectArr) =>
{
  let domString = '';
  projectArr.forEach(project =>
  {
    domString += `<div class="card">`;
    domString += `<div class="card-image waves-effect waves-block waves-light">`;
    domString +=    `<img class="activator shrink" src="${project.imageUrl}">`;
    domString += `</div>`;
    domString += `<div class="card-content">`;
    domString +=    `<span class="card-title activator grey-text text-darken-4">${project.summary}</span>`;
    domString += `  <p><a href="#">${project.githubUrl}</a></p>`;
    domString += `</div>`;
    domString += `<div class="card-reveal">`;
    domString +=    `<span class="card-title grey-text text-darken-4"><i class="material-icons right">close</i><br/>${project.title}</span>`;
    domString +=    `<p>${project.description}</p>`;
    domString += `</div>`;
    domString += `</div>`;
  });
  printToDom(domString, 'projectHolder');
};

const domStringBuilder2 = (blogArr) =>
{
  let domString = '';
  blogArr.forEach(blog =>
  {
    domString += `<div class="row">`;
    domString += `<div>`;
    domString += `  <div class="card blogCard">`;
    domString += `    <div class="card-content white-text">`;
    domString += `      <span class="card-title"><h5>${blog.title}</h5></span>`;
    domString += `      <p>${blog.info}</p>`;
    domString += `    </div>`;
    domString += `  </div>`;
    domString += `</div>`;
    domString += `</div>`;
  });
  printToDom(domString, 'blogHolder');
};

const domStringBuilder3 = (workArr) =>
{
  let domString = '';
  workArr.forEach(work =>
  {
    domString += `<div class="row">`;
    domString += `<div>`;
    domString += `  <div class="card workCard">`;
    domString += `    <div class="card-content white-text">`;
    domString += `      <span class="card-title"><h5>${work.title}</h5></span>`;
    domString += `      <p>${work.info}</p>`;
    domString += `    </div>`;
    domString += `  </div>`;
    domString += `</div>`;
    domString += `</div>`;
  });
  printToDom(domString, 'workHolder');
};

const printToDom = (myString, myElement) => {
  $(`#${myElement}`).html(myString);
};

module.exports =
{
  domStringBuilder,
  domStringBuilder2,
  domStringBuilder3,
};
