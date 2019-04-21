# Работа со шрифтами и текстом 

## Базовые свойства оформления текста

text-decoration: {underline|overline|line-through}
text-transform: {capitlize|lowercase|uppercase}
text-indent: {..}
color: {..} -> currentColor
text-shadow: offset-x offset-y [blur-radius=0] [color=currentColor]

## Многоколоночность

column-count: {..}
column-gap: {..}
column-rule: width line-type color
column-width: {..}
column-span: {all|..}

## Переполнение текста

overflow: hidden
text-overflow: {clip|ellipsis} — в таблицах многоточие, нужно добавить title

&shy; + hyphens: manual
<wbr>
word-break: {normal|break-all|keep-all}

white-space: {nowrap|pre|pre-line|pre-wrap}

::first-line — font, word/letter-spacing, text, color, background, vertical-align

::first-letter + margin, padding, border

````css
@font-face {
  font-family: The Font Name;
  src: local('The Font Name') /* local — если есть в системе, src – если нет */
    url('thefontname.woff') format(woff), 
    url('thefontname.ttf') format(truetype); 
  font-style: normal; /* привязка к font-style */
}
````

# Week 5 — CSS Animations

transform: translate( X, Y ) | translateX( X ) | translateY( Y )
transform: scale( k ) | scale( X, Y ) | scaleX( X ) | scaleY( Y )
transform: rotate( a ) /* turn, deg, grad, rad */
transform: skew( X, Y ) | skewX( X ) | skewY( Y ) /* deg etc. */
transform: matrix(a,b,c,d,e)
transform: matrix(a,b,c,d,tx,ty)
a: scaleX = 1
b: skewX = 0
c: skewY = 0
d: scaleY = 1
tx: translateX = 0
ty: translateY = 0


transform-origin: left | right | top | bottom | center | (x%, y%)

transform: rotateX
transform: rotateY
transform: rotateZ
transform: rotate3d (x,y,x,angle) /* вектор + угол поворота */

perspective: none=inf. | Npx
perspective-origin: X=50% Y=50%

transform-style: flat | preserve-3d /* default: flat */
backface-visibility: visible | hidden /* default: visible */

## Переходы

transition: property duration [timing-function] [delay]
transition-property: transform, background-color, ...
transition-duration: .3s, 300ms, ...
transition-delay: ..., ..., ...
transition-timing-function: linear | ease* | cubic-bezier(a, b, c, d) | ...


## Анимации

@keyframes animationName {
  from | 0% {

  }
  50% {
    animation-timing-function: value;

  }
  to | 100% {

  }

}

.animated {
  animation-name: animationName;
  animation-duration: 2s;
  animation-iteration-count: 3;
  animation-direction: alternate; /* чередование направления */
  animation-delay: .5s;
  animation-fill-mode: forwards; /* окончание на последнем кадре */

  animation: name duration timing-function count [alternate] delay [forwards]
}

.animated:hover {
  animation-play-state: paused;
}

