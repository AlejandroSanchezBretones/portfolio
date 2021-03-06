body{
    font-style: "Musee";
    background-color:black;
    color: white;
}
/*.header{
    padding-top: 32px;
    padding-bottom: 32px;
    justify-content: space-arround;
    display: flex;
    justify-content: space-around;
   background-color: #0e0e0e;
   /*
        -webkit-box-shadow: 3px 3px 5px 6px rgb(255, 255, 255, 0.25);   Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ 
        -moz-box-shadow:    3px 3px 5px 6px rgb(255, 255, 255, 0.25);   Firefox 3.5 - 3.6 
        box-shadow:         3px 3px 5px 6px rgb(255, 255, 255, 0.25);   Opera 10.5, IE 9, Firefox 4+, Chrome 6+, iOS 5 
        box-shadow: [horizontal offset] [vertical offset] [blur radius] [optional spread radius] [color];
} */
/* _______________________________________________________ */

body{margin:0;padding:0;}
.hamburger{
	position:fixed;
  background-color:transparent;
	left:0;
	top:0;
	height:30px;
	width:30px;
	padding:20px 20px;
	-webkit-transform:translate3d(0, 0, 0);
	transform:translate3d(0, 0, 0);
	-webkit-transition:-webkit-transform 0.25s cubic-bezier(0.05, 1.04, 0.72, 0.98);
	transition:transform 0.25s cubic-bezier(0.05, 1.04, 0.72, 0.98);
	z-index:1002;
	cursor:pointer;
	-webkit-user-select:none;
	-moz-user-select:none;
	-ms-user-select:none;
	user-select:none
}
.hamburger.is-active{
  background-color:none;
}
._layer{
	background:#333333;
	margin-bottom:4px;
	border-radius:2px;
	width:28px;
	height:4px;
	opacity:1;
	-webkit-transform:translate3d(0, 0, 0);
	transform:translate3d(0, 0, 0);
	-webkit-transition:all 0.25s cubic-bezier(0.05, 1.04, 0.72, 0.98);
	transition:all 0.25s cubic-bezier(0.05, 1.04, 0.72, 0.98);
}
.hamburger:hover .-top{
	-webkit-transform:translateY(-100%);
	-ms-transform:translateY(-100%);
	transform:translateY(-100%);
}
.hamburger:hover .-bottom{
	-webkit-transform:translateY(100%);
	-ms-transform:translateY(100%);
	transform:translateY(100%);
	}
.hamburger.is-active .-top{
	-webkit-transform:translateY(200%) rotate(45deg) !important;
	-ms-transform:translateY(200%) rotate(45deg) !important;
	transform:translateY(200%) rotate(45deg) !important;
}
.hamburger.is-active .-mid{
	opacity:0;
}
.hamburger.is-active .-bottom{
	-webkit-transform:translateY(-200%) rotate(135deg) !important;
	-ms-transform:translateY(-200%) rotate(135deg) !important;
	transform:translateY(-200%) rotate(135deg) !important;
}

.menuppal.is_active{
  transform: translate3d(0px, 0px, 0px);
}
.menuppal{
   background-color: rgba(255, 255, 255, 0.95);
    bottom: 0;
    height: 100%;
    left: 0;
    overflow-y: scroll;
    position: fixed;
    top: 0;
    transform: translate3d(0px, -100%, 0px);
    transition: transform 0.35s cubic-bezier(0.05, 1.04, 0.72, 0.98) 0s;
    width: 100%;
    z-index: 1001;
}
.menuppal ul{
  margin:0;padding:0;
}
.menuppal ul li { 
  list-style: none;
	text-align:center;
	font-family: Verdadna, Arial, Helvetica;
	color:$nav-color-text;
	font-size:1.5rem;
	line-height:3em;
	height:3em;
  color:#369;
	text-transform:none;
	font-weight:bold;
}
.menuppal ul li a{
  text-decoration:none;
  color:#ffffff;
}
.menuppal ul li a:hover{
  text-decoration:none;
  color:#333;
}
/* _______________________________________________________ */


