var btn1 = document.getElementById("image1");
        console.log(btn1);
        var first_img = "./img/箭頭-展開.png";
        console.log(first_img);
        var second_img = "./img/箭頭-收起.png";
        console.log(second_img);
        var hit = 0;
        function changeImage1() {            
            hit = hit + 1;
            if (hit === 1) {
                btn1.setAttribute("src", second_img);
            }
            else{
                hit = 0;
                btn1.setAttribute("src", first_img);
            }
            
        }
        var btn2 = document.getElementById("image2");
        console.log(btn2);
        function changeImage2() {            
            hit = hit + 1;
            if (hit === 1) {
                btn2.setAttribute("src", second_img);
            }
            else{
                hit = 0;
                btn2.setAttribute("src", first_img);
            }
        }
        var btn3 = document.getElementById("image3");
        console.log(btn3);
        function changeImage3() {            
            hit = hit + 1;
            if (hit === 1) {
                btn3.setAttribute("src", second_img);
            }
            else{
                hit = 0;
                btn3.setAttribute("src", first_img);
            }
        }
        var btn4 = document.getElementById("image4");
        console.log(btn4);
        function changeImage4() {            
            hit = hit + 1;
            if (hit === 1) {
                btn4.setAttribute("src", second_img);
            }
            else{
                hit = 0;
                btn4.setAttribute("src", first_img);
            }
        }