export const dataState: DataStateType = {
    pages: [
        {
            heading: 'Цикл while',
            about: 'Цикл while имеет следущий синнтаксис: '
        },
        {
            heading: 'Цикл for',
            about: 'Цикл while имеет следущий синнтаксис: '
        }, {
            heading: 'Конструкция  \"switch\"',
            about: 'Конструкция switch заменя собой сразу  несколько if. '
        },
    ]
}

export type DataStateType = {
    pages: Array<PagesType>
}

export type PagesType = {
    heading: string
    about: string
}