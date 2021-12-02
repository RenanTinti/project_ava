const array_list = document.querySelectorAll('li');
const video_title = document.querySelector('.video-title');
const video = document.querySelector('iframe');

for (let i = 0; i < array_list.length; i++) {
  const el = array_list[i];
  el.onclick = () => {
    for (let j = 0; j < array_list.length; j++) {
      const color = array_list[j] == el ? '#333' : 'white';
      array_list[j].style.color = color;
      const bColor = array_list[j] == el ? 'white' : '#333';
      array_list[j].style.backgroundColor = bColor;
      video_title.innerHTML = el.textContent;
      video.setAttribute('src', el.id);
    }
  }
}