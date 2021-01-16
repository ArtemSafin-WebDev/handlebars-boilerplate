import polyfills from './polyfills';
import './lazyload';
import detectTouch from './detectTouch';

document.addEventListener('DOMContentLoaded', function() {
    polyfills();
    detectTouch();
});

window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    setTimeout(() => document.body.classList.add('animatable'), 300)
})
