/*-----------sticky navbar-----------------*/
window.onscroll =() => {
    let header = documnet. querySelector ('.header');

    header.classlist.toggle('sticky', window. scrolly > 100);
    
}