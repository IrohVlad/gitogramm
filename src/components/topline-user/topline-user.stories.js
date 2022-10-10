import toplineuser from './topline-user'
export default {
    title: "toplineuser",
    components: { toplineuser },
    argTypes: {
        showname: { control: 'boolean' },
        nickname: { control: { type: 'text' } }
    }
}

export const defaultView = (args) => (
    {
        data () {
            return {
                args
            }
        },
        components: { toplineuser },
        template: '<toplineuser :="args"><template v-slot:img><img src="../../assets/avatar.svg" /></template></toplineuser>'
    }
)

defaultView.story = {
    name: "Стандартный вид"
}

defaultView.args = {
    showname: true,
    nickname: 'Joe'
}