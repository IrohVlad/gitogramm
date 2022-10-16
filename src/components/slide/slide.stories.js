import slide from './slide'

export default {
    title: 'slide',
    argTypes: {
        active: { control: 'boolean' }
    },
    components: {
        slide
    }
}

export const defaultView = (args) => ({
    title: 'slide',
    template: '<slide :="args" word="Click"></slide>',
    data () {
        return {
            args
        }
    },
    components: {
        slide
    }
})

defaultView.args = {
    active: true
}