import progress from './progress'
export default {
    title: 'progress',
    components: {
        xprogress: progress
    }
}

export const defaultView = () => ({
    title: 'progress',
    template: '<xprogress></xprogress>',
    components: {
        xprogress: progress
    }
})