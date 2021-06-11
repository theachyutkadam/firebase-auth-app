const guideList = document.querySelector('.guides');
const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');

const setupUI = (user) => {
  if (user){
    // toggle UI elements
    loggedInLinks.forEach(item => item.style.display = 'block');
    loggedOutLinks.forEach(item => item.style.display = 'none');
  }else{
    // toggle UI elements
    loggedInLinks.forEach(item => item.style.display = 'none');
    loggedOutLinks.forEach(item => item.style.display = 'block');
  }
}

// collect guidelist
const setupGuides = (data) => {
  if (data.length) {
    let html = '';
    data.forEach(doc => {
      const guide = doc.data();
      const li = `
        <li>
          <div class="collapsible-header grey lighten-4"> ${guide.title} </div>
          <div class="collapsible-body white"> ${guide.content} </div>
        </li>
      `;
      html += li;
    });
    guideList.innerHTML = html;
  }else{
    guideList.innerHTML = '<h5 class="center align">Login to view guides</h5>'
  }
}

// create guides
// const guideData = document.querySelector('#create-form');
// guideData.addEventListener('create', (e) => {
//   e.preventDefault();

//   alert("hello")
//   const title = guideData['title'].value
//   const content = guideData['content'].value
//   console.log(title)
//   console.log(content)
  // db.collection('guides').add({
  //   title = guideData.title.value,
  //   content = guideData.content.value
  // });
  // guideData.title.value = '';
  // guideData.content.value = '';
  //get guide info
  // const title = guideData['title'].value
  // const content = guideData['content'].value
// });


// setup materialize components
document.addEventListener('DOMContentLoaded', function() {
  var modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);
  var items = document.querySelectorAll('.collapsible');
  M.Collapsible.init(items);
});