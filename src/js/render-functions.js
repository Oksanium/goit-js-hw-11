
'use strict';

const gallery = document.querySelector('.gallery');

export function render(picsArr) {
  if (picsArr.length === 0) {
    showRedToast();
    return;
  }
  gallery.innerHTML = picsArr.map(makePic).join('');

  function makePic(obj) {
    return `<li class="card">
                <a href=${obj.largeImageURL}>
                <div class="img-wrapper">
                <img src=${obj.webformatURL} alt=${obj.tags}>
                </div>
                </a>
            <table>
                <tr>
                    <th>Likes</th>
                    <th>Views</th>
                    <th>Comments</th>
                    <th>Downloads</th>
                </tr>
                <tr>
                    <td>${obj.likes}</td>
                    <td>${obj.views}</td>
                    <td>${obj.comments}</td>
                    <td>${obj.downloads}</td>
                </tr>
            </table>
        </li>`;
  }
  lightbox.refresh();
}
