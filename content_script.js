var element;
while(element = document.querySelector('source[type="image/webp"]')){
    element.parentElement.removeChild(element);
}