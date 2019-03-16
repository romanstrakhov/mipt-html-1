

## Сематнитческая разметка

section (header, article (hgroup, h1, ..., h6), footer (address)), aside
nav — один на странице (!)

## Микроразметка ##

<section itemscope itemtype='http://schema.org/Person'></section>
<span itemprop="givenName"></span>


## Визуальная разметка

Deprecated: center, b, i, s, u

## Гиперссылки ##

<code>
<a href="#anchor">to Anchor</a>
<div id="anchor">...</div>
</code>

audio, video, track (vtt as subtitles)

## Дополнительные аттрибуты ##

lang, dir(rtl|ltr), translate(yes|no)

&zwng; — no ligatures?

##  Шрифты ##

font-variant: small-caps
font-style: normal | oblique | italic


<code>
@font-face {
  font-family: myfont;
  src: url(myfont.woff) format(woff),
       url(myfont.ttf) format(ttf)  
}
</code>

FOIT — flash of invisible text / вспышка невидимого текста

font: [variant] [style] [weight] size [/ line-height] family;

text-decoration: underline | line-through | overline
text-transofrm: capitalize | lowercase | uppercase
text-indent

text-shadow: offset-x offset-y [blur-radius] [color], [ ... ];

column-count
column-gap
column-rule: 2px solid blue;
column-width
column-span: all

text-overflow: hidden | clip | ellipsis(...)
