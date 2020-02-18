## DataTable
Компонент, для отображения табличных данных.

#### Макет
[Строки](https://app.zeplin.io/project/5a253f8d6bcede7461cbb563/screen/5a85acd3e91f82258f760d2d)
[Шапка](https://app.zeplin.io/project/5a253f8d6bcede7461cbb563/screen/5a8d58dd4e11c8394ba01732)

#### Как подключить компонент:
```javascript
 import {DataTable} from '@vtb/ui-kit/elements';

 <DataTable ... />
```

#### Props:

| Параметр | Тип |Значение по умолчанию| Описание |
| --- | ----- | ---- | ------- |
|actionButtons|Object[]|undefined|Описание кнопок действий, появляющихся при наведении на строку. [{renderIcon: (row: RowData) => any, handleClick: (row: RowData) => void}, ...]|
|activeRow|Object|undefined|Ссылка на активную строку из массива rows. Данная строка будет подсвечена как выбранная.|
|columns|DataTableColumnType[]|[]|Массив описаний столбцов таблицы. Подробнее см. Описание Столбцов|
|fullHeight|boolean|false|Флаг, указывающий на необходимость отрисовать все строки таблицы без вертикального скролла.|
|autoHeight|boolean|false|Используется для установки height: auto компонента Table|
|headerData|Object|{}|Данный объект будет передан в функцию рендера заголовка столбца как параметр row.|
|hideHeader|boolean|false|Флаг, дающий возможность отрисовать таблицу без шапки.|
|hideHorizontalScrollbar|boolean|false|Флаг, дающий возможность отрисовать таблицу без горизонтального скроллбара. В этом случае горизонтальная прокрутка будет осуществляться через свойство ScrollLeft. Используется для синхронизации прокрутки вложенных таблиц.|
|joinColumns|boolean|false|Флаг, указывающий на необходимость объединять данные столбцов в одной ячейке.|
|markRows|boolean|false|Флаг, включающий возможность помечать строки как избранные (флажок с левой стороны таблицы).|
|markedRows|Object[]|[]|Массив строк, отмеченных как избранные.|
|multiSelect|boolean|false|Флаг, включающий возможность выбирать в таблице несколько строк (добавляет столбец с чекбоксом).|
|onColumnResize|(string, number) => void|noop|Данная функция будет вызвана после окончания изменения размера столбца, поддерживающего изменение размера. Аргументы: имя столбца и новая ширина столбца.|
|onHorizontalScroll|(number) => void|noop|Данная функция будет вызвана после горизонтального скролла. Аргумент будет указывать на смещение вправо.|
|onRowClick|(Object) => void|noop|Данная функция будет вызвана после каждого клика по строке. Аргумент будет указывать объект выбранной строки.|
|onRowDblClick|(Object) => void|noop|Данная функция будет вызвана после каждого двойного клика по строке. Аргумент будет указывать объект выбранной строки.|
|onRowMarkChange|({row: Object, marked: boolean}) => void|noop|Данная функция будет вызвана после клика по иконке "Добавить в избранное" строки. Аргумент будет содержать объект выбранной строки и флаг состояния строки (добавлена/удалена)|
|onSelectionChange|({row: Object, checked: boolean}) => void|noop|Данная функция будет вызвана после установки/снятия чекбокса выбора строки. Аргумент будет содержать объект выбранной строки и флаг состояния строки (выбрана/не выбрана)|
|onSortingChange|(SortInfoType[]) => void|noop|Данная функция будет вызвана после клика по заголовку сортируемого столбца. Аргумент будет содержать массив объектов, описывающих сортировку ({column, direction})|
|rows|Object[]|[]|Массив строк данных|
|rowIdGetter|(row: Object) => any|row => row.id|Функция для получения уникального идентификатора строки|
|rowStylesModifier|(row: Object) => (string &#124; Array\<string>)|noop|Функция для получения модификаторов стиля строки. Должна возвращать массив предопределенных в DataTable.RowStyles модификаторов или пустой массив. Например: EXPENDED_WITH_ROWS, чтобы при развёртывании строки (внутри которой другие строки) цвет фона оставался белым|
|scrollLeft|?number|undefined|Позволяет задать позицию горизонтальной прокрутки для таблицы.|
|expandedWithTable?|boolean|-|Позволяет скрыть нижнюю границу у раскрытых строк, внутри которых рендерится таблица
|selectedRows|Object[]|[]|Массив выбранных строк.|
|sorting|SortInfoType[]|[]|Массив объектов, описывающих текущую сортировку ({column, direction}).|
|withSettings|boolean|false|Указывает на необходимость рендеринга кнопки настроек таблицы.|
|expand|?ExpandProps|-|Объект со свойствами, описывающими разворачивания строчек.|
|border|?TableBorder|-|Объект со свойствами, описывающими бордюр. Если его не передать, бордюр отображаться не будет.|
|editButton|boolean|true|Отображение кнопки "редактировать" при редактируемой таблице.|
|cloneButton|boolean|true|Отображение кнопки "клонировать" при редактируемой таблице.|
|deleteButton|boolean|true|Отображение кнопки "удалить" при редактируемой таблице.|
|showLastRowBottomBorder|boolean|false| Отображение нижней границы у последней строки.|
|activate|?ActivateProps|-|Объект со свойствами, описывающими подсветку выбранных строк.|
|onBeforeRowClone|?(row: Object) => Object|row => ({...row, id: null})|Функция для получения строки без первичного ключа (подробней в readme к EditableDataTable)|
|virtualization?|boolean|true|Параметр для включения виртуализации|
|overscanRowCount?|number|10|Если параметр virtualization включен. Количество отображаемых строк выше / ниже видимых границ списка. Это может помочь уменьшить мерцание во время прокрутки на определенных браузерах / устройствах.|
|aggregate?|AggregateType|-|Объект со свойствами для агрегирования строк.|
|partition?|PartitionType[]|-|Массив с разделами таблицы.|
|disableBorderBottom?|boolean|false|Отключает нижнюю границу у строк.|
|customHeight?|number|false|Задает высоту строк.|
|quickViewIsActive?|boolean|-|Установлен ли режим быстрого просмотра. *undefined* - старое поведение строк при клике. *true/false* - новое, согласованное с макетами поведение. Если в таблице не используется быстрый просмотр, для корректного поведения строк нужно явно передать *false*.|
|getRowStatus?|(row: RowData) => ?RowStatusType|noop|Функция получения объекта статуса для строки.|
|loadingParams?|LoadingParamsType|-|Объект со свойствами для показа встроенного в таблицу лоадера. Для передачи проще всего использовать селектор Scroller.selectors.getLoadingParams(state, SCROLLER_NAME).|

#### Значения словаря DataTable.CustomHeight
* SMALL_TABLE_ROW_HEIGHT: 44,
* SMALL_TABLE_JOINED_ROW_HEIGHT: 64,
* JOINED_ROW_HEIGHT: 48,
* ROW_HEIGHT: 40,
* SMALL_ROW_HEIGHT: 32

#### ExpandProps

| Свойство | Тип | Описание |
| --- | ----- |  ------- |
|allRowsExpanded|boolean|Призниак того, что все строки развернуты.|
|onExpandAllRows|(boolean) => mixed|Данная функция будет вызвана после клика по заголовку столбца с кнопками для разворачивания строк. Аргумент будет содержать флаг нового состояния (все развернуто/свернуто).|
|expandedRows|Row[]|Массив развернутых в данный момент строк.|
|canRowExpand|(Row) => boolean|Функция, определяющая возможность разворачивания строки.|
|renderChildren|(Row) => React.Node|Функция вызывается при необходимости рендеринга содержимого развернутой строки.|
|onRowExpandChange|({row: Row, expanded: boolean}) => mixed|Данная функция будет вызвана после клика по кнопке разворачивания строки. Аргумент будет содержать объект выбранной строки и флаг нового состояния строки (развернута/свернута).|
|stretchExpandedContainer|boolean|false|Данный флаг описывает способ расчета ширина контейнера, содержащего данные развернутой строки. false - ширина контейнера = ширине таблицы, true - ширина контейнера = текущей суммарной ширине прокручиваемых столбцов|


#### Infinity scroll props

| Свойство | Тип | Описание |
| --- | ----- |  ------- |
|infinityScrollerLoader|() => (dispatch: Function) => dispatch(*:Function)|Action-creator получения данных (пример: src/lib/scroller/actions/factory.js)|
|totalServerRowsCount|number|Общее количество строк|

#### TableBorder

| Свойство | Тип | Значение по умолчанию | Описание |
| ---------| --- | --------------------  | -------- |
|withBorder |boolean| false | Включает/выключает отображение рамки таблицы. Можно дополнительно управлять отображением рамки при помощи свойства hiddenBorders|
|hiddenBorders |Array<'top','bottom','left','right'>|[]|Массив строк, описывающих скрытые границы: если передать ['top', 'right'], то верхняя и правая границы не будут отрисованы.|
|error|boolean|false|Включает/выключает отображение красной рамки (признак ошибки). Если флаг взведен, то свойства withBorder и hiddenBorders игнорируются|

#### ActivateProps
| Свойство | Тип | Описание |
| --- | ----- |  ------- |
|activeRow|?Row|Ссылка на активную строку из массива rows. Данная строка будет подсвечена как выбранная.|
|onRowActivate|Row => mixed|Данная функция будет вызвана после первого клика по строке. Аргумент будет указывать объект выбранной строки.|

#### AggregateType
| Свойство | Тип | Описание |
| --- | ----- |  ------- |
|aggregateFn|(row: RowData) => Key|Функция для получения поля, на основе которого будет происходить агрегация строк|
|renderCustomLabel?|({columnName: string, aggregatedRows: Array<RowData>}) => ?string|Функция для рендера кастомного лейбла колонки в агрегирующей строке|
|showAggregateLabels?|boolean (false)|Отображать лейблы колонок при агрегации или нет|
|onAggregateRowExpandChange?|({aggregateField: string, expanded: boolean}) => void|Данная функция будет вызвана после нажатия на кнопку "развернуть всё" агрегирующей строки.|
|onAggregateRowSelectionChange?|({aggregateField: string, checked: boolean}) => void|Данная функция будет вызвана после нажания на чекбокс агрегирующей строки.|

#### PartitionType
| Свойство | Тип | Описание |
| --- | ----- |  ------- |
|actionButtons?|ActionButton[]|Массив с кнопками действий для шапки раздела|
|labels|Node[]|Массив с лейблами для каждой из колонок в разделе|
|rows|RowData[]|Массив со строками для раздела|

#### RowStatusType
| Свойство | Тип | Описание |
| --- | ----- |  ------- |
|error?|boolean|Наличие или отсутствие ошибки в строке.|
|info?|{handleClick: (row: RowData) => void, message: string}|Если передано, то при наведении на строку будет показана иконка с информацией. handleClick - коллбэк на клик по иконке с информацией. message - тултип для иконки с информацией.|
|status?|{renderIcon: (row: RowData) => any, handleClick: (row: RowData) => void}|Иконка статуса строки, которая отображается постоянно. renderIcon - рендерит иконку статуса. handleClick - коллбэк на клик по иконке статуса.|

#### LoadingParamsType
| Свойство | Тип | Описание |
| --- | ----- |  ------- |
|reasons|[]|Причины загрузки данных.|
|value|boolean|Наличие или отсутствие загрузки данных.|

#### Описание столбцов

Для описания столбцов таблицы необходимо передать в свойство columns массив объектов типа DataTableColumnType.

```javascript
type DataTableColumnType = {
    align?: AlignType,
    cell?: ?Function,
    cellStyle?: CellStyleType,
    fixed?: boolean,
    fixedRight?: boolean,
    header?: Function,
    hideJoinedLabel?: boolean,
    joinWith?: ?string,
    joinedWidth?: number,
    label?: ((cellProps: Object) => Node) | string,
    maxWidth?: number,
    minWidth?: number,
    name: string,
    paddingStyle?: PaddingStyleType,
    required?: boolean,
    resizable?: boolean,
    selector?: string | (row: Object, column: DataTableColumnType, props: Object) => Node,
    settingsLabel?: string,
    sortable?: boolean,
    stretch?: boolean,
    width?: number,
    group?: string[]
};
```

__align__ - Задает направление выравнивания данных в столбце
```javascript
DataTable.ColumnAlign = {
    CENTER: 'CENTER',
    LEFT: 'LEFT',
    RIGHT: 'RIGHT'
};
```

__cell__ - Данное поле позволяет полностью переопределить рендеринг содержимого ячейки столбца
```javascript
cell: ({value, row, rowState}: CellPropsType) => {
            const handleClick = (e: Event) => {
                alert(row.person);
                e.stopPropagation();
            };
            const button = !rowState.hovered ? null : (
                <span style={styles.button} onClick={handleClick} onKeyDown={noop}>
                    <Icons.Block />
                </span>
            );

            return (
                <span style={styles.container}>
                    <b>{value}</b>{button}
                </span>
            );
        },
```

__cellStyle__ - Задает стиль ячейки
```javascript
DataTable.CellStyle = {
    DEFAULT: 'DEFAULT',
    DARK: 'DARK',
    HEADER: 'HEADER'
};
```

__fixed__ - Флаг, указывающий на необходимость закрепить столбец слева. Таблица поддерживает произвольное количество фиксированных столбцов.

__fixedRight__ - Флаг, указывающий на необходимость закрепить столбец справа. Таблица поддерживает произвольное количество фиксированных столбцов.

__header__ - Данное поле позволяет полностью переопределить рендеринг содержимого заголовка столбца
```javascript
   header: ({value}: CellPropsType) => (
        <div style={styles.header}>{value}</div>
   ),
```

__hideJoinedLabel__ - При объединении данных ячеек заголовок столбца по умолчанию будет <br/>__Column label | Joined column label__. Установка данного флага позволяет оставить только label первого столбца.

__joinWith__ - Имя столбца, данные которого надо дополнительно отображать в ячейке данного столбца.

__joinedWidth__ - Минимальная ширина объеденённых колонок, если её не указать, то колонка примет ширину по содержимому в заголовке.

__label__ - Строка или функция для создания названия столбца в заголовке таблицы. Если указана функция, то в качестве аргумента в нее будет передан объект типа CellContainerPropsType. В поле row этого объекта будет находится объект, переданный таблице в свойстве __headerData__
```javascript

type CellContainerPropsType = {
    active: boolean,
    columnInfo: ColumnInfoType,
    cell?: ?Function,
    insideHeader?: boolean,
    headerState: $Shape<HeaderStateType>,
    row: Object,
    rowState: Object,
    onChangeHeaderState: (partialState: Object) => any
};

label: ({
    columnInfo: {column: {name}},
    row,
    headerState: {sorting: [{column: sortColumn, direction: sortDirection} = {}] = []}
}: CellContainerPropsType) => {
    let color = 'black';
    if (sortColumn === name) {
        color = sortDirection ? 'red' : 'blue';
    }

    return (
        <Fragment>
            <Icons.Block />
            <span style={{color, marginLeft: 12}}>
                ФИО: <span style={{fontWeight: 500}}>{row.firstValue}</span>
            </span>
        </Fragment>
    );
},
```
* Если __label__ является функцией, возвращающей Node, то, чтобы текст обрезался с многоточием, в случае если он не помещается по ширине, необходимо обернуть __label__ в *EllipsisText*
    ```javascript
    import {EllipsisText} from '@vtb/ui-kit/elements';

    const column = {
            label: () => <div><EllipsisText>ФИО</EllipsisText></div>,
            ...,
            ...
    };
    ```
* Если __label__ является функцией, возвращающей Node, то, чтобы текст обрезался с многоточием при изменении ширины колонки и появлялся тултип, необходимо передать в *EllipsisText* свойство resizable со значанием **true**
    ```javascript
    import {EllipsisText} from '@vtb/ui-kit/elements';

    const column = {
            label: () => <div><EllipsisText resizable>ФИО</EllipsisText></div>,
            ...,
            ...
    };
    ```
* Если __label__ является функцией, возвращающей Node, то, для отображения названия колонки в настройках необходимо передать свойство *settingsLabel*

__maxWidth__ - Максимальная ширина столбца. Данное значение используется при изменении ширины столбца и не дает сделать ширину больше указанной.

__minWidth__ - Минимальная ширина столбца. Данное значение используется при изменении ширины столбца и не дает сделать ширину меньше указанной.

__name__ - Имя столбца. Используется для идентификации столбца (должно быть уникально в пределах массива столбцов). Так же является значением селектора значения по умолчанию.

__paddingStyle__ - Задаёт отступы внутри ячеек колонки. Если у колонки есть кастомные ячейки (**сell**) или заголовок (**header**), то для них принудительно устанавливается *DEFAULT*. *DEFAULT* также принудительно устанавливается для сервисных колонок (настройки, чекбоксы и пр.). Если __paddingStyle__ не передан, то по-умолчанию устанавливает *STANDARD*.
* *DEFAULT* устанавливает отступ, равный 0 (padding: 0).
* *STANDARD*, согласно макету, устанавливает отступ в 12px (padding: 0 12px;).
* *TEXT_INPUT* устанавливает отступ для полей ввода (padding: 0 $cell-padding-left - $input-border-width;).
```javascript
DataTable.PaddingStyle = {
    DEFAULT: 'default',
    STANDARD: 'standard',
    TEXT_INPUT: 'text-input'
};
```

__required__ - Флаг, указывающий на возможность выключить отобрадение столбца в настройках таблицы.

__resizable__ - Флаг, указывающий на возможность изменения ширины столбца.

__selector__ - Функция или строка описывающая способ получения занчения столбца из объекта строки. Если указана строка, то значение извлекается при помощи функции lodash.get.
```javascript
selector: (row, col, {rowState: {hovered}}: CellContainerPropsType) => (
    <DataTable.CellValueContainer>
        {hovered && <Icons.Block />}
        <EllipsisText maxWidth={220}>{row.person}</EllipsisText>
        <Marker
            content="Б"
            type={row.id % 2 === 0 ? Marker.Type.SPECIAL : Marker.Type.DEFAULT}
        />
    </DataTable.CellValueContainer>
),
```

__settingsLabel__ - Имя столбца в настройках таблицы.

__sortable__ - Флаг, указывающий на возможность изменения сортировки строк при клике по заголовку столбца.

__stretch__ -  Данный флаг используется в случае, когда суммарная ширина столбцов меньше ширины таблицы. Все столбцы с данным флагом делят оставшуюся ширину поровну.

__width__ - Начальная ширина столбца, если её не указать, то столбец примет ширину по содержимому в заголовке.
