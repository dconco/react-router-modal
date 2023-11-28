import React from 'react';
import animations from './Animate.module.css'

const RouteModal = ({ path, component, animate }) => {
    if (typeof animate == 'function') {
        const animateObject = animate
        animate = animateObject()
    }
    else {
        let routerAnimate = ['']
        let animateValue = ''

        if (animate !== true && animate !== undefined) {
            routerAnimate = animate.includes('-') ? animate.split('-') : [animate]
        }

        routerAnimate.forEach((val, index) => {
            if (index === 0) {
                animateValue = val
            } else {
                animateValue += val[0].toUpperCase() + val.substring(1, val.length)
            }
        })

        switch (animateValue) {
            case 'routerFade':
                animate = animations.routerFade
                break;
            case 'routerSlideLeft':
                animate = animations.routerSlideLeft
                break;
            case 'routerSlideRight':
                animate = animations.routerSlideRight
                break;
            case 'routerSlideUp':
                animate = animations.routerSlideUp
                break;
            case 'routerSlideDown':
                animate = animations.routerSlideDown
                break;
            case 'routerZoomIn':
                animate = animations.routerZoomIn
                break;
            case 'routerZoomOut':
                animate = animations.routerZoomOut
                break;

            default:
                animate = animations.routerFade
                break;
        }
    }

    return (
        <div key={Math.random()} className={animate}>
            {component}
        </div>
    )
}


const Fade = () => animations.routerFade || 'router-fade'
const SlideLeft = () => animations.routerSlideLeft || 'router-slide-left'
const SlideRight = () => animations.routerSlideRight || 'router-slide-right'
const SlideUp = () => animations.routerSlideUp || 'router-slide-up'
const SlideDown = () => animations.routerSlideDown || 'router-slide-down'
const ZoomIn = () => animations.routerZoomIn || 'router-zoom-in'
const ZoomOut = () => animations.routerZoomOut || 'router-zoom-out'

const Animation = {
    routerFade: () => Fade(),
    routerSlideLeft: () => SlideLeft(),
    routerSlideRight: () => SlideRight(),
    routerSlideUp: () => SlideUp(),
    routerSlideDown: () => SlideDown(),
    routerZoomIn: () => ZoomIn(),
    routerZoomOut: () => ZoomOut()
}

const routerFade = () => Fade()
const routerSlideLeft = () => SlideLeft()
const routerSlideRight = () => SlideRight()
const routerSlideUp = () => SlideUp()
const routerSlideDown = () => SlideDown()
const routerZoomIn = () => ZoomIn()
const routerZoomOut = () => ZoomOut()


export default RouteModal
export {
    Animation,
    routerFade,
    routerSlideLeft,
    routerSlideRight,
    routerSlideUp,
    routerSlideDown,
    routerZoomIn,
    routerZoomOut
}