.margen{
    padding-bottom: 4%;
}
h2{
    text-decoration: none;
    font-size: 1.9vw;
    color: #ffffff;
    max-width: 20vw;
    line-height: 120%
}
h3{

    text-decoration: none;
    font-size: 1.5vw;
    color: #ffffff;
    max-width: 20vw;
    padding-bottom: 6%;
}
h4{
    text-decoration: none;
    font-size: 1.5vw;
    color: #ffffff;
    text-decoration: underline;

}
.link:hover{
    text-shadow:
    0 0 5px blueviolet,
    0 0 10px blueviolet,
    0 0 20px blueviolet,
    0 0 40px rgba(38,104,127,1),
    0 0 80px rgba(38,104,127,1),
    0 0 90px rgba(38,104,127,1),
    0 0 100px rgba(38,104,127,1),
    0 0 140px rgba(38,104,127,1),
    0 0 180px rgba(38,104,127,1);
}
.back{

        padding-top: 20px;
        padding-bottom: 20px;
        justify-content: space-arround;
        display: flex;
        justify-content: flex-start;
        background-color: #0e0e0e;
        margin-left: 32px;
}
nav{
    font-size: 2vw;
    color: #ffffff;
}  
a{
    text-decoration: none;
    font-size: 2vw;
    color: #ffffff;
}
h1{
    text-decoration: none;
    font-size: 2vw;
    color: #ffffff;
}
.seleccionado{
    color: rgb(139, 102, 129);
        text-shadow:
            0 0 5px blueviolet,
            0 0 10px blueviolet,
            0 0 20px blueviolet,
            0 0 40px rgba(38,104,127,1),
            0 0 80px rgba(38,104,127,1),
            0 0 90px rgba(38,104,127,1),
            0 0 100px rgba(38,104,127,1),
            0 0 140px rgba(38,104,127,1),
            0 0 180px rgba(38,104,127,1);
    }
.container{
    position: relative;
    margin-top: 40px;
    margin-left: 10%;
    margin-right: 10%;
    align-items: center;
    filter: grayscale(100%);
}
.container-2{
    position: relative;
    margin-top: 40px;
    margin-left: 10%;
    margin-right: 10%;
    align-items: center;
    filter: grayscale(100%);
}
.container-2:hover{
    filter: grayscale(50%)
}
.caja-texto{
    position: absolute;
    top: 15%;
    padding-top: 1.5%;
    padding-bottom: 1.3%;
    padding-left: 3%;
    padding-right: 4%;
    color: #ffffff;
    background-color: #0e0e0e;
    border-radius: 5px;
    opacity: 0.9;
    transition: opacity 0.3s ease-in-out;
    box-shadow: 0px 5px 40px rgb(255, 255, 255, 0.1);
}

.parpadeo{
    position: absolute;
    top: 15%;
    padding-top: 3%;
    padding-bottom: 4%;
    padding-left: 3%;
    padding-right: 4%;
    color: #ffffff;
    background-color: #000000;
    border-radius: 5px;
    opacity: 0.9;
    transition: opacity 1s ease;
    box-shadow: 0px 5px 40px rgb(255, 255, 255, 0.1);
}

  
  @-moz-keyframes parpadeo{  
    0% { box-shadow: 0px 5px 20px rgb(138, 43, 226, 0.1); }
    20% { box-shadow: 0px 5px 40px rgb(138, 43, 226, 0.3); }
    100% { box-shadow: 0px 5px 20px rgb(138, 43, 226, 0.1); }
  }
  
  @-webkit-keyframes parpadeo {  
    0% { box-shadow: 0px 5px 20px rgb(138, 43, 226, 0.1); }
    20% { box-shadow: 0px 5px 40px rgb(138, 43, 226, 0.3); }
    100% { box-shadow: 0px 5px 20px rgb(138, 43, 226, 0.1); }
    /* Parpadeo*/
  }
  
  @keyframes parpadeo {  
    0% { box-shadow: 0px 5px 20px rgb(138, 43, 226, 0.1); }
    20% { box-shadow: 0px 5px 40px rgb(138, 43, 226, 0.3); }
    100% { box-shadow: 0px 5px 20px rgb(138, 43, 226, 0.1); }
    /* Parpadeo*/

}


