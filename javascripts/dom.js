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

const printToDom = (myString, myElement) => {
  $(`#${myElement}`).html(myString);
};

module.exports =
{
  domStringBuilder,
};
