let html = document.querySelector('html');
    html.setAttribute('lang', 'en');

let metaUTF8 = document.createElement('meta');
    metaUTF8.setAttribute('charset', 'UTF-8');

let title = document.createElement('title');
    title.innerHTML = 'HomeWork#8';

let head = document.head;

    head.insertBefore(title, document.querySelector('script'));
    head.insertBefore(metaUTF8, title);

let style = document.createElement('style');
    head.appendChild(style);
    
let h2 = document.createElement('h2'),
    p = document.createElement('p'),
    body = document.body;

    h2.innerHTML = 'Choose Your Option';
    p.innerHTML = 'But i must explain to you how all this mistaken idea of denouncing';

    body.appendChild(h2);
    body.appendChild(p);
    
let divBox = document.createElement('div'),
    div1 = document.createElement('div'),
    div2 = document.createElement('div'),
    div11 = document.createElement('div'),
    div21= document.createElement('div');

    body.appendChild(divBox);
    divBox.appendChild(div1);
    divBox.appendChild(div2);
    div1.appendChild(div11);
    div2.appendChild(div21);

let h41 = document.createElement('h4'),
    h42 = document.createElement('h4'), 
    h11 = document.createElement('h1');

    h41.innerHTML = 'FREELANCER';
    h42.innerHTML = 'STUDIO';
    h11.innerHTML = 'Initially designed to';
    div11.innerHTML = 'START HERE';
    div21.innerHTML = 'START HERE';

let p1 = p.cloneNode(true),
    p2 = p.cloneNode(true),
    h12 = h11.cloneNode(true);

    div1.insertBefore(h41, div11);
    div1.insertBefore(h11, div11);
    div1.insertBefore(p1, div11);
    div2.insertBefore(h42, div21);
    div2.insertBefore(h12, div21);
    div2.insertBefore(p2, div21);

    divBox.classList.add('container');
    div1.classList.add('box');
    div2.classList.add('box');
    div1.classList.add('r1');
    div2.classList.add('r2');
    div11.classList.add('box_11');
    div21.classList.add('box_11');


    style.innerHTML = `

        body {
            text-align: center;
            padding-top: 50px;
            color: rgba(33, 33, 33, 1);
        }

        .container {
            width: 80%;
            height: 80%;
            margin: 40px auto;
            display: flex;
            justify-content: center;
        }   
        
        h2 {
            font-family: Candara;
            font-style: normal;
            font-weight: 400;
            font-size: 36px;
            margin: 0;
        }

        h4 {
            font-family: Arial;
            font-style: normal;
            font-weight: bold;
            font-size: 12px;
            line-height: 15px;
            letter-spacing: 2.4px;
        }

        h1 {
            font-family: Candara;
            font-style: normal;
            font-weight: 400;
            font-size: 36px;
            margin: 0;
        }

        p {
            font-family: Sans-serif;
            font-style: normal;
            font-size: 14px;
            color: #9FA3A7;
        }

        .box {
            width: 240px;
            height: 320px;
            padding: 80px;
            border: 1px solid #E8E9ED;
            border-radius: 5px 0 0 5px;
            background-color: white;
        }

        .r1 {
            border-radius: 5px 0 0 5px;
        }

        .r2 {
            border-radius: 0 5px 5px 0;
        }

        .box h4 {
            color: #9FA3A7;
        }

        .box h1 {
            color: rgba(33, 33, 33, 1);
        }

        .box p {
            font-size: 12px;
            margin-top: 30px;
            line-height: 20px;
            color: #9FA3A7;
        }

        .box_11 {
            width: 147px;
            height: 28px;
            background-color: white;
            border: 3px solid #FFC80A;
            color: rgba(33, 33, 33, 1);
            border-radius: 26px;
            font-family: Arial;
            font-style: normal;
            font-weight: bold;
            font-size: 12px;
            line-height: 15px;
            letter-spacing: 2.4px;
            padding-top: 17px;
            margin: 60px auto auto auto;

        }

        .box:hover {
            border: 1px solid rgba(143, 117, 190, 1);
            background-color: rgba(143, 117, 190, 1);
        }

        .box:hover .box_11 {
            background-color: rgba(143, 117, 190, 1);
            color: white;
        }

        .box:hover h4 {
            color: #FFC80A;
        }

        .box:hover h1 {
            color: white;
        }

        .box:hover p {
            color: white;
        }
       
        `;
