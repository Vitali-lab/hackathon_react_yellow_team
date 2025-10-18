Роуты :
Главная - "/"
Избранное - "/favorites"
Страница участника - "/user:/id"

1: Главная + Navbar + Карточка

2: Страница участника + Progress + Badge

3: Избранные + LocalStorage + Breadcrumbs

4: Button + общие стили + PropTypes

можно еще добавить модалку( для добавления или удаления избранного)

{
id: 1, 
firstName: "Иван",
lastName: "Иванов",
age: 25,
about: "Люблю фронтенд, участвовал в разработке UI и интеграции с API.",
photo: если не фото , то ссылка на любую картинку
social: {
github: "https://github.com/ivanov",
telegram: ""
instagram: ""
},
role: чем занимался в проекте
badge: "Team Lead",  Team member или что-то типо того
skills: [
{ name: "React", level: 80, },
{ name: "Node.js", level: 60, },
{ name: "CSS", level: 90, }
],
portfolio: [
"https://example.com/project1",
"https://example.com/project2"
]
};

