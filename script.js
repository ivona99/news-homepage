let images = document.querySelectorAll('.btn img');
images.forEach((img) => {
    img.addEventListener("click", () => {
        let links = document.querySelector('.links');
        let close = document.querySelector('.close');
        let icon = document.querySelector('.icon');
       let container = document.querySelector('.container');
        if(img.className === "icon" ){
            icon.style.display = 'none';
            links.style.display = 'block';
            close.style.display = 'block';
            container.style.backgroundColor = 'rgba(0,0,0,0.4)';
        }else if(img.className === 'close'){
            links.style.display = 'none';
            close.style.display = 'none';
            icon.style.display = 'block';
            container.style.backgroundColor = 'transparent';
        }
    });
});