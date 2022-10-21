import skeleton from "./skeleton";

export default {
    title: 'skeleton',
    components: {
        skeleton
    }
}

export const defaultView = () => ({
    components: {
        skeleton
    },
    template: '<skeleton></skeleton>'
})

defaultView.story = {
    name: 'Стандартный вид'
}