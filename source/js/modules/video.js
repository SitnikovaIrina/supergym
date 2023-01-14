window.addEventListener('DOMContentLoaded', () => {

  const video = document.querySelector('.video');

  function setupVideo() {
    let link = video.querySelector('.video__link');
    let button = video.querySelector('.video__button');

    video.addEventListener('click', () => {
      let iframe = createIframe();

      link.remove();
      button.remove();
      video.appendChild(iframe);
    });

    link.removeAttribute('href');
    video.classList.add('video--enabled');
  }

  function createIframe() {
    let iframe = document.createElement('iframe');
    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('allow', 'autoplay');
    iframe.setAttribute('src', 'https://www.youtube.com/embed/9TZXsZItgdw');

    iframe.classList.add('video__media');

    return iframe;
  }

  setupVideo();
});
