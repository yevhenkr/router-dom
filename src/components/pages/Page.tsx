import React from 'react';
import {useParams} from 'react-router-dom';
import {PagesType} from '../datState/dataState';

type PageType = {
    pages: PagesType[]
}

export const Page = (props: PageType) => {
    const params = useParams()
    console.log(typeof Number(params.id))
    console.log(props.pages[Number(params.id)])
    return (
        <div>
            <div>{props.pages[Number(params.id)].heading}</div>
            <div>{props.pages[Number(params.id)].about}</div>
        </div>
    );
};