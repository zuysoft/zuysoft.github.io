import React, {Component} from 'react';
import {VerticalTimeline} from 'react-vertical-timeline-component'
import Carousel from 'react-bootstrap/Carousel';
import {Map, GoogleApiWrapper, Marker} from 'google-maps-react'
import { addMainVerticalElement, addVerticalElement, addCarouselImg } from '../writersFunctions';

import writersBackground from '../accerts/bg.jpg';
import writerImg from '../accerts/BagdanovichMain.jpg'
import gallery1 from '../accerts/bagdanovichGallery/1.jpg'
import gallery2 from '../accerts/bagdanovichGallery/2.jpeg'
import gallery3 from '../accerts/bagdanovichGallery/3.jpg'
import gallery4 from '../accerts/bagdanovichGallery/4.jpg'
import gallery5 from '../accerts/bagdanovichGallery/5.jpg'
import { useTranslation } from "react-i18next";
import 'react-vertical-timeline-component/style.min.css'
import './css/kupalaStyles.css';
import kupalaImg from "../accerts/KupalaMain.jpg";



    const writerYTLink = 'https://www.youtube.com/embed/ASaN7iVmR2I';

    const writerPlaceLink = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184632.2278305333!2d25.1129524375164!3d54.700802087264194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd93fb5c6408f5%3A0x400d18c70e9dc40!2z0JLQuNC70YzQvdGO0YEsINCS0LjQu9GM0L3RjtGB0YHQutC-0LUg0LPQvtGA0L7QtNGB0LrQvtC1INGB0LDQvNC-0YPQv9GA0LDQstC70LXQvdC40LUsINCb0LjRgtCy0LA!5e1!3m2!1sru!2sby!4v1669970896912!5m2!1sru!2sby';
    export default function Bagdanovich(){
        const {t} = useTranslation();
            var mainImgWidth, mainImgHeight, componentsWidth, componentsHeight, itemHeight, itemWidth;
            const writerName = (t('nameB'));
            const writerLife = '27.11.1891 - 12.05.1917';
            const writerBirth = (t('birthB'));
            const writerGymnasium = (t('gymnasiumB'));
            const writerPublications = (t('publicationsB'));
            const writerLyceum = (t('lyceumB'));
            const writerLastYear = (t('lastYearB'));
            const writerDeath = (t('deathB'));
            if(window.innerWidth >= 1000){
                mainImgWidth = 40;
                componentsWidth = 80;
                itemHeight = 700;
                itemWidth = '';
            }
            else{
                mainImgWidth = 75;
                componentsWidth = 100;
                itemHeight = window.innerWidth * 1.4;
                itemWidth = 90;
            }
            mainImgHeight = mainImgWidth / 100 * window.innerWidth / 1080 * 1015;
            if(window.innerWidth < 1645 && window.innerWidth > 1000)
                componentsHeight = 0.25 * mainImgHeight;
            else if(window.innerWidth >= 1645)
                componentsHeight = 0.35 * mainImgHeight;
            else
                componentsHeight = 0.85 * mainImgHeight;
            return (
                <section style={{backgroundImage:'url(' + writersBackground + ')'}}>
                    <div className = 'writerMainInfoBlock'>
                        <img alt = 'Writer' src = {writerImg} style = {{width: mainImgWidth + '%', height: mainImgHeight + 'px'}}/>
                        <div className = 'writerMainInfo' style={{width: mainImgWidth + '%'}}>
                            <h2>{writerName}</h2>
                            <p>{writerLife}</p>
                            <div className='googleContainer'>
                                <h3>{t('VB')}</h3>
                                <iframe
                                    allowFullScreen = {true}
                                    allow = 'accelerator'
                                    loading = 'lazy'
                                    className='ytEmbed'
                                    style={{width: componentsWidth + '%',height: componentsHeight + 'px'}}
                                    src = {'' + writerYTLink}/>
                                <h3>{t('PB')}</h3>
                                <div className='mapContainer' style={{width: componentsWidth + '%',height: componentsHeight + 'px'}}>
                                    {/* <Map
                                        className = 'gMap'
                                        google={this.props.google}
                                        zoom = {12}
                                        style = {{borderRadius: '5px'}}
                                        initialCenter = {mapCenter}
                                    >
                                        <Marker position={marker}/>
                                    </Map> */}
                                    <iframe src = {writerPlaceLink} frameborder="0" style={{border: 0, borderRadius:'5px', width:'100%', height:'100%'}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h2 className='carouselTitle'>{t('LB')}</h2>
                    <Carousel>
                        {addCarouselImg(gallery1, itemHeight, itemWidth)}
                        {addCarouselImg(gallery2, itemHeight, itemWidth)}
                        {addCarouselImg(gallery3, itemHeight, itemWidth)}
                        {addCarouselImg(gallery4, itemHeight, itemWidth)}
                        {addCarouselImg(gallery5, itemHeight, itemWidth)}
                    </Carousel>
                    <VerticalTimeline lineColor='#fff'>
                        {addMainVerticalElement('27.11.1891', (t('dayB')), '', writerBirth)}
                        {addVerticalElement('1902 - 1911', (t('studyB')), '', writerGymnasium)}
                        {addVerticalElement('1907', (t('creatB')), '', writerPublications)}
                        {addVerticalElement('1911 - 1916', (t('studyLB')), '', writerLyceum)}
                        {addVerticalElement('1916', (t('laB')), '', writerLastYear)}
                        {addMainVerticalElement('12.05.1917', (t('deadB')), '', writerDeath)}
                    </VerticalTimeline>
                </section>
            )
        }


// const mapCenter = {
//     lat: 54.0980724,
//     lng: 27.2066614
// }
// const marker = {
//     lat: 54.09188146798659,
//     lng: 27.194788358279276
// }


