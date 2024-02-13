const others = document.querySelector('#others');

let images = '';

IMAGE_LIST.forEach(({img}) => {
    images += `
        <div class="another-img" tabindex="0">
            <img src="${img}" alt="" class="scrollImg">
        </div>
    `;
})

others.innerHTML = images;