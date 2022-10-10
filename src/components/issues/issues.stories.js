import issues from './issues'
export default {
    title: "issues",
    components: { issues },
    argTypes: {
        info: {
            control: 'object'
        }
    }
}

export const defaultView = (args) => (
    {
        data () {
            return {
                args
            }
        },
        components: { issues },
        template: '<issues :="args"></issues>'
    }
)

defaultView.story = {
    name: "Стандартный вид"
}

defaultView.args = {
    info: [{ name: `joshua_l`, text: `Enable performance measuring in production, at the users request` }, { name: `joshua_l`, text: `Enable performance measuring in production, at the users request` }]
}