@media only screen and (max-width:414px){
        /* estilos de movil */

    nav{
        display:none;
        font-size: 16px;
        color: #ffffff;
    }
    .anvorguesa{
        padding-top: 8px;
        padding-bottom: 8px;
        justify-content: flex-end;
        display: flex;
       background-color: #0e0e0e;
    }
    .margen-anvorguesa{
        padding-right: 20px;    
    }
    a{
        text-decoration: none;
        font-size: 20px;
        color: #ffffff;
    }
    h2{
        text-decoration: none;
        font-size: 17px;
        color: #ffffff;
        max-width: none;

    }
    h3{
        text-decoration: none;
        font-size: 14px;
        color: #ffffff; 
        max-width: none;

    }
    h4{
        text-decoration: none;
        font-size: 14px;
        color: #ffffff;
        text-decoration: underline;
    
    }
    .visible{
    display:none
    }
    .header{
        padding-top: 32px;
        padding-bottom: 32px;
        display: flex;
        justify-content: flex-end;
       background-color: #0e0e0e;
    }
    .container{
        margin-top: 10px;
        margin-left: 0px;
        margin-right: 0px;
        align-items: center;
        filter: grayscale(50%);


    }
    .container-2{
        position: relative;
        margin-top: 40px;
        margin-left: 0%;
        margin-right: 0%;
        align-items: center;
        filter: grayscale(50%);
    }
    .caja-texto{
        position: relative;
        top: 0px;
        padding-top: 16px;
        padding-bottom: 40px;
        padding-left: 20px;
        padding-right: 20px;
        color: #ffffff;
        background-color: transparent;
        border-radius: none;
        opacity: 1;
        transition: none;
        box-shadow: none;

    }
    .left{
        left: 0px;
    }
    .right{
        left:0px;
    }
    .responsive{
        width: 100%;
        height: auto;
        filter: grayscale(100%);
    }
 }
 @media only screen and (min-width:415px) and (max-width: 768px){
        /* estilos de tablet */

        nav{
            display:none;
            font-size: 16px;
            color: #ffffff;
        }
        .anvorguesa{
            padding-top: 8px;
            padding-bottom: 8px;
            justify-content: flex-end;
            display: flex;
           background-color: #0e0e0e;
        }
        .margen-anvorguesa{
            padding-right: 20px;    
        }
        a{
            text-decoration: none;
            font-size: 24px;
            color: #ffffff;
        }
        h2{
            text-decoration: none;
            font-size: 22px;
            color: #ffffff;
            max-width: none;

        }
        h3{
            text-decoration: none;
            font-size: 20px;
            color: #ffffff; 
            max-width: none;

    
        }
        h4{
            font-size: 16px;
        }
        .visible{
            display:none
            }
        .header{
            padding-top: 32px;
            padding-bottom: 32px;
            display: flex;
            justify-content: flex-end;
           background-color: #0e0e0e;
        }
        .container{
            margin-top: 10px;
            margin-left: 0px;
            margin-right: 0px;
            align-items: center;
            filter: grayscale(50%);

    
        }
        .container-2{
            position: relative;
            margin-top: 10px;
            margin-left: 0%;
            margin-right: 0%;
            align-items: center;
            filter: grayscale(50%);
        }
        .caja-texto{
            position: relative;
            top: 0px;
            padding-top: 16px;
            padding-bottom: 40px;
            padding-left: 20px;
            padding-right: 20px;
            color: #ffffff;
            background-color: transparent;
            border-radius: none;
            opacity: 1;
            transition: none;
            box-shadow: none;
    
        }
        .left{
            left: 0px;
        }
        .right{
            left:0px;
        }
        .caja-texto:hover{
            color: white;
    
          }
        .responsive{
            width: 100%;
            height: auto;
            filter: grayscale(100%);
        }
    }
 @media only screen and (min-width:769px) and (max-width: 1024px){
         /* estilos de tablet */


    .anvorguesa{
        display: none;
    }


    .header{
        
        padding-top: 16px;
        padding-bottom: 16px;
        display: flex;
        width: 100vw;

        justify-content: space-around;
        background-color: #000000;
        opacity: 0.95;
        box-shadow: 0px 5px 20px rgb(0,0,0);  
    }
    .fijo{
        position: fixed;
        z-index: 100;
        width: 100vw;
        top:0px;
    }

    h2{
        text-decoration: none;
        font-size: 22px;
        color: #ffffff;
        max-width: none;

    }
    h3{
        text-decoration: none;
        font-size: 20px;
        color: #ffffff; 
        max-width: none;


    }
    h4{
        font-size: 16px;
    }


    .left{
        left: 10%;
    }
    .right{
        right:10%;
        align-items: center;
    }
    .ver-mas{
        justify-content: flex-end;    }
    .responsive{
        position: relative;
        width: 100%;
        height: auto;
   
    }
    .container:hover{
        filter: grayscale(30%)
    }
    .caja-texto:hover{
        opacity: 0.97;
    
        /* Parpadeo*/
        animation-name: parpadeo;
        animation-duration: 3s;
        animation-timing-function: ease;
        animation-iteration-count: infinite;
      
        -webkit-animation-name:parpadeo;
        -webkit-animation-duration: 3s;
        -webkit-animation-timing-function: ease;
        -webkit-animation-iteration-count: infinite;
      }

 }
 @media only screen and (min-width:1025px) and (max-width: 1440px){
         /* estilos de ipad pro y ordenador */

    .anvorguesa{
        display: none;
    }



    .header{
        
        padding-top: 16px;
        padding-bottom: 16px;
        display: flex;
        width: 100vw;

        justify-content: space-around;
        background-color: #000000;
        opacity: 0.95;
        box-shadow: 0px 5px 20px rgb(0,0,0);  
    }
    .fijo{
        position: fixed;
        z-index: 100;
        width: 100vw;
        top:0px;
    }

    .left{
        left: 10%;
    }
    .right{
        right:10%;
        align-items: center;
    }
    .responsive{
        position: relative;
        width: 100%;
        height: auto;

    }
    .container:hover{
        filter: grayscale(30%)
    }
    .caja-texto:hover{
        opacity: 0.97;
    
        /* Parpadeo*/
        animation-name: parpadeo;
        animation-duration: 3s;
        animation-timing-function: ease;
        animation-iteration-count: infinite;
      
        -webkit-animation-name:parpadeo;
        -webkit-animation-duration: 3s;
        -webkit-animation-timing-function: ease;
        -webkit-animation-iteration-count: infinite;
      }

 }
 @media only screen and (min-width:1441px){
    .anvorguesa{
        display: none;
    }

    .container{
        position: relative;
        margin-top: 40px;
        margin-left: 18%;
        margin-right: 18%;
        align-items: center;
        filter: grayscale(100%);
    }
    .container-2{
        position: relative;
        margin-top: 40px;
        margin-left: 18%;
        margin-right: 18%;
        align-items: center;
        filter: grayscale(100%);
    }

    .header{
        
        padding-top: 16px;
        padding-bottom: 16px;
        display: flex;
        width: 100vw;

        justify-content: space-around;
        background-color: #000000;
        opacity: 0.95;
        box-shadow: 0px 5px 20px rgb(0,0,0);    
    }

    .fijo{
        position: fixed;
        z-index: 100;
        width: 100vw;
        top:0px;
    }
    .left{
        left: 10%;
    }
    .right{
        right:10%;
        align-items: center;
    }
    .responsive{
        position: relative;
        width: 100%;
        height: auto;

    }
    .container:hover{
        filter: grayscale(30%)
    }
    .caja-texto:hover{
        opacity: 0.97;
    
        /* Parpadeo*/
        animation-name: parpadeo;
        animation-duration: 3s;
        animation-timing-function: ease;
        animation-iteration-count: infinite;
      
        -webkit-animation-name:parpadeo;
        -webkit-animation-duration: 3s;
        -webkit-animation-timing-function: ease;
        -webkit-animation-iteration-count: infinite;
      }


    /* monitores grandes/teles */
    }



/* _______________________________________________________________ */
.cell {
    background-color: red;
}
.cell2 {
    background-color: blue;
}

.img-slide {
    height: 100%;
}

.carousel-cell {
    width: 100vw; /* full width */
    display: flex;
    justify-content: center;
  }

  .flickity-page-dots {
    bottom: 60px;
  }
  /* white circles */
  .flickity-page-dots .dot {
    width: 12px;
    height: 12px;
    opacity: 1;
    background: transparent;
    border: 2px solid white;
  }
  /* fill-in selected dot */
  .flickity-page-dots .dot.is-selected {
    background: white;
  }
  .responsive-2{
    position: relative;
    width: 100%;
    height: auto;
    object-fit: scale-down;

}

.flickity-button:disabled {
    display: none;
  }

 