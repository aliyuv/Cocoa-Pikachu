const string = `
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
*::after,*::before{box-sizing: border-box}

#pikachu{
    position: absolute;
    left: 50%;
    top: 50%;
    width: 4em;
    height: 4em;
    transform: translateX(-50%) translateY(-50%);
}
.eye{
    width: .8em;
    height: .8em;
    background-color:#2e2e2e;
    border: 0.02em solid #000;
    border-radius: 50%;

}

.eye.left,
.eye.right{
    position: absolute;
    top: 1.2em;
}
.eye.left:before,
.eye.right:before{
    content: "";
    width: .35em;
    height: .35em;
    display: block;
    background-color: #fff;
    border-radius: 50%;
    position: absolute;
    top: 0.02em;
    left: 0.1em;

}
.eye.left{
    left:0;
}
.eye.right{
    right: 0;
}
.nose{
    position: absolute;
    top: 1.5em;
    margin: 0.38em calc(50% - 0.11em) 0.3em;
    width: 0;
    height: 0;
    z-index: 1;
    border-top: 0.09em solid black;
    border-left: 0.11em solid transparent;
    border-right: 0.11em solid transparent;
    box-shadow: 0 -0.01em 0 black;

}
.nose:before {
    content: '';
    display: block;
    position: absolute;
    width: .22em;
    height: .05em;
    background: black;
    border-top-left-radius: .11em .05em;
    border-top-right-radius: .11em .05em;
    margin-top: -.14em;
    margin-left: -.11em;
    transform-origin: center;
}
.nose:hover{
    animation:nose .23s infinite linear;
}
@keyframes nose {
    0%{transform: rotate(0deg)}
    33%{transform: rotate(-5deg)}
    67%{transform: rotate(5deg)}
    100%{transform: rotate(0deg)}
}
.mouth {
    position: absolute;
    width: 2.28em;
    height: 1.8em;
    margin-top: 2.2em;
    margin-left: calc(50% - 1.18em);
    overflow: hidden;
}
.mouth:after {
    content: '';
    display: block;
    position: absolute;
    width: .8em;
    height: .25em;
    background: #FFE600;
    border: .03em solid black;
    border-top: none;
    border-left: none;
    right: .31em;
    top: -.05em;
    transform:rotate(25deg);
    border-bottom-right-radius: .6em .3em;
    box-shadow: 0 -.1em 0 #FFE600, -.05em -.03em 0 #FFE600;
}
.mouth:before {
    content: '';
    display: block;
    position: absolute;
    width: .8em;
    height: .25em;
    background: #FFE600;
    border: .03em solid black;
    border-top: none;
    border-right: none;
    left: .35em;
    top: -.05em;
    transform:rotate(-25deg);
    border-bottom-left-radius: .6em .3em;
    box-shadow: 0 -.1em 0 #FFE600, .05em -.03em 0 #FFE600;
    z-index: 1;
}
.mouth > div {
    position: absolute;
    background: #FF485F;
    width: 2.28em;
    height: 8em;
    border: .04em solid black;
    border-bottom-left-radius: 1.18em 8em;
    border-bottom-right-radius: 1.18em 8em;
    margin-top: -6.37em;
    overflow: hidden;
}
.mouth > div:after {
    content: '';
    position: absolute;
    display: block;
    width: 1.3em;
    height: 1em;
    box-shadow: 0 -.7em 0 #9B000A;
    bottom: .35em;
    margin-left: .475em;
    border-top-left-radius: 100%;
    border-top-right-radius: 100%;
}


.face{
    width: .82em;
    height: .82em;
    border: 3px solid #000;
    position: absolute;
    border-radius: 50%;
    margin-top: 0.5em;
    background-color: #F00;
}

.face.left{
    left: 0;
    top: 50%;
    margin-left: -0.30em;

}

.face.right{
    right: 0;
    top: 50%;
    margin-right: -0.30em;
}`

export  default string;