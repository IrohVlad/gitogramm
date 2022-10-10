import card from './card'
export default {
    title: "card",
    components: { card },
    argTypes: {
        title: {
            control: { type: 'text' }
        },
        disc: {
            control: { type: 'text' }
        },
        stars: {
            control: { type: 'text' }
        },
        reposts: {
            control: { type: 'text' }
        }
    }
}

export const defaultView = (args) => (
    {
        data () {
            return { args }
        },
        components: { card },
        template: '<card :="args"></card>'
    }
)

defaultView.story = {
    name: "Стандартный вид"
}

defaultView.args = {
    title: 'Title',
    disc: 'discription',
    stars: '10',
    reposts: '10'

}