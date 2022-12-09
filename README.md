## `Дизайн` [Hard Play Style design frontend](https://www.figma.com/file/1MzMsx8iIXiny0JiTU57GC/HARD-STYLE?node-id=0%3A1&t=xyAAhYMgM3C9LVcr-1)
### `Changelog: 02.10.2022 рано утром`
Сделан адаптив для главной страницы, шапки сайта
### `Changelog 02.10.2022 вечер`
Сделана страница "Новинки" + адаптив. Немного переделан адаптив headera
### `Changelog 03.10.2022 вечер`
Сортировка сделана (кроме "Популярное", "Новизне")
### `Changelog 05.10.2022 вечер`
Сделана страница товара
### `Changelog 09.10.2022 вечер`
Сделана страница корзины, также в шапку была добавлена ссылка на лого и ссылка на корзину. Добавлен контекст корзины в шапку (MainContainer)
### `Changelog 13.10.2022 вечер`
Сделана страница профиля и почти сделана страница все заказанных товаров
### `Changelog 14.10.2022 вечер`
Сделаны страницы добавления товара, избранное, заказы, запросы в поддержку
### `Changelog 17.10.2022 вечер`
Добавлена картинка на форму добавления товара, сделана страница всех товаров
### `Changelog 21.10.2022 день`
Сделана TODO с обработкой полей на странице корзины
### `Changelog 24.10.2022 вечер`
Создан бек с отдельным репозиторием
### `Changelog 26.10.2022 день`
Изменены поля на странице добавления товара
### `Changelog 21.11.2022 вечер`
Начат процесс привязки backenda и frontenda.
сделан userApi для отправки запросов на сервер пользователя (страница регистрации, логина отправляют данные на сервер)
Страница регистрации и логина теперь один компонент.
### `Changelog 22.11.2022 вечер`
Удалены константы так как react-router-dom не получается привязать.
Изменен компонент товара.
Теперь при переходе на несуществующие маршруты будет редирект на главную страницу магазина(при выходе из личного кабинета тоже).
### `Changelog 26.11.2022 обед`
Сделаны API запросы к беку для получения товаров, отдельного товара также начат процесс "оживления" страницы добавления товара.
### `Changelog 28.11.2022 вечер`
Сделана страница добавления товара
### `Changelog 3.12.2022 обед`
Доделана страница добавления товара
### `Changelog 3.12.2022 вечер`
Сделан вывод остатков всех товаров для админа
### `Changelog 4.12.2022 обед`
Сделан вывод информации на странице товара (компонент PageItem).
<br>На страницах магазина теперь выводится картинка товара (компонент ContentProductPage)
<br>Немного улучшен код в компоненте SelectSizeRadioBtn
<br>Исправлен баг с отправкой пункта "описание товара" при создании товара (компонент AddProduct и ItemProduct)
<br>Исправлен баг с не отображением всех товаров и появлением ошибки в консоли "count"

### `Changelog 4.12.2022 вечер`
Сделан вывод товаров по полу для страниц "Для нее","Для него".
<br>Изменен вывод картинок в карточке товара
<br>Мелкие исправления касаемо картинок "not found"
<br>Кнопка выбора размера теперь обязательна
<br>Добавлены api функции для получения популярных товаров 'fetchPopularProducts' (надо исправить там простой вывод товаров) а также измена функция 'fetchProducts' для работы с полом 
<br>Грамматические изменения на главной а также вывод популярных товаров
<br>Поля на странице добавления товара теперь обязательны
<br>На странице товара начат процесс добавления товара в корзину (остановился на присвоении первоначальных данных переменой productInfo для отправки в корзину)

### `Changelog 9.12.2022 вечер`
Выполнен рефакторинг проекта для работы контекста корзины
<br>Также сделан рефакторинг для корректной работы "шапки сайта" для изменен хук useTheme а также изменены компоненты где необходимо взаимодействие с шапкой
<br>Сделана страница добавления товара. Оживлен контекст корзины