// ОПРЕДЕЛЕНИЕ ДЛИНЫ СВЕТОВОЙ ВОЛНЫ ПУТЕМ
// НАБЛЮДЕНИЯ ИНТЕРФЕРЕНЦИИ СВЕТА

export const translations: {[key: string]: any} = {
    'rus' : {
        'title' : 'Курсовой проект',
        
        'home' : {
            'title' : 'Определение длины световой волны путём наблюдения интерференции света',
            'goal' : 'Цель: изучить явление интерференции света; определить длину λ световой волны при помощи бипризмы Френеля',
            'submit' : 'Начать погружение',
        },

        'contents' : {
            'title' : 'Оглавление',

            'title-page' : 'Титульный лист',

            'introduction' : {
                'title' : 'Ход выполнения лабораторной работы',
                'first-page' : 'Теоретическое введение',
                'second-page' : 'Описание установки и метода измерений',
                'third-page' : 'Порядок выполнения работы и обработка результатов измерений'
            }
        },

        'title-page' : {
            'title' : 'Белорусский государственный технологический университет',
            'sub-title' : 'Факультет ИТ',

            'content' : {
                'picture' : 'images/pic0.jpg',
                'picture-text' : 'Установка для выполнения лабораторной работы',
                'page-text' : `
                    <p>
                        Пользуясь конспектом и рекомендуемой литературой, изучите теоретический материал 
                        темы и изложите письменно ответы на следующие вопросы (изложение должно 
                        содержать текст, формулы, рисунки).
                    </p>
                `,
                'next' : 'Перейти к ходу выполнения'
            }
        },

        'theory-page' : {
            'button' : {
                'next' : 'Дальше',
                'previous' : 'Назад'
            },

            'lab-1' : {
                'title' : '1. Теоретическое введение',
                'content' : `
                    <img src="images/pic-0.jpg" />
                    
                    <p>
                        Пользуясь конспектом и рекомендуемой литературой, изучите теоретический
                        материал темы и изложите письменно ответы на следующие
                        вопросы (изложение должно содержать текст, формулы, рисунки).
                    </p>
                    <ol>
                        <li>Уравнение плоской монохроматической световой волны и ее характеристики.</li>
                        <li>Явление интерференции света. Когерентность световых волн.</li>
                        <li>Способы получения когерентных световых волн.</li>
                        <li>Расчет интерференционной картины от двух когерентных источников.</li>
                    </ol>
                `
            },

            'lab-2' : {
                'title' : '2. Описание установки и метода измерений',
                'content' : `
                    <img src="images/pic1.jpg" />
                    <em>Рис. 1</em>
    
                    <p>
                        Лабораторная установка <em>(рис. 1)</em> состоит из оптической скамьи,
                        на которой установлены на рейтерах (ползушках) спектральная щель 2,
                        бипризма Френеля <em>3</em>, линза <em>4</em> и отсчетный микроскоп <em>5</em>. 
                        <br/>
                        В данной работе когерентные волны получаются с помощью
                        бипризмы Френеля, которая представляет собой две призмы с малыми
                        преломляющими углами ϕ, сложенные основаниями. Изготовленные
                        из одного куска стекла две призмы образуют одну общую грань бипризмы
                        Френеля <em>(рис. 2)</em>. <em>Параллельно</em> общей грани на расстоянии от
                        нее располагается прямолинейный источник света <b>S*</b>, который
                        находится перпендикулярно плоскости рисунка. Угол падения α всех
                        лучей на бипризму невелик. Поэтому они отклоняются каждой из половин
                        бипризмы на практически одинаковые углы θ. В результате за
                        бипризмой распространяются две когерентные цилиндрические волны,
                        исходящие из мнимых прямолинейных источников, находящихся
                        на расстоянии d и лежащих в одной плоскости с реальным
                        источником <b>S*</b>. Если за бипризмой Френеля на расстоянии l от источника
                        <b>S*</b> расположить экран, то на нем в области перекрытия (наложения)
                        двух волн можно наблюдать интерференционную картину. Она
                        состоит из чередующихся темных и светлых полос, цвет которых определяется
                        длиной волны λ <em>(рис. 2)</em>.
                    </p>
    
                    <img src="images/pic2.jpg" />
                    <em>Рис. 2</em>
    
                    <p>
                        Расстояние между двумя соседними максимумами интенсивности
                        I называется <em>расстоянием между интерференционными полосами</em>,
                        а расстояние Δx между соседними минимумами интенсивности −
                        <em>шириной интерференционной полосы</em>.
                    </p>
    
                    <p>Из формул для определения координат максимумов интенсивности</p>
                    <img src="images/form1.jpg" />
    
                    <p>и минимумов интенсивности</p>
                    <img src="images/form2.jpg" />
    
                    <p>
                        <em>m = 0, 1, 2, …,</em> следует, что расстояние между полосами и ширина Δx
                        полосы имеют одинаковое значение, т. е. 
                    </p>
                    <img src="images/form3.jpg" />
    
                    <p>Измерив на опыте значения l, d и Δх, из формулы (1) находим длину световой волны</p>
                    <img src="images/form4.jpg" />
                `
            },

            'lab-3' : {
                'title' : '3. Порядок выполнения работы и обработка результатов измерений',
                'content' : `
                    <p>1. Подготовьте <em>табл. 1</em> для занесения и обработки результатов измерений.</p>
                    <img src="images/tbl1.jpg"/>
                    <em>Таблица 1</em>
    
                    <p>Подготовка установки к работе.</p>
                    <ol>
                        <li>
                            Снимите с оптической скамьи линзу 4 (рис. 1). Включите источник
                            света S* и установите красный светофильтр. Глядя в окуляр отсчетного
                            микроскопа 5, убедитесь, видна ли интерференционная картина
                            в виде вертикальных прямолинейных красных и черных полос. 
                        </li>
                        <li>
                            Если интерференционная картина видна, то, изменяя ширину
                            щели 2 и слегка поворачивая ее около вертикальной оси, добейтесь того,
                            чтобы интерференционная картина была наиболее отчетливой. Приступайте
                            к выполнению пункта 2 (значения всех величин заносите в табл. 1). 
                        </li>
                        <li>
                            Если интерференционная картина не видна, необходимо провести
                            юстировку используемой оптической системы. Для этого нужно:
                            <ul>
                                <li>
                                    расположить оптические центры всех деталей на одной линии −
                                    оптической оси установки. На этой же линии следует расположить и
                                    источник света. Расстояние l0 между щелью и бипризмой Френеля
                                    должно быть в диапазоне от 40 до 65 см, а расстояние l1 между 
                                    призмой и окулярным микрометром − 25−45 см;
                                </li>
                                <li>
                                    поворачивая отсчетный микроскоп 5 влево или вправо относительно
                                    вертикальной оси, получить изображение, и перейти к выполнению
                                    пункта 2. 
                                </li>
                            </ul>
                        </li>
                    </ol>
    
                    <p>Измерение ширины Δх интерференционных полос.</p>
                    <ol>
                        <li>
                            С помощью окулярного микрометра определите расстояние
                            Δх между центрами соседних интерференционных полос. Для этого
                            необходимо измерить в малых делениях шкалы микроскопа расстояние
                            между серединами двух светлых (темных) полос, достаточно удаленных
                            друг от друга, и разделить число малых делений N на число п
                            темных (светлых) полос, находящихся между выбранными полосами
                            ((N/n), дел). 
                        </li>
                        <li>
                            Рассчитайте Δх в миллиметрах, умножив значение N/n на
                            цену деления γ окулярного микрометра (Δх = (N/n) · γ, значение γ указано
                            на установке). 
                        </li>
                        <li>
                            Измерения ширины Δх проделайте еще два раза, используя
                            разные пары полос. 
                        </li>
                    </ol>
    
                    <p>Измерение расстояния d между мнимыми источниками</p>
                    <ol>
                        <li>
                            Не изменяя положения щели, бипризмы и окулярного микрометра,
                            установите линзу 4 на оптическую скамью между бипризмой
                            и окулярным микрометром. Передвигая линзу вдоль оптической скамьи,
                            получите четкое изображение двух мнимых когерентных источников
                            света (изображений щели), которые имеют вид двух ярких вертикальных
                            полос. Если изображение не наблюдается, то поверните
                            линзу вокруг вертикальной оси и (или) отрегулируйте высоту положения
                            центра линзы (до его совпадения с оптической осью).
                        </li>
                        <li>
                            Измерьте расстояние h между мнимыми источниками 
                            (h = zγ, где z − расстояние между источниками в малых делениях
                            шкалы). Для того чтобы найти истинное расстояние d между источниками,
                            необходимо воспользоваться формулой увеличения линзы d =
                            = ah/b, где а − расстояние от щели до линзы; b − расстояние от линзы
                            до места локализации мнимых изображений щели. Чтобы определить b,
                            необходимо измерить расстояние l2 от линзы до объектива отсчетного
                            микроскопа и вычесть из него величину f (f − расстояние от места локализации
                            изображений щели до объектива отсчетного микроскопа указано
                            на установке).
                        </li>
                        <li>
                            Определите расстояние l от щели до места локализации интерференционной
                            картины. Для этого расстояние a сложите с расстоянием b. 
                        </li>
                        <li>
                            Установите синий (зеленый) светофильтр и повторите измерения
                            Δх и d, описанные в пунктах 2 и 3. 
                        </li>
                        <li>
                            По формуле (2) вычислите эффективные длины волн λ
                            излучений, пропускаемых красным и синим (зеленым) светофильтрами.                    
                        </li>
                    </ol>
                `
            }
        },
        
        'speech': {
            'result': 'Найдены результаты по запросу',
            'result-found': 'Согласно википедии',
            'result-not-found': 'Извините, ничего не найдено',
            'is': 'это'
        },

        'weather': {
            'forecast': (location: string, temperature: number, description: string) =>
                `Сейчас в ${location} ${temperature} градусов и ${description}`
        }
    },
    'eng' : {
        'title' : '☆LiL PEEP☆',

        'home' : {
            'title' : 'Gustav Elijah Åhr',
            'goal' : 'November 1, 1996 – November 15, 2017',
            'submit' : 'God bless you, peep',
        },

        'contents' : {
            'title' : 'Well, this is the end',

            'title-page' : 'Rest in peace',

            'introduction' : {
                'title' : 'Fuck',
                'first-page' : 'Fuck',
                'second-page' : 'Fuck',
                'third-page' : 'Fuck'
            }
        },

        'title-page' : {
            'title' : 'goth angel sinner',
            'sub-title' : '',

            'content' : {
                'picture' : 'http://www.jpsmedia.se/wp-content/uploads/2017/07/Lil-Peep.jpg',
                'picture-text' : 'Crybaby',
                'page-text' : `
                    <p>
                        She said I'm a crybaby, I can't be up lately
                        Girl, you drive me crazy, AMG Mercedes
                        Speedin' down the highway, lookin' at the street lights
                        Geekin' on a Friday, I can never sleep right
                        Knowin' I hurt you, I don't deserve you
                        I shoulda curved you, I know I'm the worst, boo
                        But, I could be cool too, and you got them dance moves
                        And I got this vibe, I swear it's perfect to ride to
                        I wanna die too, we all wanna die too
                        I got this vibe, I swear she love gettin' high too
                        I love gettin' high too, I wanna hide you
                        How did I find you? I'll be inside, I'm makin' music to cry to
                    </p>
                `,
                'next' : 'Next'
            }
        },

        'speech': {
            'result': 'Found results for',
            'result-found': 'According to wikipedia',
            'result-not-found': 'Sorry, no result found',
            'is': 'is'
        },

        'weather': {
            'forecast': (location: string, temperature: number, description: string) =>
                `Right now in ${location} ${temperature} degrees and ${description}`
        }
    }
}