
# CSS

# Псевдоклассы

:link
:visited
:hover
:active
:focus

:enabled
:disbled
:checked
:indeterminate
:read-only
:valid

:root
:first-child
:last-child
:nth-child(2n+1)
:nth-last-child(2n+1)
:nth-of-type(-n+4)
:nth-last-of-type(-n+4)
:only-child
:only-of-type
:empty

# Псевдоэлементы

::first-letter
::first-line

::before
::after

# Отношения / Combinators

div div — потомок
div >> div — потомок /* planed on CSS Selectors Level 4 */
div > div — сын (непосредственный потомок)
div + div — брат
div ~ div — все братья следующие за первыйм элементом
div:not(:first-child) — аналогично

# Специфичность

Расчет специфичности:

1. количество селекторов по идентификатору
2. количество селекторов по классу, псевдоклассу или атрибуту
3. количество селекторов элеменов или псевдоэлементов

Дополнительные приоритеты:

1. inline + !important (?)
2. inline
3. !important

Наследуемые признаки не имеют специфичности, переопределяются любым правилом.
Но наследуются не все стили.

Источники стилей ("каскад"):

1. Стили браузера
2. Стили пользователя или плагинов браузера
3. Стили страницы
4. Стили страницы !important
5. Стили пользователя или плагинов браузера !important

Относительные единицы измерения:

1. px
2. em (доля от родителя)
3. rem (доля от корневого элемента)
4. ex (от x-height в шрифте)
5. ch (ширна нуля в шрифте — наверное, любой цифры по сути)
6. vh, vv — 1/100 высоты/ширины viewport










