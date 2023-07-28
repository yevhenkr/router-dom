import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import styles from './Site.module.css'
import {Error404} from './pages/Error404';
import {NavLink} from 'react-router-dom';
import {Page} from './pages/Page';
import {dataState} from './datState/dataState';


export const Site = () => {
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <div><NavLink   to={'/page/0'}>Page
                        1</NavLink></div>
                    <div><NavLink className={({isActive}) => isActive ? styles.active : styles.nav} to={'/page/1'}>Page
                        2</NavLink></div>
                    <div><NavLink className={({isActive}) => isActive ? styles.active : styles.nav} to={'/page/2'}>Page
                        3</NavLink></div>

                    {/*<div><NavLink to={'/page3'}>Page 3</NavLink></div>*/}
                    {/*<a href={'/page3'}>Page 3 A HREF</a>*/}
                </div>
                <div className={styles.content}>
                    <Routes>
                        <Route path={'/'} element={<Navigate to={'/page1'}/>}/>

                        {/*<Route path={'/page1'} element={<PageOne/>}/>*/}
                        {/*<Route path={'/page2'} element={<PageTwo/>}/>*/}
                        {/*<Route path={'/page3'} element={<PageThree/>}/>*/}

                        <Route path={'/page/:id'} element={
                            <Page pages={dataState.pages}/>}/>

                        <Route path={'/*'} element={<Error404/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    );
};