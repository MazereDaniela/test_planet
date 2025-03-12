// Генерация звезд
function createStars() {
    const starField = document.querySelector('.star-field');
    const numStars = 200; // Количество звезд

    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 2}s`; // Разное время мерцания
        starField.appendChild(star);
    }
}

createStars(); // Создаем звезды при загрузке страницы

function updateStarFieldHeight() {
    const starField = document.querySelector('.star-field');
    const content = document.querySelector('.characteristic');
    const sun = document.querySelector('.sun');
    starField.style.height = `${content.clientHeight + sun.clientHeight/3}px`;
}

// Вызов функции при загрузке страницы и изменении размера окна
window.addEventListener('load', updateStarFieldHeight);
window.addEventListener('resize', updateStarFieldHeight);

// Данные о планетах
const planetData = {
    меркурий: {
        area: 74.8, // площадь в млн км²
        diameter: 4879, // Диаметр, км
        mass: 0.055, // Масса (в массах Земли)
        satellites: 0, // Спутники
        orbit: 57.9, // Орбита, млн км
        year: 88, // Год, суток
        temperature: 167, // Температура, °C
        image: "img/Mercury.png", // Изображение планеты
        position: 39, // Позиция
        day: 1406.4 , // Продолжительность дня, часы
    },
    венера: {
        area: 460.2,
        diameter: 12104,
        mass: 0.815,
        satellites: 0,
        orbit: 108.2,
        year: 225, 
        temperature: 464,
        image: "img/Venus.png",
        position: 45,
        day: 5832,
    },
    земля: {
        area: 510.1, 
        diameter: 12742, 
        mass: 1, 
        satellites: 1, 
        orbit: 149.6, 
        year: 365.25, 
        temperature: 15, 
        image: "img/Earth.png",
        position: 51,
        day: 24, 
    },
    марс: {
        area: 144.8, 
        diameter: 6779, 
        mass: 0.107, 
        satellites: 2, 
        orbit: 227.9, 
        year: 687, 
        temperature: -63, 
        image: "img/Mars.png",
        position: 58,
        day: 24.6, 
    },
    юпитер: {
        area: 618.3, 
        diameter: 139820, 
        mass: 317.8, 
        satellites: 79, 
        orbit: 778.5, 
        year: 4332, 
        temperature: -145, 
        image: "img/Jupiter.png",
        position: 65,
        day: 9.84 , 
    },
    сатурн: {
        area: 427.0, 
        diameter: 116460, 
        mass: 95.2, 
        satellites: 83, 
        orbit: 1433.5, 
        year: 10759, 
        temperature: -178, 
        image: "img/Saturn.png",
        position: 75,
        day: 10.8, 
    },
    уран: {
        area: 808.3, 
        diameter: 50724, 
        mass: 14.5, 
        satellites: 27, 
        orbit: 2872.5, 
        year: 30687, 
        temperature: -216, 
        image: "img/Uranus.png",
        position: 85,
        day: 17.28, 
    },
    нептун: {
        area: 761.8, 
        diameter: 49244, 
        mass: 17.1,
        satellites: 14,
        orbit: 4495.1,
        year: 60190,
        temperature: -214,
        image: "img/Neptune.png",
        position: 96,
        day: 16.08, 
    }
};




function comparePlanets() {
    const planet1 = document.querySelector('#planet1 .selected-option').textContent.toLowerCase();
    const planet2 = document.querySelector('#planet2 .selected-option').textContent.toLowerCase();

    if (planet1 && planet2 && planet1 != planet2) {
        // Получаем данные о планетах
        const diameter1 = planetData[planet1].diameter;
        const diameter2 = planetData[planet2].diameter;

        const img1 = planetData[planet1].image;
        const img2 = planetData[planet2].image;

        const weight1 = planetData[planet1].mass;
        const weight2 = planetData[planet2].mass;

        const satellite1 = planetData[planet1].satellites;
        const satellite2 = planetData[planet2].satellites;

        const orbit1 = planetData[planet1].orbit;
        const orbit2 = planetData[planet2].orbit;

        const year1 = planetData[planet1].year;
        const year2 = planetData[planet2].year;

        const temperature1 = planetData[planet1].temperature;
        const temperature2 = planetData[planet2].temperature;


        const friends1 = Math.trunc(planetData[planet1].day / (0.37 * 24));
        const friends2 = Math.trunc(planetData[planet2].day / (0.37 * 24));

        // Заполняем блоки с информацией
        document.getElementById("diameter1").textContent = diameter1;
        document.getElementById("diameter2").textContent = diameter2;

        document.getElementById("img-diameter1").src = img1;
        document.getElementById("img-diameter2").src = img2;
        document.getElementById("img-diameter1").className = "";
        document.getElementById("img-diameter2").className = "";


        if (diameter1 > diameter2) {

            document.getElementById("diameter-contrast").src = "img/more.svg";
            document.getElementById("img-diameter1").classList.add("diameter-more");
            document.getElementById("img-diameter2").classList.add("diameter-less");

        }
        else{
            document.getElementById("diameter-contrast").src = "img/less.svg";
            document.getElementById("img-diameter1").classList.add("diameter-less");
            document.getElementById("img-diameter2").classList.add("diameter-more");

        }


        createEarthImages(document.getElementById("weight1-container"), weight1, "img/Earth.png");
        createEarthImages(document.getElementById("weight2-container"), weight2, "img/Earth.png");
        document.getElementById("weight1").textContent = weight1;
        document.getElementById("weight2").textContent = weight2;
        document.getElementById("weight-contrast").src = weight1 > weight2 ? "img/more.svg":"img/less.svg";

        createEarthImages(document.getElementById("satellite1-container"), satellite1, "img/planet__satellite1.png");
        createEarthImages(document.getElementById("satellite2-container"), satellite2, "img/planet__satellite2.png");
        document.getElementById("satellite1").textContent = satellite1;
        document.getElementById("satellite2").textContent = satellite2;
        document.getElementById("satellite-contrast").src = satellite1 > satellite2 ? "img/more.svg":"img/less.svg";

        document.getElementById("orbit1").textContent = orbit1;
        document.getElementById("orbit2").textContent = orbit2;
        document.getElementById("orbit-contrast").src = orbit1 > orbit2 ? "img/more.svg":"img/less.svg";

        document.getElementById("year1").textContent = year1;
        document.getElementById("year2").textContent = year2;
        document.getElementById("year-contrast").src = year1 > year2 ? "img/more.svg":"img/less.svg";

        document.getElementById("temperature1").textContent = temperature1;
        document.getElementById("temperature2").textContent = temperature2;
        document.getElementById("temperature-contrast").src = temperature1 > temperature2 ? "img/more.svg":"img/less.svg";


        createEarthImages(document.getElementById("friends1-container"), friends1, "img/friends.png");
        createEarthImages(document.getElementById("friends2-container"), friends2, "img/friends.png");
        document.getElementById("friends1").textContent = friends1;
        document.getElementById("friends2").textContent = friends2;
        document.getElementById("friends-contrast").src = friends1 > friends2 ? "img/more.svg":"img/less.svg";
    
        



        const scaleFactorWidth = 250 / 139820;
        const planet1Width = diameter1 * scaleFactorWidth;
        const planet2Width = diameter2 * scaleFactorWidth;




        document.getElementById("planet1-position").style.left = `${planetData[planet1].position - 6}%`;
        document.getElementById("planet2-position").style.left = `${planetData[planet2].position - 6}%`;
       


        document.querySelector("#planet1-position img").src = img1;
        document.querySelector("#planet2-position img").src = img2;
        document.getElementById("planet1-position").style.width = `${planet1Width}px`;
        document.getElementById("planet2-position").style.width = `${planet2Width}px`;
        document.getElementById("planet1-position").style.height = `${planet1Width}px`;
        document.getElementById("planet2-position").style.height = `${planet2Width}px`;

    }
    
    else{
        alert("Вы выбрали одинаковые планеты.")
    }


}


function createEarthImages(container, mass, img_scr) {
    const count = Math.trunc(mass);
    container.innerHTML = "";
    for (let i = 0; i < count; i++) {
        const img = document.createElement("img");
        img.src = img_scr;
        img.classList.add("weight-size");
        container.appendChild(img);
    }
}


// Функция для открытия/закрытия выпадающего списка
function toggleDropdown(id) {
    const select = document.getElementById(id).parentElement;
    select.classList.toggle('open');

    // Закрытие других выпадающих списков
    document.querySelectorAll('.select').forEach(otherSelect => {
        if (otherSelect !== select) {
            otherSelect.classList.remove('open');
        }
    });
}

// Функция для выбора элемента
document.querySelectorAll('.option').forEach(option => {
    option.addEventListener('click', function () {
        const select = this.closest('.select');
        const selectedOption = select.querySelector('.selected-option');
        const selectControl = select.querySelector('.select__control');

        // Убираем класс 'selected' у всех элементов в этом выпадающем списке
        select.querySelectorAll('.option').forEach(opt => {
            opt.classList.remove('selected');
        });

        // Добавляем класс 'selected' к выбранному элементу
        this.classList.add('selected');

        // Обновляем выбранный элемент
        selectedOption.textContent = this.textContent;
        selectControl.setAttribute('data-value', this.getAttribute('data-value'));

        // Закрываем список
        select.classList.remove('open');

        // Вызываем функцию сравнения планет
        comparePlanets();
    });
});

// Закрытие списка при клике вне его
document.addEventListener('click', function (event) {
    if (!event.target.closest('.select')) {
        document.querySelectorAll('.select').forEach(select => {
            select.classList.remove('open');
        });
    }
});






