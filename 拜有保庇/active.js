var nav_selector = document.querySelectorAll(".btn");
var sections_content = document.querySelectorAll(".sections");
var bottom_nav = document.querySelectorAll(".btn1");

// console.log(list_items);

nav_selector.forEach((btn, index) =>{
    btn.onclick = function(){
        // console.log(btn);
        removeActive();
        btn.classList.add("active");
        sections_content[index].classList.add("active")

        function removeActive(){
            nav_selector.forEach(btn =>{
                btn.classList.remove("active");
            });
            sections_content.forEach(sections =>{
                sections.classList.remove("active");
            });
        }
    }
});
bottom_nav.forEach((btn1, index) =>{
    btn1.onclick = function(){
        // console.log(btn1);
        removeActive();
        btn1.classList.add("active");
        sections_content[index].classList.add("active");

        function removeActive(){
            bottom_nav.forEach(btn1 =>{
                btn1.classList.remove("active");
            });
            sections_content.forEach(sections =>{
                sections.classList.remove("active");
            });
        }
    }
})
