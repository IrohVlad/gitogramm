import btns from './btns'
export default {
    title: "btns",
    components: { btns },
    argTypes: {
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
        components: { btns },
        data () {
            return { args }
        },
        template: '<btns :="args"></btns>'
    }
)

defaultView.story = {
    name: "Стандартный вид"
}

defaultView.args = {
    stars: '10',
    reposts: '10'
}