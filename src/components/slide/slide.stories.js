import slide from './slide'

export default {
    title: 'slide',
    components: {
        slide
    }
}

export const defaultView = () => ({
    title: 'slide',
    template: '<slide word="Click"></slide>',
    components: {
        slide
    }
})